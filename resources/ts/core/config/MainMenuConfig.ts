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
        sub: [
          {
              heading: "Roles",
              route: "roles.index",
          },
           {
                heading: "Permissions",
                route: "permissions.index",
            },
            {
                heading: "Users",
                route: "users.index",
            },
            {
                heading: "Patient Types",
                route: "patient-types.index",
            },
        ],
      },
        {
            heading: "Registrations",
            route: "registrations.index",
            components: ["Registration/index"],
            fontIcon: "bi bi-pencil-square",
        },
    ],
  },
];

export default DocMenuConfig;
