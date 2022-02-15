import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <View style={{ borderBottomColor: '#2a2a2a', borderBottomWidth: 2}}/>
      <PostHeader post={post}/>
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.story}/>
      <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>
    </View>
    <Text style={{color: 'white', fontWeight: '900', marginRight: 5}}>...</Text>
  </View>
)
export default Post

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  }
})