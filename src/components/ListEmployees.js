import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import NoEmployees from './NoEmployees';
import GETEmployees from '../utils/ApiCalls';
import employeeList from '../assets/data/employees';
import { useFocusEffect } from '@react-navigation/native';

const ListEmployees = () => {

  const [employees, setEmployees] = useState([])

  const fetchEmployees = async ()=>{
    try{
      const response = await GETEmployees();
      // console.log("fetchEmployees>>", response.data);
      
      setEmployees(response.data)

    }catch(e){
      console.error(" fetchEmployees ", e);
      
    }
  }

  useFocusEffect(
    useCallback(()=>{
      fetchEmployees();
      // console.log("");
    },[])
  )

  useEffect(()=>{
    fetchEmployees()
    // setEmployees(employeeList)
  },[])

  const renderItem = ({item}) => {
    return <EmployeeCard key={item} employee_details={item} />;
  };

  return employees.length > 0 ? (
    <>
      {
        <FlatList
          data={employees}
          renderItem={renderItem}
        />
      }
    </>
  ) : (
    <NoEmployees />
  );
};

export default ListEmployees;

const styles = StyleSheet.create({});
