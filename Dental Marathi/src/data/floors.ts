export interface RoomService {
  name: string;
  services: string[];
}

export interface Floor {
  id: string;
  name: string;
  image: string;
  rooms: RoomService[];
}

export const floors: Floor[] = [
  {
    id: "ground",
    name: "तळमजला",
    image: '/assets/Ground.png',
    rooms: [
      {
        name: "ओपीडी १",
        services: ["दंत तपासणी", "दातांची स्वच्छता", "दंत एक्स-रे"],
      },
      {
        name: "आकस्मिक विभाग",
        services: ["आकस्मिक दंत उपचार", "दंत जखम व्यवस्थापन", "प्राथमिक उपचार"],
      },
      {
        name: "स्वागत कक्ष",
        services: ["रुग्ण नोंदणी", "अपॉइंटमेंट नियोजन", "विमा प्रक्रिया"],
      },
    ],
  },
  {
    id: "first",
    name: "पहिला मजला",
    image: '/assets/first.png',
    rooms: [
      {
        name: "शस्त्रक्रिया कक्ष १",
        services: ["दंत प्रत्यारोपण", "अक्कलदाढ काढणे", "मुखशस्त्रक्रिया"],
      },
      {
        name: "बालरोग विभाग",
        services: ["मुलांचे दंत उपचार", "प्रतिबंधक उपचार", "दंत शिक्षण"],
      },
    ],
  },
  {
    id: "second",
    name: "दुसरा मजला",
    image: '/assets/second.png',
    rooms: [
      {
        name: "ऑर्थोडॉन्टिक्स विभाग",
        services: [
          "दातांच्या ब्रेसिस सल्लामसलत",
          "अलायनर बसवणे",
          "ऑर्थोडॉन्टिक समायोजन",
        ],
      },
      {
        name: "एक्स-रे प्रयोगशाळा",
        services: ["डिजिटल एक्स-रे", "सीटी स्कॅन", "दंत इमेजिंग"],
      },
    ],
  },
  {
    id: "third",
    name: "तिसरा मजला",
    image: '/assets/third.png',
    rooms: [
      {
        name: "सौंदर्यदंत उपचार",
        services: ["दात पांढरे करणे", "व्हिनिअर्स", "स्माईल डिझाईन"],
      },
      {
        name: "कर्मचारी कक्ष",
        services: ["बैठकीची जागा", "विश्रांतीगृह", "प्रशिक्षण केंद्र"],
      },
    ],
  },
  {
    id: "fourth",
    name: "चौथा मजला",
    image: '/assets/fourth.png',
    rooms: [
      {
        name: "प्रशासनिक कार्यालये",
        services: ["व्यवस्थापन", "एचआर विभाग", "लेखा विभाग"],
      },
      {
        name: "परिषदेचा हॉल",
        services: ["परिषदा", "कार्यशाळा", "कर्मचारी बैठक"],
      },
    ],
  },
  {
    id: "fifth",
    name: "पाचवा मजला",
    image: '/assets/fifth.png',
    rooms: [
      {
        name: "प्रशासनिक कार्यालये",
        services: ["व्यवस्थापन", "एचआर विभाग", "लेखा विभाग"],
      },
      {
        name: "परिषदेचा हॉल",
        services: ["परिषदा", "कार्यशाळा", "कर्मचारी बैठक"],
      },
    ],
  },
];
