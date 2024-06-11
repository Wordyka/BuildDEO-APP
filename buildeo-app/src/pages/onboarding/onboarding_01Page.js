import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from "../../../assets/logo.png"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
function Onboarding() {
     const navigation = useNavigation();
     return (
          <LinearGradient
               colors={['#FF0000', '#FF4500']}
               style={styles.container}>
               <View style={styles.boxLogo}>
                    <Image source={logo} style={styles.logo} />
               </View>
               <Text style={styles.title}>BUILDEO</Text>
               <Text style={styles.subtitle}>Build your dream</Text>
               <View style={styles.flexGrow} />
               <View style={styles.boxBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OnboardingNext')}>
                         <Text style={styles.txtBtn}> Jetzt loslegen</Text>
                    </TouchableOpacity>
               </View>
          </LinearGradient>
     );
}

export default Onboarding;


const styles = StyleSheet.create({
     container: {
          backgroundColor: '#FF0000',
          height: '100%',
          padding: 11,
          flex: 1
     },
     boxLogo: {
          backgroundColor: '#ffffff',
          borderRadius: 55,
          padding: 13,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          marginTop: 29
     },
     logo: {
          width: 70,
          height: 70,
          resizeMode: 'contain',
     },
     title: {
          color: '#ffffff',
          fontSize: 70,
          fontWeight: '600',
          textAlign: 'center',
          letterSpacing: 7,
          marginTop: 40
     },
     subtitle: {
          color: '#ffffff',
          fontSize: 78,
          fontWeight: '700',
          lineHeight: 70,
          paddingTop: 39.9,
          height: 'auto'
     },
     flexGrow: {
          flex: 1,
     },
     boxBtn: {
          flexDirection: "row",
          justifyContent: 'center',
          marginBottom: 47

     },
     btn: {
          backgroundColor: '#ffffff',
          width: 270,
          borderRadius: 25

     },
     txtBtn: {
          textAlign: 'center',
          color: '#FF0000',
          paddingTop: 20,
          paddingBottom: 20,
          fontSize: 17,
          fontWeight: '600'
     }
})