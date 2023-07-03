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
        ],
          permissions: ['list institutes', 'list roles', 'list permissions', 'list users',
              "list patient types", "list complaints", "list disease types", "list diseases",
          ],
        sub: [
            {
                heading: "Institutes",
                route: "institutes.index",
                components: ["Institutes/Index", "Institutes/Create", "Institutes/Edit", "Institutes/Show"],
                permissions: ['list institutes' ],
            },
            {
                heading: "Permissions",
                route: "permissions.index",
                components: ["Permissions/Index", "Permissions/Create", "Permissions/Edit", "Permissions/Show"],
                permissions: ['list permissions' ],
            },
          {
              heading: "Roles",
              route: "roles.index",
              components: ["Roles/Index", "Roles/Create", "Roles/Edit", "Roles/Show"],
              permissions: ['list roles' ],
          },

            {
                heading: "Users",
                route: "users.index",
                components: ["Users/Index", "Users/Create", "Users/Edit", "Users/Show"],
                permissions: ['list users' ],

            },
            {
                heading: "Patient Types",
                route: "patient-types.index",
                components: ["PatientTypes/Index", "PatientTypes/Create", "PatientTypes/Edit", "PatientTypes/Show"],
                permissions: ['list patient types' ],
            },
            {
                heading: "Complaints",
                route: "complaints.index",
                components: ["Complaints/Index", "Complaints/Create", "Complaints/Edit", "Complaints/Show"],
                permissions: ['list complaints' ],
            },
            {
                heading: "DiseaseTypes",
                route: "disease-types.index",
                components: ["DiseaseTypes/Index", "DiseaseTypes/Create", "DiseaseTypes/Edit", "DiseaseTypes/Show"],
                permissions: ['list disease types' ],
            },
            {
                heading: "Diseases",
                route: "diseases.index",
                components: ["Diseases/Index", "Diseases/Create", "Diseases/Edit", "Diseases/Show"],
                permissions: ['list diseases' ],
            },
        ],
      },
        {
            heading: "Patients",
            route: "patients.index",
            components: ["Patients/Index", "Patients/Create", "Patients/Edit", "Patients/Show" ],
            permissions: ['list patients' ],
            fontIcon: "bi bi-person-plus",
        },
        {
            heading: "Registrations",
            route: "registrations.index",
            components: ["Registrations/Index", "Registrations/Create", "Registrations/Edit", "Registrations/Show", "Registrations/Proceed", "Registrations/Pharmacy"],
            permissions: ['list registrations' ],
            fontIcon: "bi bi-pencil-square",
        },
        {
            heading: "Reimbursements",
            route: "reimbursements.index",
            components: ["Reimbursements/Index", "Reimbursements/Create", "Reimbursements/Edit", "Reimbursements/Show"],
            permissions: ['list reimbursements' ],
            fontIcon: "bi bi-pencil-square",
        },
    ],
  },
];

export default DocMenuConfig;
