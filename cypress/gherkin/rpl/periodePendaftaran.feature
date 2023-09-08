Feature: Membuat jalur pendaftaran RPL

    Background:
        Given User login sebagai "Super Administrator"
        * "SuperAdmin" masuk ke modul "PMB"
        * User mengakses halaman "periode pendaftaran"

    Scenario: Membuat jalur pendaftaran RPL
        When User menambahkan "periode pendaftaran"
        