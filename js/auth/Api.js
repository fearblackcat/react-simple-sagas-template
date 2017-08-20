/**
 * Created by russell on 8/11/2017.
 */
import * as _ from 'lodash';
import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

promise.polyfill();

const dataSource = function getData(url, postdata) {
    let senddata = postdata

    /*if(url.indexOf('/') === 0) {
        url = 'http://192.168.126.143:8000'+url
    }*/

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()

        const config = {
            method: 'POST',
            route: url
        }

        config.data = senddata

        request.open(config.method, config.route, true)

        request.addEventListener(
            'load', (res) => {

                console.log(res)
                let response = ''

                try {
                    response = JSON.parse(res.target.responseText)

                    resolve({
                        data: response
                    })
                } catch (e) {
                    reject(e.message)
                }

                // if you have more data than is being shown
                // ensure you return a total, so the pager knows
                // what paging actions are possible

                // add fake ids if you need them for your example
                //_.each(response.data, (obj,index) => { obj._id = index })

            }
        )

        request.send(config.data || null)
    })
}

const fetchdatasource = function fetchdata(url, data) {
    let defaultOptions = {
        url: '',
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: data
    }

    let header = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    let opt = Object.assign({}, defaultOptions);
    let sendData = {
        method: opt.method,
        mode: 'cors',
        header: header,
        body: opt.body || ''
    }

    let newsendData = {
        method: 'POST',
        mode: 'cors',
        header: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: ''
    }

    //return fetch('http://localhost:8084/loadChannelData',sendData)
    //{credentials: 'same-origin', method: 'POST', body: data}

    return new Promise((resolve, reject) => {
        try {
            fetch(url, newsendData).then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }
                let resclone = response.clone();
                return resclone.json()
            }).then((json) => {
                resolve(json)
            })
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    getdatasource: dataSource,
    fetchdata: fetchdatasource,
}
