import {$authHost, $host} from "./index";

export const createBedroom = async (bedroom) => {
    const {data} = await $authHost.post('api/bedroom', bedroom)
    return data
}

export const fetchBedroom = async () => {
    const {data} = await $host.get('api/bedroom', )
    return data
}
export const createFloor = async (floor) => {
    const {data} = await $authHost.post('api/floor', floor)
    return data
}

export const fetchArea = async () => {
    const {data} = await $host.get('api/area', )
    return data
}
export const createArea = async (area) => {
    const {data} = await $authHost.post('api/area', area)
    return data
}

export const fetchParking = async () => {
    const {data} = await $host.get('api/parking', )
    return data
}
export const createParking = async (parking) => {
    const {data} = await $authHost.post('api/parking', parking)
    return data
}

export const fetchFloor = async () => {
    const {data} = await $host.get('api/floor')
    return data
}

export const createRoom = async (room) => {
    const {data} = await $authHost.post('api/room', room)
    return data
}

export const fetchRoom = async () => {
    const {data} = await $host.get('api/room')
    return data
}

export const createRepair = async (repair) => {
    const {data} = await $authHost.post('api/repair', repair)
    return data
}

export const fetchRepair = async () => {
    const {data} = await $host.get('api/repair')
    return data
}

export const createHeating = async (heating) => {
    const {data} = await $authHost.post('api/heating', heating)
    return data
}

export const fetchHeating = async () => {
    const {data} = await $host.get('api/heating')
    return data
}

export const createBuilding = async (building) => {
    const {data} = await $authHost.post('api/building', building)
    return data
}

export const fetchBuilding = async () => {
    const {data} = await $host.get('api/building')
    return data
}

export const createAdd = async (add) => {
    try{
        const {data} = await $authHost.post('api/add', add)
        return data
    } catch (e) {
        alert(e.response?.data?.message);
    }
}

export const updateAdd = async (id) => {
    try{
        const {data} = await $authHost.post('api/add/update', id)
        return data
    } catch (e) {
        alert(e.response?.data?.message);
    }
}

export const fetchDontCheckedAdd = async (page, limit) => {
    const {data} = await $host.get('api/add/checked', {params: {
            page, limit
        }})
    return data
}

export const checkedAdd = async (formData) => {
    try{
        const {data} = await $authHost.post('api/add/check', formData)
        return data
    } catch (e) {
        alert(e.response?.data?.message);
    }
}

export const rejectedAdd = async (id, message) => {
    try{
        const {data} = await $authHost.post('api/add/reject', id, message)
        return data
    } catch (e) {
        alert(e.response?.data?.message);
    }
}

export const AddToStopList = async (formData) => {
    try{
        const {data} = await $authHost.post('api/add/stop', formData)
        return data
    } catch (e) {
        alert(e.response?.data?.message)
    }

}

export const fetchAdd = async (minPrice, maxPrice, minSquare, maxSquare, minFloorId, maxFloorId, minRoomId, maxRoomId, minBedroomId, maxBedroomId,
                               buildingId, repairId, heatingId, areaId, parkingId, animal, children, smoking,
                               page, limit) => {
    const {data} = await $host.get('api/add', {params: {
            minPrice, maxPrice, minSquare, maxSquare, minFloorId, maxFloorId, minRoomId, maxRoomId, minBedroomId, maxBedroomId,
            buildingId, repairId, heatingId, areaId, parkingId, animal, children, smoking,
            page, limit
        }})
    return data
}

export const fetchUserAdd = async (id, userId, page, limit) => {
    const {data} = await $host.get('api/add/userAdds', {params: {
            id, userId, page, limit
        }})
    return data
}

export const fetchOneAdd = async (id) => {
    const {data} = await $host.get('api/add/' + id)
    return data
}

export const fetchOneUser = async (id) => {
    const {data} = await $host.get('api/user/' + id)
    return data
}

export const createBlog = async (blog) => {
    const {data} = await $authHost.post('api/blog', blog)
    return data
}

export const fetchBlog = async (page, limit) => {
    const {data} = await $host.get('api/blog', {params: {
            page, limit
        }})
    return data
}

export const sendSelectionMail = async (formData) => {
    const {data} = await $host.post('api/selection', formData)
    return data
}