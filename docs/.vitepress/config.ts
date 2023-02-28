import { defineConfig } from "vitepress";

const { BASE: base = "/" } = process.env;

export default defineConfig({
  title: "vue_component_text",
  description: "Text display component.",
  base,
  themeConfig: {
    nav: [
      {
        text: "Components",
        link: "/components/",
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "Paragraph",
          link: "/components/paragraph.md",
        },
        {
          text: "Text",
          link: "/components/text.md",
        },
      ],
    },
    editLink: {
      pattern:
        "https://github.com/GhentCDH/vue_component_text/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/GhentCDH/vue_component_text",
      },
    ],
  },
});
