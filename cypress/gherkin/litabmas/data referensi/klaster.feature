Feature: Manajemen Klaster Pendanaan

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas
    
    Scenario: Admin LPPM membuat klaster pendanaan
        When User login sebagai "Admin LPPM"
        When User konfirmasi akun
        When "Admin LPPM" memilih modul "litabmas"
        When User mengakses halaman data referensi
        When User mengakses halaman klaster pendanaan
        # When User klik tombol tambah
        # When User mengisi data informasi umum klaster
        # When User mengisi data bidang ilmu & tema
        # When User memilih output dan outcome
        # When User mengisi agenda kegiatan
        When looping data
        # When User klik tombol simpan