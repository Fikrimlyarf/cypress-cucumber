Feature: Pengisian Laporan Progres Report oleh peneliti

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas

    # Scenario: Dosen Jeff melakukan pelaporan progres report
    #     When User login sebagai "Dosen Jeff"
    #     When Dosen memilih modul "litabmas"
    #     When User mengakses halaman kegiatan
    #     When User mengakses halaman pengajuan pendanaan
    #     When User melihat detail proposal untuk mengisi progres report
    #     When User mengakses halaman laporan progress report
    #     When Peneliti melakukan upload file progres dan keuangan

    Scenario: Reviewer memberikan feedback laporan progres
        When User login sebagai "Dosen Kurt"
        When User konfirmasi akun
        When Dosen memilih modul "litabmas"
        When User mengakses halaman penilaian
        When User mengakses halaman penilaian progress report
        When User melihat detail proposal untuk mengisi progres report
        When User klik tombol berikan penilaian
        When Reviewer memberikan feedback laporan progres report
        When User klik tombol simpan
