const DocMenuConfig = [
  {
    pages: [
      {
        heading: "Dashboard",
        route: "dashboard",
        components: ["Dashboard"],
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
            "Roles/Index", "Roles/Create", "Roles/Edit", "Roles/Show",
            "Permissions/Index", "Permissions/Create", "Permissions/Edit", "Permissions/Show",
            "Users/Index", "Users/Create", "Users/Edit", "Users/Show",
            "PatientTypes/Index", "PatientTypes/Create", "PatientTypes/Edit", "PatientTypes/Show",
            "Complaints/Index", "Complaints/Create", "Complaints/Edit", "Complaints/Show",
            "DiseaseTypes/Index", "DiseaseTypes/Create", "DiseaseTypes/Edit", "DiseaseTypes/Show",
            "Diseases/Index", "Diseases/Create", "Diseases/Edit", "Diseases/Show",
        ],
        sub: [
            {
                heading: "Permissions",
                route: "permissions.index",
                components: ["Permissions/Index", "Permissions/Create", "Permissions/Edit", "Permissions/Show"],
            },
          {
              heading: "Roles",
              route: "roles.index",
              components: ["Roles/Index", "Roles/Create", "Roles/Edit", "Roles/Show"],
          },

            {
                heading: "Users",
                route: "users.index",
                components: ["Users/Index", "Users/Create", "Users/Edit", "Users/Show"],

            },
            {
                heading: "Patient Types",
                route: "patient-types.index",
                components: ["PatientTypes/Index", "PatientTypes/Create", "PatientTypes/Edit", "PatientTypes/Show"],
            },
            {
                heading: "Complaints",
                route: "complaints.index",
                components: ["Complaints/Index", "Complaints/Create", "Complaints/Edit", "Complaints/Show"],
            },
            {
                heading: "DiseaseTypes",
                route: "disease-types.index",
                components: ["DiseaseTypes/Index", "DiseaseTypes/Create", "DiseaseTypes/Edit", "DiseaseTypes/Show"],
            },
            {
                heading: "Diseases",
                route: "diseases.index",
                components: ["Diseases/Index", "Diseases/Create", "Diseases/Edit", "Diseases/Show"],
            },
        ],
      },
        {
            heading: "Registrations",
            route: "registrations.index",
            components: ["Registrations/Index", "Registrations/Create", "Registrations/Edit", "Registrations/Show", "Registrations/Proceed"],
            fontIcon: "bi bi-pencil-square",
        },
        {
            heading: "Reimbursements",
            route: "reimbursements.index",
            components: ["Reimbursements/Index", "Reimbursements/Create", "Reimbursements/Edit", "Reimbursements/Show"],
            fontIcon: "bi bi-pencil-square",
        },
    ],
  },
];

export default DocMenuConfig;
