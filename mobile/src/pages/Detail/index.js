import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'
import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do Caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  /*
    deep linking é como se fosse uma url tipo hattp://whatsapp.com, mas para 
    aplicativos de um celular tb através de um endereço.
    Todo aplicativo (pelo menos os mais famosos) em celulares tem o deep linking.
  */
  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' size={28} color='#E02041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
          {`ONG:   `}
          <Text style={styles.incidentValue}>
            {incident.name} de {incident.city}/{incident.uf}
          </Text>
        </Text>

        <Text style={styles.incidentProperty}>
          {`CASO:   `}
          <Text style={styles.incidentValue}>{incident.title}</Text>
        </Text>

        <Text style={styles.incidentProperty}>
          {`DESCRIÇÃO:   `}
          <Text style={styles.incidentValue}>{incident.description}</Text>
        </Text>

        <Text style={styles.incidentProperty}>
          {`VALOR:   `}
          <Text style={styles.incidentValue}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}
          </Text>
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
