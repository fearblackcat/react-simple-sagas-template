/**
 * Created by russell on 8/12/2017.
 */
import {getdatasource, fetchdata} from '../auth/Api.js'

// requestCall: promisify request API calls.  Resolve the promise with `response` if the call was successful,
// otherwise reject the promise with `err`.
export const requestCall = (req_data) => new Promise((resolve, reject) => {
    let uri = req_data.url, data = req_data.data
    getdatasource(uri, data).then((response) =>{
        resolve(response)
    }, (err) => {
        reject(err)
    })
})