import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Shoes from'../Shoes'

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{flexDirection:'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal:10}}>
                <Shoes img={require('../../assets/1.png')} cost={"110,90"}>
                    Nike qualquer 1
                </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes img={require('../../assets/5.png')} cost={"210,90"}>
                    Nike qualquer 3
                </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes img={require('../../assets/3.png')} cost={"610,90"}>
                    Nike qualquer 2
                </Shoes>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize:24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})