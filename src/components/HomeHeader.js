import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={{width: "100%", height:"30%", backgroundColor: "#b36ff7", justifyContent: "center", padding: 10}}>
      <Text style={{fontSize: 24, fontWeight: Platform.OS==='ios' ? "500" : "700", color: "white"}}>Employees</Text>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})