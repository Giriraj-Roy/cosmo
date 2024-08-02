import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#b36ff7" barStyle="light-content" />
      <HomeHeader />
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({})