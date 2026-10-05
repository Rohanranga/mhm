import { BuilderData } from '@/types/builder';

export const asblData: BuilderData = {
  company: {
    id: 'asbl',
    name: 'Ashoka Builders Sukhii LLP',
    shortName: 'ASBL',
    type: 'Limited Liability Partnership',
    logo: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=150&auto=format&fit=crop&q=80',
    location: 'Financial District, Hyderabad, Telangana',
    headquarters: 'ASBL Corp Office, Khajaguda - Nanakramguda Road, Financial District, Hyderabad - 500032',
    foundedYear: 2017,
    status: 'Verified',
    website: 'https://asbl.in',
    description: 'ASBL (Ashoka Builders) is a dynamically growing real estate firm in Hyderabad recognized for rapid project execution leveraging predictive prop-tech and automated construction technologies. With prime projects in Gachibowli, Kokapet, and Financial District, ASBL has pioneered lifestyle high-rises bringing modern outdoor living into urban residential spaces.',
    vision: 'To organize and accelerate real estate construction through technology while delivering superior aesthetic and functional living spaces.',
    mission: 'Deliver tech-enabled, deeply researched, and beautifully designed urban homes on accelerated timelines with full transparency.',
    cin: 'AAK-1345',
    pan: 'AAAFA8291Q',
    tagline: 'Life. Upgraded.',
    phone: '+91 40 1234 5678',
    email: 'hello@asbl.in'
  },
  directors: [
    {
      id: 'dir-asbl-1',
      name: 'Ajitesh Korupolu',
      designation: 'Founder & CEO',
      experience: '12+ Years in PropTech & Construction Tech',
      din: '07831512',
      bio: 'Visionary entrepreneur who integrated software supply chain tech into real estate, enabling record-breaking construction timelines across ASBL projects.'
    },
    {
      id: 'dir-asbl-2',
      name: 'G. Krishna Kumar',
      designation: 'Co-Founder & Director',
      experience: '15+ Years in Civil Infrastructure',
      din: '07831555',
      bio: 'Leads land acquisition, statutory regulatory frameworks, and enterprise finance.'
    }
  ],
  highlights: {
    yearsExperience: '8+ Years',
    projectsDelivered: '6+ Landmarks',
    areaDeveloped: '8+ Million Sq.ft',
    citiesPresence: 'Hyderabad',
    happyFamilies: '6,500+ Families',
    underConstructionArea: '5+ Million Sq.ft',
    onTimeDeliveryRate: '100% On-Time Record'
  },
  projects: [
    {
      id: 'asbl-p1',
      name: 'ASBL Spire',
      location: 'Kokapet, Hyderabad',
      launchDate: 'Q1 2021',
      expectedCompletion: 'Dec 2024 (Completed)',
      totalUnits: '393 Premium Lifestyle Apartments',
      status: 'Ready to Move',
      type: 'Luxury High-Rise Residentials',
      reraNumber: 'P02400002341',
      floors: '36 Floors',
      towers: '2 Towers over 2.85 Acres',
      priceRange: '₹1.8 Cr - ₹3.1 Cr'
    },
    {
      id: 'asbl-p2',
      name: 'ASBL Spectra',
      location: 'Gachibowli - Financial District, Hyderabad',
      launchDate: 'Q3 2021',
      expectedCompletion: 'Feb 2026',
      totalUnits: '1,126 Outdoor-Living Apartments',
      status: 'Under Construction',
      type: 'High-Rise Balcony-Centric Homes',
      reraNumber: 'P02400003432',
      floors: '39 Floors',
      towers: '4 Towers over 7.8 Acres',
      priceRange: '₹1.6 Cr - ₹2.9 Cr'
    },
    {
      id: 'asbl-p3',
      name: 'ASBL Broadway',
      location: 'Neopolis Phase, Financial District, Hyderabad',
      launchDate: 'Q1 2023',
      expectedCompletion: 'Dec 2027',
      totalUnits: '890 Ultra-Luxury Sky Homes',
      status: 'Under Construction',
      type: 'Super Luxury Integrated Sky-Scraper',
      reraNumber: 'P02400005510',
      floors: '45 Floors',
      towers: '3 Towers over 5.5 Acres',
      priceRange: '₹2.1 Cr - ₹4.5 Cr'
    },
    {
      id: 'asbl-p4',
      name: 'ASBL Springs',
      location: 'Pocharam, Near Infosys Campus, East Hyderabad',
      launchDate: 'Q2 2019',
      expectedCompletion: 'Completed / Ready to Move',
      totalUnits: '520 Urban Apartments',
      status: 'Ready to Move',
      type: 'Premium Lifestyle Apartments',
      reraNumber: 'P02400001004',
      floors: '14 Floors',
      towers: '3 Towers over 4.2 Acres',
      priceRange: '₹65 Lakhs - ₹95 Lakhs'
    }
  ],
  qualityDetails: [
    {
      id: 'qd-asbl-1',
      category: 'Civil & Structure',
      title: 'MIVAN Monolithic Shuttering Technology',
      brandOrSpec: 'Aluminum Formwork & UltraTech High Grade Concrete',
      description: 'Zero brickwork monolithic concrete structure enabling superior seismic tolerance, perfectly aligned walls, and faster construction cycles.',
      certification: 'IIT Structural Audit'
    },
    {
      id: 'qd-asbl-2',
      category: 'Flooring & Finishes',
      title: 'Large Format European Finish Tiles',
      brandOrSpec: 'Kajaria / Simpolo 800x1200mm Glazed Vitrified',
      description: 'Antibacterial large format tiles designed to minimize grout lines in the living and dining hall seamlessly extending to the outdoor balconies.',
      certification: 'ISO 13006 Certified'
    },
    {
      id: 'qd-asbl-3',
      category: 'Doors, Windows & Glass',
      title: 'Heavy Duty Structural UPVC Glazing',
      brandOrSpec: 'Aluplast / Deceuninck Heavy Profile UPVC',
      description: 'Floor-to-ceiling sliding systems with Saint-Gobain toughened solar control glass for expansive views and UV resistance.',
      certification: 'EN 12608 Standard'
    },
    {
      id: 'qd-asbl-4',
      category: 'Electrical & Safety',
      title: 'Smart Home Ready Wiring & Conduits',
      brandOrSpec: 'Polycab FRLS Cabling with Legrand Arteor Series',
      description: 'Concealed flame-retardant wiring with optical fiber provisioning (FTTH) and 100% acoustic diesel generator backup.',
      certification: 'IS 694 Compliant'
    },
    {
      id: 'qd-asbl-5',
      category: 'Sanitary & Plumbing',
      title: 'Wall-Hung Closets & Concealed Flush Valves',
      brandOrSpec: 'Kohler / TOTO Premium Sanitaryware & Grohe CP',
      description: 'High-pressure plumbing with separate hydro-pneumatic lines and advanced central water purification plants.',
      certification: 'UPC-I Standard'
    },
    {
      id: 'qd-asbl-6',
      category: 'Elevators & Utilities',
      title: 'Destination Dispatch Elevator Technology',
      brandOrSpec: 'Schindler Premium Passenger Lifts (3.0 m/s)',
      description: 'Advanced destination control elevators reducing wait times with emergency power rescue devices and biometric integrations.',
      certification: 'Elevator Safety Act Approved'
    }
  ],
  amenities: [
    {
      id: 'am-asbl-1',
      name: 'Rooftop Infinity Sky Pool',
      category: 'Community & Leisure',
      icon: 'Waves',
      available: true,
      highlight: 'Panoramic infinity edge swimming pool perched at the highest floor'
    },
    {
      id: 'am-asbl-2',
      name: 'Triple-Height Clubhouse Lobby',
      category: 'Community & Leisure',
      icon: 'Building2',
      available: true,
      highlight: 'Massive luxury clubhouse featuring co-working bays and private lounges'
    },
    {
      id: 'am-asbl-3',
      name: 'Central Courtyard & Urban Forest',
      category: 'Eco-Friendly & Green',
      icon: 'Leaf',
      available: true,
      highlight: 'Dense Miyawaki plantation method with smart automated sprinklers'
    },
    {
      id: 'am-asbl-4',
      name: 'Multi-Station Pro-Fitness Studio',
      category: 'Health & Wellness',
      icon: 'Dumbbell',
      available: true,
      highlight: 'Equipped with LifeFitness cardio/strength gear and aerial yoga room'
    },
    {
      id: 'am-asbl-5',
      name: 'Dedicated Outdoor BBQ & Sun Decks',
      category: 'Community & Leisure',
      icon: 'Activity',
      available: true,
      highlight: 'Community grilling stations and terrace amphitheatres'
    },
    {
      id: 'am-asbl-6',
      name: 'Tech-Enabled Gated Access',
      category: 'Convenience & Security',
      icon: 'ShieldCheck',
      available: true,
      highlight: 'App-based visitor management, automated boom barriers and CCTV matrix'
    }
  ],
  documents: [
    {
      id: 'doc-asbl-1',
      title: 'TS-RERA Project Sanction Letter',
      documentType: 'RERA Registration',
      issuedBy: 'TS-RERA Regulatory Authority',
      issueDate: '22 Oct 2021',
      validTill: '31 Dec 2026',
      status: 'Verified',
      fileSize: '3.7 MB',
      verificationStatus: 'RERA Approved'
    },
    {
      id: 'doc-asbl-2',
      title: 'State Environmental SEIAA Clearance',
      documentType: 'Environmental Clearance',
      issuedBy: 'SEIAA Telangana',
      issueDate: '09 Sep 2021',
      validTill: '08 Sep 2028',
      status: 'Verified',
      fileSize: '5.1 MB',
      verificationStatus: 'Government Verified'
    },
    {
      id: 'doc-asbl-3',
      title: 'HMDA Final Layout & Floor Approval',
      documentType: 'GHMC / HMDA Sanction',
      issuedBy: 'HMDA Hyderabad',
      issueDate: '15 Sep 2021',
      validTill: '14 Sep 2027',
      status: 'Verified',
      fileSize: '6.4 MB',
      verificationStatus: 'Government Verified'
    },
    {
      id: 'doc-asbl-4',
      title: 'Telangana Disaster & Fire Services NOC',
      documentType: 'Fire NOC',
      issuedBy: 'Director General Fire Services',
      issueDate: '25 Aug 2021',
      validTill: '24 Aug 2026',
      status: 'Verified',
      fileSize: '2.5 MB',
      verificationStatus: 'Government Verified'
    }
  ],
  rera: {
    registrationNumber: 'TS-RERA REG: P02400003432 / P02400005510',
    validity: 'Valid up to Dec 2027',
    stateAuthority: 'Telangana Real Estate Regulatory Authority (TS-RERA)',
    verified: true,
    websiteUrl: 'https://rera.telangana.gov.in',
    lastQuarterFiling: 'Q2 2024 Tech Platform Sync Successful'
  },
  profileCompletion: {
    directors: 100,
    materials: 95,
    projects: 100,
    amenities: 95,
    documents: 100,
    overall: 98,
    lastUpdated: '10 Sep 2024'
  },
  informationUsage: [
    {
      title: 'PropTech Enabled Buyer Journey',
      description: 'Live 3D unit models, construction status trackers, and digital payment histories syndicated to homebuyer apps.',
      icon: 'Share2'
    },
    {
      title: 'Instant Bank Approval APIs',
      description: 'Integrated APF clearances with SBI, HDFC, and Kotak Mahindra allowing digital home loan processing.',
      icon: 'BadgeDollarSign'
    },
    {
      title: 'Automated RERA Authority Compliance',
      description: 'Architect, engineer, and CA certificates pushed automatically to TS-RERA servers quarter-on-quarter.',
      icon: 'FileCheck'
    }
  ],
  privacyNotice: {
    lastAudit: '01 Sep 2024 by Deloitte India',
    complianceStandard: 'ISO 27001 InfoSec & Real Estate RERA Act 2016',
    disclaimer: 'All structural engineering data, regulatory licenses, and floor plans displayed are fully authenticated statutory records submitted to TS-RERA.'
  }
};
