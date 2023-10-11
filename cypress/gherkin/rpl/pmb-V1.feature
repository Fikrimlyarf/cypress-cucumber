Feature: Mendatar melalui jalur pendaftaran RPL

    Background:
        Given User mengakses halaman "jalur seleksi"

    Scenario: Pendaftar memilih jalur pendaftaran RPL
        When Pendaftar memilih jalur RPL gelombang 4
        * Pendaftar mengisi form registrasi
        * Pendaftar mendapatkan "ID Pendaftar" yang dapat digunakan untuk login
        * Pendaftar mendapatkan "PIN" yang dapat digunakan untuk login
        * Pendaftar login menggunakan credentials yang didapat
        * Pendaftar melengkapi data untuk melanjutkan pendaftaran
        * Pendaftar mengupload berkas syarat pendaftaran
        # * Pendaftar mengupload berkas syarat RPL
