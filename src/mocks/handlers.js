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
    type: "restaurant",
    phoneNumber: "+27 21 790 1100",
    website: "http://www.marinerswharf.com",
    rating: 4.5,
    imageUrl:
      "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/309435076_520494470082995_6572981777692265792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FOec8xyGbGAQ7kNvwERU_8f&_nc_oc=AdmNGYm2uifXl-PPfCoDyQORTLSC8wZZc38R4HGYwjXRcE3Knb6ZO8t5WhihXIG1Op0&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=7lm9wztN5rCvyxL-7GzP-A&oh=00_AfTVu-J9Tk-3stcMkJOdHgg4DmLtkIYOPDlXWiI7Nufkfw&oe=68892C5E",
  },
  {
    id: "r2",
    name: "Dunes Beach Restaurant & Bar",
    tradingHours: "Mon-Sun: 08:00 - 22:00",
    location: { latitude: -34.0485, longitude: 18.346 },
    address: "1 Beach Rd, Hout Bay, Cape Town",
    category: "Casual Dining, Bar, Beachfront",
    type: "restaurant",
    phoneNumber: "+27 21 790 1876",
    website: "http://www.dunesouthbay.co.za",
    rating: 4.2,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/7c/52/e3/dunes-beach-restaurant.jpg?w=900&h=500&s=1",
  },
  {
    id: "r3",
    name: "Massimo's",
    tradingHours: "Tue-Sun: 12:00 - 22:00 (Closed Mon)",
    location: { latitude: -34.039, longitude: 18.361 },
    address: "Oakhurst Farm Park, Main Rd, Hout Bay",
    category: "Italian, Pizza",
    type: "restaurant",
    phoneNumber: "+27 21 790 5679",
    website: "http://www.massimos.co.za",
    rating: 4.8,
    imageUrl:
      "https://www.houtbaytourism.com/images/stories/virtuemart/product/IMG_1196-scaled.jpg",
  },
  {
    id: "r4",
    name: "Chapman's Peak Hotel Restaurant",
    tradingHours: "Mon-Sun: 07:00 - 22:00",
    location: { latitude: -34.062, longitude: 18.363 },
    address: "Chapman’s Peak Drive, Hout Bay, Cape Town",
    category: "South African, Seafood, Fine Dining",
    type: "restaurant",
    phoneNumber: "+27 21 790 1036",
    website: "http://www.chapmanspeakhotel.co.za",
    rating: 4.6,
    imageUrl: "https://www.sa-venues.com/visit/chapmanspeakhotel/10g.jpg",
  },
  {
    id: "r5",
    name: "Dario's Cafe",
    tradingHours: "Mon-Fri: 07:00 - 17:00, Sat-Sun: 08:00 - 16:00",
    location: { latitude: -34.038, longitude: 18.36 },
    address: "Shop 1, Mainstream Centre, Hout Bay",
    category: "Cafe, Coffee, Light Meals, Italian",
    type: "restaurant",
    phoneNumber: "+27 21 790 8900",
    website: null, // No website for this mock
    rating: 4.1,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/9b/ac/a-fresh-start-a-new-day.jpg?w=900&h=500&s=1",
  },
  {
    id: "r6",
    name: "Fish on the Rocks",
    tradingHours: "Mon-Sun: 11:00 - 20:00",
    location: { latitude: -34.048, longitude: 18.348 },
    address: "2 Harbour Rd, Hout Bay, Cape Town",
    category: "Fish & Chips, Takeaway",
    type: "restaurant",
    phoneNumber: "+27 21 790 0001",
    website: null,
    rating: 3.9,
    imageUrl:
      "https://fireflythetravelguy.travel.blog/wp-content/uploads/2012/04/ddd78-2012_01040306.jpg",
  },
  {
    id: "r7",
    name: "The Beach Bar",
    tradingHours: "Mon-Sun: 10:00 - 22:00",
    location: { latitude: -34.0478, longitude: 18.347 },
    address: "Hout Bay Harbour, Hout Bay, Cape Town",
    category: "Seafood, Pub, Casual Dining",
    type: "restaurant",
    phoneNumber: "+27 21 790 6223",
    website: "https://www.quay4.co.za",
    rating: 4.0,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq-lLk5wV_CSz5nTCcx22v73n-mMYJ1KuV7Ps9SPQEiqurSqn7nTnnYn5XY2e91rC66yGFUWPEwhFbSspG-qvYlEfyQ040CVFkansmu_eQftosuQAyHNB0gr-WJTGMg3ZB88k0f=s680-w680-h510-rw",
  },
  {
    id: "r8",
    name: "The Lookout Deck",
    tradingHours: "Mon-Sun: 09:00 - 21:30",
    location: { latitude: -34.0475, longitude: 18.3482 },
    address: "Hout Bay Harbour, Hout Bay, Cape Town",
    category: "Seafood, Views, Casual",
    type: "restaurant",
    phoneNumber: "+27 21 790 0900",
    website: "http://www.lookoutdeck.co.za",
    rating: 4.3,
    imageUrl:
      "https://www.lookouthoutbay.co.za/wp-content/uploads/2024/01/Lookout-Deck-Drone-copy-1.jpg",
  },
  {
    id: "r9",
    name: "The Pelican",
    tradingHours: "Tue-Sat: 18:00 - 22:00 (Dinner Only)",
    location: { latitude: -34.0395, longitude: 18.362 },
    address: "10 The Promenade, Hout Bay, Cape Town",
    category: "Asian Fusion, Contemporary",
    type: "restaurant",
    phoneNumber: "+27 79 067 3624",
    website: "http://www.cheynes.co.za",
    rating: 4.7,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipM5vUyjL0KXM_RNnXZRBM_qa9We3gyjSd89bM7R=s680-w680-h510-rw",
  },
  {
    id: "r10",
    name: "Delish Restaurant",
    tradingHours: "Tue-Sun: 18:00 - 22:30 (Dinner Only)",
    location: { latitude: -34.037, longitude: 18.365 },
    address: "140 Main Rd, Hout Bay, Cape Town",
    category: "Thai, Asian, Fine Dining",
    type: "restaurant",
    phoneNumber: "+27 21 790 8000",
    website: "http://www.kitima.co.za",
    rating: 4.4,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMBpyhhoLDoOD2hvsBHUPjn91hO9uIOALEuSxxE=s680-w680-h510-rw",
  },
  {
    id: "r11",
    name: "Veldt",
    tradingHours: "Mon-Sat: 07:30 - 16:00",
    location: { latitude: -34.0385, longitude: 18.3615 },
    address: "Main Rd, Hout Bay, Cape Town",
    category: "Cafe, Bakery, Light Meals",
    type: "restaurant",
    phoneNumber: "+27 21 790 5313",
    website: null,
    rating: 4.0,
    imageUrl: "https://www.dining-out.co.za/ftp/gallery/11613--48012.jpg",
  },
  {
    id: "r12",
    name: "Pho Hue Vietnamese",
    tradingHours: "Mon-Sun: 11:00 - 00:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: "Pub, Burgers, Pizza, Craft Beer",
    type: "restaurant",
    phoneNumber: "+27 21 790 0002",
    website: "http://www.pakalolo.co.za",
    rating: 4.1,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipP-Oo1qIcmIirfxP_2CR5vf--6sqgdaRg1gyAYY=s680-w680-h510-rw",
  },
  {
    id: "r13",
    name: "Casareccio Cucina Italiana",
    tradingHours: "Mon-Sun: 11:00 - 00:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: "Pub, Burgers, Pizza, Craft Beer",
    type: "restaurant",
    phoneNumber: "+27 21 790 0002",
    website: "http://www.pakalolo.co.za",
    rating: 4.1,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noHZXYrh4_L9u-2tlKVuAFsFSuq0jaRO78gHUyLwAicorNnpebuTTOrMwUVSCW_EyGIx3c4UXpU6xrF_nsWcp1fYHHkB37oPkqlveg2XdnsKe8iHNwla8BwJydru2Qda2v3a-WOBQ=s680-w680-h510-rw",
  },
  {
    id: "r14",
    name: "The Butcher's Mermaid",
    tradingHours: "Mon-Sun: 11:00 - 00:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: "Pub, Burgers, Pizza, Craft Beer",
    type: "restaurant",
    phoneNumber: "+27 21 790 0002",
    website: "http://www.pakalolo.co.za",
    rating: 4.1,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPJufto3m-BXoi5bJN8PQiyWHxnHEFeDdXFX8vZ=s680-w680-h510-rw",
  },
  {
    id: "p1",
    name: "Clicks Pharmacy Hout Bay",
    tradingHours: "Mon-Fri: 08:30 - 18:00, Sat: 08:30 - 14:00, Sun: Closed",
    location: { latitude: -34.04, longitude: 18.362 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: "Pharmacy, Health, Retail",
    type: "pharmacy", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 1234",
    website: "https://www.clicks.co.za",
    rating: 4.0,
    imageUrl: "https://pargo.co.za/wp-content/uploads/2022/09/Top-PUP-blog-image-format.png",
  },
  {
    id: "p2",
    name: "Wheeler's Pharmacy",
    tradingHours: "Mon-Fri: 09:00 - 19:00, Sat: 09:00 - 17:00, Sun: 09:00 - 14:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "Shoprite Centre, Main Rd, Hout Bay",
    category: "Pharmacy, Health, Retail",
    type: "pharmacy", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5678",
    website: "https://www.dischem.co.za",
    rating: 4.2,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ea6b27006ea3b72b5d608f9/1587986162644-0C3KPY51FTN2FY9224BC/WheelersBG1.png",
  },
  {
    id: "p3",
    name: "Sentinal Dispensary",
    tradingHours: "Mon-Fri: 09:00 - 19:00, Sat: 09:00 - 17:00, Sun: 09:00 - 14:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "Shoprite Centre, Main Rd, Hout Bay",
    category: "Pharmacy, Health, Retail",
    type: "pharmacy", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5678",
    website: "https://www.dischem.co.za",
    rating: 4.2,
    imageUrl:
      "https://www.club790businessdirectory.co.za/wp-content/uploads/2020/07/Sentinal-Pharmacy-image-2.jpg",
  },
  {
    id: "a1",
    name: "World of Birds Wildlife Sanctuary & Monkey Park",
    tradingHours: "Mon-Fri: 09:00 - 19:00, Sat: 09:00 - 17:00, Sun: 09:00 - 14:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "Shoprite Centre, Main Rd, Hout Bay",
    category: "Zoo, Wild Life",
    type: "activity", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5678",
    website: "https://www.dischem.co.za",
    rating: 4.2,
    imageUrl:
      "https://i.ytimg.com/vi/3M8TqVrBeoA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_FG29yO0OSkkCcSEMEavCYOldIA",
  },
  {
    id: "a2",
    name: "Bay Harbour Market",
    tradingHours: "Mon-Fri: 09:00 - 19:00, Sat: 09:00 - 17:00, Sun: 09:00 - 14:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "Shoprite Centre, Main Rd, Hout Bay",
    category: "Zoo, Wild Life",
    type: "activity", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5678",
    website: "https://www.dischem.co.za",
    rating: 4.2,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrqGrBmB0pXcQva7JFhs2319uvVjE4jhg6lFqcBvTrbrdtb6zCe5mhAaVRSAGAxEQxl6JQN_YP0Oc8zJh71XVpfRSYASrZARx9ESXG2Agy-HCO3yZrnwk-c1UAqBNnfdRe96HbJ=s1360-w1360-h1020-rw",
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
