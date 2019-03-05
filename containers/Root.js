
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeContainer from './HomeContainer';
import RankContainer from './RankContainer';


const AppNavigator = createStackNavigator({
  home:HomeContainer,
  rank:RankContainer
},
{
  initialRouteName: 'home'
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

