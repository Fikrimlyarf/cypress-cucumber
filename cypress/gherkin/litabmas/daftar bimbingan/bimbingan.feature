Feature: Dosen melakukan bimbinga proposal

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas

    Scenario: dosen memberikan feedback bimbingan
        When User login sebagai "Dosen Kahlil"
        When User konfirmasi akun
        When Dosen memilih modul "litabmas"
        When User mengakses halaman daftar bimbingan
        When User melihat detail proposal untuk mengisi feedback bimbingan
        When User pembimbing 1 memberikan feedback bimbingan