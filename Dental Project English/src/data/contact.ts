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
    line1: 'Bharati Vidyapeeth Dental College and Hospital',
    line2: 'Sector 7, CBD Belapur',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    pincode: '400614',
    country: 'India'
  },
  phone: {
    main: '+91 (022) 2778-1000',
    emergency: '+91 (022) 2778-1001'
  },
  email: {
    general: 'info@bvdental.edu',
    admissions: 'admissions@bvdental.edu'
  },
  officeHours: {
    weekdays: '9:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed'
  }
};