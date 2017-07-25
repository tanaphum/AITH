
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

var timeLimit = 15;
var timer;
var faces;

var ani = React.createClass({
    render(){
        return(
            // <TouchableHighlight style = {styles.touch}>
             <Text style={styles.face}>{this.props.show ? '😳' : ''}</Text> 
            //  </TouchableHighlight>
        )
    }
})
    

export default class Game extends Component {
    
  constructor() {
    super();
    this.state = {
        highScore : 0,
        timeCount : 0,
        score : 0,
        playing : false,
        holes : [false,true,false,false,false,false,false,false,false]
    }
  }
  _Startgame(){
        this.setState({
            timeCount: timeLimit,
            playing :true,
            score:0,
        });
        faces = setInterval(() =>{
            var currentHoles = this.state.holes;
            currentHoles[Math.floor(Math.random()*9)]= true;
            if(!Math.floor(Math.random()*3)){
                currentHoles = [false,false,false,false,false,false,false,false,false]
            }
            this.setState({
                holes:currentHoles,
            })
            if(!this.state.playing){
                clearInterval(faces);
                this.setState({
                    holes : [false,false,false,false,false,false,false,false,false],
                })
            }
        },500)
        timer = setInterval (
            () => {
                this.setState({
                    timeCount : this.state.timeCount - 1,
                });
                if (this.state.timeCount==0) {
                    this._StopGame();
                }
            }
        ,1000)
  }
    _StopGame(){
        clearInterval(timer);
        this.setState({
            playing: false,
            highScore :(this.state.score > this.score.highScore) ? this.state.highScore : this.state.score
        });
    }
    _handleTouch(holenumber){
            if(this.state.hole[holenumber]){
                this.setState({
                    score : this.state.score +1,
                })
            }
    }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.rowScore}>
                <View style={styles.highScore}>
                    <Text>High Score</Text>
                    <Text>{this.state.highScore}</Text>
                </View>
                <View style={styles.time}>
                    <Text>Time</Text>
                    <Text>{this.state.timeCount}</Text>
                </View>
                <View style={styles.score}>
                    <Text>Score</Text>
                    <Text>{this.state.score}</Text>
                </View>
            </View>
            <View style={styles.playArea}>
                    <View style={styles.holerow}>
                        <View style={styles.hole}>
                            
                        </View>
                        <View style={styles.hole}>
                            {/* <ani/> */}
                        </View>
                        <View style={styles.hole}>
                            {/* <ani/> */}
                        </View>
                    </View>
                    <View style={styles.holerow}>
                        <View style={styles.hole}>
                            <Text style={styles.face}>😳</Text>
                        </View>
                        <View style={styles.hole}>
                            <Text style={styles.face}>😳</Text>
                        </View>
                        <View style={styles.hole}>
                            <Text style={styles.face}>😳</Text>
                        </View>
                    </View> 
                    <View style={styles.holerow}>
                        <View style={styles.hole}>
                            <Text style={styles.face}>😳</Text>
                        </View>
                        <View style={styles.hole}>
                            <Text style={styles.face}>😳</Text>
                        </View>
                        <View style={styles.hole}>
                            <Text style={styles.face}>😳</Text>
                        </View>
                    </View>     
            </View>    
            <View style={styles.playrow}>
              
                <View style={{flex:1}}>
                    <Button
                    onPress={this._Startgame.bind(this)}
                    title="Playgame"
                    color="#841584"
                    disabled = {this.state.playing}
                    />
                </View>
 
            </View>           
      </View>
    );
  }
}

const styles = styles = require('./styles');