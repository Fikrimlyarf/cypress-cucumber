Feature: Manajemen Usulan Anggota

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas
    Scenario: Dosen Internal membuat pengajuan anggota eksternal
        When User login sebagai "Dosen Kahlil"
        When User konfirmasi akun
        When Dosen memilih modul "litabmas"
        When User mengakses halaman usulan anggota
        When User mengisi data usulan anggota

    Scenario: Admin LPPM menyetujui usulan anggota eksternal
        When User login sebagai "Admin LPPM"
        When User konfirmasi akun
        When "Admin LPPM" memilih modul "litabmas"
        When User mengakses halaman usulan anggota
        When User menyetujui akun anggota eksternal
