import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const baseURL = 'http://47.254.242.193:5000'

const useAxios = (authTokens) => {
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authTokens?.accessToken}`
        }
    });

    axiosInstance.interceptors.request.use(async req => {

        const user = jwt_decode(authTokens.accessToken)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req

        const response = await axios.put(`${baseURL}/creator/authentications`, {
            refreshToken: authTokens.refreshToken
        });
        authTokens = response.data.data;
        fetch("/api/hello", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(response.data.data),
        });

        req.headers.Authorization = `Bearer ${response.data.data.accessToken}`
        return req
    })

    return axiosInstance
}

export default useAxios;