import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/minors/HomeHeader'
import ListEmployees from '../components/ListEmployees';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#b36ff7" barStyle="light-content" />
      <HomeHeader />
      <View height={10}/>
      <ListEmployees/>

    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({})