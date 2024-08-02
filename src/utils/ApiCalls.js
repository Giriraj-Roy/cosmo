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