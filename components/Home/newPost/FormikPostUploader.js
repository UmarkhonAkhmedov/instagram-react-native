import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const PLACEHOLDER_IMG = 'https://cdn.pixabay.com/photo/2017/04/20/07/08/upload-2244780__340.png'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption  has reached the character limit.')
})

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik initialValues={{caption: '', imgageUrl: ''}} onSubmit={(values) => console.log(values)} validationSchema={uploadPostSchema}> 
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => 
        <>
          <View>
            <Image source={{uri: PLACEHOLDER_IMG}} style={{width: 100, height: 100}}/>
            <TextInput style={{color: 'white'}} placeholder='Write a caption ...' placeholderTextColor='gray' multiline={true}/>
            <TextInput placeholder='Enter Image Url' placeholderTextColor='gray'/>
          </View>
        </>
      }
    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({})