import type { Restaurant, SignatureDish } from "../types";

/**
 * Realistic mock data for the Kozhikode launch location.
 * IMPORTANT: All items are strictly identified as preview/sample data.
 */
export const SAMPLE_DISCLAIMER_NOTICE =
  "Sample Preview Notice: The following listings represent architectural placeholders based on Kozhikode's renowned culinary heritage. No formal independent verification audits have been executed yet.";

export const MOCK_SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: "dish-kozhikodan-biryani",
    name: "Kozhikodan Dum Biryani",
    malayalamName: "കോഴിക്കോടൻ ബിരിയാണി",
    description:
      "Fragrant Khaima (Jeerakasala) rice cooked on dum with tender meat, mild Malabar spices, fried onions, cashews, and raisins. Renowned for its subtle aromatics rather than fiery chili heat.",
    category: "Biryani",
    bestPlaces: ["Paragon Restaurant", "Rahmath Restaurant", "Bombay Hotel"],
    samplePrice: "₹220 - ₹280",
    isVegetarian: false,
    trustStatus: "heritage_landmark",
    flavorProfile: ["Aromatic", "Mild Spice", "Khaima Rice", "Slow Dum"],
  },
  {
    id: "dish-malabar-halwa",
    name: "Kozhikode Halwa (Black & Tender)",
    malayalamName: "കോഴിക്കോടൻ ഹൽവ",
    description:
      "Slow-stirred in large copper vats using pure coconut oil or ghee, jaggery, flour, and spices. Kozhikode's Sweet Meat Street (S.M. Street) is legendary worldwide for this delicacy.",
    category: "Snacks & Sweets",
    bestPlaces: ["Sankaran Bakery", "S.M. Street Halwa Guilds", "Cochin Bakery"],
    samplePrice: "₹180 - ₹350/kg",
    isVegetarian: true,
    trustStatus: "heritage_landmark",
    flavorProfile: ["Rich Jaggery", "Pure Ghee", "Cardamom", "Chewy Texture"],
  },
  {
    id: "dish-erachi-pathiri",
    name: "Erachi Pathiri & Chatti Pathiri",
    malayalamName: "ഇറച്ചി പത്തിരി",
    description:
      "Delicate layered Malabar rice crepes stuffed with seasoned minced meat and mild spices, a cornerstone of traditional Malabar festive cuisine.",
    category: "Breads & Curries",
    bestPlaces: ["Zain's Hotel", "Beach Road Food Guild"],
    samplePrice: "₹80 - ₹120",
    isVegetarian: false,
    trustStatus: "unverified_sample",
    flavorProfile: ["Savory", "Tender Crust", "Spiced Mutton/Chicken"],
  },
  {
    id: "dish-kallummakkaya-nirachathu",
    name: "Arikadukka (Stuffed Mussels)",
    malayalamName: "അരിക്കടുക്ക",
    description:
      "Fresh coastal green mussels stuffed with spiced ground rice batter, steamed in the shell, and crisp-fried with Malabar red masala.",
    category: "Seafood",
    bestPlaces: ["Kozhikode Beach Stalls", "Zain's Hotel"],
    samplePrice: "₹100 - ₹150",
    isVegetarian: false,
    trustStatus: "unverified_sample",
    flavorProfile: ["Crisp Crust", "Ocean Fresh", "Zesty Masala"],
  },
  {
    id: "dish-sulaimani",
    name: "Malabar Spiced Sulaimani",
    malayalamName: "സുലൈമാനി",
    description:
      "Golden spiced black tea infused with cardamom, clove, fresh mint, and lemon juice. The essential Kozhikode digestive ritual after a hearty feast.",
    category: "Beverages",
    bestPlaces: ["Bombay Hotel", "Rahmath Hotel", "Beach Promenade Kiosks"],
    samplePrice: "₹15 - ₹25",
    isVegetarian: true,
    trustStatus: "heritage_landmark",
    flavorProfile: ["Citrus Note", "Cardamom Warmth", "Sweet Finish"],
  },
];

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "rest-paragon",
    name: "Paragon Restaurant",
    location: {
      latitude: 11.2578,
      longitude: 75.7844,
      address: "Kannur Road, Near Overbridge",
      landmark: "CH Flyover Junction",
      city: "Kozhikode",
      state: "Kerala",
      pincode: "673011",
    },
    popularDishes: ["Kozhikodan Biryani", "Fish Mango Curry", "Appam with Stew"],
    cuisineTypes: ["Malabar", "Kerala Coastal", "South Indian"],
    priceRange: "₹₹",
    trustStatus: "heritage_landmark",
    yearEstablished: 1939,
    isSamplePreview: true,
    sampleHighlight: "Historic culinary landmark operating for over 8 decades.",
  },
  {
    id: "rest-rahmath",
    name: "Rahmath Hotel",
    location: {
      latitude: 11.2481,
      longitude: 75.7828,
      address: "Aravind Ghosh Road, Near Mathrubhumi",
      landmark: "Mananchira Area",
      city: "Kozhikode",
      state: "Kerala",
      pincode: "673001",
    },
    popularDishes: ["Beef Biryani", "Wheat Parotta", "Chicken Sukka"],
    cuisineTypes: ["Traditional Malabar", "Kerala"],
    priceRange: "₹₹",
    trustStatus: "heritage_landmark",
    yearEstablished: 1961,
    isSamplePreview: true,
    sampleHighlight: "Famed among locals for its deeply flavorful beef biryani.",
  },
  {
    id: "rest-zains",
    name: "Zain's Hotel",
    location: {
      latitude: 11.2505,
      longitude: 75.7725,
      address: "Convent Cross Road, Near Beach",
      landmark: "Kozhikode Beach",
      city: "Kozhikode",
      state: "Kerala",
      pincode: "673032",
    },
    popularDishes: ["Erachi Pathiri", "Mutta Mala", "Chatti Pathiri", "Unnakaya"],
    cuisineTypes: ["Authentic Malabar Home-style", "Snacks & Savories"],
    priceRange: "₹",
    trustStatus: "unverified_sample",
    yearEstablished: 1985,
    isSamplePreview: true,
    sampleHighlight: "Pioneering spot celebrating traditional Kozhikode home baking.",
  },
  {
    id: "rest-bombay",
    name: "Bombay Hotel",
    location: {
      latitude: 11.2522,
      longitude: 75.7741,
      address: "Beach Road, Near Silk Street",
      landmark: "French Bungalow Area",
      city: "Kozhikode",
      state: "Kerala",
      pincode: "673032",
    },
    popularDishes: ["Sulaimani Tea", "Nei Pathiri", "Mutton Biryani", "Halwa"],
    cuisineTypes: ["Heritage Malabar Cafe", "Tea & Snacks"],
    priceRange: "₹",
    trustStatus: "heritage_landmark",
    yearEstablished: 1949,
    isSamplePreview: true,
    sampleHighlight: "Atmospheric vintage spot for morning chai and literary discussions.",
  },
];
