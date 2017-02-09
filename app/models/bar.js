import { AsyncStorage } from 'react-native'

var apiUrl = 'http://www.nargilebars.gr/api/bar'
var storage = '@storage:bars'

export default class Bar {

  static all() {
    // return AsyncStorage.getItem(storage)
    //   .then((v) => {
    //     if(v) {
    //       return Promise.resolve(JSON.parse(v))
    //     } else {
          return fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => {
              if(res && res.data) {
                // AsyncStorage.setItem(storage, JSON.stringify(res.data))
                console.log('Retrieved bars:', res.data.length)
                return res.data
              }
            })
            .catch((e) => {
              console.error(e)
            })
      //   }
      // })
      // .catch((err) => {
      //   console.error(err)
      // })
  }
}