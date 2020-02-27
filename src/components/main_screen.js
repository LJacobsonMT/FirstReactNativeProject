/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/main_screen_style';

type Props = {}
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, result:0, resultText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)
    let s = this.state
    s.result = imc
    this.setState(s)
  }

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
             <Header/>
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
                
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
               
              <Text style={styles.sectionTitle}>Cálculo de IMC</Text>
                <Text style={styles.sectionDescription}>
                  Insira a sua <Text style={styles.highlight}>massa</Text> e seu <Text style={styles.highlight}>peso</Text> para calcular o IMC.
                </Text>
                
              </View>
              <View style={styles.textInputs}>
                <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}></TextInput>
                <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>
              </View>
              <TouchableOpacity onPress={this.calcular}><Text style={styles.textButton}>Calcular</Text></TouchableOpacity>
              <Text style={styles.textResult}>{this.state.result.toFixed(2)}</Text>
              <Text style={[styles.textResult, {fontSize:40}]}>{this.state.resultText}</Text>
            </View>
        </ScrollView>
      </SafeAreaView>
      </>
      
    );
  }
}


