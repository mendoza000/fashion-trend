import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "bk5p1kh0",
  dataset: "production",
  apiVersion: "2023-02-03", // use current UTC date - see "specifying API version"!
  token:
    "skPiYsAPTMrLCumnOEMd4sIi1iazJbau6e097vqyYLFOr8TVGDS79SMDskdCwwXXauC1KGEbpopCzthEPqBgoWkwxznXzpxeL3DSP5Ovuw2KsmhVPG0XNqIUE2hNXrhJNtY1U82LTzc5kJAXv6nDh8ckvC4N7Pv1SWwIoRIaVYAPEUMG5V2K", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => {
  return builder.image(source);
};
