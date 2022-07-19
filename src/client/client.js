import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  token: process.env.REACT_APP_SANITY_CLIENT_TOKEN,
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",
});

const builder = imageUrlBuilder(client);

export var urlFor = (source) => {
  return builder.image(source);
};
