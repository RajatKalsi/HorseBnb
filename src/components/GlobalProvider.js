import React from "react"
import { useContext, useState, useEffect } from "react"
import { createContext } from "vm"
import henceforthApi from "./utils/henceforthApi"

export const GlobalContext = createContext({})
const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])

    henceforthApi.setToken(localStorage.getItem("token"))

    const ListingShow = async () => {
        let res = await henceforthApi.Auth.showlistingid();
    }
    useEffect(() => {
        ListingShow()
    })

    return (
        <>
            <GlobalContext.Provider value={ListingShow}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export default GlobalProvider;