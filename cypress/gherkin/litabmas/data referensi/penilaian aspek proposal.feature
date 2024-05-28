Feature: Manajemen Penilaian Aspek Proposal

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas

    Scenario: Admin LPPM menambahkan aspek proposal
        When User login sebagai "Admin LPPM"
        When User konfirmasi akun
        When "Admin LPPM" memilih modul "litabmas"
        When User mengakses halaman data referensi
        When User mengakses halaman aspek penilaian
        When User mengakses halaman penilaian aspek proposal
        When User menambahkan aspek proposal