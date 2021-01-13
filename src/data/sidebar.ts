import { Page, SidebarContent } from "../types";

const makePage = (title: string): Page => ({
  title,
  slug: title.toLowerCase().replace(/\s+/g, "-"),
});

export const sidebarContent: SidebarContent = [
  {
    title: "General",
    pages: [
      makePage("Introduction"),
      makePage("Getting Started"),
      makePage("Environments"),
    ],
  },
  {
    title: "CLI",
    pages: [
      makePage("Quick Start"),
      makePage("Installation"),
      makePage("API Reference"),
    ],
  },
  {
    title: "Deployment",
    pages: [
      makePage("Railway Up"),
      makePage("GitHub Triggers"),
      makePage("Vercel"),
      makePage("Self Hosted Server"),
      makePage("Serverless"),
      makePage("Project Tokens"),
    ],
  },
  {
    title: "Plugins",
    pages: [
      makePage("PostgreSQL"),
      makePage("Redis"),
      makePage("MongoDB"),
      makePage("Elasticsearch"),
    ],
  },
  {
    pages: [makePage("Examples")],
  },
];
