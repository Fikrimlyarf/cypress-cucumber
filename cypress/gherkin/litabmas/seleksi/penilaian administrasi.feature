Feature: Manajemen Usulan Anggota

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas
        When User login sebagai "Admin LPPM"
        When User konfirmasi akun
        When "Admin LPPM" memilih modul "litabmas"
        When User mengakses halaman seleksi
        When User mengakses halaman penilaian administrasi
        When User memilih section penelitian
        When User melihat detail proposal untuk penilaian administrasi

    Scenario: Admin LPPM membatalkan penilaian
        When User klik tombol batalkan penilaian
        When User klik modal konfirmasi "Ya, Batalkan Penilaian"

    Scenario: Admin LPPM melakukan seleksi penilaian administrasi
        When User klik tombol validasi dokumen "Tandai Dokumen Lengkap"
        When User klik modal konfirmasi "Ya, Yakin"


    Scenario: Admin LPPM melakukan penilaian similarity & AI
        When User mengakses halaman penilaian similarity & AI
        When User mengisi aspek similairy
        When User mengisi aspek ai

    Scenario: Admin LPPM melakukan assign reviewer proposal
        When User mengakses halaman penilaian assign reviewer
        When User menentukan reviewer
