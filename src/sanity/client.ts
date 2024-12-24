import { createClient } from "@sanity/client";

console.log("Hello from sanity/client.ts");

export const client = createClient({
  projectId: "oxm4gldh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
