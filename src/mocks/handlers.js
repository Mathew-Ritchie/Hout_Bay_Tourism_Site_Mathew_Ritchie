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
    category: ["Seafood", "Take-away"],
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
    category: ["Seafood", "Italian", "Kid's area", "Diverse", "Burgers"],
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
    category: ["Italian"],
    type: "restaurants",
    phoneNumber: "+27 21 790 5648",
    website: "http://www.massimos.co.za",
    rating: 4.8,
    imageUrl:
      "https://www.houtbaytourism.com/images/stories/virtuemart/product/IMG_1196-scaled.jpg",
    description: [
      `Massimo's, nestled in Hout Bay's Oakhurst Farm Park, is a celebrated Italian restaurant renowned for its
       authentic wood-fired pizzas and homemade pasta. Owned by Massimo and Tracy Orione, it's a true slice of 
       Italy in the Cape Peninsula, boasting a warm, family-friendly atmosphere with a rustic eclectic interior
      adorned with historical family photos.`,
      `Their menu is extensive, featuring delicious antipasti, a variety of pizzas with thin, crispy Roman-style
      crusts made from GMO-free stone-ground flour, and a wide array of pasta dishes. Massimo's is also famously
      accommodating, offering a dedicated vegan menu with ample choices, from pizzas with vegan cheese to 
      tapas and even vegan ice cream. They are also incredibly dog-friendly, providing a special "doggie menu" 
      for furry companions.`,
      `Beyond the food, Massimo's is deeply rooted in community. They run a "Pay It Forward" initiative, allowing
      customers to buy virtual pizza slices for those in need, and actively support various local charities with
      specific menu items donating proceeds. Voted "Best Pizzeria in Africa" multiple times, Massimo's offers
      more than just a meal; it's an experience of Italian hospitality and community spirit.`,
    ],
  },
  {
    id: "r4",
    name: "Chapman's Peak Hotel Restaurant",
    tradingHours: "Mon-Sun: 12:00 - 21:00",
    location: { latitude: -34.062, longitude: 18.363 },
    address: "Chapman’s Peak Drive, Hout Bay, Cape Town",
    category: ["Seafood", "Bar", "Diverse", "Burgers"],
    type: "restaurants",
    phoneNumber: "+27 21 790 1036",
    website: "http://www.chapmanspeakhotel.co.za",
    rating: 4.6,
    imageUrl: "https://www.sa-venues.com/visit/chapmanspeakhotel/10g.jpg",
    description: [
      `The Chapman's Peak Hotel Restaurant, a cherished Hout Bay institution for over 25 years, stands
      majestically at the foot of the iconic Chapman's Peak Drive. It's often hailed as the "grand old lady"
      of outdoor seafood restaurants in Cape Town, renowned globally for its legendary calamari and fresh
      seafood served "in the pan" – a concept they originated.`,
      `The restaurant offers a captivating ambiance, with a spacious, sun-drenched terrace providing
      spectacular views of Hout Bay beach, the Atlantic Ocean, and harbour activities. This setting
      is perfect for leisurely lunches and lingering sunsets, while colder days invite guests indoors
      to enjoy the welcoming warmth of fireplaces and a rustic, wood-finished interior filled with
      historical memorabilia.`,
      `Beyond the famous calamari, the menu features a diverse selection of fresh seafood, including prawns,
      line fish, and even West Coast lobster (crayfish). For non-seafood lovers, succulent grilled steaks,
      Portuguese-inspired dishes like "Portuguese Steak," and vibrant salads are also available. A carefully
      curated wine list complements the culinary offerings. The restaurant seamlessly blends historical charm
      with a vibrant atmosphere, making it a beloved spot for both locals and tourists seeking delicious
      food and breathtaking views.`,
    ],
  },
  {
    id: "r5",
    name: "Dario's Cafe",
    tradingHours: "Mon-Fri: 06:30 - 17:00, Sat-Sun: 08:00 - 16:00",
    location: { latitude: -34.038, longitude: 18.36 },
    address: "Shop 1, Mainstream Centre, Hout Bay",
    category: ["Coffee", "Italian", "Breakfast", "Diverse", "Kid's area"],
    type: "restaurants",
    phoneNumber: "+27 21 791 0021",
    website: "https://www.darioscafe.com/",
    rating: 4.1,
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/9b/ac/a-fresh-start-a-new-day.jpg?w=900&h=500&s=1",
    description: [
      `Dario's Café is a beloved Italian eatery owned by an authentic Italian couple, offering a true taste
        of Italy with a warm, family-like embrace. This popular spot masterfully combines a vibrant coffee
        bar, a welcoming restaurant, and a wholesome family feast vibe.`,
      `The extensive menu boasts delicious Roman-style pizzas with thin, crispy crusts, gourmet burgers,
        a variety of pasta dishes made from scratch with authentic family recipes, piadine, fresh salads,
        and sandwiches. For those with a sweet tooth, there's an enticing selection of in-house baked cakes
        and authentic Italian gelato. Dario's is fully licensed, serving ice-cold beers, wine, and 
        grappa to complement your meal.`,
      `Beyond the delectable food, Dario's fosters a community spirit. It's known for its friendly and
        efficient service, often with Dario himself greeting customers. The cafe also offers fast Wi-Fi 
        and a dedicated kids' play area, making it ideal for families. Voted by locals as having the "Best
        Coffee in Hout Bay," Dario's is a go-to for breakfast, lunch, or an early supper, providing a versatile
        and inviting space for all occasions, from quick bites to small functions.`,
    ],
  },
  {
    id: "r6",
    name: "Fish on the Rocks",
    tradingHours: "Mon-Sun: 9:00 - 17:30",
    location: { latitude: -34.048, longitude: 18.348 },
    address: "2 Harbour Rd, Hout Bay, Cape Town",
    category: ["Seafood", "Takeaway"],
    type: "restaurants",
    phoneNumber: "+27 21 790 0001",
    website: "https://fishontherocks.com/",
    rating: 4.3,
    imageUrl:
      "https://fireflythetravelguy.travel.blog/wp-content/uploads/2012/04/ddd78-2012_01040306.jpg",
    description: [
      `Fish on the Rocks, located at the far end of Harbour Road in Hout Bay, is an iconic, bustling seafood
      institution renowned for its fresh fish and chips and unparalleled views. Situated right on the edge
      of the Atlantic Ocean, diners can enjoy their meal with a stunning backdrop of Chapman's Peak and
      passing fishing boats, often accompanied by hovering seagulls and lazing seals.`,
      `This casual, time-worn establishment has been serving a loyal following for decades, offering a truly
      authentic Cape Town fish experience. The menu features a variety of seafood, including hake, snoek,
      calamari, and prawns, often served in generous portions in paper and cardboard boxes with plastic 
      cutlery – embracing a no-frills, delicious approach. Reviewers consistently praise the freshness of
      the fish, the light and crispy batter, and the perfectly cooked chips.`,
      `While the atmosphere is laid-back and unpretentious, it's always lively, attracting a mix of locals,
      fishermen, bikers, and tourists. It's a place where you might share a wooden table with strangers, all
      enjoying the vibrant harbour scene. Beyond the famous fish and chips, they also offer grilled options
      and family platters. Fish on the Rocks is more than just a meal; it's a quintessential Hout Bay experience,
      embodying the spirit of coastal living and good, honest seafood.`,
    ],
  },
  {
    id: "r7",
    name: "The Beach Bar",
    tradingHours: "Mon-Sun: 07:00 - 21:30",
    location: { latitude: -34.0478, longitude: 18.347 },
    address: "Scott Estate, Cape Town, 7806",
    category: ["Seafood", "Pub", "Breakfast", "Diverse", "Burgers"],
    type: "restaurants",
    phoneNumber: "+27 21 180 2556",
    website: "https://www.thebeachbarhoutbay.co.za/",
    rating: 4.3,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq-lLk5wV_CSz5nTCcx22v73n-mMYJ1KuV7Ps9SPQEiqurSqn7nTnnYn5XY2e91rC66yGFUWPEwhFbSspG-qvYlEfyQ040CVFkansmu_eQftosuQAyHNB0gr-WJTGMg3ZB88k0f=s680-w680-h510-rw",
    description: [
      `The Beach Bar in Hout Bay offers an elevated beachfront dining experience right on the sand,
      boasting breathtaking views of the Atlantic Ocean and the majestic Chapman's Peak. It's a
      vibrant spot where "ocean views meet hand-crafted cocktails that taste like summer in a
      glass." Open for breakfast, lunch, and dinner, the menu, crafted by Chef Jayson Wicomb,
      balances indulgence with unpretentious, fresh flavors.`,
      `From famous sunrise breakfasts and indulgent tapas like chilli poppers and tempura prawns,
      to hearty mains like lamb shoulder and their renowned "Beach Bar's Famous Hake," there's
      something for every palate. Sushi lovers will find a diverse selection, and the bar's
      cocktail creations are a highlight. With a relaxed, vibey atmosphere, often enhanced
      by live music or DJs, The Beach Bar is perfect for any occasion – whether a lazy brunch,
      sundowner drinks, or a memorable dinner kissed by the sea breeze. It truly encapsulates
      the essence of coastal dining in Hout Bay.`,
    ],
  },
  {
    id: "r8",
    name: "The Lookout",
    tradingHours: "Mon-Sun: 09:00 - 21:30",
    location: { latitude: -34.0475, longitude: 18.3482 },
    address: "Hout Bay Harbour, Hout Bay, Cape Town",
    category: ["Seafood", "Italian", "Diverse", "Sushi", "Burgers"],
    type: "restaurants",
    phoneNumber: "+27 21 790 0900",
    website: "https://www.lookouthoutbay.co.za/",
    rating: 4.2,
    imageUrl:
      "https://www.lookouthoutbay.co.za/wp-content/uploads/2024/01/Lookout-Deck-Drone-copy-1.jpg",
    description: [
      `The Lookout Hout Bay, perched dramatically on the water's edge in Hout Bay Harbour,
      boasts arguably one of the most spectacular views in the Western Cape, encompassing
      both breathtaking mountains and the vibrant ocean. This relaxed yet upmarket 
      restaurant is a true Hout Bay institution, renowned for its fresh seafood and 
      lively atmosphere.`,
      `A highlight is their selection of premier seafood, much of it brought in daily 
      by local fishermen. Their extensive menu features freshly shucked oysters, grilled 
      line fish, succulent prawns, mussels, and legendary tender calamari. Beyond seafood, 
      they offer A-grade meats, wood-fired pizzas, appetizing salads, and a new sushi bar.`,
      `The Lookout's setting is truly a draw, with a spacious wooden deck suspended over 
      the water, allowing guests to watch the bustling harbour activity, seals playing, 
      and boats coming and going. Inside, the design creates a comfortable, holiday-house 
      feel. It's an ideal spot for enjoying sensational sundowners and cocktails, often 
      accompanied by live music on selected nights. Able to seat up to 280 guests, The 
      Lookout caters to all occasions, from casual lunches to private functions, making 
      it a consistently popular choice for both locals and tourists seeking delicious 
      food with an unforgettable view.`,
    ],
  },
  {
    id: "r9",
    name: "The Pelican",
    tradingHours: "Tue-Sat: 08:00 - 16:30",
    location: { latitude: -34.0395, longitude: 18.362 },
    address: "37 Victoria Ave, Hout Bay, Cape Town, 7806",
    category: ["Breakfast", "coffee", "Light meals"],
    type: "restaurants",
    phoneNumber: "+27 60 756 5183",
    website: "https://www.thepelican.co.za/",
    rating: 4.4,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipM5vUyjL0KXM_RNnXZRBM_qa9We3gyjSd89bM7R=s680-w680-h510-rw",
    description: [
      `The Pelican in Hout Bay is a relaxed and friendly restaurant and creperie, with a strong 
      emphasis on excellent coffee and exceptional food. Located conveniently on Victoria Avenue, 
      it offers a super chilled vibe, making it a popular spot for locals and visitors alike.`,
      `Their menu is diverse, featuring an all-day breakfast, a wide array of sweet and savoury 
      crepes (made with signature nutty wheat or vanilla batter), and a range of lunch options. 
      From smashed avo on sourdough to gourmet burgers, salads, and even some Mexican-inspired 
      dishes, their talented chefs craft everything with care. The Pelican is also known for its 
      commitment to using quality, ethical, free-range, or organic ingredients, sourced locally 
      where possible.`,
      `Beyond the delicious food, The Pelican fosters a sense of community. They often have live 
      music, creating a lively atmosphere, and are proudly dog-friendly, even offering a special 
      menu for furry companions. They also engage in local initiatives, such as donating a portion 
      of coffee sales to Community Crime Prevention (CCP). With its welcoming ambiance, quality 
      offerings, and community spirit, The Pelican is a beloved Hout Bay gem for any meal of the 
      day.`,
    ],
  },
  {
    id: "r10",
    name: "Delish Restaurant",
    tradingHours: "Tue-Sun: 08:00 - 17:30",
    location: { latitude: -34.037, longitude: 18.365 },
    address: "8 Beach Cres, Hout Bay, Cape Town, 7806",
    category: ["Breakfast", "Coffee", "Light Meals"],
    type: "restaurants",
    phoneNumber: "+27 21 790 5324",
    website: "https://www.facebook.com/delishbistroHB/",
    rating: 4.6,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMBpyhhoLDoOD2hvsBHUPjn91hO9uIOALEuSxxE=s680-w680-h510-rw",
    description: [
      `Delish Restaurant, a charming eatery in Hout Bay, is a true "home away from home" for locals 
      and a delightful find for visitors. Run by a hands-on mother and daughter team, it's housed 
      in a beautifully restored 120-year-old historical house, previously a police warden's home, 
      complete with fascinating downstairs prison cells! This adds a unique, homely, and intriguing 
      ambiance, with wooden floors, vintage furniture, and a cozy fireplace for cooler days.`,
      `What sets Delish apart is its commitment to fresh food, all made from scratch on the premises 
      daily. They are particularly famous for their amazing all-day breakfast, offering a variety of 
      options including smash avo and mini deli breakfasts. Beyond breakfast, their menu features 
      light meals, gourmet burgers, healthy protein and Buddha bowls, and crispy calamari. For a 
      sweet ending, their baked white chocolate cheesecake is a popular choice.`,
      `Delish offers both comfortable interior seating and lovely al fresco options on the veranda 
      or under trees in the garden. Child-friendly, with Wi-Fi, secure parking, and resilient 
      during load shedding, it's a versatile spot for any meal, from a quick coffee to a leisurely 
      lunch, all delivered with warm, welcoming service.`,
    ],
  },
  {
    id: "r11",
    name: "Veldt",
    tradingHours: "Mon-Sat: 12:00 - 21:30 (Closed Tuesdays)",
    location: { latitude: -34.0385, longitude: 18.3615 },
    address: "35 Main Rd, Scott Estate, Cape Town, 7806",
    category: ["Grill", "Bar"],
    type: "restaurants",
    phoneNumber: "+27 61 911 5690",
    website: "https://veldtdbe.com/",
    rating: 4.5,
    imageUrl: "https://www.dining-out.co.za/ftp/gallery/11613--48012.jpg",
    description: [
      `Veldt Braai Restaurant & Smoke House in Hout Bay is a unique eatery that reimagines South African food traditions with a focus on wood-fired and smoked dishes. This establishment celebrates the essence of "braai" (barbecue) culture, using locally sourced, organic, and grass-fed meats to craft truly authentic flavors.`,
      `The atmosphere is a blend of relaxed rustic charm and modern sleek design, making it appealing for casual diners, families, or even more elegant small parties and private events. Guests can indulge in premium cuts like Karoo lamb, expertly grilled and smoked. To complement the culinary offerings, Veldt boasts a curated selection of local beers on tap and boutique wines from small farms. Beyond the main dishes, the menu also features gourmet burgers, light meals, and other South African-inspired fare.`,
      `Veldt prides itself on igniting flavors, conversations, and connections, offering more than just a meal but an experience rooted in tradition and taste. It's a place where the primal art of fire cooking meets the soul of South African heritage, inviting visitors to come for the food and stay for the experience.`,
    ],
  },
  {
    id: "r12",
    name: "Pho Hue Vietnamese",
    tradingHours: "Mon-Sun: 11:00 - 21:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "38 Victoria Ave, Hout Bay, Cape Town, 7806",
    category: ["Vietnamese", "Take-away"],
    type: "restaurants",
    phoneNumber: "+27 84 363 6888",
    website: null,
    rating: 4.1,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipP-Oo1qIcmIirfxP_2CR5vf--6sqgdaRg1gyAYY=s680-w680-h510-rw",
    description: [
      `Pho Hue Vietnamese, located on Victoria Avenue in Hout Bay, brings the authentic and vibrant flavors of Vietnam to the Cape Peninsula. This popular eatery is known for its dedication to traditional Vietnamese street food, offering a culinary journey that transports diners straight to the bustling markets of Hanoi or Ho Chi Minh City.`,
      `The star of the show, as the name suggests, is their selection of Pho – rich, aromatic noodle soups available with beef or chicken, prepared with slow-cooked broths that capture the essence of Vietnamese comfort food. Beyond Pho, the menu features a diverse range of Vietnamese delights. Expect to find fresh and crispy spring rolls, both fresh and fried, with various fillings like prawn, chicken, and vegetables. Their Banh Mi (Vietnamese sandwiches) are a popular choice, boasting flavorful fillings in crusty baguettes. Other highlights include delicious dumplings, Korean Fried Chicken wings, and a variety of rice and noodle dishes.`,
      `To complement the meal, Pho Hue also serves traditional Vietnamese iced coffee, a strong and rich brew that's a perfect pick-me-up. With its focus on authentic ingredients and traditional recipes, Pho Hue Vietnamese provides a genuine and satisfying experience for those craving true Vietnamese cuisine in Hout Bay.`,
    ],
  },
  {
    id: "r13",
    name: "Casareccio Cucina Italiana",
    tradingHours: "Mon-Sun: 07:30 - 21:30",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Shop 2, Bay Beach Centre, 14 Main Rd, Hout Bay, Cape Town, 7806",
    category: ["Italian", "Breakfast", "Diverse"],
    type: "restaurants",
    phoneNumber: "+27 21 790 0200",
    website: "https://casarecciohoutbay.co.za/home",
    rating: 4.5,
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noHZXYrh4_L9u-2tlKVuAFsFSuq0jaRO78gHUyLwAicorNnpebuTTOrMwUVSCW_EyGIx3c4UXpU6xrF_nsWcp1fYHHkB37oPkqlveg2XdnsKe8iHNwla8BwJydru2Qda2v3a-WOBQ=s680-w680-h510-rw",
    description: [
      `Casareccio Cucina Italiana, located at 4 Main Road in Hout Bay, is a beloved Italian restaurant that warmly embraces its customers as family. This eatery is known for its authentic Italian cuisine with a delightful hint of Portuguese influence, creating a unique and inviting dining experience`,
      `Open daily, Casareccio prides itself on serving delicious breakfasts to start the day, alongside an impressive array of classic Italian favorites. Their menu features amazing pizzas with traditional toppings, perfectly cooked pastas made with passion, and a selection of favorite Portuguese meals. Beyond these staples, they also offer delicious specialty dishes, ensuring there's something to tempt every palate`,
      `The restaurant aims to provide great friendly service in a comfortable setting. Situated conveniently on the Main Road, it's just a short stroll from Hout Bay Main Beach and close to the start of the iconic Chapman's Peak Drive, making it an ideal stop for locals and tourists exploring the area. Whether you're craving a hearty breakfast, a classic Italian pizza, or a flavorful Portuguese dish, Casareccio Cucina Italiana offers a welcoming atmosphere and a satisfying meal.`,
    ],
  },
  {
    id: "r14",
    name: "The Butcher's Mermaid",
    tradingHours: "Mon-Sun: 09:00 - 21:00",
    location: { latitude: -34.0382, longitude: 18.3605 },
    address: "Red Sails Building, 26 Main Rd, Hout Bay, Cape Town, 7806",
    category: ["Pub", "Burgers", "Grill"],
    type: "restaurants",
    phoneNumber: "+27 21 300 0282",
    website: null,
    rating: 4.4,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPJufto3m-BXoi5bJN8PQiyWHxnHEFeDdXFX8vZ=s680-w680-h510-rw",
    description: [
      `The Butcher's Mermaid in Hout Bay is a unique culinary destination that operates as both a modern, upscale butcher and deli, and a restaurant. Their philosophy revolves around providing top-quality, locally sourced, pasture-reared, free-range meat products and the finest charcuterie, drawing inspiration from European butcheries.`,
      `Beyond their premium meat counter, which includes dry-aged options, they emphasize sustainable seafood, offering seasonal live oysters, mussels, and crayfish that can be prepared á la minute or packed for convenience. Vegetables are sourced from farms adhering to organic principles.`,
      `The restaurant, with its stylish yet comfortable ambiance, offers a diverse menu that goes beyond just meat. While their steaks (including Wagyu and various cuts prepared on a hot stone at your table) and gourmet burgers are highlights, they also serve light meals, salads, and have a selection of Belgian-inspired dishes like bitterballen. They pride themselves on attentive service and a welcoming environment, making it a popular spot for both meat connoisseurs and those seeking fresh, quality ingredients in a sophisticated setting.`,
    ],
  },
  {
    id: "p1",
    name: "Clicks Pharmacy Hout Bay",
    tradingHours: "Mon-Fri: 08:30 - 18:00, Sat: 08:30 - 14:00, Sun: Closed",
    location: { latitude: -34.04, longitude: 18.362 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: ["Pharmacy", "Health", "Retail"],
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
    category: ["Pharmacy", "Health", "Retail"],
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
    category: ["Pharmacy", "Health", "Retail"],
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
    category: ["Zoo", "Wild Life"],
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
    category: ["Shops", "Food", "Music", "Craft Beer"],
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
    category: ["Beach", "Swimming", "Walking"],
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
    category: ["Beach", "Swimming", "Walking"],
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
    category: ["Beach", "Swimming", "Walking"],
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
    category: ["Drive", "Scenic", "Walking"],
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
    category: ["Walking", "Markets", "Scenic"],
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
    category: ["Ocean safari", "Kelp snokling", "Kayaking"],
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
    category: ["Sea cruise"],
    type: "attractions",
    phoneNumber: "+27 82 658 7055",
    email: "hello@drumbeatcharters.co.za",
    website: "https://www.animalocean.co.za/",
    rating: 4.4,
    imageUrl: "https://drumbeatcharters.co.za/wp-content/uploads/2024/10/drumbeat-vessel.jpg",
    Description: "",
  },
  {
    id: "a10",
    name: "Karbonkelberg Tourism",
    tradingHours: "Mon-Fri 09:00-17:00, Sat-Sun 09:00-12:00",
    location: null,
    address: "Block C3, Salamander Rd, Hout Bay, Cape Town,",
    category: ["Hikes", "Tours"],
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
