const sidebars = {
  sidebar: [
    {
      type: "doc",
      label: "Development Portal",
      id: "portal",
    },
    {
      type: "category",
      label: "Foundational Concepts",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Modular Blockchain",
          id: "modular-blockchain",
        },
        {
          type: "doc",
          label: "Optimistic Rollups",
          id: "optimistic-rollups",
        },
        {
          type: "doc",
          label: "Cosmos Network",
          id: "cosmos",
        },
      ],
    },
    {
      type: "category",
      label: "dYmension Protocol",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "dYmension Hub",
          id: "dymension-hub",
        },
        {
          type: "doc",
          label: "RollApps",
          id: "rollapps",
        },
        {
          type: "doc",
          label: "DYM token",
          id: "dym-token",
        },
        {
          type: "link",
          label: "Resources",
          href: "https://github.com/dymensionxyz/awesome",
        },
      ],
    },
    {
      type: "category",
      label: "Development Guide",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Local Testnet",
          id: "local-testnet",
        },
      ],
    },
    {
      type: "doc",
      label: "Litepaper",
      id: "litepaper",
    },
    {
      type: "doc",
      label: "Glossary",
      id: "glossary",
    },
  ],
};

module.exports = sidebars;
