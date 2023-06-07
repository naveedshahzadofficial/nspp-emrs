const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "dashboard",
        component: "Dashboard",
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
        ],
      },
        {
            heading: "Registrations",
            route: "registrations.index",
            fontIcon: "bi bi-pencil-square",
        },
    ],
  },
];

export default DocMenuConfig;
