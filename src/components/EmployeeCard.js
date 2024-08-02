import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const EmployeeCard = ({employee_details}) => {
    const navigation=useNavigation();
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>navigation.navigate("Details")}
        >
            <Text style={styles.name}>Employee Name</Text>
            <Text style={styles.id}>Employee ID</Text>
        </TouchableOpacity>
    )
}

export default EmployeeCard

const styles = StyleSheet.create({
    container : {
        width: "100%",
        paddingVertical: 14, 
        paddingHorizontal: 10
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