Feature: Test Case - Mata Kuliah

    Background: Login User
        # Given Admin mengakses halaman Mata Kuliah
        Given User login sebagai "Super Administrator"
        * User memilih modul akademik

    Scenario: Admin mengelola mata kuliah OBE
        When User mengakses halaman mata kuliah
        * Admin memilih mata kuliah "Pengantar Teknologi Informasi"
        # * Admin mengisi data "Pemetaan CPMK"