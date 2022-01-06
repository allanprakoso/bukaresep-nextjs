import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";

const AuthContext = createContext()
const baseURL = "http://47.254.242.193:5000/"
export default AuthContext;

export const CreatorAuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState()
    let [creator, setCreator] = useState()
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!authTokens && localStorage.getItem("authTokens")) {
            const token = JSON.parse(localStorage.getItem("authTokens"))
            if (token) {
                setAuthTokens(token)
            }
        }
    }, [])

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
            localStorage.setItem('authTokens', JSON.stringify(data.data))
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
                setAuthTokens(null)
                setCreator(null)
                localStorage.removeItem('authTokens')
            }
        })
    }

    let contextData = {
        creator: creator,
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