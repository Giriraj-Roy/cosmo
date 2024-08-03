import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from '../components/minors/GoBack'
import EmployeeDetails from '../components/EmployeeDetails'

const Details = ({navigation, route}) => {

    return (
        <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
            <GoBack screen={"Details"} />
            <EmployeeDetails employee_details={route?.params?.employee_details}/>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({})