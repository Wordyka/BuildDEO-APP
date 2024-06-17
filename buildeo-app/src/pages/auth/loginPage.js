import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     return (
          <View style={styles.container}>
               <TextInput
                    placeholder='Email Adresse'
                    style={styles.emailInput}
                    placeholderTextColor='#999'
                    value={email}
                    onChangeText={setEmail}
               />
               <TextInput
                    placeholder='Passwort'
                    style={styles.emailInput}
                    placeholderTextColor='#999'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
               />
               <TouchableOpacity >
                    <Text style={styles.txtForgot}>
                         Passwort vergessen?
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.txtLogin}>Login</Text>
               </TouchableOpacity>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: '#F2F2F2',
          flex: 1,
          padding: 50,
     },
     emailInput: {
          borderBottomColor: '#000000',
          borderBottomWidth: 0.5,
          height: 59,
          marginBottom: 20,
          fontSize: 17
     },
     btnLogin: {
          backgroundColor: '#FA4A0C',
          borderRadius: 30,
          marginVertical: 160
     },
     txtLogin: {
          color: '#ffffff',
          textAlign: 'center',
          padding: 18,
          fontSize: 17,
          fontWeight: 'bold'
     },
     txtForgot: {
          fontSize: 17,
          fontWeight: 'bold',
          color: '#FA4A0C'
     }
});
