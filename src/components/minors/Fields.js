import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Fields = ({item, value, utility="none"}) => {

    const [edit, setEdit] = useState(utility=="create");
    const [itemValue, setItemValue] = useState(value || "");

    // API Call To be Handled While Updating Data
    const handleSubmit=()=>{
        //make API call
        console.log("make UPDATE API call");
        setEdit(false);
    }

    //API call To be handled while Creating New Employee
    const handleNewValue= ()=>{
        
    }

    return (
        <View style={{marginVertical: 10 ,width: "100%", alignItems: "center"}}>
            <View style={{flexDirection: "row", width: "90%", justifyContent: "flex-start"}}>
                <Text style={{ fontWeight: "500",fontSize: 14, color: "gray", paddingHorizontal: 14}}>
                    {item.toUpperCase()}
                </Text>
                {
                    utility!="create" &&
                    <TouchableOpacity onPress={()=> setEdit(true)}>
                        <Image source={require("../../assets/images/edit.png")}  style={{width:18, height: 18}}/>
                    </TouchableOpacity>
                }
            </View>
            {
                edit ?
                <TextInput
                    value={itemValue}
                    placeholder={`${itemValue ? itemValue : item}`}
                    onChangeText={(e)=>setItemValue(e)}
                    style={styles.subHead}
                    onSubmitEditing={utility!="create" ? handleSubmit : handleNewValue}
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