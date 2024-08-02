import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GoBack = ({screen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.main}>
        <Image source={require("../../assets/images/backArrow2.png")} style={{width: 25,height: 15}}/>
        <Text style={{marginLeft: 10,color: "black", fontWeight: "500", fontSize: 20}}>{screen}</Text>
    </TouchableOpacity>
  )
}

export default GoBack

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: "white",
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
});