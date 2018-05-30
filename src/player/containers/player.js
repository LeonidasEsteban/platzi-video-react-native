import React, { Component } from 'react';
import Video from 'react-native-video';
import {
  StyleSheet
} from 'react-native';
import Layout from '../components/layout';

class Player extends Component {
  render() {
    return (
      <Layout
        video={
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player
