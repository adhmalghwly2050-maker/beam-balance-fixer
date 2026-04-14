import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "استوديو التصميم الإنشائي" },
      { name: "description", content: "تطبيق متكامل للتحليل والتصميم الإنشائي" },
    ],
  }),
});
