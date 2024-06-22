import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ImageViewer, IconButton, CircleButton } from './components';

import * as ImagePicker from 'expo-image-picker';

const Placeholder = require('./assets/images/background-image.png')

export default function App() {

  const [image, setImage] = useState(null);

  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      console.log(result);
      setImage(result.assets[0].uri)
      showAppOptions(true)
    } else {
      alert('You have cancelled the image picker.')
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={Placeholder} selectedImage={image} />
      </View>
      {
        showAppOptions ?
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
          :
          <View style={styles.footerContainer}>
            <Button label="Choose a photo!" theme='primary' onPress={() => pickImage()} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 150,
  },
  footerContainer: {
    flex: 0.6,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
