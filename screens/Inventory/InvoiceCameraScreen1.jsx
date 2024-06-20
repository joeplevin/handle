import React, {useCallback, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {Button, Text, View} from 'react-native';

const InvoiceCameraScreen = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef(null);
  if (!hasPermission) {
    return (
      <View>
        <Text>Camera permission is required</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }
  if (!device) {
    return <Text>Camera device not found</Text>;
  } else {
    return (
      <>
        <View style={styles.container}>
          <Text style={{color: 'white', zIndex: 99}}>
            Position Invoice inside Red Box
          </Text>
          <Camera
            device={device}
            isActive={true}
            style={{
              flex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
            }}
            ref={camera}
            photo={true}
          />
          <View style={styles.overlay}></View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    height: '100%',
  },
  overlay: {
    top: '12%', // adjust based on where you want the rectangle
    left: '10%', // adjust based on where you want the rectangle
    width: '80%', // adjust based on your rectangle's size
    height: '70%', // adjust based on your rectangle's size
    borderWidth: 2,
    borderColor: 'red',
    zIndex: 1,
    backgroundColor: 'transparent',
    borderRadius: 10, // optional, for rounded corners
  },
});

export default InvoiceCameraScreen;
