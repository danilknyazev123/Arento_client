import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._userData = []

        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUserData(data) {
        this._userData = data
    }

    get isAuth() {
        return this._isAuth
    }

    get UserData() {
        return this._userData
    }
}