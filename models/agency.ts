export interface Agency {
  accountType: string;
  profile: Profile;
  dateUpdated: string;
  name: string;
  details: Details;
  id: number;
  agents: Agent[];
  contactDetails: ContactDetails;
}

export interface Profile {
  agencyPhotos: any[];
  profileWebsite: string;
  agencyBanner: string;
  agencyWebsite: string;
  agencyLogoStandard: string;
  agencyLogoSmall: string;
  logoColour: string;
  primaryAgencyColour: string;
  backgroundColour: string;
  mapLatitude: string;
  mapLongitude: string;
  mapCertainty: number;
  agencyVideoUrl: string;
  agencyDescription: string;
  agencyDescriptionCre: string;
  agencyCreBanner: string;
  agencyCreWebsite: string;
  agencyCreLogoStandard: string;
  numberForSale: number;
  numberForRent: number;
  numberForSaleCommercial: number;
  numberForRentCommercial: number;
  creAgencyVideoUrl: string;
}

export interface Details {
  streetAddress1: string;
  streetAddress2: string;
  suburb: string;
  state: string;
  postcode: string;
  agencyWebsite: string;
  principalName: string;
  principalEmail: string;
}

export interface Agent {
  agencyId: number;
  id: number;
  email: string;
  firstName: string;
  mobile?: string;
  photo: string;
  lastName: string;
  phone?: string;
  profileText: string;
  mugShotNew?: string;
  contactTypeCode: number;
  facebookUrl?: string;
  twitterUrl?: string;
  agentVideo?: string;
  googlePlusUrl?: string;
  personalWebsiteUrl?: string;
  linkedInUrl?: string;
}

export interface ContactDetails {
  businessSale: BusinessSale;
  businessRent: BusinessRent;
  commercialLease: CommercialLease;
  commercialSale: CommercialSale;
  emailDomains: EmailDomain[];
  general: General;
  residentialRent: ResidentialRent;
  residentialSale: ResidentialSale;
}

export interface BusinessSale {
  email: string;
  phone: string;
}

export interface BusinessRent {}

export interface CommercialLease {}

export interface CommercialSale {}

export interface EmailDomain {
  domain: string;
}

export interface General {
  email: string;
  fax: string;
  phone: string;
  mobile: string;
}

export interface ResidentialRent {
  email: string;
  phone: string;
}

export interface ResidentialSale {
  email: string;
  phone: string;
}
