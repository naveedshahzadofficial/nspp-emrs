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
        ],
      },
    ],
  },
];

export default DocMenuConfig;
