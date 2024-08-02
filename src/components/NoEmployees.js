import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoEmployees = () => {
  return (
    <View style={{width: "100%", height: "70%", justifyContent: "center", alignItems: "center"}}>
      <Text style={{color: "black"}}>No Employees</Text>
    </View>
  )
}

export default NoEmployees

const styles = StyleSheet.create({})