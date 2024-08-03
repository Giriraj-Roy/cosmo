import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoEmployees = () => {
  return (
    <View style={{width: "100%", height: "90%", backgroundColor: "white", justifyContent: "center", alignItems: "center"}}>
      <Image source={require("../assets/images/AddEmployee.png")} style={{marginBottom: "20%"}}/>
      <Text style={{color: "lightgray" , fontSize: 24, fontWeight: 700, textAlign: "center"}}>
        {`Get started ! \n Add New Employees`}
        </Text>
    </View>
  )
}

export default NoEmployees

const styles = StyleSheet.create({})