import {makeAutoObservable} from "mobx";

export default class AddStore {
    constructor() {
        this._bedrooms = []
        this._buildings = []
        this._floors = []
        this._rooms = []
        this._repairs = []
        this._heatings = []
        this._parkings = []
        this._areas = []
        this._adds = []
        this._blogs = []
        this._places = []
        this._page = 1
        this._totalCount = 0
        this._limit = 10


        this._selectedBuilding = {}
        this._selectedBedroom = {}
        this._selectedFloor = {}
        this._selectedRoom = {}
        this._selectedRepair = {}
        this._selectedHeating = {}
        this._selectedParking = {}
        this._selectedArea = {}
        this._selectedInfo = {}
        this._selectedAnimal = {}
        this._selectedChildren = {}
        this._selectedSmoking = {}

        //
        this._selectedMinPrice = {}
        this._selectedMaxPrice = {}
        this._selectedMinSquare = {}
        this._selectedMaxSquare = {}
        this._selectedMinFloorId = {}
        this._selectedMaxFloorId = {}
        this._selectedMinRoomId = {}
        this._selectedMaxRoomId = {}
        this._selectedMinBedroomId = {}
        this._selectedMaxBedroomId = {}
        //


        makeAutoObservable(this)
    }

    //////////////////////////////////SET ANYTHING////////////////////////////////////////////////

    setBedrooms(bedrooms) {
        this._bedrooms = bedrooms
    }

    setBuildings(buildings) {
        this._buildings = buildings
    }

    setFloors(floors) {
        this._floors = floors
    }

    setRooms(rooms) {
        this._rooms = rooms
    }

    setRepairs(repairs) {
        this._repairs = repairs
    }

    setHeatings(heatings) {
        this._heatings = heatings
    }

    setParkings(parkings) {
        this._parkings = parkings
    }

    setAreas(areas) {
        this._areas = areas
    }

    setAdds(adds) {
        this._adds = adds
    }

    setBlogs(blogs){
        this._blogs = blogs
    }

    setPlaces(places){
        this._places = places
    }

    setPage(page) {
        this._page = page
    }

    //////////////////////////////////SET SELECTED////////////////////////////////////////////////

    setSelectedBuilding(building) {
        this._selectedBuilding = building
    }

    setSelectedBedroom(bedroom) {
        this._selectedBedroom = bedroom
    }

    setSelectedFloor(floor) {
        this._selectedFloor = floor
    }

    setSelectedRoom(room) {
        this._selectedRoom = room
    }

    setSelectedRepair(repair) {
        this._selectedRepair = repair
    }

    setSelectedHeating(heating) {
        this._selectedHeating = heating
    }

    setSelectedParking(parking) {
        this._selectedParking = parking
    }

    setSelectedArea(area) {
        this._selectedArea = area
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    //////////////////////////////////SET LOGIC////////////////////////////////////////////////

    get bedrooms() {
        return this._bedrooms
    }

    get buildings() {
        return this._buildings
    }

    get floors() {
        return this._floors
    }

    get rooms() {
        return this._rooms
    }

    get repairs() {
        return this._repairs
    }

    get heatings() {
        return this._heatings
    }

    get parkings() {
        return this._parkings
    }

    get areas() {
        return this._areas
    }

    get adds() {
        return this._adds
    }

    get blogs() {
        return this._blogs
    }

    get places() {
        return this._places
    }

    //
    get selectedMinPrice() {
        return this._selectedMinPrice
    }

    get selectedMaxPrice() {
        return this._selectedMaxPrice
    }

    get selectedMinSquare() {
        return this._selectedMinSquare
    }

    get selectedMaxSquare() {
        return this._selectedMaxSquare
    }

    get selectedMinFloorId() {
        return this._selectedMinFloorId
    }

    get selectedMaxFloorId() {
        return this._selectedMaxFloorId
    }

    get selectedMinRoomId() {
        return this._selectedMinRoomId
    }

    get selectedMaxRoomId() {
        return this._selectedMaxRoomId
    }

    get selectedMinBedroomId() {
        return this._selectedMinBedroomId
    }

    get selectedMaxBedroomId() {
        return this._selectedMaxBedroomId
    }

    //
    get selectedBuilding() {
        return this._selectedBuilding
    }

    get selectedBedroom() {
        return this._selectedBedroom
    }

    get selectedFloor() {
        return this._selectedFloor
    }

    get selectedRoom() {
        return this._selectedRoom
    }

    get selectedRepair() {
        return this._selectedRepair
    }

    get selectedHeating() {
        return this._selectedHeating
    }

    get selectedParking() {
        return this._selectedParking
    }

    get selectedAnimal(){
        return this._selectedAnimal
    }

    get selectedChildren(){
        return this._selectedChildren
    }

    get selectedSmoking(){
        return this._selectedSmoking
    }

    get selectedInfo() {
        return this._selectedInfo
    }

    get selectedArea() {
        return this._selectedArea
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

}


/*

    get selectedOwner() {
        return this._selectedOwner
    }

    get owners() {
        return this._owners
    }

    setSelectedOwner(owner) {
        this._selectedOwner = owner
    }

    setOwners(owners) {
        this._owners = owners
    }

    this._owners = []
    this._selectedOwner = {}

 */