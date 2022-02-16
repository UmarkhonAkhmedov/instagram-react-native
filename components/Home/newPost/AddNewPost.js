import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}} style={{width: 30, height: 30}}/>
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
  </View>
)

export default AddNewPost

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 19,
    marginLeft: 27.5,
  }
})