
export interface Listing {
    objective: string
    propertyTypes: string[]
    status: string
    saleMode: string
    channel: string
    addressParts: AddressParts
    advertiserIdentifiers: AdvertiserIdentifiers
    apmIdentifiers: ApmIdentifiers
    bathrooms: number
    bedrooms: number
    carspaces: number
    dateAvailable?: string
    dateUpdated: string
    dateListed: string
    description: string
    geoLocation?: GeoLocation
    headline: string
    id: number
    inspectionDetails?: InspectionDetails
    isNewDevelopment: boolean
    landAreaSqm?: number
    media: Media[]
    priceDetails: PriceDetails
    propertyId?: string
    rentalDetails?: RentalDetails
    seoUrl: string
    features?: string[]
    saleDetails?: SaleDetails
    virtualTourUrl?: string
}

export interface AddressParts {
    stateAbbreviation: string
    displayType: string
    streetNumber?: string
    street: string
    suburb: string
    postcode: string
    displayAddress: string
    unitNumber?: string
}

export interface AdvertiserIdentifiers {
    advertiserType: string
    advertiserId: number
    contactIds: number[]
    agentIds: string[]
}

export interface ApmIdentifiers {
    suburbId: number
}

export interface GeoLocation {
    latitude: number
    longitude: number
}

export interface InspectionDetails {
    inspections: Inspection[]
    pastInspections: PastInspection[]
    isByAppointmentOnly: boolean
}

export interface Inspection {
    recurrence: string
    closingDateTime: string
    openingDateTime: string
}

export interface PastInspection {
    recurrence: string
    closingDateTime: string
    openingDateTime: string
}

export interface Media {
    category: string
    type: string
    url: string
}

export interface PriceDetails {
    canDisplayPrice: boolean
    displayPrice: string
}

export interface RentalDetails {
    rentalMethod: string
    source: string
    canDisplayPrice: boolean
}

export interface SaleDetails {
    saleMethod: string
    tenderDetails: TenderDetails
    tenantDetails: TenantDetails
}

export interface TenderDetails {}

export interface TenantDetails {}
