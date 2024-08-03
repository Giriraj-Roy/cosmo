import axios from 'axios';
import BASEURL from '../constants/baseURL';
import PROJECT_ID, {DEVELOPMENT_ID} from '../constants/devEnvBackend';

const options = {
  headers: {
    projectId: PROJECT_ID,
    environmentId: DEVELOPMENT_ID,
    'Content-Type': 'application/json',
  },
};
const GETEmployees = async () => {
  try {
    const response = await axios.get(
      BASEURL + 'employee?limit=100&offset=0',
      options,
    );
    // console.log("GETEmployees ", response.data);
    return response.data;
  } catch (e) {
    console.log('GETEmployees >> ', e);
    return [];
  }
};

export const GETEmployeeByID = async id => {
  try {
    const response = await axios.get(BASEURL + 'employee/' + id);
    // console.log("GETEmployeeByID ", response.data);
    // return response.data;
  } catch (e) {
    console.log('GETEmployeeByID >> ', e);
  }
};

export const POSTEmployee = async data => {
  try {
    const response = await axios.post(BASEURL + 'employee', data, options);
    console.log('POSTEmployee Success', response.data);
    return response.data;
  } catch (e) {
    console.log('POSTEmployee Error >> ', e);
    return [];
  }
};

export const PATCHEmployee = async (id, data) => {
  try {
    const response = await axios.patch(
      BASEURL + 'employee/' + id,
      data,
      options,
    );
    console.log('PATCHEmployee Success', response.data);
    return response.data;
  } catch (e) {
    console.log('PATCHEmployee Error >> ', e);
    return [];
  }
};

export const DELETEEmployeeByID = async (id) => {
  try {
    // const data = {};
    let data = JSON.stringify({});

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: BASEURL+'employee/'+id,
      headers: options.headers,
      data: data,
    };

    return axios
      .request(config)
      .then(response => {
        console.log("DELETEEmployeeByID ", response.data);
        return response.data
      })

    // const response = await axios.delete(BASEURL + "employee/" + id, data, options)
    // console.log("DELETEEmployeeByID ", response.data);
    // return response.data;
  } catch (e) {
    console.log('DELETEEmployeeByID >> ', e);
  }
};

export default GETEmployees;
