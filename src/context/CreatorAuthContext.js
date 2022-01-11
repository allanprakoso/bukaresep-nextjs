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

    let addRecipeToCollection = async (recipes, collection_id) => {
        await fetch(`${baseURL}creator/collections/${collection_id}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.accessToken
            },
            body: JSON.stringify({ 'recipe_id': recipes })
        }).then(res => {
            return res.status
        }).catch(err => {
            return err
        }
        )
    }

    let createNewCollection = async (name) => {
        const res = await fetch(`${baseURL}creator/collections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.accessToken
            },
            body: JSON.stringify({ 'name': name })
        })
        const { data } = await res.json()
        return data.collection_id;
    }

    let getCollections = async () => {
        const res = await fetch(`${baseURL}creator/collections`, {
            headers: {
                'Authorization': 'Bearer ' + authTokens.accessToken
            }
        })
        const { collections } = await res.json()
        return collections;
    }

    let getCollection = async (collection_id) => {
        const res = await fetch(`${baseURL}creator/collections/${collection_id}`, {
            headers: {
                'Authorization': 'Bearer ' + authTokens.accessToken
            }
        })
        const { collection } = await res.json()
        return collection;
    }

    let getRecipesCollection = async (collection_id) => {
        const res = await fetch(`${baseURL}creator/collections/${collection_id}/recipes`, {
            headers: {
                'Authorization': 'Bearer ' + authTokens.accessToken
            }
        })
        const { recipes } = await res.json()
        return recipes;
    }

    let deleteRecipeFromCollection = async (recipe_id, collection_id) => {
        const res = await fetch(`${baseURL}creator/collections/${collection_id}/recipes/${recipe_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.accessToken
            }
        })
        return res.status;
    }

    let deleteRecipe = async (id) => {
        await fetch(`${baseURL}creator/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.accessToken
            }
        })
    }

    let deleteCollection = async (collection_id) => {
        await fetch(`${baseURL}creator/collections/${collection_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.accessToken
            }
        })
    }

    let editCollection = async (collection_id, name) => {
        await fetch(`${baseURL}creator/collections/${collection_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.accessToken
            },
            body: JSON.stringify({ 'name': name })
        })
    }

    let contextData = {
        editCollection: editCollection,
        deleteCollection: deleteCollection,
        getCollection: getCollection,
        deleteRecipeFromCollection: deleteRecipeFromCollection,
        getRecipesCollection: getRecipesCollection,
        addRecipeToCollection: addRecipeToCollection,
        deleteRecipe: deleteRecipe,
        createNewCollection: createNewCollection,
        getCollections: getCollections,
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