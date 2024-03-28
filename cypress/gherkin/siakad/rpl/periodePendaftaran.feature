Feature: Membuat jalur pendaftaran RPL

    Background:
        Given User login sebagai "Super Administrator"
        * "Super Administrator" memilih modul "pmb"
        * User mengakses halaman "periode pendaftaran"

    Scenario: Membuat jalur pendaftaran RPL
        When User menambahkan "periode pendaftaran" dengan jalur RPL
        * User menambahkan prodi dengan "2" asesor
        * User menambahkan mata kuliah di prodi "hukum"