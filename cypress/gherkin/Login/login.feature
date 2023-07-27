Feature: Test Case - Superadmin login ke siakad

    Scenario: Superadmin login ke siakad
        Given User mengakses halaman login siakadcloud
        When User Superadmin login
        * User memilih modul akademik
        Then Terdapat tampilan beranda
        