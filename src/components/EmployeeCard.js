import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../utils/AppContext';
import { DELETEEmployeeByID } from '../utils/ApiCalls';

const EmployeeCard = ({employee_details}) => {
    const navigation=useNavigation();
    const {setCurrentEmp, setLoading} = useContext(AppContext)

    const handleNavigation = ()=>{
        setCurrentEmp(employee_details)
        navigation.navigate("Details", {employee_details : employee_details})
    }
    const handleDelete = async (id)=>{
        try{
            setLoading(true)
            const response = await DELETEEmployeeByID(id)
            if(response!=undefined){
                setTimeout(()=>{
                    setLoading(false)
                    navigation.navigate("Home")
                },1000)
            }
        }catch(e){
            console.error("Error Deleting", e);            
        }
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>handleNavigation()}
        >
            <View>
                <Text style={styles.name}>{employee_details?.name ? employee_details?.name : "Employee Name"}</Text>
                <Text style={styles.id}>{employee_details?._id ? employee_details?._id : "Employee ID"}</Text>
            </View>
            <TouchableOpacity onPress={()=>handleDelete(employee_details?._id)}>
                <Image source={require("../assets/images/delete.png")} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default EmployeeCard

const styles = StyleSheet.create({
    container : {
        width: "100%",
        paddingVertical: 14, 
        paddingHorizontal: 22,
        flexDirection : "row",
        justifyContent: "space-between"
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