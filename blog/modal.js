'use strict';

var _window$popmotion = window.popmotion;
var css = _window$popmotion.css;
var transform = _window$popmotion.transform;
var chain = _window$popmotion.chain;
var delay = _window$popmotion.delay;
var tween = _window$popmotion.tween;
var easing = _window$popmotion.easing;
var parallel = _window$popmotion.parallel;
var interpolate = transform.interpolate;

var trigger = undefined;
var isClosing = false;

// Select DOM
var modalTriggersDom = document.querySelectorAll('.modal-trigger');
var dimmer = document.querySelector('.overlay');
var modalContainer = document.querySelector('.modal-container');
var modal = document.querySelector('.modal');

// Create CSS renderers
var dimmerRenderer = css(dimmer);
var modalContainerRenderer = css(modalContainer);
var modalRenderer = css(modal);

// Return the center x, y of a bounding box
function findCenter(_ref) {
  var top = _ref.top;
  var left = _ref.left;
  var height = _ref.height;
  var width = _ref.width;

  return {
    x: left + width / 2,
    y: top + height / 2
  };
}

/*
  Generate a function that will take a progress value (0 - 1)
  and use that to tween the modal from the source to the destination
  bounding boxes
*/
var vRange = [0, 1];
function generateModalTweener(sourceBBox, destinationBBox) {
  var sourceCenter = findCenter(sourceBBox);
  var destinationCenter = findCenter(destinationBBox);

  var toX = interpolate(vRange, [sourceCenter.x - destinationCenter.x, 0]);
  var toY = interpolate(vRange, [sourceCenter.y - destinationCenter.y, 0]);
  var toScaleX = interpolate(vRange, [sourceBBox.width / destinationBBox.width, 1]);
  var toScaleY = interpolate(vRange, [sourceBBox.height / destinationBBox.height, 1]);

  return function (v) {
    return modalRenderer.set({
      opacity: v,
      x: toX(v),
      y: toY(v),
      scaleX: toScaleX(v),
      scaleY: toScaleY(v)
    });
  };
}

function openModal(e) {
  if (e.target && e.target.classList.contains('modal-trigger')) {
    trigger = e.target;

    // Get bounding box of triggering element
    var triggerBBox = trigger.getBoundingClientRect();

    // Temporarily show modal container to measure modal
    dimmerRenderer.set('display', 'block').render();
    modalContainerRenderer.set('display', 'flex').render();
    modalRenderer.set('opacity', 0).render();

    // Get bounding box of final modal position
    var modalBBox = modal.getBoundingClientRect();

    // Get a function to tween the modal from the trigger
    var modalTweener = generateModalTweener(triggerBBox, modalBBox);

    // Fade in overlay
    tween({
      duration: 200,
      onUpdate: function onUpdate(v) {
        return dimmerRenderer.set('opacity', v);
      }
    }).start();

    chain([delay(75), tween({
      duration: 200,
      ease: easing.easeOut,
      onUpdate: modalTweener
    })]).start();
  }
}

function closeComplete() {
  isClosing = false;
  dimmerRenderer.set('display', 'none').render();
  modalContainerRenderer.set('display', 'none').render();
  modalRenderer.set({
    y: 0,
    scaleX: 1,
    scaleY: 1,
    transformOrigin: '50% 50%'
  });
}

function cancelModal(e) {
  if (e.target && e.target.classList.contains('cancel-modal') && !isClosing) {
    e.stopPropagation();
    isClosing = true;

    var triggerBBox = trigger.getBoundingClientRect();
    var modalBBox = modal.getBoundingClientRect();

    var modalTweener = generateModalTweener(triggerBBox, modalBBox);

    parallel([tween({
      from: dimmerRenderer.get('opacity'),
      to: 0,
      onUpdate: function onUpdate(v) {
        return dimmerRenderer.set('opacity', v);
      }
    }), tween({
      from: modalRenderer.get('opacity'),
      to: 0,
      duration: 250,
      onUpdate: modalTweener,
      onComplete: closeComplete
    })]).start();
  }
}

function submitModal(e) {
  if (isClosing) return;
  e.stopPropagation();

  isClosing = true;

  var toScaleXIn = interpolate(vRange, [1, 1.2]);
  var toScaleYIn = interpolate(vRange, [1, 0.8]);

  var toScaleXOut = interpolate(vRange, [1.2, 0.5]);
  var toScaleYOut = interpolate(vRange, [0.8, 2]);

  chain([tween({
    onStart: function onStart() {
      return modalRenderer.set('transform-origin', '50% 100%');
    },
    duration: 200,
    onUpdate: function onUpdate(v) {
      return modalRenderer.set({
        scaleX: toScaleXIn(v),
        scaleY: toScaleYIn(v),
        y: v * 100
      });
    }
  }), parallel([tween({
    from: dimmerRenderer.get('opacity'),
    to: 0,
    onUpdate: function onUpdate(v) {
      return dimmerRenderer.set('opacity', v);
    }
  }), tween({
    onUpdate: function onUpdate(v) {
      return modalRenderer.set({
        opacity: 1 - v,
        scaleX: toScaleXOut(v),
        scaleY: toScaleYOut(v),
        y: -300 * easing.easeIn(v)
      });
    },
    duration: 200,
    onComplete: closeComplete
  })])]).start();
}

document.addEventListener('click', openModal);
document.addEventListener('click', cancelModal);
document.querySelector('.submit').addEventListener('click', submitModal);