import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


export default function DetailItemScreen() {

    const route = useRoute();
    const {character} = route.params;

  return (
    <View>
      <Text style={styles.name}>{character.name}</Text>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text>{character.status}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 300,
    },
    name: {
      fontSize: 30,
      fontWeight: '600',
      color: 'blue',
      marginLeft: 20,
    },
  })