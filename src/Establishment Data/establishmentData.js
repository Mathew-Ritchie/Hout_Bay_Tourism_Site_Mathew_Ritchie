const establishments = [
  //Restaurants -----------------------------------------------------------------------------------------
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
    imageUrl: "/mariners_wharf.jpg",
    imageCredit: "Image from Mariner's Wharf Tripadvisor page",
    description: [
      `Mariner's Wharf stands as Africa's first harbour front emporium, a truly unique destination. 
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
    imageUrl: "/dunes.jpg",
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
    imageUrl: "/massimos.jpg",
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
    imageUrl: "/chapmanspeak_hotel.jpg",
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
    imageUrl: "/darios.jpg",
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
    imageUrl: "/fish_on_the_rocks.jpg",
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
    imageUrl: "/beach_bar.jpg",
    imageCredit: "Image from The Beach Bar Facebook page",
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
    imageUrl: "/lookout_deck.jpg",
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
    imageUrl: "/the_pelican.jpg",
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
    imageUrl: "/delish.jpg",
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
    imageUrl: "/veldt.jpg",
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
    imageUrl: "pho_hue_vietnamese.jpg",
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
    imageUrl: "/casareccio.webp",
    imageCredit: "Photo by Casareccio Cucina Italiana",
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
    imageUrl: "/butchers_mermaid.jpg",
    description: [
      `The Butcher's Mermaid in Hout Bay is a unique culinary destination that operates as both a modern, upscale butcher and deli, and a restaurant. Their philosophy revolves around providing top-quality, locally sourced, pasture-reared, free-range meat products and the finest charcuterie, drawing inspiration from European butcheries.`,
      `Beyond their premium meat counter, which includes dry-aged options, they emphasize sustainable seafood, offering seasonal live oysters, mussels, and crayfish that can be prepared á la minute or packed for convenience. Vegetables are sourced from farms adhering to organic principles.`,
      `The restaurant, with its stylish yet comfortable ambiance, offers a diverse menu that goes beyond just meat. While their steaks (including Wagyu and various cuts prepared on a hot stone at your table) and gourmet burgers are highlights, they also serve light meals, salads, and have a selection of Belgian-inspired dishes like bitterballen. They pride themselves on attentive service and a welcoming environment, making it a popular spot for both meat connoisseurs and those seeking fresh, quality ingredients in a sophisticated setting.`,
    ],
  },
  //Health care -----------------------------------------------------------------------------------------
  {
    id: "p1",
    name: "Clicks Pharmacy Hout Bay",
    tradingHours: "Mon-Fri: 08:30 - 18:00, Sat: 08:30 - 14:00, Sun: Closed",
    location: { latitude: -34.04, longitude: 18.362 },
    address: "Mainstream Centre, Main Rd, Hout Bay",
    category: ["Pharmacy", "Health", "Retail"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5077",
    email: null,
    website: "https://www.clicks.co.za",
    rating: 2.7,
    imageUrl: "/clicks.jpeg",
    description: "",
  },
  {
    id: "p2",
    name: "Wheeler's Pharmacy",
    tradingHours: "Mon-Fri: 08:30 - 19:00, Sat - Sun(holidays): 09:00 - 18:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "The Passageway, Main Rd, Hout Bay, Cape Town, 7806",
    category: ["Pharmacy", "Health", "Retail"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 5678",
    email: "rxwheelers@mweb.co.za",
    website: "https://www.wheelerspharmacy.com/",
    rating: 3.8,
    imageUrl: "/wheelers.webp",
    description: "",
  },
  {
    id: "p3",
    name: "Sentinal Dispensary",
    tradingHours: "Mon-Fri: 08:30 - 18:00, Sat: 08:30 - 13:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "51 Victoria Rd, Hout Bay, Cape Town, 7806",
    category: ["Pharmacy", "Health", "Retail"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 3400",
    email: "rxsentinel@mweb.co.za",
    website: "https://www.wheelerspharmacy.com/general-6",
    rating: 4.1,
    imageUrl: "/sentinal_pharmacy.jpg",
    description: "",
  },
  {
    id: "p4",
    name: "Sorbet Salon",
    tradingHours: "Mon-Fri: 08:00 - 18:00, Sat: 08:00 - 17:00, Sun: 9:00 - 16:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "Mainstream Mall, Main Rd, Scott Estate, Cape Town, 7806",
    category: ["Nails", "Waxing", "Make up", "Beauty", "Massage"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 8519",
    email: "",
    website: "https://www.sorbet.co.za/",
    rating: 4.2,
    imageUrl: "/sorbet.png",
    description: "",
  },
  {
    id: "p5",
    name: "Martin's barber",
    tradingHours: "Mon-Sat: 08:00 - 18:00, Sun: 9:00 - 15:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "C14 Princess St, Hout Bay, Cape Town, 7806",
    category: ["Barber", "Waxing", "Beauty"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 8519",
    email: "",
    website: "https://www.facebook.com/martinsbarbershophoutbay/",
    rating: 4.7,
    imageUrl: "/martins-barber.webp",
    description: [
      `Get ready for a fresh new look at Martins Barbershop! Our barber cuts hair for man, 
      women, and kids of all ages, catering to every hair type and style. From trendy trims 
      to classic cuts, we're here to bring your vision to life. Walk-ins welcome! Book your
       appointment today and experience top-notch service at unbeatable prices. Come visit us
        and let's get you looking sharp!`,
    ],
  },
  {
    id: "p6",
    name: "Mainstream Hair",
    tradingHours: "Mon-Sat: 09:00 - 17:00, Sun: 10:00 - 14:00",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "C6 Mainstream Centre, Princess St, Hout Bay, Cape Town, 7806",
    category: ["Hairdresser", "Waxing", "Beauty"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 7272",
    email: "",
    website: "",
    rating: 4.6,
    imageUrl: "/mainstream-hair.webp",
    description: [``],
  },
  {
    id: "p7",
    name: "Hout Bay Dental Studio",
    tradingHours: "Mon-Fri: 08:30 - 17:00, Sat: 09:00 - 12:00, Sun: Closed",
    location: { latitude: -34.037, longitude: 18.36 },
    address: "Joslyn Place, 34 Victoria Ave, Hout Bay, Cape Town, 7806",
    category: ["Dentist", "Oral Hygienist"],
    type: "Beauty and wellness", // <-- NEW 'type' property
    phoneNumber: "+27 21 790 2910",
    email: "info@hbds.co.za",
    website: "https://www.hbds.co.za/",
    rating: 4.4,
    imageUrl: "/dental-studio.webp",
    description: [
      `Looking for a trusted dentist in Hout Bay? At Hout Bay Dental Studio, we offer advanced general, aesthetic, and restorative dentistry with a gentle, holistic approach. For over 40 years, we’ve helped local families and international visitors feel cared for, listened to, and confident in their smiles. From same-day crowns and dental implants to whitening, smile design, and preventative care, our experienced team combines cutting-edge technology with calm, compassionate treatment. We prioritise long-term health, comfort, and natural-looking results — with multilingual care and sedation options available. Whether you’re due for a check-up or planning a full smile makeover, we’ll walk the journey with you.`,
    ],
  },
  //Attractions -----------------------------------------------------------------------------------------
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
    imageUrl: "/world_of_birds.jpeg",
    description: [
      `World of Birds in Hout Bay is one of Africa’s largest bird parks and a 
    must-visit for nature lovers. Home to over 3,000 birds across more than 400 species,
     as well as small mammals like monkeys, meerkats, and porcupines, it offers an 
     immersive wildlife experience for visitors of all ages. The park features walk-through
      aviaries, lush gardens, and interactive feeding sessions, allowing guests to get 
      up close to exotic and indigenous species. Nestled in a scenic setting with the
       backdrop of Table Mountain and Hout Bay, World of Birds combines education,
        conservation, and family-friendly fun, making it a top attraction in Cape Town.`,
    ],
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
    imageUrl: "/bay_harbour_market.jpg",
    imageCredit: "Image from Bay Harbour Market",
    description: [
      `The Bay Harbour Market in Hout Bay is a vibrant, must-visit destination
     for locals and tourists alike. Set in a lively, eclectic space near the harbour,
      the market showcases a diverse mix of artisanal crafts, unique gifts, and handmade
       jewellery, alongside an array of global cuisine from food stalls and pop-up eateries.
        Live music and entertainment create a festive atmosphere, making it a social hotspot
         as well as a shopping destination. With stunning views of Hout Bay Harbour and the
          surrounding mountains, the market perfectly combines culture, creativity, and
          community, offering visitors an authentic taste of Cape Town’s local life.`,
    ],
  },

  {
    id: "a3",
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
    imageUrl: "/chapmans_peak_drive.jpg",
    description: [
      `Chapman’s Peak Drive is one of the world’s most breathtaking
      coastal routes, winding along the cliffs between Hout Bay and Noordhoek on
      Cape Town’s Atlantic Coast. Carved into the mountainside, the road offers
      spectacular panoramic views of the ocean, rugged cliffs, and dramatic mountain 
      scenery. Known locally as “Chappies,” it’s a favourite for scenic drives, 
      cycling, and sunset picnics. With several lookout points along its 9-kilometre
      stretch, it’s perfect for photography and whale watching in season.
      Combining engineering brilliance with natural beauty, Chapman’s Peak Drive
      is an iconic Cape Town experience that captures the essence of the Cape
      Peninsula’s wild charm.`,
    ],
  },
  {
    id: "a4",
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
    imageUrl: "/hout_bay_harbour.jpeg",
    description: [
      `Hout Bay Harbour is a vibrant and historic seaside attraction
     nestled at the foot of the Sentinel Peak in Cape Town. Originally a small
      fishing harbour, it has grown into a lively hub where visitors can enjoy a 
      mix of local culture, fresh seafood, and ocean adventures. The harbour is home
       to colourful fishing boats, bustling markets, and the popular Bay Harbour 
       Market, offering local crafts, music, and food. Boat trips to Seal Island
        and deep-sea fishing excursions depart daily, adding to its appeal.
         Surrounded by stunning mountain and ocean views, Hout Bay Harbour
          perfectly blends charm, activity, and natural beauty.`,
    ],
  },
  {
    id: "a5",
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
    imageUrl: "/animal_ocean.jpeg",
    description: [
      `Animal Ocean Ocean Safaris, based in Hout Bay, offers unforgettable marine
     adventures along Cape Town’s stunning coastline. Specializing in boat tours, the safaris
      allow visitors to experience the ocean up close, with opportunities to see seals, 
      dolphins, whales, and even penguins in their natural habitats. Guided by experienced 
      marine specialists, the tours combine wildlife spotting with fascinating insights into
       marine ecology and conservation. Whether it’s a scenic cruise along Hout Bay, a seal
        island visit, or a seasonal whale-watching expedition, Animal Ocean Ocean Safaris
         delivers a thrilling and educational experience, making it a top choice for ocean 
         lovers visiting Cape Town.`,
    ],
  },
  {
    id: "a6",
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
    imageUrl: "/drumbeat_charters.png",
    description: [
      `Drumbeat Charters in Hout Bay offers an unforgettable maritime experience along
     Cape Town’s stunning coastline. Operating from the harbour, their scenic cruises take visitors 
     to Duiker Island, home to thousands of wild Cape Fur Seals, and along the dramatic cliffs of
      Chapman’s Peak. Options include relaxed sightseeing trips, high-speed eco-adventures, and 
      special excursions to shipwrecks, all guided by knowledgeable staff. The purpose-built 
      vessel is safe, comfortable, and family-friendly, with indoor and outdoor seating. Combining 
      wildlife encounters, breathtaking ocean views, and the thrill of the Atlantic, Drumbeat
       Charters is a must-visit attraction for anyone seeking adventure and natural beauty in
        Cape Town.`,
    ],
  },
  {
    id: "a7",
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
    imageUrl: "/karbonkelberg_tourism.jpg",
    description: [
      `Karbonkelberg Tourism in Hout Bay offers an immersive blend of adventure, nature, 
    and local culture. Specializing in guided hikes, sea‑kayaking, and coastal explorations, the
     tours take visitors through the dramatic Karbonkelberg mountains, The Sentinel, and along
      Cape Town’s stunning coastline. Guests enjoy breathtaking views, wildlife spotting, and 
      hands-on experiences with the local fishing community, including food tastings and craft 
      interactions. Tailored for varying fitness levels, the excursions combine education, outdoor
       adventure, and cultural insight. With expert guides, safe routes, and unforgettable scenery,
        Karbonkelberg Tourism provides a unique way to explore Hout Bay’s natural beauty and heritage.`,
    ],
  },

  //Beaches -----------------------------------------------------------------------------------------
  {
    id: "b1",
    name: "Hout Bay Beach",
    tradingHours: null,
    location: null,
    address: null,
    category: ["Beach", "Swimming", "Walking"],
    type: "beaches",
    phoneNumber: null,
    email: null,
    website: null,
    rating: null,
    imageUrl: "/beach_hout_bay.jpg",
    description: [
      `Hout Bay Beach is a long, sweeping stretch of golden sand framed
     by mountains and the picturesque Hout Bay Harbour. Popular with locals and
      visitors alike, it’s ideal for leisurely walks, beach picnics, and horse riding 
      along the shoreline. The calm bay waters make it great for kayaking, 
      paddleboarding, and swimming, while the surrounding views of Chapman’s
       Peak and the Sentinel create a stunning backdrop. Families love its relaxed
        atmosphere and easy access to nearby cafés and restaurants. With its mix of
         natural beauty and coastal charm, Hout Bay Beach offers one of Cape Town’s
          most scenic seaside escapes.`,
    ],
  },
  {
    id: "b2",
    name: "Sandy Bay Beach",
    tradingHours: null,
    location: null,
    address: null,
    category: ["Beach", "Swimming", "Walking"],
    type: "beaches",
    phoneNumber: null,
    email: null,
    website: null,
    rating: null,
    imageUrl: "/sandy_bay.jpeg",
    description: [
      `Sandy Bay is one of Cape Town’s most secluded and beautiful beaches, 
      tucked between Llandudno and the Karbonkelberg mountains. Known for its 
      pristine white sand, dramatic rock formations, and crystal-clear Atlantic 
      waters, it offers a peaceful escape from the city. Accessible only by a 
      scenic walk through coastal fynbos, the journey adds to its sense of
       exclusivity. Sandy Bay is also South Africa’s only unofficial nudist
        beach, attracting both locals and visitors seeking a relaxed, natural 
        atmosphere. With breathtaking sunsets and a tranquil setting, it’s a
         hidden gem for those looking to experience Cape Town’s wilder,
          untouched coastline.`,
    ],
  },
  {
    id: "b3",
    name: "Llandudno Beach",
    tradingHours: null,
    location: null,
    address: null,
    category: ["Beach", "Swimming", "Walking"],
    type: "beaches",
    phoneNumber: null,
    email: null,
    website: null,
    rating: null,
    imageUrl: "/llandudno_beach.webp",
    description: [
      `Llandudno Beach is one of Cape Town’s most picturesque coastal gems, 
    nestled beneath the Twelve Apostles mountains. Surrounded by large granite
     boulders and backed by luxury homes, it offers soft white sand and striking 
     turquoise waters ideal for sunbathing, beach games, and photography. The beach
      is popular with surfers for its powerful waves, though the cold Atlantic water
       keeps it refreshingly quiet compared to busier spots. With no shops or
        restaurants nearby, Llandudno retains a peaceful, unspoiled charm. Its
         breathtaking sunsets and tranquil beauty make it a favourite spot for
          locals and visitors seeking a serene coastal escape.`,
    ],
  },

  //Galleries  -----------------------------------------------------------------------------------------
];

export default establishments;
