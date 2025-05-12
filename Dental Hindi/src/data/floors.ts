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
    id: 'ground',
    name: 'भूतल मंज़िल',
    image: '/assets/Ground.png',
    rooms: [
      {
        name: 'बाह्य रोगी विभाग 1',
        services: ['दंत परीक्षण', 'दाँतों की सफाई', 'दंत एक्स-रे']
      },
      {
        name: 'आपातकालीन इकाई',
        services: ['आपातकालीन दंत देखभाल', 'आघात प्रबंधन', 'प्राथमिक उपचार']
      },
      {
        name: 'स्वागत कक्ष ',
        services: ['रोगी पंजीकरण', 'नियुक्ति निर्धारित करना', 'बीमा प्रक्रिया']
      }
    ]
  },
  {
    id: 'first',
    name: 'पहली मंज़िल',
    image: '/assets/first.png',
    rooms: [
      {
        name: 'शल्य चिकित्सा कक्ष 1 ',
        services: ['दंत प्रत्यारोपण', 'अक्ल दाढ़ निकालना', 'मुख संबंधी शल्य चिकित्सा']
      },
      {
        name: 'शिशु विभाग',
        services: ['बाल दंत चिकित्सा', 'रोकथाम देखभाल', 'दंत शिक्षा']
      }
    ]
  },
  {
    id: 'second',
    name: 'दूसरी मंज़िल',
    image: '/assets/second.png',
    rooms: [
      {
        name: 'ऑर्थोडॉन्टिक्स विभाग ',
        services: ['ब्रेसेज़ परामर्श ', 'एलाइनर्स फिटिंग ', 'ऑर्थोडॉन्टिक समायोजन ']
      },
      {
        name: ' एक्स-रे प्रयोगशाला ',
        services: ['डिजिटल एक्स-रे', 'सीटी स्कैन', 'दंत इमेजिंग']
      }
    ]
  },
  {
    id: 'third',
    name: 'तीसरी मंज़िल',
    image: '/assets/third.png',
    rooms: [
      {
        name: 'कॉस्मेटिक डेंटिस्ट्री',
        services: ['दाँत सफेद करना', 'विनीयर्स', 'स्माइल डिज़ाइन']
      },
      {
        name: 'कर्मचारी कक्ष',
        services: ['बैठक क्षेत्र ', 'विश्राम कक्ष ', 'प्रशिक्षण केंद्र']
      }
    ]
  },
  {
    id: 'fourth',
    name: 'चौथी मंज़िल',
    image: '/assets/fourth.png',
    rooms: [
      {
        name: 'प्रशासनिक कार्यालय',
        services: ['प्रबंधन', 'मानव संसाधन विभाग', 'लेखा विभाग']
      },
      {
        name: 'सम्मेलन कक्ष',
        services: ['सेमिनार', 'कार्यशालाएँ', 'कर्मचारी बैठकें']
      }
    ]
  },
  {
    id: 'Fifth',
    name: 'पाँचवीं मंज़िल',
    image: '/assets/fifth.png',
    rooms: [
      {
        name: 'प्रशासनिक कार्यालय',
        services: ['प्रबंधन', 'मानव संसाधन विभाग', 'लेखा विभाग']
      },
      {
        name: 'सम्मेलन कक्ष',
        services: ['सेमिनार ', 'कार्यशालाएँ', 'कर्मचारी बैठकें']
      }
    ]
  }
];