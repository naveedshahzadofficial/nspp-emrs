const DocMenuConfig = [
    {
        pages: [
            {
                heading: "Dashboard",
                route: "dashboard",
                components: ["Dashboard"],
                permissions: ['dashboard'],
                fontIcon: "bi bi-house-door",
            },
        ],
    },
    {
        heading: "Main Menu",
        pages: [
            {
                sectionTitle: "System Settings",
                fontIcon: "bi bi-gear",
                components: [
                    "Institutes/Index", "Institutes/Create", "Institutes/Edit", "Institutes/Show",
                    "Roles/Index", "Roles/Create", "Roles/Edit", "Roles/Show",
                    "Permissions/Index", "Permissions/Create", "Permissions/Edit", "Permissions/Show",
                    "Users/Index", "Users/Create", "Users/Edit", "Users/Show",
                    "PatientTypes/Index", "PatientTypes/Create", "PatientTypes/Edit", "PatientTypes/Show",
                    "Complaints/Index", "Complaints/Create", "Complaints/Edit", "Complaints/Show",
                    "DiseaseTypes/Index", "DiseaseTypes/Create", "DiseaseTypes/Edit", "DiseaseTypes/Show",
                    "Diseases/Index", "Diseases/Create", "Diseases/Edit", "Diseases/Show",
                    "Labs/Index", "Labs/Create", "Labs/Edit", "Labs/Show",
                    "Hospitals/Index", "Hospitals/Create", "Hospitals/Edit", "Hospitals/Show",
                    "TestCategories/Index", "TestCategories/Create", "TestCategories/Edit", "TestCategories/Show",
                    "TestTypes/Index", "TestTypes/Create", "TestTypes/Edit", "TestTypes/Show",
                    "Tests/Index", "Tests/Create", "Tests/Edit", "Tests/Show",
                    "MedicineCategories/Index", "MedicineCategories/Create", "MedicineCategories/Edit", "MedicineCategories/Show",
                    "MedicineTypes/Index", "MedicineTypes/Create", "MedicineTypes/Edit", "MedicineTypes/Show",
                    "MedicineGenerics/Index", "MedicineGenerics/Create", "MedicineGenerics/Edit", "MedicineGenerics/Show",
                    "Medicines/Index", "Medicines/Create", "Medicines/Edit", "Medicines/Show",
                ],
                permissions: ['list institutes', 'list roles', 'list permissions', 'list users',
                    "list patient types", "list complaints", "list disease types", "list diseases",
                    "list labs", "list hospitals", "list medicine categories", "list medicine types", "list medicine generics", "list medicines"
                ],
                sub: [
                    {
                        heading: "Institutes",
                        route: "institutes.index",
                        components: ["Institutes/Index", "Institutes/Create", "Institutes/Edit", "Institutes/Show"],
                        permissions: ['list institutes'],
                    },
                    {
                        heading: "Permissions",
                        route: "permissions.index",
                        components: ["Permissions/Index", "Permissions/Create", "Permissions/Edit", "Permissions/Show"],
                        permissions: ['list permissions'],
                    },
                    {
                        heading: "Roles",
                        route: "roles.index",
                        components: ["Roles/Index", "Roles/Create", "Roles/Edit", "Roles/Show"],
                        permissions: ['list roles'],
                    },

                    {
                        heading: "Users",
                        route: "users.index",
                        components: ["Users/Index", "Users/Create", "Users/Edit", "Users/Show"],
                        permissions: ['list users'],

                    },
                    {
                        heading: "Patient Types",
                        route: "patient-types.index",
                        components: ["PatientTypes/Index", "PatientTypes/Create", "PatientTypes/Edit", "PatientTypes/Show"],
                        permissions: ['list patient types'],
                    },
                    {
                        heading: "Complaints",
                        route: "complaints.index",
                        components: ["Complaints/Index", "Complaints/Create", "Complaints/Edit", "Complaints/Show"],
                        permissions: ['list complaints'],
                    },
                    {
                        heading: "Disease Types",
                        route: "disease-types.index",
                        components: ["DiseaseTypes/Index", "DiseaseTypes/Create", "DiseaseTypes/Edit", "DiseaseTypes/Show"],
                        permissions: ['list disease types'],
                    },
                    {
                        heading: "Diseases",
                        route: "diseases.index",
                        components: ["Diseases/Index", "Diseases/Create", "Diseases/Edit", "Diseases/Show"],
                        permissions: ['list diseases'],
                    },
                    {
                        heading: "Labs",
                        route: "labs.index",
                        components: ["Labs/Index", "Labs/Create", "Labs/Edit", "Labs/Show"],
                        permissions: ['list labs'],
                    },
                    {
                        heading: "Hospitals",
                        route: "hospitals.index",
                        components: ["Hospitals/Index", "Hospitals/Create", "Hospitals/Edit", "Hospitals/Show"],
                        permissions: ['list hospitals'],
                    },
                    {
                        heading: "Medicine Categories",
                        route: "medicine-categories.index",
                        components: ["MedicineCategories/Index", "MedicineCategories/Create", "MedicineCategories/Edit", "MedicineCategories/Show"],
                        permissions: ['list medicine categories'],
                    },
                    {
                        heading: "Medicine Types",
                        route: "medicine-types.index",
                        components: ["MedicineTypes/Index", "MedicineTypes/Create", "MedicineTypes/Edit", "MedicineTypes/Show",],
                        permissions: ['list medicine types'],
                    },
                    {
                        heading: "Medicine Generics",
                        route: "medicine-generics.index",
                        components: ["MedicineGenerics/Index", "MedicineGenerics/Create", "MedicineGenerics/Edit", "MedicineGenerics/Show",],
                        permissions: ['list medicine generics'],
                    },
                    {
                        heading: "Medicines",
                        route: "medicines.index",
                        components: ["Medicines/Index", "Medicines/Create", "Medicines/Edit", "Medicines/Show",],
                        permissions: ['list medicines'],
                    },
                    {
                        heading: "Test Categories",
                        route: "test-categories.index",
                        components: ["TestCategories/Index", "TestCategories/Create", "TestCategories/Edit", "TestCategories/Show"],
                        permissions: ['list test categories'],
                    },
                    {
                        heading: "Test Types",
                        route: "test-types.index",
                        components: ["TestTypes/Index", "TestTypes/Create", "TestTypes/Edit", "TestTypes/Show"],
                        permissions: ['list test types'],
                    },
                    {
                        heading: "Tests",
                        route: "tests.index",
                        components: ["Tests/Index", "Tests/Create", "Tests/Edit", "Tests/Show"],
                        permissions: ['list tests'],
                    },
                ],
            },
            {
                heading: "Stocks",
                route: "stocks.index",
                components: ["Stocks/Index", "Stocks/Create", "Stocks/Edit", "Stocks/Show"],
                permissions: ['list stocks'],
                fontIcon: "bi bi-bar-chart-line-fill",
            },
            {
                heading: "Patients",
                route: "patients.index",
                components: ["Patients/Index", "Patients/Create", "Patients/Edit", "Patients/Show"],
                permissions: ['list patients'],
                fontIcon: "bi bi-person-plus",
            },
            {
                heading: "Registrations",
                route: "registrations.index",
                components: ["Registrations/Index", "Registrations/Create", "Registrations/Edit", "Registrations/Show", "Registrations/Proceed", "Registrations/Pharmacy"],
                permissions: ['list registrations'],
                fontIcon: "bi bi-pencil-square",
            },
            {
                heading: "Reimbursements",
                route: "reimbursements.index",
                components: ["Reimbursements/Index", "Reimbursements/Create", "Reimbursements/Edit", "Reimbursements/Show"],
                permissions: ['list reimbursements'],
                fontIcon: "bi bi-pencil-square",
            },
        ],
    },
];

export default DocMenuConfig;
