Feature: Test Case - Mata Kuliah

    Background: Login User
        Given User login sebagai "Super Administrator"
        * "Super Administrator" memilih modul "akademik"

    Scenario: Admin mengelola mata kuliah OBE
        When User mengakses halaman "mata kuliah"
        * Admin memilih mata kuliah "Pengantar Teknologi Informasi"
        # * Admin mengisi data "Pemetaan CPMK"
        # * Admin mengisi data "Detail RPS"
        # * User klik tombol konfirmasi "Ya, Yakin"
        # * Admin mengisi data "Renc. Pembelajaran"
        * Admin mengisi data "Metode Evaluasi"
        * User klik tombol konfirmasi "Ya, Yakin"
        * Admin mengisi data "Komposisi Nilai"

    