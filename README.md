### Source code
[WEB](https://github.com/nscdlg/pn-painan "website") |
[WEBVIEW](https://github.com/nscdlg/webview-pnpainan "webview")

### hint
Gunakan ctrl+f untuk mencari kode dibawah ini pada text editor anda

# (+) berita utama: carousel
1. Cari kode berikut di index.html

```html
<div class="carousel-item">
                <div id="home" class="first-section" style="background-image:url('images/etilang.png');">
                    <div class="dtab">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 text-center">
                                    <div class="big-tagline">
                                        <h2 data-animation="animated zoomInRight"> <strong>E-tilang</strong></h2>
                                        <p class="lead" data-animation="animated fadeInLeft">Dapatkan informasi tentang denda tilang melalui SIPP (Sistem informasi Penelusuran perkara)</p>
                                        <a href="http://sipp.pn-painan.info/list_perkara/type/Mm1xOTNHMG1ZV0F0MHg1czdCWHFZM0RUN1NhK0cxN3hPSXZKeE9UcFNDNTNwaHcySno5ZFQrZForOUZhV1ljMzJIYlViYmd1M3dJc0FZb3kzUGo2WGc9PQ==" class="hover-btn-new"><span>Lihat disini</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <!-- end container -->
                    </div>
                </div>
                <!-- end section -->
            </div>
```

2. Copy lalu paste ke bagian berikutnya
3. ubah kata dan image yang ada sesuai yg anda inginkan

lalu tambahkan satu dari

    <li data-target="#carouselExampleControls" data-slide-to="11"></li> 

ke kode berikut. jangan lupa ubah dari 11 jadi 12 dst..

```html
<ol class="carousel-indicators">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
            <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            <li data-target="#carouselExampleControls" data-slide-to="3"></li>
            <li data-target="#carouselExampleControls" data-slide-to="4"></li>
            <li data-target="#carouselExampleControls" data-slide-to="5"></li>
            <li data-target="#carouselExampleControls" data-slide-to="6"></li>
            <li data-target="#carouselExampleControls" data-slide-to="7"></li>
            <li data-target="#carouselExampleControls" data-slide-to="8"></li>
            <li data-target="#carouselExampleControls" data-slide-to="9"></li>
            <li data-target="#carouselExampleControls" data-slide-to="10"></li>
            <li data-target="#carouselExampleControls" data-slide-to="11"></li>
        </ol>
```

> anda bisa baca kode html disini untuk mengubah lain2 [https://www.w3schools.com/html/](https://www.w3schools.com/html/ "https://www.w3schools.com/html/")

# (+) berita/blog terbaru
Perhatikan nama id-nya..
Apakah anda ingin mengubah blog terbaru di pengumuman atau yg kegiatanpn?

1. Silahkan cari kode berikut
```html
  <section id="pengumuman" style="margin-right: 300px;margin-Left:300px;margin-top:100px;margin-bottom:100px">
      <div class="berita-item" ondblclick="bisaDiEdit(this)" onblur="bisaDiBacaAja(this)">
        <h1 style="color:red;font-weight:bolder">Pengumuman Terkini</h1><hr>
        <a href="blog\Pengadilan-Negeri-Painan-mendapat-Akreditasi-A-Penjaminan-Mutu-badan-peradilan-umum/index.html"><h1>Pengadilan Negeri Painan mendapat Akreditasi A Penjaminan Mutu badan peradilan umum</h1></a>
      </div><hr>
      <div class="berita-item" ondblclick="bisaDiEdit(this)" onblur="bisaDiBacaAja(this)">
        <a href="blog/Pengadilan-Negeri-Painan-Kembali-Memperoleh-Penghargaan-Terbaik-I-Dalam-Kinerja-Pelaksanaan-Anggaran-untuk-Tahun-2017/index.html"><h1>Pengadilan Negeri Painan Kembali Memperoleh Penghargaan Terbaik I Dalam Kinerja Pelaksanaan Anggaran untuk Tahun 2017</h1></a>
        <p>Painan/12mei2017,,.. Pengadilan Negeri Painan kembali memperoleh Penghargaan dari Kementrian Keuangan melalui kppn Pesisir selatan, Terbaik I kategori Kinerja Pelaksanaan Anggaran, ini adalah Pencapaian yang sangat baik, karena Pengadilan Negeri Painan berhasil mempertahankan gelar terbaik I.</p>
    <hr>  </div>
      <div class="berita-item" ondblclick="bisaDiEdit(this)" onblur="bisaDiBacaAja(this)">
        <a href="blog/Pengadilan-Negeri-Painan-Kembali-Memperoleh-Penghargaan-Terbaik-I-Dalam-Kinerja-Pelaksanaan-Anggaran/index.html"><h1>Pengadilan Negeri Painan Kembali Memperoleh Penghargaan Terbaik I Dalam Kinerja Pelaksanaan Anggaran</h1></a>
        <p>Painan/27Desember2016,,.. Pengadilan Negeri Painan kembali memperoleh Penghargaan dari Kementrian Keuangan melalui kppn Pesisir selatan, Terbaik I kategori Kinerja Pelaksanaan Anggaran, ini adalah Pencapaian yang sangat baik, karena Pengadilan Negeri Painan berhasil mempertahankan gelar terbaik I.</p>
      <hr></div>




    <br>
      <a class="berita-hp" href="blog/pengumuman.html" style="margin-left:-270px;background:red;color:#fff;padding:20px;">Pengumuman lainnya..</a>
      <a class="berita-lainnya" href="blog/pengumuman.html" style="background:red;color:#fff;padding:20px;">Pengumuman Lainnya..</a>
    </section>
```

tambahkan satu atau lebih berita terbaru dengan copy paste salah satu bagian kode diatas yaitu ..


      <div class="berita-item" ondblclick="bisaDiEdit(this)" onblur="bisaDiBacaAja(this)">
            <a href="blog/Pengadilan-Negeri-Painan-Kembali-Memperoleh-Penghargaan-Terbaik-I-Dalam-Kinerja-Pelaksanaan-Anggaran/index.html"><h1>Pengadilan Negeri Painan Kembali Memperoleh Penghargaan Terbaik I Dalam Kinerja Pelaksanaan Anggaran</h1></a>
            <p>Painan/27Desember2016,,.. Pengadilan Negeri Painan kembali memperoleh Penghargaan dari Kementrian Keuangan melalui kppn Pesisir selatan, Terbaik I kategori Kinerja Pelaksanaan Anggaran, ini adalah Pencapaian yang sangat baik, karena Pengadilan Negeri Painan berhasil mempertahankan gelar terbaik I.</p>
          <hr></div>

buat disini hanya untuk yg terbaru saja dan sekilas. tambahkan kode diatas juga ke blog/pengumuman.html di bagian kode yg sama. untuk berita full nya ada di blog/judulberita.html lalu pastikan anda menghubungkan `<a href="blog/judulberita.html">` anda sesuai lokasi penyimpanan file (ikuti/pelajari kode sebelumnya)

# (+) blog/berita full konten baru
**Buatlah folder baru di blog/folder-berita**/***copy-paste-template-kode-dari-folder-berita-yg-sudah-ada*** lalu hubungkan ke kode `<a href="">` di blog/pengumuman.html atau blog/kegiatan.html **dan** index.html dibagian nama id-nya.

Ikuti Syntax kode untuk membuat gambar/tabel/list dll secara ter-template dari web http://pn-painan.go.id yg telah sy buat di https://github.com/nscdlg/elements **Silahkan lihat demo-nya dan pelajari syntax kode-nya utk diterapkan di blog (pengumuman/kegiatan) web http://pn-painan.go.id**
