import { StyleSheet, Text, View } from 'react-native'
import React, { Children, useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {
    const [createEmp, setCreateEmp] = useState(false);
    const value = {
        createEmp, setCreateEmp
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider