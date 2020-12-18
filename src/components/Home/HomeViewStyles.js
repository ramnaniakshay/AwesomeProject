import {StyleSheet} from 'react-native';
import HomeView from './HomeView';


const HomeViewStyles = StyleSheet.create({

    welcomeHeader: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
        marginTop: 50,
    },

    mainActionBtn:{
        width:284,
        height:284,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00CD5E',
        borderRadius:360,

    }
});

export default HomeViewStyles;