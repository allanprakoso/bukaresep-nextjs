import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
import axios from 'axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

const AuthContext = createContext()
const baseURL = "http://47.254.242.193:5000/"
export default AuthContext;

export const UserAuthProvider = ({ children }) => {
    const router = useRouter();
    let [authTokens, setAuthTokens] = useState();
    let [user, setUser] = useState();
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authTokens && Cookies.get('userAuthTokens')) {
            const token = JSON.parse(Cookies.get('userAuthTokens'))
            if (token) {
                const d = jwt_decode(token.accessToken)
                const isExpired = dayjs.unix(d.exp).diff(dayjs()) < 1;
                if (isExpired) {
                    axios.put(`${baseURL}/user/authentications`, {
                        refreshToken: authTokens.refreshToken
                    }).then(res => {
                        Cookies.set('userAuthTokens', JSON.stringify(res.data.data))
                        setAuthTokens(res.data.data)
                    });
                }
                setAuthTokens(token)
            }
        }
    }, [authTokens])

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://47.254.242.193:5000/user/authentications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
        })
        let data = await response.json()
        if (response.status === 201) {
            setAuthTokens(data.data)
            setUser(jwt_decode(data.data.accessToken))
            Cookies.set('userAuthTokens', JSON.stringify(data.data))
            const { id } = jwt_decode(data.data.accessToken)
            async function getUser() {
                let response = await fetch('http://47.254.242.193:5000/users/' + id);
                let res = await response.json();
                setUser(res.user);
                router.push("/user/" + res.user.username)
            }
            getUser();
            // history.push('/')
        } else {
            alert('Something went wrong!')
        }
    }

    let registeUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://47.254.242.193:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value,
                'password': e.target.password.value,
                'email': e.target.email.value,
            })
        })
        let data = await response.json()
        if (response.status === 201) {
            await loginUser(e);
        }
    }



    let logoutUser = async () => {
        await fetch(`${baseURL}user/authentications`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'refreshToken': authTokens.refreshToken })
        }).then(res => {
            if (res.status === 200) {
                Cookies.remove('userAuthTokens')
            }
            setAuthTokens(null)
            setUser(null)
        })
    }

    let getCollections = async () => {
        let response = await fetch(`${baseURL}user/collections`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
        })
        let data = await response.json()
        if (response.status === 200) {
            return data.collections
        }
    }
    let editProfile = async (valueForm) => {
        let response = await fetch(`${baseURL}users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
            body: JSON.stringify(valueForm)
        })

        if (response.status === 200 || response.status == 201) {
            return 'success'
        } else {
            return 'error'
        }
    }

    let createCollection = async (name) => {
        let response = await fetch(`${baseURL}user/collections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
            body: JSON.stringify({ name })
        })
        const { data } = await response.json()
        return data.collection_id;
    }

    let getCollection = async (id) => {
        let response = await fetch(`${baseURL}user/collections/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
        })
        const data = await response.json()
        if (response.status === 200) {
            return data.collection
        }
    }

    let getRecipeCollection = async (collection_id) => {
        let response = await fetch(`${baseURL}user/collections/${collection_id}/recipes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
        })
        const data = await response.json()
        if (response.status === 200) {
            return data.recipes
        }
    }
    let deleteCollection = async (id) => {
        let response = await fetch(`${baseURL}user/collections/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
        })
        if (response.status === 200) {
            return 'success'
        }
    }

    let addToCollection = async (id, collection_id) => {
        let response = await fetch(`${baseURL}user/collections/${collection_id}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.accessToken}`
            },
            body: JSON.stringify({ recipe_id: id })
        })
        if (response.status === 200) {
            return 'success'
        }
    }

    let contextData = {
        getRecipeCollection: getRecipeCollection,
        registeUser: registeUser,
        getCollection: getCollection,
        addToCollection: addToCollection,
        deleteCollection: deleteCollection,
        createCollection: createCollection,
        editProfile: editProfile,
        getCollections: getCollections,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        user: user,
        setUser: setUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(() => {
        if (authTokens) {
            const { id } = jwt_decode(authTokens.accessToken);
            async function getUser() {
                let response = await fetch('http://47.254.242.193:5000/users/' + id);
                let data = await response.json();
                setUser(data.user);
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