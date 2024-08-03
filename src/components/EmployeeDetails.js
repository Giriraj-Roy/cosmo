import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fields from './minors/Fields'

const EmployeeDetails = ({employee_details}) => {
  const address = employee_details.address ? employee_details?.address : {}
  return (
    <ScrollView>
        <View style={{width: "100%", height: "25%", justifyContent: "center", alignItems: "center"}}>
            <Image source={require("../assets/images/user_profile.png")} style={{width: 100, height: 100}} />
            <Text>
                {employee_details._id ? employee_details?._id : "Employee ID"}
            </Text>
        </View>
        <View style={{paddingBottom: "50%"}}>
            <Fields item={"Name"} value={employee_details.name ? employee_details?.name : "Name"} />
            <Fields item={"Email"} value={employee_details.email ? employee_details?.email : "employee@org.com"} />
            <Fields item={"Phone"} value={employee_details.phone ? employee_details?.phone : "+91 7892325465"} />
            <Text style={styles.addressHead}>
                    ADDRESS DETAILS
            </Text>
            <Fields item={"Lane"} value={address?.lane ? address?.lane : "Lane"} />
            <Fields item={"City"} value={address?.city ? address?.city : "City"} />
            <Fields item={"Country"} value={address?.country ? address?.country : "Country"} />
            <Fields item={"Zip"} value={address?.zip ? address?.zip : "782987"} />
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