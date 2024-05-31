Feature: Pengisian Log Book Aktivitas oleh peneliti

    Background: Akses modul litabmas
        Given User mengakses modul Litabmas

    Scenario: Dosen menghapus semua log book aktivitas
        When User login sebagai "Dosen Jeff"
        When Dosen memilih modul "litabmas"
        When User mengakses halaman kegiatan
        When User mengakses halaman pengajuan pendanaan
        When User melihat detail proposal untuk mengisi log book
        When User mengakses halaman aktivitas penelitian
        When User menghapus log book
    
    Scenario: Dosen mengisi log book aktivitas penelitian
        When User login sebagai "Dosen Jeff"
        When Dosen memilih modul "litabmas"
        When User mengakses halaman kegiatan
        When User mengakses halaman pengajuan pendanaan
        When User melihat detail proposal untuk mengisi log book
        When User mengakses halaman aktivitas penelitian
        When User mengisi log book penelitian

    