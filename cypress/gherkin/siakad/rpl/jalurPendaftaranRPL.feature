Feature: Membuat jalur pendaftaran RPL

    Background:
        Given User login sebagai "Super Administrator"
        * "Super Administrator" memilih modul "pmb"

    Scenario: Menambahkan jalur pendaftaran RPL
             When User mengakses halaman "jalur pendaftaran"
            * Admin klik tombol "tambah" di halaman jalur pendaftaran
            * Admin isi field "kode jalur" dengan "00"
            * Admin isi field "nama jalur" dengan "Rekognisi Pembelajaran Lampau"
            * Admin isi field "jenis pendaftaran" dengan "Rekognisi Pembelajaran Lampau (RPL)"
            * Admin isi field "keterangan jalur" dengan "Rekognisi Pembelajaran Lampau"
            * Admin klik tombol "simpan jalur" di halaman jalur pendaftaran
