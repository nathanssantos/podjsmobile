import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Colors from '../constants/Colors'

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View >
          <Text>......</Text>
        </View>
      </ScrollView>
    </View>
  )
}

LinksScreen.navigationOptions = {
  title: 'pod.js',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackground,
  },
  contentContainer: {
    padding: 16
  }
})
