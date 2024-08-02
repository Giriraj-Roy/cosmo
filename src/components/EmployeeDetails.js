import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fields from './minors/Fields'

const EmployeeDetails = () => {
  return (
    <>
        <View style={{width: "100%", height: "30%", justifyContent: "center", alignItems: "center"}}>
            <Image source={require("../assets/images/user_profile.png")} style={{width: 100, height: 100}} />
            <Text>
                EMP ID
            </Text>
        </View>
        <View>
            <Fields item={"Name"} value={"Emp Name"} />
            <Fields item={"Email"} value={"employee@org.com"} />
            <Fields item={"Phone"} value={"+91 7892325465"} />
            <Fields item={"Address"} value={"Emp Name Fields item Emp Name Fields item Emp Name Fields item"} />
        </View>
    </>
  )
}

export default EmployeeDetails


const styles = StyleSheet.create({})