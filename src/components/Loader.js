import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <SafeAreaView style={styles.loader}>
        <ActivityIndicator color={"#b36ff7"} size={'large'} />
    </SafeAreaView>
  )
}

export default Loader

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    width: "100%",
    height : "100%",
    zIndex: 99
  },
});