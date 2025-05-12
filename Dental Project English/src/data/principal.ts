export interface Principal {
  name: string;
  designation: string;
  image: string;
  qualifications: string[];
  experience: string;
  message: string[];
}

export const principal: Principal = {
  name: 'Dr. V. Sreenivasan',
  designation: 'Dean Dental Faculty, Principal, Professor & HOD',
  image:"/assets/princi.jpg",
  qualifications: ['PhD in Dental Sciences'],
  experience: '25+ Years',
  message: [
    'It gives me immense pleasure to welcome you to Bharati Vidyapeeth Dental College and Hospital, an institution committed to excellence in dental education and healthcare. Our mission is to nurture skilled professionals who will serve society with dedication and compassion.',
    'We pride ourselves on our state-of-the-art infrastructure, highly qualified faculty, and a curriculum that balances theoretical knowledge with practical experience. Our focus extends beyond academic excellence to character building and ethical practice.',
    'Our students benefit from hands-on training in our modern clinics, exposure to the latest dental technologies, and opportunities to participate in community service programs. We believe in creating not just skilled dentists, but compassionate healthcare providers who understand their role in society.',
    'Join us in our journey towards excellence in dental education and healthcare.'
  ]
};