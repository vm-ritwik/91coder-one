// import axios from "axios";

// const API_URL = 'http://localhost:4200/api';
const API_URL = '/api';

// todo
// export function getAPI(url, next) {
//
//     const instance = axios.create({
//         baseURL: 'http://localhost:4200/api',
//         timeout: 1000,
//         method: 'get',
//         url: url,
//         headers: {'X-Custom-Header': 'foobar'}
//     }, (err, result) => {
//         if (err) {
//             return next(err);
//         } else {
//             return next(response);
//         }
//     });
// }
//
// export function postAPI(url, body, next) {
//
//     const instance = axios.create({
//         baseURL: 'http://localhost:4200/api',
//         timeout: 1000,
//         method: 'post',
//         data: body,
//         headers: {'X-Custom-Header': 'foobar'}
//     }, (err, result) => {
//         if (err) {
//             return next(err);
//         } else {
//             return next(null, result);
//         }
//     });
// }


export const fetchApi = (endpoint, method = "get", body) => {
    let headers = {};
    headers["content-type"] = "application/json";
    let input = {
        headers: headers,
        method,
    };
    if (body) {
        input.body = JSON.stringify(body);
    }
    return fetch(`${API_URL}/${endpoint}`, input).then((response) => response.json().then((json) => ({json, response})))
        .then(({json, response}) => {
            if (!response.ok) {
                let data = {...json, status_code: response.status};
                // return Promise.reject(json);
                return Promise.reject(data);
            }
            return {...json, status_code: response.status};
        })
        .then(
            (response) => response,
            (error) => error,
        );
};
//
// export default function callApi(
//     endpoint,
//     method = "get",
//     body,
//     isErrorSuppressed = false,
// ) {
//     return fetchApi(endpoint, method, body)
//         .then((response) => response.json().then((json) => ({ json, response })))
//         .then(({ json, response }) => {
//             let responseStatus = parseInt(response.status);
//             if (responseStatus >= 400) {
//                 if (responseStatus !== 404 || responseStatus !== 405) {
//                     if (responseStatus < 500) {
//                         if (json.message) {
//                             if (!isErrorSuppressed) {
//                                 showNotification("error", json.message);
//                             }
//                         } else if (
//                             json &&
//                             json.non_field_errors &&
//                             json.non_field_errors.length > 0
//                         ) {
//                             if (!isErrorSuppressed) {
//                                 showNotification("error", json.non_field_errors[0]);
//                             }
//                         } else {
//                             if (!isErrorSuppressed) {
//                                 showNotification("error", JSON.stringify(json));
//                             }
//                         }
//                     } else {
//                         if (!isErrorSuppressed) {
//                             showNotification("error", "Server Error, Please try again!");
//                         }
//                     }
//                 }
//             }
//             if (!response.ok) {
//                 let data = { ...json, status_code: response.status };
//                 // return Promise.reject(json);
//                 return Promise.reject(data);
//             }
//             return { ...json, status_code: response.status };
//         })
//         .then(
//             (response) => response,
//             (error) => error,
//         );
// }