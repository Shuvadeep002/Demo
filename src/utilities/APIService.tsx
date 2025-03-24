import { store } from "../reduxStorage/store";
import DeviceInfo from 'react-native-device-info';

function getTokens(): any {
    const state = store.getState();
    return {
        authToken: state.signUpAndIn.AUTH_TOKEN,
        refreshToken: state.signUpAndIn.AUTH_TOKEN
    }
}

export const doGetApiCall = (data: any, isTranslate = true) => {
    return new Promise(async function (resolve, reject) {
        const doApiCall = (data: any) => {
            let didTimeOut = false;
            const timeout = setTimeout(function () {
                didTimeOut = true
                reject(new Error('Request timed out'))
            }, ApiConstant.FETCH_TIMEOUT)

            const Api = `${data.BASE_URL}${data.ENDPOINT}`;
            console.log("Api", Api, data.authToken, data.body);

            fetch(Api, {
                method: "GET",
                headers: {
                    Authorization: data.authToken || ''
                }
            }).then((response) => {
                console.log("Get response", response.code, response);
                const statusCode = response.status;
                const data = response.json()
                return Promise.all([statusCode, data]);
            }).then(([code, response]) => {
                console.log("Get Api call", Api, code, response);
                if (response.code == "UNAUTHORIZED") {
                    // doRefreshToken().then((response) => {
                    //     data.authToken = response.result.token
                    //     doApiCall(data);
                    // }).catch((error) => {
                    //     console.log(error);

                    // })
                }
                else {
                    clearTimeout(timeout)
                    if (!didTimeOut) {
                        resolve(response)
                    }
                }
            })
        }

        doApiCall(data)
    })
}

export const doPostApiCall = (data: any, isTranslate = true) => {
    return new Promise(async function (resolve, reject) {
        const doApiCall = (data: any) => {
            let didTimeOut = false;
            const timeout = setTimeout(function () {
                didTimeOut = true
                reject(new Error('Request timed out'))
            }, ApiConstant.FETCH_TIMEOUT)

            const Api = `${data.BASE_URL}${data.ENDPOINT}`;
            console.log("Api", Api, data.authToken, data.body);

            fetch(Api, {
                method: "POST",
                headers: {
                    Authorization: data.authToken || ''
                },
                body: JSON.stringify(data.body)
            }).then((response) => {
                console.log("Get response", response.code, response);
                const statusCode = response.status;
                const data = response.json()
                return Promise.all([statusCode, data]);
            }).then(([code, response]) => {
                console.log("Get Api call", Api, code, response);
                if (response.code == "UNAUTHORIZED") {
                    // doRefreshToken().then((response) => {
                    //     data.authToken = response.result.token
                    //     doApiCall(data);
                    // }).catch((error) => {
                    //     console.log(error);

                    // })
                }
                else {
                    clearTimeout(timeout)
                    if (!didTimeOut) {
                        resolve(response)
                    }
                }
            })
        }

        doApiCall(data)
    })
}

// export const doRefreshToken = () => {
//     const body = {
//         refreshToken: getTokens().refreshToken,
//         deviceId: DeviceInfo.getDeviceId()
//     }
//     return new Promise(async function (resolve, reject) {
//         const Api = `${ApiConstant.BASE_URL}`
//     })
// }