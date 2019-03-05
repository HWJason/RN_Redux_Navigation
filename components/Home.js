import React,{Component} from 'react';
import {View,Text} from 'react-native';


export class Home extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:'wori'
	};

    jumpToPerson = ()=>{
        this.props.navigation.navigate('rank')
    }

    render(){
        return (<View>
            <Text onPress={this.jumpToPerson}>{this.props.home.title}</Text>
        </View>)
    }
}