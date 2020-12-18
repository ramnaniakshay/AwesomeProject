import React from 'react';
import {Text, AppState, TouchableOpacity, View} from 'react-native';
import i18n from '../../i18n/i18n';
import HomeViewStyles from './HomeViewStyles';
import moment from 'moment';
import StopwatchButton from '../StopwatchButton/StopwatchButton';
import AsyncStorage from '@react-native-community/async-storage';

class HomeView extends React.Component {

    constructor(props){
        super(props);
            this.state = {
                time: 0,
            };
    }

    async handleAppStateChange(nextAppState){
        console.log('nextAppState',nextAppState);
        const now = new Date.getTime();
        const {time} = this.state;

        const readTime = await AsyncStorage.getItem('@time');
        const readState = await AsyncStorage.getItem('@appStateChangedTimestamp');

        console.log('stored data',readTime, readState);

        await AsyncStorage.setItem('@time',time);
        await AsyncStorage.setItem('@appStateChangedTimestamp',now);
       
    }

    componentDidMount(){
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount(){
        AppState.removeEventListener('change', this.handleAppStateChange);
    }


    startTimer(){
        setInterval( () => {
            const {time, paused} = this.state;

            if(!paused){

                this.setState( {
                    time: time + 1000,
                });

            }
            
        }, 1000);
    }

    pauseTimer(){
        const {paused} = this.state; //paused= false
           
        this.setState( {
            paused: !paused, //paused= !false = true

        });
    }
    render(){

        const {time} = this.state;
        return(

            <View style={{flex: 1, alignItems:'center'}}>
               <View style={{flex: 1}}>
           <Text style={HomeViewStyles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
               </View>
               <View style={{flex: 2}}>
                
                   <StopwatchButton time={time}
                        startOnPressAction = {this.startTimer.bind(this)}
                        timerOnPressAction = {this.pauseTimer.bind(this)}
                    />
               </View>
            </View>
           );
    }
   
};


export default HomeView;