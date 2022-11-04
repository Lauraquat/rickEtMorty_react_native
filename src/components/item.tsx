import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export default function item(props) {
  return (
    <Pressable style={styles.container} onPress={() => props.onPress()}>
      <Image source={{ uri: props.character.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{props.character.name}</Text>
        <Text style={styles.description}>{props.character.species}</Text>
      </View>
    </Pressable>
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
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 20,
  }
})