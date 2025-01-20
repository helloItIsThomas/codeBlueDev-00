// import { createClient } from "../js/sanityClient/dist/index.browser.js";
// Import using ESM URL imports in environments that supports it:
import { createClient } from "https://esm.sh/@sanity/client";
// I would prefer the above import to be a local path, as the url might not be supported in all environments. However we will go with this url for now.

export const client = createClient({
  projectId: "6jpkko0l",
  dataset: "production",
  useCdn: false, // set to `true` for deployment / production
  apiVersion: "2024-12-25",
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

export async function getGrantees() {
  const grantees = await client.fetch(
    '*[_type == "grantee"]{title, link, image}'
  );
  return grantees;
}
