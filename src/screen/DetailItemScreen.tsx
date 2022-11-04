import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


export default function DetailItemScreen() {

    const route = useRoute();
    const {character} = route.params;

  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})