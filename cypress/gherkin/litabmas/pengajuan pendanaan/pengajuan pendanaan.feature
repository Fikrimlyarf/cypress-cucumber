Feature: Manajemen Pengajuan Pendanaan

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas

    Scenario: Dosen membuat pengajuan pendanaan
        When User login sebagai "Dosen"
        When User konfirmasi akun
        When "Dosen" memilih modul "litabmas"
        When User mengakses halaman pengajuan pendanaan
        When User klik tombol tambah
        When User mengisi pernyataan proposal