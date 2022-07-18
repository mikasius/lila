import React, { useState } from 'react';
import { Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from './Constants';
import * as Words from '../assets/data.json';

export const RootApp = () => {
  const [num, setNum] = useState<number>(0);

  const onRetakeWord = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rand = Math.floor(Math.random() * (max - min + 1) + min);

    setNum(rand);
  };

  return (
    <SafeAreaView style={OwnStyles.container}>
      <View key={'HEADER'}>
        <Text>Лила</Text>
      </View>

      <View style={OwnStyles.background}>
        <View style={OwnStyles.separator} />
        <Text style={OwnStyles.text}>{Words[num as string]}</Text>
        <View style={OwnStyles.separator} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
        }}
      >
        <Button title={'Re-take'} onPress={() => onRetakeWord(0, 10)} />
      </View>
    </SafeAreaView>
  );
};

const OwnStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
  },

  text: {
    color: Colors.TEXT,

    fontSize: 30,
    fontFamily: Fonts.REGULAR,
    lineHeight: 46,
    paddingHorizontal: 24,
    textAlign: 'center',
  },

  separator: {
    alignSelf: 'center',

    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.SEPARATOR,

    width: Dimensions.get('screen').width / 2,
    marginVertical: 18,
  },

  background: {
    backgroundColor: Colors.BACKGROUND,
  },
});
