import slugify from "slugify";

/**
 * Slugify the links for the routes since we are passing the item names and we need to remove the
 * uppercase and the trim the whitespaces.
 */
export const toSlug = (value: string) => {
  return slugify(value, {
    replacement: "-",
    strict: true,
    lower: true,
    trim: true,
  });
};
