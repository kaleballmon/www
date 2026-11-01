import path from "node:path";
import type { AstroInstance } from "astro";

export const getFilenameFromAstroInstance = (instance: AstroInstance) =>
  path.parse(instance.file).name;
