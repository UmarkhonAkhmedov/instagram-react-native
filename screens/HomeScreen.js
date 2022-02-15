import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})