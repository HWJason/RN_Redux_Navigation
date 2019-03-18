import React,{Component} from 'react';
import {View,Text} from 'react-native';

export class Rank extends Component{
    constructor(props){
        super(props);
    }

    changeTitle = ()=>{
        const {changeContent} = this.props;
        changeContent('卧槽你大爷')
    }

    goBack = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }
    
    render(){
        return (<View style={{paddingTop:100}}>
            <Text onPress={this.changeTitle}>{this.props.rank.title}</Text>
            <Text onPress={this.goBack}>返回</Text>
        </View>)
    }
}