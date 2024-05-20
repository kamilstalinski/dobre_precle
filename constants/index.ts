export const links = [
  { title: "AKTUALNOŚCI", href: "/aktualnosci" },
  { title: "O NAS", href: "/o-nas" },
  { title: "MENU", href: "/menu" },
  { title: "LOKALIZACJE", href: "/lokalizacje" },
  { title: "KONTAKT", href: "/kontakt" },
  { title: "FRANCZYZA", href: "/franczyza" },
];

export const locations = [
  {
    index: 1,
    id: "wroclaw",
    city: "Wrocław",
    address: ["ul. Piłsudskiego 105"],
    street: "ul. Piłsudskiego 105",
    image: "/Wroclaw_1.png",
    tel: "+48 508 054 020",
    hours: ["pon-niedz 6:00-22:00"],
    lat: 51.098933383794844,
    lng: 17.036602884453757,
    gallery: ["/Wroclaw_1.png", "/Wroclaw_2.png", "/Wroclaw_3.png"],
  },
  {
    index: 2,
    id: "gliwice",
    city: "Gliwice",
    address: ["ul. Zwycięstwa 20"],
    street: "ul. Zwycięstwa 20",
    image: "/gliwice.png",
    tel: "",
    hours: ["pon-niedz 8:00-20:00"],
    lat: 50.29561277956238,
    lng: 18.669249169631563,
    gallery: [""],
  },
  {
    index: 3,
    id: "krakow",
    city: "Kraków",
    address: ["ul. Karmelicka 8"],
    street: "ul. Karmelicka 8",
    image: "/krakow.png",
    tel: "",
    hours: ["pon-niedz 8:30-20:00"],
    lat: 50.06405575343491,
    lng: 19.93202805613294,
    gallery: [
      "/karkow_karmelicka_1.png",
      "/karkow_karmelicka_2.png",
      "/karkow_karmelicka_3.png",
    ],
  },
  {
    index: 4,
    id: "bydgoszcz",
    city: "Bydgoszcz",
    address: [
      "Dworzec Główny PKP",
      "ul. Zygmunta Augusta 7, lok 15",
      "85-082 Bydgoszcz",
    ],
    street: "ul. Zygmunta Augusta 7",
    image: "/bydgoszcz.png",
    tel: "+48 508 054 020",
    hours: ["pon.-czw. 6:00-20:00", "pt.-niedz. 6.00 - 21.00"],
    lat: 53.13492600388355,
    lng: 17.99166896973112,
    gallery: ["/bydgoszcz_1.png", "/bydgoszcz_2.png", "/bydgoszcz_3.png"],
  },
];

export const posts = [
  {
    index: 1,
    PostTitle: "Otwarcie we Wrocławiu",
    PostText:
      "DOBRE PRECLE we Wrocławiu ju otwarte! Wbijajcie na Piłsudskiego 105, DWORZEC GŁÓWNY lokal od wejścia głównego na lewo. No, teraz to na pewno traficie! Obserwujcie nas, odwiedzajcie, wpadajcie ze znajomymi i rodziną! Jesteśmy dla Was od 6 rano do 22! Pyszna szamka gwarantowana!",
    PostImage: "/Wroclaw_1.png",
    PostDate: "25-07-2023",
  },
  {
    index: 2,
    PostTitle: "Dobre Precle w Bydgoszczy!",
    PostText:
      "Lokal Dobrych Precli, umiejscowiony w strategicznym punkcie dworca, oferuje szeroki wybór precli, które są doskonałą propozycją na szybką przekąskę przed podróżą. Z zaangażowaniem i pasją, zespół Dobrych Precli serwuje swoim klientom produkty najwyższej jakości, wykorzystując tradycyjne receptury i najlepsze składniki.",
    PostImage: "/bydgoszcz.png",
    PostDate: "28-01-2023",
  },
  {
    index: 3,
    PostTitle: "Precle nadziewane",
    PostText:
      "Nasze Precele Nadziewane to nie tylko hołd dla klasycznych receptur, ale również odpowiedź na potrzeby i oczekiwania współczesnych smakoszy. Każdy precel jest starannie przygotowywany według sprawdzonych metod, z najlepszych składników, a następnie nadziewany wyjątkowymi, starannie dobranymi farszami, które nadają im niepowtarzalnego charakteru.",
    PostImage: "/precle_nadziewane.png",
    PostDate: "28-01-2023",
  },
  {
    index: 4,
    PostTitle: "Nowy lokal w Krakowie!",
    PostText:
      "Kraków, miasto o bogatej historii i kulturze, stał się miejscem kolejnego wyjątkowego wydarzenia. Na ulicy Karmelickiej 8, w sercu dawnej stolicy Polski, otwarto nowy lokal sieci Dobrych Precli. To wyjątkowe miejsce, gdzie tradycja spotyka się z nowoczesnością, szybko stało się ulubionym punktem zarówno dla mieszkańców miasta, jak i licznie odwiedzających go turystów.",
    PostImage: "/krakow.png",
    PostDate: "28-01-2023",
  },
  {
    index: 5,
    PostTitle: "Jesteśmy w Gliwicach!",
    PostText:
      "Zapraszamy gliwiczan oraz turystów do odwiedzenia nowego lokalu Dobrych Precli, aby na własne oczy przekonać się o wyjątkowości oferowanych tam przysmaków. To doskonała okazja, by odkryć, jak proste składniki mogą zamienić się w mistrzowskie dzieła kulinarne, które z pewnością zostaną w pamięci na długo.",
    PostImage: "/Wroclaw_1.png",
    PostDate: "28-01-2023",
  },
];

export const SingleLocationMapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#523735",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9b2a6",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#eb8c11",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ae9e90",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbe8cf",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#93817c",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a5b076",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#447530",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#fdfcf8",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eb8c11",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#f8c967",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#971d25",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#e9bc62",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#e98d58",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#db8555",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eb8c11",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#806b63",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8f7d77",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#8ab4f8",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#92998d",
      },
    ],
  },
];

export const mapStyles = [
  {
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffe8cf",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#971d25",
      },
      {
        weight: 3,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#8ab4f8",
      },
    ],
  },
];
