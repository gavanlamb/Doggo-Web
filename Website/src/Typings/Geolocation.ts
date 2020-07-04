export interface Geolocation {
    status: string
    country: string
    countryCode: string
    region: string
    regionName: string
    city: string
    zip: string
    timezone: string
    isp: string
    org: string
    as: string
    query: string
    lat: number
    lon: number
}

export interface Coordinates {
    latitude: number
    longitude: number
}