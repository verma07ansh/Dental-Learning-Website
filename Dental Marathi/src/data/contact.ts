export interface ContactInfo {
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  phone: {
    main: string;
    emergency: string;
  };
  email: {
    general: string;
    admissions: string;
  };
  officeHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const contactInfo: ContactInfo = {
  address: {
    line1: 'भारती विद्यापीठ दंत महाविद्यालय आणि रुग्णालय',
    line2: 'सेक्टर ७, सीबीडी बेलापूर',
    city: 'नवी मुंबई',
    state: 'महाराष्ट्र',
    pincode: '४००६१४',
    country: 'भारत'
  },
  phone: {
    main: '+९१ (०२२) २७७८-१०००',
    emergency: '+९१ (०२२) २७७८-१००१'
  },
  email: {
    general: 'info@bvdental.edu',
    admissions: 'admissions@bvdental.edu'
  },
  officeHours: {
    weekdays: 'सकाळी ९:०० - संध्याकाळी ५:००',
    saturday: 'सकाळी ९:०० - दुपारी १:००',
    sunday: 'बंद'
  }
};
