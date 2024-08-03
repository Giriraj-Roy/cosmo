import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Fields from './minors/Fields'
import AppContext from '../utils/AppContext'
import Loader from './Loader'
import { POSTEmployee } from '../utils/ApiCalls'
import { useNavigation } from '@react-navigation/native'

const CreateEmpModal = () => {
    const {createEmp,setCreateEmp, loading, setLoading} = useContext(AppContext);
    const navigation = useNavigation();
    const tempDetails = {
        name: "", email: "", phone: "", address : {}
    }
    const [details, setDetails] = useState(tempDetails);
    const handleAdd = async ()=>{
        setLoading(true)
        // console.log("Details >>> ", loading,  details);

        const response = await POSTEmployee(details)
        console.log("POSTEmployee>>> ",response);
        
        setTimeout(()=>{
            setLoading(false);
            setCreateEmp(false);
            navigation.navigate("Home")
        },1000)

    }
    return (
        loading ? <Loader/> :
        <Modal 
            transparent={true}
            visible={createEmp}
        >
            <ScrollView contentContainerStyle={styles.container}>

                    <Fields item={"Name"} details={details} setDetails={setDetails} utility={"create"} value={""} />
                    <Fields item={"Email"} details={details} setDetails={setDetails} utility={"create"} value={""} />
                    <Fields item={"Phone"} details={details} setDetails={setDetails} utility={"create"} value={""} />
                    <Text style={{ fontWeight: "500",fontSize: 14, color: "gray", paddingHorizontal: 14}}>
                        ADDRESS
                    </Text>
                    <Fields item={"Lane"} details={details} setDetails={setDetails} utility={"create"} value={""} />
                    <Fields item={"City"} details={details} setDetails={setDetails} utility={"create"} value={""} />
                    <Fields item={"Country"} details={details} setDetails={setDetails} utility={"create"} value={""} />
                    <Fields item={"Zip"} details={details} setDetails={setDetails} utility={"create"} value={""} />


                    
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