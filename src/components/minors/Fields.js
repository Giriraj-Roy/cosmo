import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Fields = ({item, value}) => {

    const [edit, setEdit] = useState(false);
    const [itemValue, setItemValue] = useState(value || "");

    const handleSubmit=()=>{
        //make API call
        console.log("make API call");
        setEdit(false);
    }

    return (
        <View style={{marginVertical: 10 ,width: "100%", alignItems: "center"}}>
            <View style={{flexDirection: "row", width: "90%", justifyContent: "flex-start"}}>
                <Text style={{ fontWeight: "500",fontSize: 14, color: "gray", paddingHorizontal: 14}}>
                    {item.toUpperCase()}
                </Text>
                <TouchableOpacity onPress={()=> setEdit(true)}>
                    <Image source={require("../../assets/images/edit.png")}  style={{width:18, height: 18}}/>
                </TouchableOpacity>
            </View>
            {
                edit ?
                <TextInput
                    value={itemValue}
                    placeholder={`${itemValue}`}
                    onChangeText={(e)=>setItemValue(e)}
                    style={styles.subHead}
                    autoFocus={true}
                    onSubmitEditing={handleSubmit}
                />
                :
                <Text style={styles.subHead}>
                    {value}
                </Text>
            }
        </View>
  )
}

export default Fields

const styles = StyleSheet.create({
  subHead: {
    width: '90%',
    borderBottomWidth: 1.5,
    borderRadius: 16,
    borderColor: "#b36ff7",
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#b36ff7',
  },
});