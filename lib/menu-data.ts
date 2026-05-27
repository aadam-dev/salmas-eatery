export type MenuCategory = "rice" | "jollofs" | "banku";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceDisplay: string;
  category: MenuCategory;
  image: string;
  featured?: boolean;
  isPopular?: boolean;
}

export const menuCategories = [
  { id: "all", label: "All dishes" },
  { id: "rice", label: "Rice" },
  { id: "jollofs", label: "Jollofs" },
  { id: "banku", label: "Banku" },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "steamed-white-rice",
    name: "Steamed White Rice",
    description:
      "Fluffy long-grain rice steamed to perfection, the quiet canvas for rich stews, pepper, and grilled protein.",
    priceDisplay: "GHS 25",
    category: "rice",
    image: "/images/dishes/steamed-white-rice.jpg",
    featured: true,
  },
  {
    id: "vegetable-fried-rice",
    name: "Vegetable Fried Rice",
    description:
      "Wok-tossed rice with carrots, peas, sweet pepper, and spring onion in a light soy-ginger glaze.",
    priceDisplay: "GHS 40",
    category: "rice",
    image: "/images/dishes/vegetable-fried-rice.jpg",
  },
  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    description:
      "Golden fried rice with tender chicken pieces, vegetables, and a touch of house spice, a crowd favourite.",
    priceDisplay: "GHS 50",
    category: "rice",
    image: "/images/dishes/chicken-fried-rice.jpg",
    featured: true,
    isPopular: true,
  },
  {
    id: "plain-rice-stew",
    name: "Plain Rice & Stew",
    description:
      "Steamed rice served with a slow-simmered tomato stew, onions, and your choice of protein on the side.",
    priceDisplay: "GHS 45",
    category: "rice",
    image: "/images/dishes/plain-rice-stew.jpg",
  },
  {
    id: "omo-tuo",
    name: "Rice Balls (Omo Tuo)",
    description:
      "Soft, hand-rolled rice balls, traditionally paired with groundnut soup or rich palm-nut stew.",
    priceDisplay: "GHS 35",
    category: "rice",
    image: "/images/dishes/omo-tuo.jpg",
  },
  {
    id: "classic-jollof",
    name: "Classic Jollof",
    description:
      "Tomato-layered jollof rice cooked low and slow over open flame, smoky, fragrant, and deeply Ghanaian.",
    priceDisplay: "GHS 45",
    category: "jollofs",
    image: "/images/dishes/classic-jollof.jpg",
    featured: true,
  },
  {
    id: "jollof-grilled-chicken",
    name: "Jollof & Grilled Chicken",
    description:
      "Our signature flame-kissed jollof topped with marinated grilled chicken and a hint of charred pepper.",
    priceDisplay: "GHS 75",
    category: "jollofs",
    image: "/images/dishes/jollof-grilled-chicken.jpg",
    featured: true,
    isPopular: true,
  },
  {
    id: "jollof-fried-chicken",
    name: "Jollof & Fried Chicken",
    description:
      "Party-ready jollof with crispy fried chicken, crunch outside, juicy within, every single time.",
    priceDisplay: "GHS 75",
    category: "jollofs",
    image: "/images/dishes/jollof-fried-chicken.jpg",
    featured: true,
    isPopular: true,
  },
  {
    id: "jollof-fish",
    name: "Jollof & Fish",
    description:
      "Smoky jollof served alongside seasoned grilled fish and fresh pepper, coastal comfort on a plate.",
    priceDisplay: "GHS 85",
    category: "jollofs",
    image: "/images/dishes/jollof-fish.jpg",
  },
  {
    id: "party-jollof",
    name: "Party Jollof (Assorted)",
    description:
      "A generous portion of jollof loaded with assorted meats, built for sharing and celebration.",
    priceDisplay: "GHS 90",
    category: "jollofs",
    image: "/images/dishes/party-jollof.jpg",
    featured: true,
  },
  {
    id: "jollof-beef",
    name: "Jollof & Beef",
    description:
      "Rich jollof rice with tender beef suya strips and caramelised onions, bold, savoury, satisfying.",
    priceDisplay: "GHS 80",
    category: "jollofs",
    image: "/images/dishes/jollof-beef.jpg",
  },
  {
    id: "banku-tilapia",
    name: "Banku & Grilled Tilapia",
    description:
      "Fermented corn-and-cassava banku with whole grilled tilapia, shito, and fresh pepper, the classic pairing.",
    priceDisplay: "GHS 95",
    category: "banku",
    image: "/images/dishes/banku-tilapia.jpg",
    featured: true,
    isPopular: true,
  },
  {
    id: "banku-fried-fish",
    name: "Banku & Fried Fish",
    description:
      "Silky banku with golden fried fish, diced pepper, and onions, comfort food at its finest.",
    priceDisplay: "GHS 85",
    category: "banku",
    image: "/images/dishes/banku-fried-fish.jpg",
    featured: true,
  },
  {
    id: "banku-okro",
    name: "Banku & Okro Stew",
    description:
      "Smooth banku dipped into velvety okro stew with crab or fish, a Ga favourite, rich and soulful.",
    priceDisplay: "GHS 70",
    category: "banku",
    image: "/images/dishes/banku-okro.jpg",
  },
  {
    id: "banku-crab",
    name: "Banku & Crab",
    description:
      "Fresh banku with seasoned crab in aromatic pepper sauce, sweet, spicy, and unforgettable.",
    priceDisplay: "GHS 120",
    category: "banku",
    image: "/images/dishes/banku-crab.jpg",
  },
  {
    id: "banku-pepper-sauce",
    name: "Banku & Pepper Sauce",
    description:
      "Hand-rolled banku with tilapia in our house pepper sauce, fiery, tangy, and deeply satisfying.",
    priceDisplay: "GHS 90",
    category: "banku",
    image: "/images/dishes/banku-pepper-sauce.jpg",
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export const categoryShowcase = [
  {
    id: "rice" as const,
    title: "Rice",
    subtitle: "Steamed, fried & stewed",
    description: "From plain steamed rice to wok-fried plates and hand-rolled omo tuo.",
    image: "/images/dishes/chicken-fried-rice.jpg",
    href: "/menu?category=rice",
  },
  {
    id: "jollofs" as const,
    title: "Jollofs",
    subtitle: "Flame-cooked & smoky",
    description: "Layered tomato rice with chicken, fish, beef, or assorted meats.",
    image: "/images/dishes/jollof-grilled-chicken.jpg",
    href: "/menu?category=jollofs",
  },
  {
    id: "banku" as const,
    title: "Banku",
    subtitle: "Stone-ground tradition",
    description: "Fermented banku with tilapia, crab, okro stew, and pepper sauce.",
    image: "/images/dishes/banku-tilapia.jpg",
    href: "/menu?category=banku",
  },
];

export const heroFeaturedDish = menuItems.find((i) => i.id === "jollof-grilled-chicken")!;
