import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../utils/AppContext'

const CreateEmployeeBtn = () => {
    const {setCreateEmp} = useContext(AppContext);
    return (
        <TouchableOpacity onPress={()=>setCreateEmp(true)}>
            <Image source={require("../assets/images/AddEmp.png")} style={styles.createBtn}/>
        </TouchableOpacity>
    )
}

export default CreateEmployeeBtn

const styles = StyleSheet.create({
    createBtn : {
        position: "absolute",
        bottom : 20,
        right : 20,
        width: 80,
        height : 80
    }
})