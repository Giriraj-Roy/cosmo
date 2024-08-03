import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import HomeHeader from '../components/minors/HomeHeader'
import ListEmployees from '../components/ListEmployees';
import CreateEmployeeBtn from '../components/CreateEmployeeBtn';
import AppContext from '../utils/AppContext';
import CreateEmpModal from '../components/CreateEmpModal';

const Home = () => {
  const {createEmp} = useContext(AppContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#b36ff7" barStyle="light-content" />
      <HomeHeader />

      <ListEmployees/>
      <CreateEmployeeBtn/>
      {
        createEmp && <CreateEmpModal />
      }

    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({})