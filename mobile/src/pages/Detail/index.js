import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, TouchableOpacity } from 'react-native'
import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={() => {}}>
          <Feather name='arrow-left' size={28} color='#E02041' />
          {/* TODO: 51:56 */}
        </TouchableOpacity>
      </View>
    </View>
  )
}
