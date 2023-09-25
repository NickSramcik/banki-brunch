import { useState, useEffect } from 'react'

const useProvideAuth = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const response = await fetch('/auth/getUser', {
                method: 'GET',
                credentials: 'include'
            })
            try {
                const userData = await response.json()
                setUser(userData)
            } catch (err) {
                // No user
                setUser(null)
            }
        }
        fetchCurrentUser()
    }, [])

    const logout = async () => {
        console.log('Logging out...')
        const response = await fetch('/auth/logout', {
            method: 'POST',
            credentials: 'include'
        })
        setUser(null)
    }

    const isAuthenticated = () => user ? true : false

    return {
        user,
        logout,
        isAuthenticated,
    }
}

export default useProvideAuth
