import { menuItems } from "./menu-data";

function dishImage(slug: string, fallback = "/images/dishes/hero.jpg"): string {
  return menuItems.find((item) => item.id === slug)?.image ?? fallback;
}

/** Swap hero.jpg in public/images/dishes/ for a custom hero photograph. */
export const siteImages = {
  hero: "/images/dishes/hero.jpg",
  story: dishImage("banku-tilapia"),
  contact: dishImage("jollof-grilled-chicken"),
  aboutHero: dishImage("classic-jollof"),
  aboutGrid: [
    { src: dishImage("jollof-grilled-chicken"), alt: "Jollof with grilled chicken" },
    { src: dishImage("banku-tilapia"), alt: "Banku and grilled tilapia" },
    { src: dishImage("party-jollof"), alt: "Party jollof assorted" },
    { src: dishImage("chicken-fried-rice"), alt: "Chicken fried rice" },
  ],
  gallery: [
    {
      id: "jollof",
      src: dishImage("jollof-grilled-chicken"),
      alt: "Jollof with grilled chicken",
      className: "col-span-2 row-span-2",
    },
    {
      id: "banku",
      src: dishImage("banku-tilapia"),
      alt: "Banku and tilapia",
      className: "col-span-1 row-span-1",
    },
    {
      id: "banku-detail",
      src: dishImage("banku-fried-fish"),
      alt: "Banku with fried fish",
      className: "col-span-1 row-span-2",
    },
    {
      id: "fried-rice",
      src: dishImage("chicken-fried-rice"),
      alt: "Chicken fried rice",
      className: "col-span-1 row-span-1",
    },
    {
      id: "party",
      src: dishImage("party-jollof"),
      alt: "Party jollof",
      className: "col-span-1 row-span-1",
    },
    {
      id: "classic",
      src: dishImage("classic-jollof"),
      alt: "Classic jollof",
      className: "col-span-1 row-span-1",
    },
  ],
};
