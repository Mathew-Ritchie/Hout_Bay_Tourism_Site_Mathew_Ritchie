// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

// --- Our "Database" of Restaurants (in-memory) ---
const establishments = [
  {
    id: "r1",
    name: "Mariner's Wharf",
    tradingHours: "Mon-Sun: 09:00 - 21:00",
    location: { latitude: -34.047, longitude: 18.3475 },
    address: "Hout Bay Harbour, Hout Bay, Cape Town",
    category: "Seafood, Casual Dining",
    type: "restaurants",
    phoneNumber: "+27 21 790 1100",
    website: "https://www.marinerswharf.co.za/",
    rating: 4.5,
    imageUrl:
      "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/309435076_520494470082995_6572981777692265792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FOec8xyGbGAQ7kNvwERU_8f&_nc_oc=AdmNGYm2uifXl-PPfCoDyQORTLSC8wZZc38R4HGYwjXRcE3Knb6ZO8t5WhihXIG1Op0&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=7lm9wztN5rCvyxL-7GzP-A&oh=00_AfTVu-J9Tk-3stcMkJOdHgg4DmLtkIYOPDlXWiI7Nufkfw&oe=68892C5E",
    description: [
      `Mariner's Wharf stands as Africa's first harbourfront emporium, a truly unique destination. 
    Conceived by local visionary Stanley Dorman and opened in 1984, it's a vibrant hub that masterfully blend
    a working fishing harbour with an engaging tourist attraction.`,
      `Visitors are immersed in a maritime ambiance, evident from the fresh fish market built around the hull of 
    an old trawler, to the array of nautical-themed shops. The Wharfside Grill restaurant, renowned for its
    fresh seafood, offers spectacular views of the harbour and Chapman's Peak, with private dining cabins for
    an intimate experience. For a more casual bite, the Wharfette Bistro serves up famous fish and chips right
    by the water's edge. Beyond dining, explore the Pearl Factory, the Shipwreck Shop brimming with maritime
    artifacts, and other curio outlets. Mariner's Wharf is a lively testament to Hout Bay's rich fishing
    heritage, attracting locals and international tourists alike with its authentic charm and delicious offerings.`,
    ],
  },
  {
    id: "r2",
    name: "Dunes Beach Restaurant & Bar",
    tradingHours: "Mon-Sun: 11:00 - 22:00",
    location: { latitude: -34.0485, longitude: 18.346 },
    address: "1 Beach Rd, Hout Bay, Cape Town",
    category: "Casual Dining, Bar, Beachfront",
    type: "restaurants",
    phoneNumber: "+27 21 790 1876",
    website: "http://www.dunesouthbay.co.za",
    rating: 4.2,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/7c/52/e3/dunes-beach-restaurant.jpg?w=900&h=500&s=1",
    description: [
      `Dunes Beach Restaurant, ideally situated directly on Hout Bay Beach, offers an unparalleled coastal dining 
      experience. Boasting breathtaking panoramic views of Chapman's Peak, the Sentinel, and the expansive beach, 
      it's a prime spot for any occasion. The relaxed, family-friendly atmosphere is enhanced by a popular children's
       playground right by the terrace, allowing parents to unwind while kids play.`,
      `Dunes serves a diverse menu throughout the day, from hearty breakfasts to delectable lunches and dinners. 
      Specializing in fresh seafood, their offerings include traditional fish and chips, grilled line fish, calamari,
      and prawns. Beyond seafood, the menu caters to various tastes with succulent burgers, grilled meats, pizzas, fresh
      salads, and vegetarian options. Whether you're seeking a casual meal after a beach stroll, sundowner cocktails
      with a spectacular sunset, or a memorable dinner, Dunes provides a picturesque setting and a comprehensive menu
      to satisfy all.`,
    ],
  },
  {
    id: "r3",
    name: "Massimo's",
    tradingHours: "Tue-Sun: 12:00 - 22:00",
    location: { latitude: -34.039, longitude: 18.361 },
    address: "Oakhurst Farm Park, Main Rd, Hout Bay",
    category: "Italian, Pizza",
    type: "restaurants",
    phoneNumber: "+27 21 790 5648",
    website: "http://www.massimos.co.za",
    rating: 4.8,
    imageUrl:
      "https://www.houtbaytourism.com/images/stories/virtuemart/product/IMG_1196-scaled.jpg",
    Description: "",
  },
  {
    id: "r4",
    name: "Chapman's Peak Hotel Restaurant",
    tradingHours: "Mon-Sun: 12:00 - 21:00",
    location: { latitude: -34.062, longitude: 18.363 },
    address: "Chapman’s Peak Drive, Hout Bay, Cape Town",
    category: "South African, Seafood, Fine Dining",
    type: "restaurants",
    phoneNumber: "+27 21 790 1036",
    website: "http://www.chapmanspeakhotel.co.za",
    rating: 4.6,
    imageUrl: "https://www.sa-venues.com/visit/chapmanspeakhotel/10g.jpg",
    Description: "",
  },
  {
    id: "r5",
    name: "Dario's Cafe",
    tradingHours: "Mon-Fri: 06:30 - 17:00, Sat-Sun: 08:00 - 16:00",
    location: { latitude: -34.038, longitude: 18.36 },
    address: "Shop 1, Mainstream Centre, Hout Bay",
    category: "Cafe, Coffee, Light Meals, Italian",
    type: "restaurants",
    phoneNumber: "+27 21 791 0021",
    website: "https://www.darioscafe.com/",
    rating: 4.1,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/9b/ac/a-fresh-start-a-new-day.jpg?w=900&h=500&s=1",
    Description: "",
  },
  {
    id: "r6",
    name: "Fish on the Rocks",
    tradingHours: "Mon-Sun: 9:00 - 17:30",
    location: { latitude: -34.048, longitude: 18.348 },
    address: "2 Harbour Rd, Hout Bay, Cape Town",
    category: "Fish & Chips, Takeaway",
    type: "restaurants",
    phoneNumber: "+27 21 790 0001",
    website: "https://fishontherocks.com/",
    rating: 4.3,
    imageUrl:
      "https://fireflythetravelguy.travel.blog/wp-content/uploads/2012/04/ddd78-2012_01040306.jpg",
    Description: "",
  },
  {
    id: "r7",
    name: "The Beach Bar",
    tradingHours: "Mon-Sun: 07:00 - 21:30",
    location: { latitude: -34.0478, longitude: 18.347 },
    address: "Scott Estate, Cape Town, 7806",
    category: "Seafood, Pub, Casual Dining",
    type: "restaurants",
    phoneNumber: "+27 21 180 2556",
    website: "https://www.thebeachbarhoutbay.co.za/",
    rating: 4.3,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq-lLk5wV_CSz5nTCcx22v73n-mMYJ1KuV7Ps9SPQEiqurSqn7nTnnYn5XY2e91rC66yGFUWPEwhFbSspG-qvYlEfyQ040CVFkansmu_eQftosuQAyHNB0gr-WJTGMg3ZB88k0f=s680-w680-h510-rw",
    Description: "",
  },
  {
    id: "r8",
    name: "The Lookout",
    tradingHours: "Mon-Sun: 09:00 - 21:30",
    location: { latitude: -34.0475, longitude: 18.3482 },
    address: "Hout Bay Harbour, Hout Bay, Cape Town",
    category: "Seafood, Views, Casual",
    type: "restaurants",
    phoneNumber: "+27 21 790 0900",
    website: "https://www.lookouthoutbay.co.za/",
    rating: 4.2,
    imageUrl:
      "https://www.lookouthoutbay.co.za/wp-content/uploads/2024/01/Lookout-Deck-Drone-copy-1.jpg",
    Description: "",
  },
  {
    id: "r9",
    name: "The Pelican",
    tradingHours: "Tue-Sat: 08:00 - 16:30",
    location: { latitude: -34.0395, longitude: 18.362 },
    address: "37 Victoria Ave, Hout Bay, Cape Town, 7806",
    category: "Breakfast, coffee, light meals",
    type: "restaurants",
    phoneNumber: "+27 60 756 5183",
    website: "https://www.thepelican.co.za/",
    rating: 4.4,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipM5vUyjL0KXM_RNnXZRBM_qa9We3gyjSd89bM7R=s680-w680-h510-rw",
    Description: "",
  },
  {
    id: "r10",
    name: "Delish Restaurant",
    tradingHours: "Tue-Sun: 08:00 - 17:30",
    location: { latitude: -34.037, longitude: 18.365 },
    address: "8 Beach Cres, Hout Bay, Cape Town, 7806",
    category: "Breakfact, Coffee, Light Meals, Lunch",
    type: "restaurants",
    phoneNumber: "+27 21 790 5324",
    website: "https://www.facebook.com/delishbistroHB/",
    rating: 4.6,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMBpyhhoLDoOD2hvsBHUPjn91hO9uIOALEuSxxE=s680-w680-h510-rw",
    Description: "",
  },
  {
    id: "r11",
    name: "Veldt",
    tradingHours: "Mon-Sat: 12:00 - 21:30 (Closed Tuesdays)",
    location: { latitude: -34.0385, longitude: 18.3615 },
    address: "35 Main Rd, Scott Estate, Cape Town, 7806",
    category: "Braai Eatery, Smoke House",
    type: "restaurants",
    phoneNumber: "+27 61 911 5690",
    website: "https://veldtdbe.com/",
    rating: 4.5,
    imageUrl: "https://www.dining-out.co.za/ftp/gallery/11613--48012.jpg",
    Description: "",
  },
  {
    id: "r12",
    name: "Pho Hue Vietnamese",
    tradingHours: "Mon-Sun: 11:00 - 21:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "38 Victoria Ave, Hout Bay, Cape Town, 7806",
    category: "Vietnamese, Takeout",
    type: "restaurants",
    phoneNumber: "+27 84 363 6888",
    website: null,
    rating: 4.1,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipP-Oo1qIcmIirfxP_2CR5vf--6sqgdaRg1gyAYY=s680-w680-h510-rw",
    Description: "",
  },
  {
    id: "r13",
    name: "Casareccio Cucina Italiana",
    tradingHours: "Mon-Sun: 07:30 - 21:30",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Shop 2, Bay Beach Centre, 14 Main Rd, Hout Bay, Cape Town, 7806",
    category: "Italian, Breakfast",
    type: "restaurants",
    phoneNumber: "+27 21 790 0200",
    website: "https://casarecciohoutbay.co.za/home",
    rating: 4.5,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noHZXYrh4_L9u-2tlKVuAFsFSuq0jaRO78gHUyLwAicorNnpebuTTOrMwUVSCW_EyGIx3c4UXpU6xrF_nsWcp1fYHHkB37oPkqlveg2XdnsKe8iHNwla8BwJydru2Qda2v3a-WOBQ=s680-w680-h510-rw",
    Description: "",
  },
  {
    id: "r14",
    name: "The Butcher's Mermaid",
    tradingHours: "Mon-Sun: 09:00 - 21:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Red Sails Building, 26 Main Rd, Hout Bay, Cape Town, 7806",
    category: "Pub, Burgers, Pizza, Craft Beer",
    type: "restaurants",
    phoneNumber: "+27 21 300 0282",
    website: null,
    rating: 4.4,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPJufto3m-BXoi5bJN8PQiyWHxnHEFeDdXFX8vZ=s680-w680-h510-rw",
    Description: "",
  },
  {
    id: "p1",
    name: "Clicks Pharmacy Hout Bay",
    tradingHours: "Mon-Fri: 08:30 - 18:00, Sat: 08:30 - 14:00, Sun: Closed",
    location: { latitude: -34.04, longitude: 18.362 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: "Pharmacy, Health, Retail",
    type: "Health care", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5077",
    email: null,
    website: "https://www.clicks.co.za",
    rating: 2.7,
    imageUrl: "https://pargo.co.za/wp-content/uploads/2022/09/Top-PUP-blog-image-format.png",
    Description: "",
  },
  {
    id: "p2",
    name: "Wheeler's Pharmacy",
    tradingHours: "Mon-Fri: 08:30 - 19:00, Sat - Sun(holidays): 09:00 - 18:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "The Passageway, Main Rd, Hout Bay, Cape Town, 7806",
    category: "Pharmacy, Health, Retail",
    type: "Health care", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5678",
    email: "rxwheelers@mweb.co.za",
    website: "https://www.wheelerspharmacy.com/",
    rating: 3.8,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ea6b27006ea3b72b5d608f9/1587986162644-0C3KPY51FTN2FY9224BC/WheelersBG1.png",
    Description: "",
  },
  {
    id: "p3",
    name: "Sentinal Dispensary",
    tradingHours: "Mon-Fri: 08:30 - 18:00, Sat: 08:30 - 13:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "51 Victoria Rd, Hout Bay, Cape Town, 7806",
    category: "Pharmacy, Health, Retail",
    type: "Health care", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 3400",
    email: "rxsentinel@mweb.co.za",
    website: "https://www.wheelerspharmacy.com/general-6",
    rating: 4.1,
    imageUrl:
      "https://www.club790businessdirectory.co.za/wp-content/uploads/2020/07/Sentinal-Pharmacy-image-2.jpg",
    Description: "",
  },
  {
    id: "a1",
    name: "World of Birds Wildlife Sanctuary & Monkey Park",
    tradingHours: "Mon-Sun: 09:00 - 17:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "World of Birds Wildlife Sanctuary, Valley Road, 7806, Hout Bay",
    category: "Zoo, Wild Life",
    type: "attractions",
    phoneNumber: "+27 21 790 2730",
    email: "info@worldofbirds.co.za",
    website: "https://worldofbirds.co.za/",
    rating: 4.2,
    imageUrl:
      "https://i.ytimg.com/vi/3M8TqVrBeoA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_FG29yO0OSkkCcSEMEavCYOldIA",
    Description: "",
  },
  {
    id: "a2",
    name: "Bay Harbour Market",
    tradingHours: "Fri: 17:00 - 21:00, Sat-Sun: 09:30 - 16:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "31 Harbour Rd, Hout Bay, Cape Town, 7872",
    category: "Shops, Food, Music, Craft Beer",
    type: "attractions",
    phoneNumber: "+27 84 370 5715",
    email: "info@bayharbour.co.za",
    website: "https://www.bayharbour.co.za/",
    rating: 4.4,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrqGrBmB0pXcQva7JFhs2319uvVjE4jhg6lFqcBvTrbrdtb6zCe5mhAaVRSAGAxEQxl6JQN_YP0Oc8zJh71XVpfRSYASrZARx9ESXG2Agy-HCO3yZrnwk-c1UAqBNnfdRe96HbJ=s1360-w1360-h1020-rw",
    Description: "",
  },
  {
    id: "a3",
    name: "Hout Bay Beach",
    tradingHours: null,
    location: null,
    address: null,
    category: "Beach, swimming, walking",
    type: "attractions",
    phoneNumber: null,
    email: null,
    website: null,
    rating: null,
    imageUrl: "https://www.capetown.travel/wp-content/uploads/Beach-in-hout-bay.jpg",
    Description: "",
  },
  {
    id: "a4",
    name: "Sandy Bay Beach",
    tradingHours: null,
    location: null,
    address: null,
    category: "Beach, swimming, walking",
    type: "attractions",
    phoneNumber: null,
    email: null,
    website: null,
    rating: null,
    imageUrl:
      "https://www.booknow.co.za/storage/app/uploads/public/67f/ce4/518/67fce45185b07655963955.jpg",
    Description: "",
  },
  {
    id: "a5",
    name: "Llandudno Beach",
    tradingHours: null,
    location: null,
    address: null,
    category: "Beach, swimming, walking",
    type: "attractions",
    phoneNumber: null,
    email: null,
    website: null,
    rating: null,
    imageUrl:
      "https://secretcapetown.co.za/wp-content/uploads/2022/01/Llandudno-Beach-Sunny-Day.jpg",
    Description: "",
  },
  {
    id: "a6",
    name: "Chapman's peak drive",
    tradingHours: null,
    location: null,
    address: null,
    category: "Beach, swimming, walking",
    type: "attractions",
    phoneNumber: "+27 21 791 8220",
    email: "info@chapmanspeakdrive.co.za",
    website: "https://www.chapmanspeakdrive.co.za/",
    rating: null,
    imageUrl: "https://bicyclesouth.co.za/wp-content/uploads/2018/05/cycle-tour-364-3.jpg",
    Description: "",
  },
  {
    id: "a7",
    name: "Hout Bay Harbour",
    tradingHours: null,
    location: null,
    address: null,
    category: "walking, Markets, scenic",
    type: "attractions",
    phoneNumber: "+27 21 791 8220",
    email: "info@chapmanspeakdrive.co.za",
    website: "https://www.chapmanspeakdrive.co.za/",
    rating: null,
    imageUrl: "https://daytrippers.co.za/wp-content/uploads/2018/10/Hout-Bay-Harbour.png",
    Description: "",
  },
  {
    id: "a8",
    name: "Animal Ocean",
    tradingHours: null,
    location: null,
    address: "41 Victoria Avenue, Hout Bay, Cape Town",
    category: "Ocean safari, Kelp snokling, Kayaking",
    type: "attractions",
    phoneNumber: "+27 72 296 9132",
    email: "info@animalocean.co.za",
    website: "https://www.animalocean.co.za/",
    rating: null,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpr0CKggUYUrRiEjTMH-Xb-NyuwGcmgZwvw&s",
    Description: "",
  },
  {
    id: "a9",
    name: "Drumbeat Charters",
    tradingHours: null,
    location: null,
    address: "41 Victoria Avenue, Hout Bay, Cape Town",
    category: "Sea cruise",
    type: "attractions",
    phoneNumber: "+27 82 658 7055",
    email: "hello@drumbeatcharters.co.za",
    website: "https://www.animalocean.co.za/",
    rating: 4.4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpr0CKggUYUrRiEjTMH-Xb-NyuwGcmgZwvw&s",
    Description: "",
  },
  {
    id: "a10",
    name: "Karbonkelberg Tourism",
    tradingHours: "Mon-Fri 09:00-17:00, Sat-Sun 09:00-12:00",
    location: null,
    address: "Block C3, Salamander Rd, Hout Bay, Cape Town,",
    category: "Hikes, tours",
    type: "attractions",
    phoneNumber: "+27 84 099 6601",
    email: null,
    website: "https://karbonkelbergtourism.co.za/",
    rating: 5,
    imageUrl:
      "https://www.chapmanspeakdrive.co.za/media/k2/items/cache/77e3798bb9782084333898c5f75d9aab_XL.jpg",
    Description: "",
  },
];

export const handlers = [
  // 1. GET all establishments
  // Now includes a filter for 'category' AND 'type'
  http.get("http://localhost:5173/api/establishments", ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const type = url.searchParams.get("type"); // <-- NEW: Get 'type' query parameter

    let filteredEstablishments = establishments;

    // Apply category filter if present
    if (category) {
      filteredEstablishments = filteredEstablishments.filter((e) =>
        e.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Apply type filter if present (can be combined with category filter)
    if (type) {
      filteredEstablishments = filteredEstablishments.filter(
        (e) => e.type.toLowerCase() === type.toLowerCase() // Exact match for type
      );
    }

    console.log(
      `MSW: Handling GET /api/establishments` +
        `${category ? `?category=${category}` : ""}` +
        `${type ? `${category ? "&" : "?"}type=${type}` : ""}`
    ); // Improved log for clarity

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(HttpResponse.json(filteredEstablishments, { status: 200 }));
      }, 500); // 500ms delay
    });
  }),

  // 2. GET a single establishment by ID
  http.get("http://localhost:5173/api/establishments/:id", ({ params }) => {
    const { id } = params;
    const establishment = establishments.find((e) => e.id === id);

    if (establishment) {
      console.log(`MSW: Handling GET /api/establishments/${id} - Found`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(HttpResponse.json(establishment, { status: 200 }));
        }, 300); // 300ms delay
      });
    } else {
      console.log(`MSW: Handling GET /api/establishments/${id} - Not Found`);
      return HttpResponse.json({ message: "Establishment not found" }, { status: 404 });
    }
  }),
];
