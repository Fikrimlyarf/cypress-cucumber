Feature: User Login

   Background: 
        Given User login sebagai "Asesor RPL"
        * "Asesor RPL" memilih modul "pmb"

    Scenario: Asesor mengakses halaman asesor
        When User mengakses halaman "asesor"
        * Asesor berada pada halaman seleksi RPL
        * Asesor melakukan penilaian RPL pendaftar "ALI AKBAR"
        * Asesor kembali ke halaman list dan melihat status pendaftar "ALI AKBAR"