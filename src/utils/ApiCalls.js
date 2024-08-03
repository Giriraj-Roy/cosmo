import axios from "axios";
import BASEURL from "../constants/baseURL";
import PROJECT_ID, { DEVELOPMENT_ID } from "../constants/devEnvBackend";

const GETEmployees = async ()=>{
    try{
        const options = {
            headers: {
                projectId: PROJECT_ID,
                environmentId: DEVELOPMENT_ID,
                'Content-Type': 'application/json',
            }
        }
        const response = await axios.get(BASEURL + "employee?limit=100&offset=0", options)
        // console.log("GETEmployees ", response.data);
        return response.data;

    }catch(e){
        console.log("GETEmployees >> ",e);
        return [];
    }
}

export const GETEmployeeByID = async (id)=>{
    try{
        const response = await axios.get(BASEURL + "employee/" + id)
        // console.log("GETEmployeeByID ", response.data);
        // return response.data;

    }catch(e){
        console.log("GETEmployeeByID >> ",e);
    }
}

export const POSTEmployee = async (data)=>{
    try{

        const options = {
            headers: {
                projectId: PROJECT_ID,
                environmentId: DEVELOPMENT_ID,
                'Content-Type': 'application/json',
            }
        }
        // console.log("data",data);
        
        const response = await axios.post(BASEURL+"employee", data, options)
        console.log("POSTEmployee Success", response.data);
        return response.data;

    }catch(e){
        console.log("POSTEmployee Error >> ",e);
        return []
    }
}

export const PATCHEmployee = async (id, data)=>{
    try{

        const options = {
            headers: {
                projectId: PROJECT_ID,
                environmentId: DEVELOPMENT_ID,
                'Content-Type': 'application/json',
            }
        }
        // console.log("data",data);
        
        const response = await axios.patch(BASEURL+"employee/"+id, data, options)
        console.log("PATCHEmployee Success", response.data);
        return response.data;

    }catch(e){
        console.log("PATCHEmployee Error >> ",e);
        return []
    }
}


export default GETEmployees

