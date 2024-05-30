Feature: Reviewer memberikan feedback proposal peneliti

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas
    Scenario: Reviewer 1 memberikan feedback
        When User login sebagai "Dosen Mick"
        When User konfirmasi akun
        When Dosen memilih modul "litabmas"
        When User mengakses halaman penilaian
        When User mengakses halaman penilaian isian proposal
        When Reviewer 1 melihat detail proposal
        When Reviewer klik tombol berikan feedback
        When Reviewer 1 memeberikan feedback

    Scenario: Reviewer 2 memberikan feedback
        When User login sebagai "Dosen Kurt"
        When User mengakses halaman penilaian
        When User mengakses halaman penilaian isian proposal
        When Reviewer melihat detail proposal
        When Reviewer klik tombol berikan feedback
        When Reviewer 2 memeberikan feedback

    Scenario: Reviewer 1 memberikan penilaian aspek proposal
        When User login sebagai "Dosen Mick"
        When User konfirmasi akun
        When Dosen memilih modul "litabmas"
        When User mengakses halaman penilaian
        When User mengakses halaman penilaian isian proposal
        When Reviewer melihat detail proposal
        When User mengakses halaman penilaian bobot aspek proposal
        When Reviewer 1 memberikan penilaian aspek

