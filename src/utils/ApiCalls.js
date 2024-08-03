import axios from "axios";
import BASEURL from "../constants/baseURL";
import PROJECT_ID, { DEVELOPMENT_ID } from "../constants/devEnvBackend";

const GETEmployees = async ()=>{
    try{
        const response = await axios.get(BASEURL + "employee")
        console.log("GETEmployees ", response.data);
        // return response.data;

    }catch(e){
        console.log("GETEmployees >> ",e);
        return [];
    }
}

const GETEmployeeByID = async (id)=>{
    try{
        const response = await axios.get(BASEURL + "employee/" + id)
        console.log("GETEmployeeByID ", response.data);
        // return response.data;

    }catch(e){
        console.log("GETEmployeeByID >> ",e);
    }
}

const POSTEmployee = async (data)=>{
    try{

        const headers = {
            project_id : PROJECT_ID,
            development_id : DEVELOPMENT_ID
        }
        const response = await axios.post(BASEURL+"employee", data, {headers : headers})
        console.log("POSTEmployee ", response.data);
        return response.data;

    }catch(e){
        console.log("POSTEmployee >> ",e);
        return []
    }
}