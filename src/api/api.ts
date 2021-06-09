import axios from "axios";

const BaseUrl = "https://free.currconv.com"
const apiKey = "2014f0019d52628ef300"
// 6cdd4a7aeed089c723d4
// 2014f0019d52628ef300
export const myInstance = axios.create({
    baseURL: BaseUrl,
    params: {
        apiKey: apiKey
    }
})
//
// export interface ApiCommonResponse<obj> {
//     results: any
// }

// type CustomResults<T, obj extends object>