export interface Location {
    _id: string
    Title: string
    Description: string
    PhoneNumber: string
    Location: GeoLocation
    Types: Type[]
    Activities: Activity[]
}

export interface Type {
    _id: string
    Title: string
    Colour: string
}

export interface Activity {
    _id: string
    Title: string
    Colour: string
}

export interface GeoLocation {
    address: string
    lat: number
    lng: number
}
