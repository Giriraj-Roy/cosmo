import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmployeeCard from './EmployeeCard'
import NoEmployees from './NoEmployees'

const ListEmployees = () => {
  return (
    
    true ? 
    <>
        {
            [1,2,3,4,5].map((ele)=>{
                return (
                    <EmployeeCard key={ele}/>
                )
            })
        }
    </>
    :
    <NoEmployees/>
  )
}

export default ListEmployees

const styles = StyleSheet.create({})