import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GETEmployeeByID, PATCHEmployee } from '../../utils/ApiCalls';
import AppContext from '../../utils/AppContext';

const Fields = ({item, details, setDetails, value, utility="none"}) => {

    const {currentEmp} = useContext(AppContext)
    const [edit, setEdit] = useState(utility=="create");
    const [itemValue, setItemValue] = useState(value || "");


    // API Call To be Handled While Updating Data
    const handleSubmit=async ()=>{
        //make API call to PATCH data
        console.log("make UPDATE API call");
        try{
            let keyVal = item.toLowerCase()
            if(keyVal == "name" || keyVal == "email" || keyVal == "phone"){
                const temp={[keyVal] : itemValue}
                const response = await PATCHEmployee(currentEmp?._id,temp)
                console.log("PATCHEmployee>>> ",response)
            }
            else{
                const temp = {address : {[keyVal] : itemValue}}
                const response = await PATCHEmployee(currentEmp?._id,temp)
                console.log("PATCHEmployee>>> ",response)
            }
            
        }catch(e){
            console.log(e);
        }
        setEdit(false);
    }

    //API call To be handled while Creating New Employee
    const handleNewValue= ()=>{
        try{
            let keyVal = item.toLowerCase()
            if(keyVal == "name" || keyVal == "email" || keyVal == "phone"){
                const temp={...details,  [keyVal] : itemValue}
                setDetails(temp)
            }
            else{
                const temp = {...details , address : {...details.address , [keyVal] : itemValue}}
                setDetails(temp)
            }
            
        }catch(e){
            console.log(e);
        }
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
                    inputMode={`${
                        (item.toLowerCase()==="phone")
                            ? "tel"
                            : item.toLowerCase()==="email"
                            ? "email"
                            : "text"
                        }
                    }`}
                    onBlur={utility=="create" ? handleNewValue : null}
                    onSubmitEditing={utility!="create" ? handleSubmit : handleNewValue}
                />
                :
                <Text style={styles.subHead}>
                    {itemValue}
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