Feature: Test Case - Manajemen OBE

    Background: Login User
        Given Admin mengakses halaman menajemen OBE
        
    Scenario: Admin mengelola manajemen OBE
        When Admin menambahkan data "Profil Lulusan"
        * Admin menambahkan data "Manajemen CPL"
        * Admin menambahkan data "Pemetaan PL -> CPL"
        * Admin menambahkan data "Pemetaan CPL -> MK"

    Scenario: Admin menghapus data Profile Lulusan
        When Admin menghapus data "Profil Lulusan"
        * Admin menghapus data "Manajemen CPL"