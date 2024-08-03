import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fields from './minors/Fields'

const EmployeeDetails = () => {
  return (
    <ScrollView>
        <View style={{width: "100%", height: "25%", justifyContent: "center", alignItems: "center"}}>
            <Image source={require("../assets/images/user_profile.png")} style={{width: 100, height: 100}} />
            <Text>
                EMP ID
            </Text>
        </View>
        <View style={{paddingBottom: "50%"}}>
            <Fields item={"Name"} value={"Emp Name"} />
            <Fields item={"Email"} value={"employee@org.com"} />
            <Fields item={"Phone"} value={"+91 7892325465"} />
            <Text style={styles.addressHead}>
                    ADDRESS DETAILS
            </Text>
            <Fields item={"Lane"} value={"Lane"} />
            <Fields item={"City"} value={"City"} />
            <Fields item={"Country"} value={"Country"} />
            <Fields item={"Zip Code"} value={"Code"} />
        </View>
    </ScrollView>
  )
}

export default EmployeeDetails


const styles = StyleSheet.create({
  addressHead: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 28,
    fontWeight: '500',
    fontSize: 14,
    color: 'gray',
    paddingHorizontal: 14,
  },
});