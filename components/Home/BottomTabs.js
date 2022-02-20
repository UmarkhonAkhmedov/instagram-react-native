import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home')
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() =>setActiveTab(icon.name)}>
      <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null, activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,]}/>
    </TouchableOpacity>
  )

  return (
    <View style={styles.wrapper}>
      <View style={{ borderBottomColor: '#2a2a2a', borderBottomWidth: 2}}/>
      <View style={styles.container}>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon}/>
      ))}
      </View>
    </View>
    
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#000'
  },  
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: '#fff',
  })
})