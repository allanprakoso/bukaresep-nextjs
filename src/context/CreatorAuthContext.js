import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
import axios from 'axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

const AuthContext = createContext()
const baseURL = "http://47.254.242.193:5000/"
export default AuthContext;

export const CreatorAuthProvider = ({ children }) => {
    const router = useRouter();
    let [tempRecipe, setTempRecipe] = useState({});
    let [authTokens, setAuthTokens] = useState();
    let [creator, setCreator] = useState();
    let [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!authTokens && Cookies.get('authTokens')) {
            const token = JSON.parse(Cookies.get('authTokens'))
            if (token) {
                const user = jwt_decode(token.accessToken)
                const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
                if (isExpired) {
                    axios.put(`${baseURL}/creator/authentications`, {
                        refreshToken: authTokens.refreshToken
                    }).then(res => {
                        Cookies.set('authTokens', JSON.stringify(res.data.data))
                        setAuthTokens(res.data.data)
                    });
                }
                setAuthTokens(token)
            }
        }
    }, [authTokens])

    let loginCreator = async (e) => {
        e.preventDefault()
        let response = await fetch('http://47.254.242.193:5000/creator/authentications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
        })
        let data = await response.json()
        if (response.status === 201) {
            setAuthTokens(data.data)
            setCreator(jwt_decode(data.data.accessToken))
            Cookies.set('authTokens', JSON.stringify(data.data))
            const { id } = jwt_decode(data.data.accessToken)
            async function getUser() {
                let response = await fetch('http://47.254.242.193:5000/creators/' + id);
                let res = await response.json();
                setCreator(res.data.creator);
                router.push("/creator/" + res.data.creator.username)
            }
            getUser();
            // history.push('/')
        } else {
            alert('Something went wrong!')
        }
    }


    let logoutCreator = async () => {
        await fetch(`${baseURL}creator/authentications`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'refreshToken': authTokens.refreshToken })
        }).then(res => {
            if (res.status === 200) {
                Cookies.remove('authTokens')
            }
            setAuthTokens(null)
            setCreator(null)
        })
    }

    let contextData = {
        creator: creator,
        tempRecipe: tempRecipe,
        setTempRecipe: setTempRecipe,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        setCreator: setCreator,
        loginCreator: loginCreator,
        logoutCreator: logoutCreator,
    }

    useEffect(() => {
        if (authTokens) {
            const { id } = jwt_decode(authTokens.accessToken);
            async function getUser() {
                let response = await fetch('http://47.254.242.193:5000/creators/' + id);
                let data = await response.json();
                setCreator(data.data.creator);
            }
            getUser();
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}