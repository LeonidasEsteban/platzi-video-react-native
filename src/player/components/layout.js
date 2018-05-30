import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Layout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      <View style={styles.overlay}>
        {
          props.loading &&
          props.loader
        }
      </View>
      {props.controls}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Layout;
