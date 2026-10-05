import { BuilderData } from '@/types/builder';

export const honerHomesData: BuilderData = {
  company: {
    id: 'honer-homes',
    name: 'Honer Developers Pvt. Ltd.',
    shortName: 'Honer Homes',
    type: 'Private Limited Real Estate Developer',
    logo: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=150&auto=format&fit=crop&q=80',
    location: 'Hitec City & Gopanpally Corridor, Hyderabad, Telangana',
    headquarters: 'Honer Corporate, 4th Floor, Above Star Market, Gopanpally Main Road, Tellapur, Hyderabad - 500019',
    foundedYear: 2016,
    status: 'Verified',
    website: 'https://honerhomes.com',
    description: 'Honer Homes is one of Hyderabad’s fastest-growing premium residential developers, celebrated for pioneering massive integrated township projects with expansive clubhouses and lifestyle sports arenas in Tellapur, Gopanpally, and Kollur corridors. With high design efficiency and solid engineering, Honer delivers modern urban living experiences.',
    vision: 'To build innovative, high-value, and lifestyle-enriching gated communities that transform everyday living.',
    mission: 'Create meticulously planned residential communities on time, combining engineering precision, top-notch amenities, and transparent ethics.',
    cin: 'U45309TG2016PTC111829',
    pan: 'AABCH4910N',
    tagline: 'Life at its Best',
    phone: '+91 40 4888 8999',
    email: 'info@honerhomes.com'
  },
  directors: [
    {
      id: 'dir-hh-1',
      name: 'Balakrishna Reddy',
      designation: 'Managing Director',
      experience: '18+ Years in Real Estate & Construction Management',
      din: '07548910',
      bio: 'Steers corporate strategy, mega township acquisitions, and financial planning across Honer developments.'
    },
    {
      id: 'dir-hh-2',
      name: 'Swapna Kumar',
      designation: 'Director & Chief Operations Officer',
      experience: '16+ Years in Project Execution & Quality Engineering',
      din: '07548942',
      bio: 'Leads engineering operations, MIVAN shuttering systems, and contractor milestone management.'
    },
    {
      id: 'dir-hh-3',
      name: 'P. Venkateshwar Rao',
      designation: 'Director - Business Development',
      experience: '15+ Years in Urban Planning & Statutory Compliances',
      din: '08129034',
      bio: 'Manages municipal sanctions, TS-RERA governance, and customer handover frameworks.'
    }
  ],
  highlights: {
    yearsExperience: '9+ Years',
    projectsDelivered: '7+ Landmarks',
    areaDeveloped: '10+ Million Sq.ft',
    citiesPresence: 'Hyderabad',
    happyFamilies: '8,000+ Families',
    underConstructionArea: '7.8 Million Sq.ft',
    onTimeDeliveryRate: '98.6% Delivery Record'
  },
  projects: [
    {
      id: 'hh-p1',
      name: 'Honer Signatis',
      location: 'Kollur - Tellapur Corridor, Near ORR Exit 2, Hyderabad',
      launchDate: 'Q4 2022',
      expectedCompletion: 'Dec 2026',
      totalUnits: '3,276 Premium High-Rise Apartments',
      status: 'Under Construction',
      type: 'Mega Integrated High-Rise Township (25 Floors)',
      reraNumber: 'P02400005188',
      floors: '25 Floors',
      towers: '18 Towers over 27.5 Acres',
      priceRange: '₹1.15 Cr - ₹2.25 Cr'
    },
    {
      id: 'hh-p2',
      name: 'Honer Aquantis',
      location: 'Gopanpally - Gachibowli, Hyderabad',
      launchDate: 'Q3 2019',
      expectedCompletion: 'Completed / Ready to Move',
      totalUnits: '1,216 Luxury High-Rise Homes',
      status: 'Ready to Move',
      type: 'Lakeview Gated High-Rise Community',
      reraNumber: 'P02400001290',
      floors: '30 Floors',
      towers: '6 Towers over 10.5 Acres',
      priceRange: '₹1.35 Cr - ₹2.6 Cr'
    },
    {
      id: 'hh-p3',
      name: 'Honer Vivantis',
      location: 'Tellapur, Gachibowli Extension, Hyderabad',
      launchDate: 'Q1 2017',
      expectedCompletion: 'Completed / Ready to Move',
      totalUnits: '760 Gated Residences',
      status: 'Ready to Move',
      type: 'Modern Lifestyle Gated Community',
      reraNumber: 'P02400000188',
      floors: '12 Floors',
      towers: '7 Towers over 11 Acres',
      priceRange: '₹95 Lakhs - ₹1.8 Cr'
    },
    {
      id: 'hh-p4',
      name: 'Honer Richmont',
      location: 'Mokila - Shankarpally Road, West Hyderabad',
      launchDate: 'Q1 2023',
      expectedCompletion: 'Jun 2027',
      totalUnits: '144 Ultra-Luxury 5 BHK Mansions',
      status: 'Under Construction',
      type: 'Exclusive Gated Villa Community',
      reraNumber: 'P02400005712',
      floors: 'G + 2 Floors',
      towers: '28 Acres Villa Enclave',
      priceRange: '₹4.2 Cr - ₹7.5 Cr'
    }
  ],
  qualityDetails: [
    {
      id: 'qd-hh-1',
      category: 'Civil & Structure',
      title: 'Monolithic RCC Shear Wall Engineering',
      brandOrSpec: 'MIVAN Aluminum Shuttering & Fe 550D TMT Steel (JSW)',
      description: 'Casted in single-pour monolithic concrete for high structural stability, thermal insulation, and zero joint leakages.',
      certification: 'JNTU Structural Proof Checked'
    },
    {
      id: 'qd-hh-2',
      category: 'Flooring & Finishes',
      title: 'Glazed Vitrified Double-Charged Tiles',
      brandOrSpec: 'Kajaria / Somany 800x1600mm Porcelain Slabs',
      description: 'Stain-free vitrified flooring across living, dining, and passages with anti-skid tiles in balconies and washrooms.',
      certification: 'ISO 13006 Certified'
    },
    {
      id: 'qd-hh-3',
      category: 'Doors, Windows & Glass',
      title: 'High-Grade UPVC Sliding Doors & Windows',
      brandOrSpec: 'NCL VEKA / Aparna Venster with 5mm Toughened Glass',
      description: 'Wind-resistant UPVC system engineered with stainless steel mesh and multi-point security hardware.',
      certification: 'BS EN 12608 Standard'
    },
    {
      id: 'qd-hh-4',
      category: 'Electrical & Safety',
      title: 'Concealed Flame-Proof Cabling & Modular Accessories',
      brandOrSpec: 'Havells / Polycab FRLS with Schneider Livia Series',
      description: 'Concealed copper wiring with individual ELCB/MCB distribution panels and 100% DG generator backup.',
      certification: 'IS 694 Compliance'
    },
    {
      id: 'qd-hh-5',
      category: 'Sanitary & Plumbing',
      title: 'Premium Contemporary Bath Fittings',
      brandOrSpec: 'Kohler / Grohe CP Fittings with Hindware Italian Sanitary',
      description: 'Hydro-pneumatic water pumping system delivering balanced water pressure with solar hot water provision.',
      certification: 'UPC-I Standard'
    },
    {
      id: 'qd-hh-6',
      category: 'Elevators & Utilities',
      title: 'High-Speed Automated Elevators (2.5 m/s)',
      brandOrSpec: 'Schindler / Kone with Automatic Rescue System',
      description: 'High capacity passenger and service lifts equipped with emergency intercom and surveillance cameras.',
      certification: 'IS 14665 Code'
    }
  ],
  amenities: [
    {
      id: 'am-hh-1',
      name: 'Club Signatis (131,000+ Sft Mega Clubhouse)',
      category: 'Community & Leisure',
      icon: 'Building2',
      available: true,
      highlight: 'One of the largest residential clubhouses in South India with multi-level amenities'
    },
    {
      id: 'am-hh-2',
      name: 'Temperature-Controlled Indoor & Outdoor Pools',
      category: 'Sports & Fitness',
      icon: 'Waves',
      available: true,
      highlight: 'All-weather heated indoor swimming pool plus Olympic-size outdoor pool'
    },
    {
      id: 'am-hh-3',
      name: 'Full-Scale Indoor Sports Arena',
      category: 'Sports & Fitness',
      icon: 'Activity',
      available: true,
      highlight: '6 badminton courts, 2 squash courts, table tennis & billiards'
    },
    {
      id: 'am-hh-4',
      name: 'Gymnasium, Crossfit & Aerobics Center',
      category: 'Health & Wellness',
      icon: 'Dumbbell',
      available: true,
      highlight: 'State-of-the-art gym with dedicated personal trainers and spinning studio'
    },
    {
      id: 'am-hh-5',
      name: '81% Open Green Spaces & Central Park',
      category: 'Eco-Friendly & Green',
      icon: 'Leaf',
      available: true,
      highlight: 'Lush landscaped parks with walking trails and water fountains'
    },
    {
      id: 'am-hh-6',
      name: '24/7 RFID Boom Barriers & Surveillance',
      category: 'Convenience & Security',
      icon: 'ShieldCheck',
      available: true,
      highlight: 'Comprehensive CCTV coverage, visitor digital logging & 24/7 security guards'
    }
  ],
  documents: [
    {
      id: 'doc-hh-1',
      title: 'TS-RERA Project Registration Certificate',
      documentType: 'RERA Registration',
      issuedBy: 'TS-RERA Telangana',
      issueDate: '05 Nov 2022',
      validTill: '31 Dec 2026',
      status: 'Verified',
      fileSize: '4.0 MB',
      verificationStatus: 'RERA Approved'
    },
    {
      id: 'doc-hh-2',
      title: 'State Environmental Impact Clearance (SEIAA)',
      documentType: 'Environmental Clearance',
      issuedBy: 'SEIAA Telangana',
      issueDate: '18 Aug 2022',
      validTill: '17 Aug 2029',
      status: 'Verified',
      fileSize: '5.5 MB',
      verificationStatus: 'Government Verified'
    },
    {
      id: 'doc-hh-3',
      title: 'HMDA Final Building Permission & Plan Sanction',
      documentType: 'GHMC / HMDA Sanction',
      issuedBy: 'HMDA Hyderabad',
      issueDate: '12 Sep 2022',
      validTill: '11 Sep 2028',
      status: 'Verified',
      fileSize: '7.2 MB',
      verificationStatus: 'Government Verified'
    },
    {
      id: 'doc-hh-4',
      title: 'Telangana Disaster & Fire Services NOC',
      documentType: 'Fire NOC',
      issuedBy: 'State Disaster Response and Fire Services Department',
      issueDate: '28 Jul 2022',
      validTill: '27 Jul 2027',
      status: 'Verified',
      fileSize: '2.7 MB',
      verificationStatus: 'Government Verified'
    }
  ],
  rera: {
    registrationNumber: 'TS-RERA REG: P02400005188 / P02400005712',
    validity: 'Valid up to Dec 2026',
    stateAuthority: 'Telangana Real Estate Regulatory Authority (TS-RERA)',
    verified: true,
    websiteUrl: 'https://rera.telangana.gov.in',
    lastQuarterFiling: 'Q2 2024 Audit Submitted'
  },
  profileCompletion: {
    directors: 100,
    materials: 95,
    projects: 100,
    amenities: 95,
    documents: 100,
    overall: 98,
    lastUpdated: '11 Sep 2024'
  },
  informationUsage: [
    {
      title: 'Property Portals Live Inventory Feeds',
      description: 'Direct API integration of floor layout drawings, unit pricing tiers, and construction stage photos.',
      icon: 'Share2'
    },
    {
      title: 'Bank Home Loan APF Clearances',
      description: 'Pre-approved loan processing codes with SBI, HDFC, ICICI, and Axis Bank for fast loan sanctions.',
      icon: 'BadgeDollarSign'
    },
    {
      title: 'Mandatory TS-RERA Quarterly Filings',
      description: 'Quarterly compliance certificates, physical progress photos, and escrow bank statements submitted on schedule.',
      icon: 'FileCheck'
    }
  ],
  privacyNotice: {
    lastAudit: '25 Aug 2024 by BDO India Assurance',
    complianceStandard: 'ISO 9001:2015 & TS-RERA Regulatory Guidelines',
    disclaimer: 'All technical specs, layout plans, and statutory licenses shown are verified records under Telangana Real Estate regulations.'
  }
};
