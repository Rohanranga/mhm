export interface CompanyInfo {
  id: string;
  name: string;
  shortName: string;
  type: string;
  logo: string;
  location: string;
  headquarters: string;
  foundedYear: string | number;
  status: 'Active' | 'Verified' | 'Under Review';
  website: string;
  description: string;
  vision?: string;
  mission?: string;
  cin?: string;
  pan?: string;
  tagline?: string;
  phone?: string;
  email?: string;
}

export interface Director {
  id: string;
  name: string;
  designation: string;
  image?: string;
  experience?: string;
  din?: string;
  bio?: string;
}

export interface Highlights {
  yearsExperience: string;
  projectsDelivered: string;
  areaDeveloped: string;
  citiesPresence: string;
  happyFamilies: string;
  underConstructionArea?: string;
  onTimeDeliveryRate?: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  launchDate: string;
  expectedCompletion: string;
  totalUnits: string | number;
  status: 'Under Construction' | 'Ready to Move' | 'Newly Launched' | 'Completed';
  type: string;
  reraNumber: string;
  action?: string;
  floors?: string;
  towers?: string;
  priceRange?: string;
}

export interface QualityDetail {
  id: string;
  category: 'Civil & Structure' | 'Flooring & Finishes' | 'Doors, Windows & Glass' | 'Electrical & Safety' | 'Sanitary & Plumbing' | 'Elevators & Utilities';
  title: string;
  brandOrSpec: string;
  description: string;
  certification?: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: 'Sports & Fitness' | 'Community & Leisure' | 'Health & Wellness' | 'Convenience & Security' | 'Eco-Friendly & Green';
  icon: string;
  available: boolean;
  highlight?: string;
}

export interface ComplianceDocument {
  id: string;
  title: string;
  documentType: 'RERA Registration' | 'Environmental Clearance' | 'Fire NOC' | 'Structural Safety' | 'Occupancy Certificate' | 'GHMC / HMDA Sanction';
  issuedBy: string;
  issueDate: string;
  validTill: string;
  status: 'Verified' | 'Pending Review' | 'Active';
  fileSize: string;
  verificationStatus: 'Government Verified' | 'RERA Approved' | 'Architect Certified' | 'Bank Approved';
}

export interface RERAInfo {
  registrationNumber: string;
  validity: string;
  stateAuthority: string;
  verified: boolean;
  qrCodeUrl?: string;
  websiteUrl: string;
  lastQuarterFiling?: string;
}

export interface ProfileCompletion {
  directors: number;
  materials: number;
  projects: number;
  amenities: number;
  documents: number;
  overall: number;
  lastUpdated: string;
}

export interface InformationUsageItem {
  title: string;
  description: string;
  icon: string;
}

export interface PrivacyNoticeInfo {
  lastAudit: string;
  complianceStandard: string;
  disclaimer: string;
}

export interface BuilderData {
  company: CompanyInfo;
  directors: Director[];
  highlights: Highlights;
  projects: Project[];
  qualityDetails: QualityDetail[];
  amenities: Amenity[];
  documents: ComplianceDocument[];
  rera: RERAInfo;
  profileCompletion: ProfileCompletion;
  informationUsage: InformationUsageItem[];
  privacyNotice: PrivacyNoticeInfo;
}
