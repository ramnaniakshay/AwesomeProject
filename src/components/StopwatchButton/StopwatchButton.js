import HomeViewStyles from '../Home/HomeViewStyles';
import {Text, TouchableOpacity} from 'react-native';
import i18n from '../../i18n/i18n';
import React from 'react';
import moment from 'moment';


const StopwatchButton = ({time, startOnPressAction, timerOnPressAction}) => {
    if(time>0){
        return(
            <TouchableOpacity 
            style={HomeViewStyles.mainActionBtn}
            onPress={timerOnPressAction}>
            <Text style={{ fontSize:60, color:'white',fontWeight:'bold'}}>
                    {moment.utc(time).format( 'HH:mm:ss')}
                </Text>
                <Text style={{ fontSize:24, color:'white',fontWeight:'bold'}}>
                    PAUSE
                </Text>
        </TouchableOpacity>
        );
    }
    return(
        <TouchableOpacity 
        style={HomeViewStyles.mainActionBtn}
        onPress={startOnPressAction}>
          <Text style={{ fontSize:60, color:'white',fontWeight:'bold'}}>{i18n.HOME.START}</Text>
    </TouchableOpacity>
    );
}

export default StopwatchButton;