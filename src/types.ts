import type { AstroInstance } from "astro";

export interface ExplorationAstroInstance extends AstroInstance {
  title: string;
  publishDate: Date;
}
