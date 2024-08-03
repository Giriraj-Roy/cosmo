import React, { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
    const [createEmp, setCreateEmp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentEmp, setCurrentEmp] = useState({});
    const value = {
        createEmp, setCreateEmp,
        loading, setLoading,
        currentEmp, setCurrentEmp
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider