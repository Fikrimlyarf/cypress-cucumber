Feature: Manajemen Pengajuan Pendanaan

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas

    Scenario: Dosen membuat pengajuan pendanaan
        When User login sebagai "Dosen"
        When User konfirmasi akun
        When "Dosen" memilih modul "litabmas"
        When User mengakses halaman kegiatan
        When User mengakses halaman pengajuan pendanaan
        When User klik tombol tambah
        When User mengisi pernyataan proposal
        When User memilih anggota proposal
        When User mengisi isian proposal
        When User mengisi detail pendanaan
        When User klik tombol kirim pengajuan
        When User klik tombol konfirmasi pengajuan

    Scenario: Dosen eksternal menerima undangan proposal
        When User login sebagai "Dosen Eksternal"
        When User mengakses halaman kegiatan
        When User mengakses halaman pengajuan pendanaan
        When User mengkorfimasi undangan anggota proposal
        When User klik tombol konfirmasi anggota "Terima Undangan"
        When User klik modal konfirmasi "Gabung Penelitian"
