import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://cdn.pixabay.com/photo/2017/04/20/07/08/upload-2244780__340.png'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption  has reached the character limit.')
})

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik 
        initialValues={{caption: '', imageUrl: ''}} 
        onSubmit={values => {
          console.log(values)
          navigation.goBack()
        }} 
        validationSchema={uploadPostSchema}
        validateOnMount={true}
        > 
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => 
        <>
          <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Image source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} style={{width: 100, height: 100}}/>
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput 
                style={{color: 'white', fontSize: 20}} 
                placeholder='Write a caption ...' 
                placeholderTextColor='gray' 
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                values={values.caption}
              />
              </View>
          </View>
          <View style={{ borderBottomColor: '#2a2a2a', borderBottomWidth: 1}}/>
          <TextInput 
          onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 18}} 
            placeholder='Enter Image Url' 
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            values={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
        </>
      }
    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({})