Feature: User Login dan mengaktifkan RPL

   Background: 
        Given User login sebagai "Super Administrator"
        * "Super Administrator" memilih modul "administrasi aplikasi"

    Scenario: User mengakses halaman pengaturan aplikasi
        When User mengakses halaman "pengaturan aplikasi"
        * User ubah filter Kelompok dengan "Plugin / Addon"
        * User mengaktifkan servis RPL
    # MASIH MENUNGGU PROSES DEVELOPMEN