import { defineConfig } from "vitepress";

const { BASE: base = "/" } = process.env;

export default defineConfig({
  title: "Text Block",
  description: "Text display component.",
  base,
  themeConfig: {
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
