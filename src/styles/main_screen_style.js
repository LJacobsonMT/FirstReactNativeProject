import {StyleSheet} from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

  
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
      height:80,
      textAlign:"center",
      width:"50%",
      fontSize:40,
      marginTop:24,
    },
    textInputs: {
      flexDirection: 'row',
    },
    textButton: {
      alignSelf: 'center',
      padding:20,
      fontSize:25,
      color: "#6dc4a4",
      fontWeight: 'bold',
    },
    textResult: {
      alignSelf:'center',
      color:'lightgray',
      fontSize:65,
      padding:15,
    }
  
  });

  export default styles;