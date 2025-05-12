import { Bluetooth as Tooth, Baby, Smile, Syringe, Microscope, Brain, Bone, Timer } from 'lucide-react';

export interface Service {
  name: string;
  price: number;
  // description: string;
  
}

export interface Department {
  id: string;
  name: string;
  
  description: string;
  longDescription?: string;
  services: Service[];
}

export const departments: Department[] = [
  {
    id: 'Oral-Medicine-&-Radiology',
    name: 'Oral Medicine & Radiology',
 
    description: 'Oral Medicine & Radiology is a specialized branch of dentistry that focuses on the diagnosis and medical management of diseases affecting the oral and maxillofacial region. ',
    longDescription: 'Oral Medicine & Radiology is a specialized branch of dentistry that focuses on the diagnosis, medical management, and radiographic assessment of diseases affecting the oral and maxillofacial region. This specialty bridges the gap between dentistry and medicine, addressing oral manifestations of systemic diseases, precancerous conditions, orofacial pain syndromes, and temporomandibular joint (TMJ) disorders.',
    services: [
      {
        name: 'Case Paper',
        price: 10,
        // description: 'Professional cleaning and polishing of teeth',
       
      },
      {
        name: 'IOPA Radiograph',
        price: 50,
        
      
      },
      {
        name: 'Bitewing X-Ray',
        price: 50,

      
      },
      {
        name: 'Pedo IOPA',
        price: 50,
        
      
      },
      {
        name: 'OPG Print',
        price: 300,
      
      },
      {
        name: 'Lat Cepth Print',
        price: 300,
      
      },
      {
        name: 'Pedo IOPA',
        price: 50,
      
      },
      {
        name: 'Occusal X-Ray',
        price: 150,
      
      },
      {
        name: 'TMJ View Point',
        price: 300,
      
      },
      {
        name: 'Skull Radiograph Print',
        price: 300,
      
      },
      {
        name: 'Digital Radiograph CD',
        price: 150,
      
      },
      {
        name: 'Digital Radiograph CD & Print',
        price: 350,
      
      },
      {
        name: 'RVG',
        price: 50,
      
      },
      {
        name: 'TENS Thearpy',
        price: 50,
      
      },
      {
        name: 'Intra lesional Injections',
        price: 50,
      
      },
      {
        name: 'CBCT full mouth with TMJ/Airway',
        price: 2000,
      
      },
      {
        name: 'CBCT Both Jaws',
        price: 1700,
      
      },
      {
        name: 'CBCT Single Jaws',
        price: 1000,
      
      },
      {
        name: 'CBCT Quadrant',
        price: 600,
      
      },
      {
        name: 'Face Scan',
        price: 300,
      
      }
      
    ]
  },
  {
    id: 'pediatric-dentistry-preventive-dentistry',
    name: 'Pediatric Dentistry & Preventive Dentistry',
  
    description: 'Pediatric Dentistry & Preventive Dentistry is a specialized branch of dentistry that focuses on the oral health care of infants, children, and adolescents, including those with special health care needs.',
    longDescription: 'Pediatric Dentistry & Preventive Dentistry is a specialized branch of dentistry dedicated to the oral health care of infants, children, and adolescents, including those with special health care needs. This field focuses on the prevention, diagnosis, and treatment of dental issues in children, ensuring their overall oral well-being from infancy through teenage years.',
    services: [
      {
        name: 'Root canal Treatment-Anterior',
        price: 300,
       
      },
      {
        name: 'Root canal Treatment-Posterior',
        price: 400,
        
      },
      {
        name: 'Pulpectomy',
        price: 150,
       
      },
      {
        name: 'Stainless steel crown-Primary',
        price: 150,
       
      },
      {
        name: 'Stainless steel crown-Permanent',
        price: 200,
       
      },
      {
        name: 'Pulpotomy-Primary',
        price: 150,
       
      },
      {
        name: 'Pulpotomy-Permanent',
        price: 200,
       
      },
      {
        name: 'Indirect Pulp Capping-CA(OH)',
        price: 50,
       
      },
      {
        name: 'Indirect Pulp Capping-MTA',
        price: 1000,
       
      },
      {
        name: 'Glass Ionomer Cement',
        price: 50,
       
      },
      {
        name: 'Resin Modified GIC',
        price: 100,
       
      },
      {
        name: 'Composite Restoration',
        price: 150,
       
      },
      {
        name: 'Strip Crown Composite',
        price: 200,
       
      },
      {
        name: 'Acrylic Temporary Crown',
        price: 150,
       
      },
      {
        name: 'Pit and Fissure sealants/PRR-GIC',
        price: 50,
       
      },
      {
        name: 'Pit and Fissure sealants/PRR-RMGIC/Resin',
        price: 1000,
       
      },
      {
        name: 'Oral Prohylaxis+Fluoride Application gel',
        price: 50,
       
      },
      {
        name: 'Oral Prohylaxis+Fluoride Application varnish',
        price: 150,
       
      },
      {
        name: 'Extraction-Primary',
        price: 50,
       
      },
      {
        name: 'Extraction-Permanent',
        price: 100,
       
      },
      {
        name: 'Intra Oral Periapical Radiograph',
        price: 100,
       
      },
      {
        name: 'Space Maintaineer-Unilateral',
        price: 150,
       
      },
      {
        name: 'Space Maintaineer-Bilateral',
        price: 250,
       
      },
      {
        name: 'Habit Breaking Appliance',
        price: 300,
       
      },
      {
        name: 'Removable Partial Denture',
        price: 300,
       
      },
      {
        name: 'Surgical Extraction',
        price: 200,
       
      },
      {
        name: 'Post and Core with Filling',
        price: 300,
       
      },
      {
        name: 'Splinling',
        price: 300,
       
      },
      {
        name: 'Minor Surgical Procedure without Laser',
        price: 300,
       
      },
      {
        name: 'Minor Surgical Procedure with Laser',
        price: 1000,
       
      },
      {
        name: 'Minor Orthodontic Procedure Removable',
        price: 300,
       
      },
      {
        name: 'Minor Orthodontic Procedure Fixed',
        price: 500,
       
      },
      {
        name: 'Procedure involving MTA',
        price: 150,
       
      },
      {
        name: 'Emergency Access opening',
        price: 150,
       
      },
      {
        name: '2x4 Appliance',
        price: 1000,
       
      },
      {
        name: 'Oral Screen',
        price: 3500,
       
      },
      {
        name: 'Twin Block',
        price: 3500,
       
      },
      {
        name: 'Myofunction appliance',
        price: 3500,
       
      },
      {
        name: 'SDF (Per visit)',
        price: 150,
       
      },
      {
        name: 'Zirconia Crown',
        price: 1500,
       
      },

    ]
  },
  {
    id: 'conservative-dentistry-endodontics',
    name: 'Consevative Dentistry & Endodontics',
  
    description: 'Conservative Dentistry & Endodontics is a specialized branch of dentistry that focuses on the diagnosis, prevention, and treatment of dental caries, damaged teeth, and diseases of the dental pulp and periapical tissues. ',
    longDescription: 'Conservative Dentistry & Endodontics is a specialized branch of dentistry dedicated to the diagnosis, prevention, and treatment of dental caries, structural tooth damage, and diseases affecting the pulp and periapical tissues. The primary focus of this field is to preserve natural teeth, restore their function and aesthetics, and prevent further deterioration using advanced dental techniques.',
    services: [
      {
        name: 'Temporary Filling',
        price: 50,
       
      },
      {
        name: 'Silver Amalgum (Class I)',
        price: 150,
        
      },
      {
        name: 'Silver Amalgum (Class II)',
        price: 150,
        
      },
      {
        name: 'Silver Amalgum (MOD)',
        price: 150,
        
      },
      {
        name: 'GIS Restoration(Class I)',
        price: 150,
        
      },
      {
        name: 'GIS Restoration(Class II)',
        price: 150,
        
      },
      {
        name: 'GIS Restoration (Class III)',
        price: 150,
        
      },
      {
        name: 'Miracle Mix(Class I)',
        price: 150,
        
      },
      {
        name: 'Miracle Mix (Class II)',
        price: 150,
        
      },
      {
        name: 'Miracle Mix (Class v)',
        price: 150,
        
      },
      {
        name: 'Miracle Mix(MOD)',
        price: 150,
        
      },
      {
        name: 'Composite (Class I)',
        price: 250,
        
      },
      {
        name: 'Composite (Class II)',
        price: 250,
        
      },
      {
        name: 'Composite (Class v)',
        price: 150,
        
      },
      {
        name: 'Composite(MOD)',
        price: 250,
        
      },
      {
        name: 'Direct/Indirect Pulp Caping(Excluding Filling)',
        price: 500,
        
      },
      {
        name: 'Post & Core(Excluding Filling)',
        price: 500,
        
      },
      {
        name: 'Bleaching',
        price: 1800,
        
      },
      {
        name: 'Root Canal Treatment(Excluding Filling)',
        price: 600,
        
      },
      {
        name: 'Direct/Indirect Pulp Caping(Excluding Filling)',
        price: 500,
        
      },
      {
        name: 'Re-Root Canal Treatment(Excluding Filling)',
        price: 750,
        
      },
      {
        name: 'Endodontic Surgeries(Excluding Filling)',
        price: 20000,
        
      },
      {
        name: 'Splinting',
        price: 2000,
        
      },
      {
        name: 'Veneer(Composite)',
        price: 500,
        
      },
      {
        name: 'Veneer(Ceramic)',
        price: 2500,
        
      },
      {
        name: 'Ialay(Metal)',
        price: 250,
        
      },
      {
        name: 'Ialay(Ceramic)',
        price: 2500,
        
      },
      {
        name: 'Onlay(Metal)',
        price: 500,
        
      },
      {
        name: 'Onlay(Ceramic)',
        price: 3500,
        
      },
      {
        name: 'Endocrown',
        price: 3500,
        
      },
      {
        name: 'PFM Crown',
        price: 1200,
        
      },
      {
        name: 'RVG',
        price: 50,
        
      },
      {
        name: 'Crown lengthening(per tooth)',
        price: 400,
        
      },

    ]
  },
  {
    id: 'department-of-oral-and-maxillofacial-surgery',
    name: 'Oral And Maxillofacial Surgery',
  
    description: 'Oral and Maxillofacial Surgery (OMFS) is a specialized branch of dentistry that focuses on the diagnosis, surgical treatment, and management of diseases, injuries, and defects affecting the mouth, jaws, face, and neck. ',
    longDescription: 'Oral and Maxillofacial Surgery (OMFS) is a specialized branch of dentistry that focuses on the surgical diagnosis and treatment of diseases, injuries, and defects affecting the mouth, jaws, face, and skull. This field combines dental, medical, and surgical expertise to manage complex oral health conditions, restore function, and improve aesthetics.',
    services: [
      {
        name: 'Simple Extraction(Tooth)',
        price: 150,
       
      },
      {
        name: 'Extraction of Root Canal Treated Tooth (Tooth)',
        price: 500,
        
      },
      {
        name: 'Third Molar Extraction (Non Surgical) (Tooth)',
        price: 500,
        
      },
      {
        name: 'Third Molar Extraction ( Surgical) (Tooth)',
        price: 1000,
        
      },
      {
        name: 'Ortho Extraction',
        price: 250,
        
      },
      {
        name: 'Alveololasty(Quardrant)',
        price: 500,
        
      },
      {
        name: 'Incisional Biopsy',
        price: 500,
        
      },
      {
        name: 'Excisional Biopsy',
        price: 1000,
        
      },
      {
        name: 'Apicoectomy(Material cost)',
        price: 1000,
        
      },
      {
        name: 'Canine Exposure',
        price: 1000,
        
      },
      {
        name: 'Cyst Enucleation',
        price: 1500,
        
      },
      {
        name: 'Implant (Placement)(Bioline/Adin)',
        price: 5000,
        
      },
      {
        name: 'Implant (Placement)(Biohorizon)',
        price: 10000,
        
      },
      {
        name: 'Sinus Lift(Direct)(Tooth)',
        price: 3500,
        
      },
      {
        name: 'Implant Crown',
        price: 3000,
        
      },
      {
        name: 'Closed Reduction(IMF)',
        price: 5000,
        
      },
      {
        name: 'Major Surgery',
        price: 7500,
        
      }
      
    ]
    
  },
  {
    id: 'department-of-prosthodontics-crown-and-bridge',
    name: 'Prosthodontics Crown And Bridge',
  
    description: 'Prosthodontics is a specialized branch of dentistry that focuses on the restoration and replacement of missing or damaged teeth to improve oral function, aesthetics, and overall dental health.',
    longDescription: 'Prosthodontics is a specialized branch of dentistry that focuses on the restoration and replacement of missing or damaged teeth to enhance oral function, aesthetics, and overall health. Within prosthodontics, crowns and bridges play a crucial role in restoring decayed, broken, or missing teeth while maintaining the natural alignment and function of the bite.',
    services: [
      {
        name: 'Complete Denture (Per Arch)',
        price: 250,
       
      },
      {
        name: 'Denture Repair (Per Arch)',
        price: 100,
        
      },
      {
        name: 'Relining/Rebasing of the Denture (Per Arch)',
        price: 200,
        
      },
      {
        name: 'Acrylic Removable Partial Denture (Per Arch)',
        price: 200,
        
      },
      {
        name: 'Rebasing / Relining (Per Arch)',
        price: 200,
        
      },
      {
        name: 'Improved Quality Denture',
        price: 2000,
        
      },
      {
        name: 'Cast Partial Denture (Per Arch)',
        price: 12000,
        
      },
      {
        name: 'Flexible Denture (Per Arch)',
        price: 4500,
        
      },
      {
        name: 'Soft Liner - Relining (Per Arch)',
        price: 500,
        
      },
      {
        name: 'Metal Crown (Per Unit)',
        price: 1000,
        
      },
      {
        name: 'PFM Crown (Per Unit)',
        price: 1200,
        
      },
      {
        name: 'All Ceramic Crown (Per Unit)',
        price: 3500,
        
      },
      {
        name: 'Temporary Crown (Acrylic) (Per Unit)',
        price: 100,
        
      },
      {
        name: 'Cad/Cam Temporary Crown (Per Unit)',
        price: 500,
        
      },
      {
        name: 'Wax Mock Up (Per Unit)',
        price: 200,
        
      },
      {
        name: 'Crown Removal (Per Unit)',
        price: 150,
        
      },
      {
        name: 'Cast Post and Core (Per Post)',
        price: 500,
        
      },
      {
        name: 'Fiber Post and Core (Per Post)',
        price: 500,
        
      },
      {
        name: 'Pre Fabricated Metal Post and Core (Per Post)',
        price: 500,
        
      },
      {
        name: 'Recementation (Per Unit)',
        price: 150,
        
      }, 
    ]
  },
  {
    id: 'department-of-orthodontics',
    name: 'Department Of Orthodontics',
  
    description: 'Orthodontics is a specialized branch of dentistry focused on the diagnosis, prevention, and correction of misaligned teeth and jaws.',
    longDescription: 'The Department of Orthodontics specializes in the diagnosis, prevention, and treatment of dental and facial irregularities, including malocclusions (misaligned bites), crowded or spaced teeth, and jaw discrepancies. This branch of dentistry plays a crucial role in improving dental function, speech clarity, and aesthetics, while also enhancing a patient’s overall oral health.',
    services: [
      {
        name: 'Fixed Treatment Begg',
        price: 4500,
       
      },
      {
        name: 'Fixed Treatment PEA',
        price: 7000,
        
      },
      {
        name: 'Night Guard Appliance',
        price: 1500,
        
      },
      {
        name: 'Feeding Appliance for CLCP',
        price: 2000,
        
      },
      {
        name: 'Myofunctional Appliance',
        price: 3500,
        
      },
      {
        name: 'Repair',
        price: 600,
        
      },
      {
        name: 'Essix Retainer (Per Arch)',
        price: 1200,
        
      },
      {
        name: 'Hawleys Retainer (Per Arch)',
        price: 1000,
        
      },
      {
        name: 'Headgear/Chincup/Facemask)',
        price: 3500,
        
      },
      {
        name: 'Fixed Appliance Treatment (Ceramic)',
        price: 14000,
        
      },
      {
        name: 'Lingual without Setup',
        price: 15000,
        
      },
      {
        name: 'Lingual with Setup',
        price: 1500,
        
      },
      {
        name: 'Self Ligating Metal',
        price: 20000,
        
      },
      {
        name: 'Self Ligating Ceramic',
        price: 30000,
        
      },
      {
        name: 'Microimplant(each)',
        price: 2000,
        
      },
      {
        name: 'Forsus',
        price: 7500,
        
      },
      {
        name: 'Hyrax/RPE',
        price: 3500,
        
      },
      {
        name: 'Clear Aligner(lab Charging)',
        price: 7000,
        
      },
      {
        name: 'Breakages(Begg - Bracket)',
        price: 200,
        
      },
      {
        name: 'Breakages(PEA)',
        price: 300,
        
      },
      {
        name: 'Breakages( Self Ligating Metal)',
        price: 500,
        
      },
      {
        name: 'Breakages(Ceramic)',
        price: 500,
        
      },
      {
        name: 'Breakages(Self Ligating Ceramic)',
        price: 1000,
        
      },
      {
        name: 'Breakages(Lingual)',
        price: 1000,
        
      },   
    ]
    
  },
  {
    id: 'department-of-prosthodontics-crown-and-bridge',
    name: 'Prosthodontics Crown And Bridge',
  
    description: 'Prosthodontics is a specialized branch of dentistry focused on the diagnosis, treatment planning, rehabilitation, and maintenance of oral function, comfort, and aesthetics for patients with missing or deficient teeth and oral tissues.',
    longDescription: 'Among these, crowns and bridges are commonly used fixed dental restorations designed to enhance chewing efficiency, speech, and smile aesthetics while preventing further dental deterioration.',
    services: [
      {
        name: 'TMJ Splint (Hard Splint)',
        price: 1500,
       
      },
      {
        name: 'TMJ Splint (Soft Splint)',
        price: 800,
        
      },
      {
        name: 'Maxillofacial Prosthesis (Per Case)',
        price: 1000,
        
      },
      {
        name: 'Adin / Bioline Implant (Per Implant)',
        price: 5000,
        
      },
      {
        name: 'Biohorizon Implant (Per Implant)',
        price: 10000,
        
      },
      {
        name: 'Implant Crown (Per Unit)(PFM)',
        price: 3000,
        
      },
      {
        name: 'Implant Crown (Per Unit) (Ceramic)',
        price: 4500,
        
      },
      {
        name: 'Screw Retained Crown (Per Unit)(PFM)',
        price: 5000,
        
      },
      {
        name: 'Screw Retained Crown (Per Unit)(Ceramic)',
        price: 6000,
        
      },
      {
        name: 'All-on-4/6 Prosthesis (Per Arch)(With Conventional Abutments) ',
        price: 60000,
        
      },
      {
        name: 'All-on-4/6 Prosthesis (Per Arch)(With Multi-Unit Abutments)',
        price: 100000,
        
      },
      
    ]
    
  },
  {
    id: 'department-of-oral-pathology-and-microbiology',
    name: 'Oral Pathology And Microbiology',
  
    description: 'Oral Pathology and Microbiology is a specialized branch of dentistry that focuses on the diagnosis, study, and management of diseases affecting the oral and maxillofacial regions.',
    longDescription: 'Oral Pathology and Microbiology is a specialized branch of dentistry dedicated to studying, diagnosing, and understanding diseases affecting the oral and maxillofacial regions. It plays a crucial role in identifying infections, tumors, autoimmune diseases, and systemic conditions that manifest in the oral cavity. This field integrates histopathology, microbiology, and molecular diagnostics to ensure precise disease identification and effective treatment planning.',
    services: [
      {
        name: 'Histopathology Report',
        price: 250,
       
      },
      {
        name: 'Exfoliative Cytology',
        price: 30,
        
      },
      {
        name: 'FNAC',
        price: 100,
        
      },
      {
        name: 'Complete Blood Count (CBC)',
        price: 70,
        
      },
      {
        name: 'Random Blood Sugar (RBS) ',
        price: 50,
        
      },
      {
        name: 'Bleeding Time, Clotting Time ',
        price: 50,
        
      }
      
    ]
    
  },
  {
    id: 'department-of-periodontology',
    name: 'Periodontology',
  
    description: 'Periodontology is the branch of dentistry that specializes in the prevention, diagnosis, and treatment of diseases affecting the supporting structures of the teeth, including the gums, alveolar bone, periodontal ligament, and cementum.',
    longDescription: 'Periodontology is a specialized branch of dentistry that focuses on the prevention, diagnosis, and treatment of diseases affecting the supporting structures of the teeth, including the gums, periodontal ligament, alveolar bone, and cementum. It plays a crucial role in maintaining oral health and preventing tooth loss, as periodontal diseases are among the leading causes of dental complications worldwide.',
    services: [
      {
        name: 'Manual Scaling and Root Planing ',
        price: 50,
       
      },
      {
        name: 'Ultra Sonic Scaling and Root Planing',
        price: 100,
        
      },
      {
        name: 'Splinting (Per quadrant)',
        price: 800,
        
      },
      {
        name: 'Sub Gingival Curettage (Per quadrant)',
        price: 250,
        
      },
      {
        name: 'Gingivoplasty / Gingivectomy (Per quadrant)',
        price: 250,
        
      },
      {
        name: 'Frenectomy (Per quadrant)',
        price: 250,
        
      },
      {
        name: 'Flap Surgery (Per quadrant)',
        price: 400,
        
      },
      {
        name: 'Crown Lengthening (Per procedure)',
        price: 250,
        
      },
      {
        name: 'Operculectomy / Epulis Excision ',
        price: 250,
        
      },
      {
        name: 'Depigmentation (Per quadrant) other than laser ',
        price: 250,
        
      },
      {
        name: 'Mucogingival procedures (periodontal plastic surgery) (Per procedure) ',
        price: 500,
        
      },
      {
        name: 'Drainage of abscess (Per procedure)',
        price: 250,
        
      },
      {
        name: 'Ridge augmentation (Per procedure)',
        price: 250,
        
      },
      {
        name: 'Resective osseous surgeries (Per procedure)',
        price: 250,
        
      },
      {
        name: 'Extraction and Socket Preservation(plus graft if required)',
        price: 150,
        
      },
      {
        name: 'Advanced Surgical Procedures using Laser Surgeries',
        price: 1000,
        
      },
      {
        name: 'Piezosurgery-Micro Surgery-Electro Cautery (Per procedure)',
        price: 1000,
        
      },
      {
        name: 'Bone Graft Surgical Procedure(for 0.5gm)',
        price: 2500,
        
      },
      {
        name: 'Guided Tissue Regeneration (GTR) Membrane(per membrane)',
        price: 2500,
        
      },
      {
        name: 'Dental Implant Surgery (Adin Implant)',
        price: 5000,
        
      },
      {
        name: 'Dental Implant Surgery (Bioline Implant)',
        price: 250,
        
      },
      {
        name: 'Dental Implant Surgery (Ostemm Biohorizon Implant)',
        price: 250,
        
      },
      {
        name: 'Dental Implant Surgery (If required Bone Graft (GTR Graft)(per 0.5gm))',
        price: 2500,
        
      },
      {
        name: 'Indirect Sinus Lift Procedure ',
        price: 0,
        
      },
      {
        name: 'Direct Sinus Lift Procedure ',
        price: 3500,
        
      },
      {
        name: 'Implant Prosthesis (PFM Implant Crown)',
        price: 3000,
        
      },
      {
        name: 'Implant Prosthesis (All Ceramic Crown)',
        price: 4500,
        
      },
      {
        name: 'Implant Prosthesis (Screw Retained Crown)',
        price: 6000,
        
      },
      {
        name: 'Implant Prosthesis (Screw Retained All Ceramic)',
        price: 6000,
        
      },
      {
        name: 'Implant Prosthesis (Temporary Crown)',
        price: 100,
        
      },
      {
        name: 'Implant Prosthesis (All on 4/6 Prosthesis (Framework))',
        price: 3000,
        
      },
      {
        name: 'Implant Prosthesis (PFM Implant Crown)',
        price: 3000,
        
      },
      {
        name: 'Implant Prosthesis (All on 4/6 Prosthesis (Framework with multi-unit abutments))',
        price: 100000,
        
      },
      {
        name: 'Local Drug Delivery (Per tooth)',
        price: 300,
        
      },
      {
        name: 'Root Biomodification (Per tooth)',
        price: 150,
        
      },

    ]
    
  },
  {
    id: 'department-of-public-health-dentistry',
    name: 'Public Health Dentistry',
  
    description: 'Public Health Dentistry is a specialized branch of dentistry that focuses on preventing and controlling dental diseases at the community level rather than just individual treatment',
    longDescription: 'Public Health Dentistry is a specialized field of dentistry that focuses on the prevention, control, and management of oral health issues at the community level rather than treating individuals alone. This branch of dentistry integrates public health principles with dental care, aiming to promote oral health awareness, prevent diseases, and ensure accessible and affordable dental services for large populations.',
    services: [
      {
        name: 'Fluoride (APF) Application ',
        price: 50,
       
      },
      {
        name: 'Pit and Fissure Sealant Application  ',
        price: 150,
       
      },
      {
        name: 'Atraumatic Restorative Technique (ART)',
        price: 50,
       
      },
    ]
  }
];

export function getDepartmentById(id: string): Department | undefined {
  return departments.find(dept => dept.id === id);
}