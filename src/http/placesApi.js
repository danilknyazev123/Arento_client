import {$authHost, $host} from "./index";

export const createPlace = async (place) => {
    const {data} = await $authHost.post('api/places', place)
    return data
}
export const fetchAllPlaces = async () => {
    const {data} = await $host.get('api/places')
    return data
}