import { AsyncStorage } from "react-native"




class Global {


    static userStorageKey = "userkey"
    static monthDataKey = "monthDatsssa"

    static monthName = [
        { name: "January", id: 0 },
        { name: "February", id: 1 },
        { name: "March", id: 2 },
        { name: "April", id: 3 },
        { name: "May", id: 4 },
        { name: "June", id: 5 },
        { name: "July", id: 6 },
        { name: "August", id: 7 },
        { name: "September", id: 8 },
        { name: "October", id: 9 },
        { name: "November", id: 10 },
        { name: "December", id: 11 },
    ];





    static saveData(key, detail) {
        var data = JSON.stringify(detail)
        return new Promise((resolve) => {
            console.log(data)
            AsyncStorage.setItem(key, data)
                .then((res) => {
                    resolve(res)
                })
        })
    }

    static getData(key) {
        var data = null
        return new Promise((resolve) => {
            AsyncStorage.getItem(key)
                .then((res) => {
                    console.log(res, 'get')
                    data = JSON.parse(res)
                    resolve(data)
                })
        })


    }

}


export default Global