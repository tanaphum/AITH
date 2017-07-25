'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    rowScore:{
        backgroundColor :'black',
        flex :1,
        flexDirection: 'row',
    },
    highScore : {
          backgroundColor :'green',
          flex :1,
    },
    time : {
        backgroundColor : 'yellow',
        flex :1,
    },
    score: {
        backgroundColor : 'pink',
        flex :1,
    },
    holerow: {
        backgroundColor : '#1565C0',
        flex :2,
        flexDirection: 'row',
    },
    playrow: {
        backgroundColor : 'pink',
        flex :1,
        flexDirection: 'row',
    },
    playArea: {
         backgroundColor : '#ffffff',
        flex :6,
    },
    hole:{
        backgroundColor : '#E3F2FD',
        margin : 15,
        padding : 36,
    },
    face:{
        fontSize : 30,
    },
    touch :{

    }

});