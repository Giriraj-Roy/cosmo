import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Fields from './minors/Fields'
import AppContext from '../utils/AppContext'

const CreateEmpModal = () => {
    const {createEmp,setCreateEmp} = useContext(AppContext);
    const [details, setDetails] = useState([]);
    const handleAdd = ()=>{

    }
    return (
        <Modal 
            transparent={true}
            visible={createEmp}
        >
            <ScrollView contentContainerStyle={styles.container}>

                    <Fields item={"Name"} utility={"create"} value={""} />
                    <Fields item={"Email"} utility={"create"} value={""} />
                    <Fields item={"Phone"} utility={"create"} value={""} />
                    <Text style={{ fontWeight: "500",fontSize: 14, color: "gray", paddingHorizontal: 14}}>
                        ADDRESS
                    </Text>
                    <Fields item={"Lane"} utility={"create"} value={""} />
                    <Fields item={"City"} utility={"create"} value={""} />
                    <Fields item={"Country"} utility={"create"} value={""} />
                    <Fields item={"Zip Code"} utility={"create"} value={""} />


                    
                    <TouchableOpacity onPress={handleAdd} style={styles.cta}>
                        <Text style={{color: "white", fontSize: 16, fontWeight: 500}}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setCreateEmp(false)} style={[styles.cta, {backgroundColor: "white", borderWidth:1}]}>
                        <Text style={[{color: "white", fontSize: 16, fontWeight: 500}, {color : "#b36ff7"}]}> CANCEL</Text>
                    </TouchableOpacity>

            </ScrollView>
        </Modal>
    )
}

export default CreateEmpModal

const styles = StyleSheet.create({
    container : {
        position : "absolute",
        top : "2%",
        paddingVertical: 30,
        alignSelf : "center",
        width : "90%",
        backgroundColor : "white",
        borderRadius: 20,
        alignItems: "center"
    },
    cta : {
        marginVertical: 10,
        width : "90%",
        backgroundColor : "#b36ff7",
        paddingVertical: 8,
        borderRadius : 6,
        alignItems : "center"
    }
})