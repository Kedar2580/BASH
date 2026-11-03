const data = [
  {
    id: 1,
    name: "Agra",
    info: "Agra is a city in northern India, known for the iconic Taj Mahal, a white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. The city is also home to the massive Agra Fort, a UNESCO World Heritage Site, and the abandoned Mughal city of Fatehpur Sikri nearby. Visitors can enjoy Mughlai cuisine, famous petha sweets, and marble inlay handicrafts.",
    image:
      "https://images.unsplash.com/photo-1774934950562-755df93e1c88?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "35,758",
  },
  {
    id: 2,
    name: "Jaipur",
    info: "Jaipur, the capital of Rajasthan, is known as the Pink City because of its terracotta-coloured old town. Highlights include the Amber Fort, the Hawa Mahal with its honeycomb facade, the City Palace, and the Jantar Mantar observatory. The bustling bazaars are famous for block-printed textiles, jewellery, blue pottery, and traditional Rajasthani food such as dal baati churma.",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "32,450",
  },
  {
    id: 3,
    name: "Delhi",
    info: "Delhi, India's capital, blends centuries of history with modern city life. Old Delhi offers the Red Fort, Jama Masjid, and the lively street food of Chandni Chowk, while New Delhi features India Gate, Humayun's Tomb, the Lotus Temple, and wide tree-lined avenues. The city is a great base for museums, shopping, and some of the best food in the country.",
    image:
      "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "28,999",
  },
  {
    id: 4,
    name: "Mumbai",
    info: "Mumbai is India's financial capital and the home of Bollywood, set along the Arabian Sea. Popular sights include the Gateway of India, Marine Drive, the Elephanta Caves, and the Victorian Gothic buildings of South Mumbai. The city is loved for its vada pav and street food, vibrant nightlife, sea-facing promenades, and its fast, energetic spirit.",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "38,200",
  },
  {
    id: 5,
    name: "Goa",
    info: "Goa is a small coastal state on India's west coast, famous for its golden beaches, Portuguese-era churches, and relaxed island atmosphere. Visitors can enjoy water sports at Calangute and Baga, quiet sunsets at Palolem, the old Basilica of Bom Jesus, and lively beach shacks serving fresh seafood. Flea markets, nightlife, and spice plantations add even more variety.",
    image:
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "41,300",
  },
  {
    id: 6,
    name: "Varanasi",
    info: "Varanasi, on the banks of the sacred Ganges, is one of the world's oldest continuously inhabited cities and a major spiritual centre for Hindus. The evening Ganga Aarti at Dashashwamedh Ghat, sunrise boat rides past the ghats, and the narrow lanes around the Kashi Vishwanath Temple give a deep glimpse into Indian faith and culture. Nearby Sarnath is where Buddha gave his first sermon.",
    image:
      "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "26,750",
  },
  {
    id: 7,
    name: "Udaipur",
    info: "Udaipur, the City of Lakes in Rajasthan, is known for its romantic palaces, calm lakes, and royal heritage. The City Palace overlooking Lake Pichola, the floating Lake Palace, Jag Mandir, and the Saheliyon Ki Bari gardens are major attractions. Boat rides at sunset, rooftop dining, and local miniature painting and puppet shows make it a favourite for couples and families.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "36,400",
  },
  {
    id: 8,
    name: "Kochi",
    info: "Kochi is a port city in Kerala that reflects centuries of Arab, Chinese, Portuguese, Dutch, and British trade. Visitors can watch the Chinese fishing nets at Fort Kochi, explore Mattancherry Palace and the Jewish Synagogue, and enjoy a Kathakali performance. Nearby backwaters, houseboat stays in Alleppey, and spice-scented seafood meals make Kochi a perfect gateway to Kerala.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730433023-c5fcff0506ee?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "39,850",
  },
  {
    id: 9,
    name: "Shimla",
    info: "Shimla, the former summer capital of British India, is a hill station in Himachal Pradesh surrounded by pine and deodar forests. Famous spots include The Ridge, Mall Road, Christ Church, Jakhu Temple, and the scenic toy train ride from Kalka. Nearby Kufri and Naldehra offer snow activities in winter and cool, green walks in summer.",
    image:
      "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "24,600",
  },
  {
    id: 10,
    name: "Rishikesh",
    info: "Rishikesh, set in the Himalayan foothills along the Ganges, is known as the Yoga Capital of the World. Travellers come for yoga and meditation retreats, the evening aarti at Triveni Ghat, the Laxman Jhula and Ram Jhula bridges, and thrilling river rafting, bungee jumping, and camping. Cafes by the river and scenic treks to nearby waterfalls complete the experience.",
    image:
      "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    price: "22,300",
  },
];

export default data;
