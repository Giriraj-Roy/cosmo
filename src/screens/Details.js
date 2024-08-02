import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from '../components/minors/GoBack'
import EmployeeDetails from '../components/EmployeeDetails'

const Details = () => {

    return (
        <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
            <GoBack screen={"Details"} />
            <EmployeeDetails />
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({})