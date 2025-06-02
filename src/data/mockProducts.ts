const mockProducts = [
  {
    title: "LANE LINEN 100% Organic Cotton Twin Sheets Set",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71wMAd-nrVL._AC_SX679_.jpg",
    summary: "Smart speaker with Alexa and improved audio quPure Organic Comfort: Experience the luxurious comfort of our Lane Linen white sheets twin size, meticulously crafted from OEKO-TEX certified 100% Organic Cotton. The crisp percale weave provides a hotel-quality feel—soft, yet durable—offering breathability and supreme comfort.",
    buyLink: "https://amzn.to/4dFb0NO",
    badge: "🔥 Trending",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
  {
    title: "EAST OAK Outdoor Storage Box, 31 Gallon Deck Box, Waterproof Resin Storage Bin for Patio Cushions, Gardening Tools, Pool Accessories, Lockable, UV Resistant",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71T09vCl5yL._AC_SX679_.jpg",
    summary: "𝗖𝗢𝗠𝗣𝗔𝗖𝗧 𝗕𝗨𝗧 𝗩𝗘𝗥𝗦𝗔𝗧𝗜𝗟𝗘: EAST OAK outdoor storage box measures 22.8''L x 17.1''W x 20.86'H. Even with a storage capacity of 31 gallons, you can fit many backyard extras like patio mats, pillows, pool accessories, gardening tools and hoses, etc",
    buyLink: "https://amzn.to/4korTPs",
    badge: "📺 Editor's Pick",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },

    {
    title: "Twin 4 Piece Sheet Set - Comfy Breathable & Cooling",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71girJD2oyL._AC_SY879_.jpg",
    summary: "4 PIECE BED SHEET SET: 2 pillow cases, 1 flat sheet, and 1 fitted sheet. Flat sheet (66″x 96″) Fitted sheet (39″x 75″) 2 pillow cases (20″x 30″) - A comfy upgrade for everyone where comfort meets elegance.",
    buyLink: "https://amzn.to/43vhYSd",
    badge: "🔥 Trending",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
  {
    title: "Cuisinart 6.5 Cast Iron Smashed Burger Press",
    featured: false,
    image: "https://m.media-amazon.com/images/I/81WqU-lxj5L._AC_SX679_.jpg",
    summary: "HEAVY-DUTY CAST IRON: 6.5 cast iron burger press ensures even pressure, creating juicy, flavorful smashed burgers every time.",
    buyLink: "https://amzn.to/3HiOWwe",
    badge: "📺 Editor's Pick",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
    {
    title: "ThermoPro Hygrometer Thermometer for House TP350",
    featured: false,
    image: "https://m.media-amazon.com/images/I/71i+ckEWpQL._AC_SX679_.jpg",
    summary: "This bluetooth digital hygrometer helps you easily monitor temp and humidity changes from up to 260FT away",
    buyLink: "https://amzn.to/4mCWmuv",
    badge: "🔥 Trending",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
  {
    title: "Diveblues Portable Handheld Turbo Fan, 5 Gear Wind, Battery Operated",
   featured: false,
    image: "https://m.media-amazon.com/images/I/61+XHNxM4OL._AC_SX679_.jpg",
    summary: "Ultra-Powerful Wind, Rapid Cooling: Stay cool on the go with the JetForce handheld turbo fan! Featuring Aero-Turbojet technology",
    buyLink: "https://amzn.to/4dEEKtZ",
    badge: "📺 Editor's Pick",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
    {
    title: "Portable Neck Fan with 17H Lifespan, 3 Speeds, 64 Cool Lights, Hands-Free Summer Cooling",
   featured: false,
    image: "https://m.media-amazon.com/images/I/71b2VJeezJL._AC_SX679_.jpg",
    summary: "The application of a 3800RPM/Min high-speed upgraded motor not only improves the cooling efficiency of the neck fan but also ensures the long time running of the portable personal fan without losing coolness and comfort with its stable performance.",
    buyLink: "https://amzn.to/3ZDvMra",
    badge: "🔥 Trending",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
  {
    title: "Amazon Basics Small Digital Oval Alarm Clock With LED Display, Nightlight & Battery Backup, Black, 4.5 x 3.5 x 2.4 Inches",
   featured: false,
    image: "https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SX679_.jpg",
    summary: "Digital alarm clock with a 0.7-inch green LED display for easily checking the time at a glance",
    buyLink: "https://amzn.to/4mCY4vX",
    badge: "📺 Editor's Pick",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
    {
    title: "TERRO Ant Killer Bait Stations T300B - Liquid Bait to Eliminate Ants",
    featured: false,
    image: "https://m.media-amazon.com/images/I/81UY9rBDp-L._AC_SX679_.jpg",
    summary: "SATTRACTS & KILLS: Effectively targets and eliminates common household ants, including sweet-eating varieties, with Terro liquid ant baits indoor they can't resist",
    buyLink: "https://amzn.to/43lXwDc",
    badge: "🔥 Trending",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
  {
    title: "BEDELITE Satin Pillowcase for Hair and Skin, Super Soft and Cooling Similar to Silk Pillow Cases 2 Pack with Envelope Closure",
   featured: false,
    image: "https://m.media-amazon.com/images/I/714q70U2eNL._AC_SX679_.jpg",
    summary: "Satin Pillowcases are made of 100% satin polyester fabric for optimal softness and easy care used is as soft as a silk pillowcase. High-quality satin is more sturdy than silk pillowcases at a reasonable price. ",
    buyLink: "https://amzn.to/3Z3kA7a",
    badge: "🔥 Trending",
    categorySlug: "home-kitchen",
    categoryName: "Home & Kitchen"
  },
    {
    title: "Bakuchiol Plumping Serum – Pore and Wrinkle Minimizer | Retinol Alternative for Sensitive Skin | Enhances Firmness and Elasticity with Ceramide",
   featured: true,
    image: "https://m.media-amazon.com/images/I/81w7GF8hnIL._SX679_.jpg",
    summary: "NATURAL ALTERNATIVE TO RETINOL: Experience the power of Bakuchiol, a natural alternative to retinol. Formulated with 5,000ppm of Bakuchiol, this serum supports collagen production for smoother, firmer skin.",
    buyLink: "https://amzn.to/4ki0wpX",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
  },
      {
    title: "Refrigerator Magnets 50 Pcs, 10x3mm",
   featured: true,
    image: "https://m.media-amazon.com/images/I/619wXODtLRL._SX522_.jpg",
    summary: "Our round button magnets can be used as refrigerator magnets, whiteboard magnets, office magnets, craft magnets, DIY magnets, miniatures, 3d printed projcts, scientific, industrial, educational needs, jewelry-making and other hobby and home improvement projects. These small circle magnets can help storage things in home and office, and can be used on anything with magnetism.",
    buyLink: "https://amzn.to/43YksZi",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
  },
   {   
title: "Nootropic Brain Supplement for Memory and Focus Enhancement",
   featured: true,
    image: "https://m.media-amazon.com/images/I/71LL6fU79ZL._AC_SX679_.jpg",
    summary: "ADVANCED BRAIN SUPPORT FOR MEMORY & FOCUS – Formulated to enhance cognitive function, mental clarity, and concentration, this memory supplement for brain provides essential nutrients to support memory retention, learning ability & overall brain vitality.",
    buyLink: "https://amzn.to/43rswSk",
    badge: "📺 Editor's Pick",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "HEAD Flash Padel/Pop Tennis Paddle Series",
   featured: true,
    image: "https://m.media-amazon.com/images/I/61JXXBD2PmL._AC_SX679_.jpg",
    summary: "Fast as a flash. Powerful and easy to use, the Flash series is designed for advanced players. For extra performance, the rackets are made with soft foam and Innegra technology that also reduces vibration.",
    buyLink: "https://amzn.to/45x9POk",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "OM MUSHROOM SUPERFOOD Hot Chocolate Blend Mushroom Powder",
   featured: true,
    image: "https://m.media-amazon.com/images/I/71gdkQnm34L._AC_SX679_.jpg",
    summary: "Harness the power of functional mushrooms: This powerful mushroom complex features an efficacious dose of 2000mg of mushrooms and 400mg beta-glucans per serving to naturally support immunity, brain health, balance and stress relief.",
    buyLink: "https://amzn.to/4kMZUsw",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "Force Factor Total Beets Blood Pressure Support Supplements with Beet Powder, Great-Tasting Beets Chewables for Heart-Healthy Energy, and Increased Nitric Oxide",
   featured: true,
    image: "https://m.media-amazon.com/images/I/81+zHqJ6L6L._AC_SX679_.jpg",
    summary: "SUPPORT HEART HEALTH: This premium and delicious beets powder superfood formula contains MegaNatural-BP, a patented grapeseed extract clinically shown to support blood pressure in the normal healthy range.",
    buyLink: "https://amzn.to/43EmiwZ",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "Little Sleepies Pajamas for Baby Boys & Girls, Viscose from Bamboo Baby Pajamas, Snug Baby Sleeper, Toddler PJs, 2-Way Zipper",
   featured: true,
    image: "https://m.media-amazon.com/images/I/71KeBtHGCaL._AC_SX679_.jpg",
    summary: "[Softest Pajamas Ever] Made from buttery-soft custom-milled Lunaluxe fabric, our stretchy viscose derived from bamboo baby pajamas provide cozy snuggles and soothing comfort for sensitive skin; perfect baby clothes for girls and boys.",
    buyLink: "https://amzn.to/4dKNfUH",
    badge: "📺 Editor's Pick",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "La Roche-Posay Lipikar AP+ Triple Repair Moisturizing Cream | Face & Body Lotion For Dry Skin | Shea Butter & Niacinamide Moisturizer",
   featured: true,
    image: "https://m.media-amazon.com/images/I/51aLygY8DwL._SX522_.jpg",
    summary: "Repairing face & body moisturizer for dry skin. Formulated with shea butter & niacinamide to restore the skin's protective barrier. Provides daily relief for dry, sensitive skin. Hydrating face, body & hand cream.",
    buyLink: "https://amzn.to/4juSYiE",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "Creatine Monohydrate Gummies 5000mg for Men & Women",
   featured: true,
    image: "https://m.media-amazon.com/images/I/71mU1N3PxUL._AC_SX679_.jpg",
    summary: "[ Key Benefits]: Our Creatine monohydrate gummies are an easy way to consume, 2 gummies per serving, you can take it at any time, any place. It improved muscle strength, muscle recovery, improve endurance and energy boost. Suitable for a variety of users, and enjoyable taste.",
    buyLink: "https://amzn.to/454242i",
    badge: "🔥 Trending",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},
 {   
title: "Thermometer for BBQ Grill Smoker Oil Fry Candy Instant Read Thermometer",
   featured: true,
    image: "https://m.media-amazon.com/images/I/61Qs4ZJXsXL._SX522_.jpg",
    summary: "2.0 inches large auto-rotating backlit display: Candy thermometer has a 180° auto-rotating backlit display, making this kitchen thermometer perfect for left-hand users and allows you to use it in low light conditions. Motion sensing sleep/wake: Directly turns on and off by the probe opens or closes; instantly wakes when picked up the digital food thermometer and sleeps when set down to save battery power; up to 3000 hours with included 3A battery",
    buyLink: "https://amzn.to/4jwTAEp",
    badge: "📺 Editor's Pick",
    categorySlug: "This-Week's-Picks",
    categoryName: "This Week's Picks"
},






  // ... more products
];

export default mockProducts;
