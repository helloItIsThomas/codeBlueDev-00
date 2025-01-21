const Fetch = require("@11ty/eleventy-fetch");

const { createClient } = require("@sanity/client");

module.exports = async function () {
  let url = "https://api.github.com/repos/11ty/eleventy";

  const client = createClient({
    projectId: "6jpkko0l",
    dataset: "production",
    useCdn: false, // set to `true` for deployment / production
    apiVersion: "2024-12-25",
    // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations
  });

  let json = await Fetch(url, {
    duration: "1d", // save for 1 day
    type: "json", // we’ll parse JSON for you
  });

  async function getGrantees() {
    const grantees = await client.fetch(
      '*[_type == "grantee"]{title, link, "image": image.asset->url, "description": pt::text(description)}'
    );
    return grantees;
  }

  const grantees = await getGrantees();

  return { json, grantees };
};
