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
      name: 'Ground Floor',
      image: '/assets/Ground.png',
      rooms: [
        {
          name: 'OPD 1',
          services: ['Dental Examination', 'Teeth Cleaning', 'Dental X-Ray']
        },
        {
          name: 'Emergency Unit',
          services: ['Emergency Dental Care', 'Trauma Management', 'First Aid']
        },
        {
          name: 'Reception',
          services: ['Patient Registration', 'Appointment Scheduling', 'Insurance Processing']
        }
      ]
    },
    {
      id: 'first',
      name: 'First Floor',
      image: '/assets/first.png',
      rooms: [
        {
          name: 'Surgical Suite 1',
          services: ['Dental Implants', 'Wisdom Teeth Extraction', 'Oral Surgery']
        },
        {
          name: 'Pediatric Wing',
          services: ['Children\'s Dentistry', 'Preventive Care', 'Dental Education']
        }
      ]
    },
    {
      id: 'second',
      name: 'Second Floor',
      image: '/assets/second.png',
      rooms: [
        {
          name: 'Orthodontics Department',
          services: ['Braces Consultation', 'Aligners Fitting', 'Orthodontic Adjustments']
        },
        {
          name: 'X-Ray Lab',
          services: ['Digital X-Rays', 'CT Scans', 'Dental Imaging']
        }
      ]
    },
    {
      id: 'third',
      name: 'Third Floor',
      image: '/assets/third.png',
      rooms: [
        {
          name: 'Cosmetic Dentistry',
          services: ['Teeth Whitening', 'Veneers', 'Smile Design']
        },
        {
          name: 'Staff Room',
          services: ['Meeting Area', 'Break Room', 'Training Center']
        }
      ]
    },
    {
      id: 'fourth',
      name: 'Fourth Floor',
      image: '/assets/fourth.png',
      rooms: [
        {
          name: 'Administrative Offices',
          services: ['Management', 'HR Department', 'Accounts']
        },
        {
          name: 'Conference Hall',
          services: ['Seminars', 'Workshops', 'Staff Meetings']
        }
      ]
    },
    {
      id: 'Fifth',
      name: 'Fifth Floor',
      image: '/assets/fifth.png',
      rooms: [
        {
          name: 'Administrative Offices',
          services: ['Management', 'HR Department', 'Accounts']
        },
        {
          name: 'Conference Hall',
          services: ['Seminars', 'Workshops', 'Staff Meetings']
        }
      ]
    }
  ];