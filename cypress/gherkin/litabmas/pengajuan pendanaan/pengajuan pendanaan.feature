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
        When User mengisi isian proposal
        When User memilih anggota proposal
        When User mengisi detail pendanaan
        When User klik tombol kirim pengajuan
        When User klik tombol konfirmasi pengajuan