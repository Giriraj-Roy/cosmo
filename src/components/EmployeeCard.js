import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../utils/AppContext';

const EmployeeCard = ({employee_details}) => {
    const navigation=useNavigation();
    const {setCurrentEmp} = useContext(AppContext)
    const handleNavigation = ()=>{
        setCurrentEmp(employee_details)
        navigation.navigate("Details", {employee_details : employee_details})
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>handleNavigation()}
        >
            <Text style={styles.name}>{employee_details?.name ? employee_details?.name : "Employee Name"}</Text>
            <Text style={styles.id}>{employee_details?._id ? employee_details?._id : "Employee ID"}</Text>
        </TouchableOpacity>
    )
}

export default EmployeeCard

const styles = StyleSheet.create({
    container : {
        width: "100%",
        paddingVertical: 14, 
        paddingHorizontal: 22
    },
    name: {
        fontSize: 20,
        fontWeight: Platform.OS == 'ios' ? "500" : "700",
        color: "black"
    },
    id : {
        fontSize: 16,
        color : "gray"
    }
})