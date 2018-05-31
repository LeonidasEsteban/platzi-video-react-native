import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  WebView,
  ScrollView,
} from 'react-native';



const makeHTML = (id) => {
  return (`
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `)
}

function Details(props) {
  return (
    <ScrollView>
      <View style={styles.top}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: props.medium_cover_image }}
          />
          <Text style={styles.description}>{props.description_full}</Text>
        </View>
      </View>
      <View style={styles.trailer}>
        <WebView
          source={{html: makeHTML(props.yt_trailer_code ) }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  trailer: {
    height: 200,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  }
})

export default Details;
