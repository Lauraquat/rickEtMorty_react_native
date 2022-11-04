import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function item(props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.character.image}} style={styles.image}/>
      <Text style={styles.name}>{props.character.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  name: {
    fontSize: 21,
    fontWeight: '600',
    color: 'blue',
    marginLeft: 20,
  }
})