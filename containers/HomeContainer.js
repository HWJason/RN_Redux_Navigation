'use strict';

import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {Home} from '../components/Home';
import {changeTitle} from '../actions/homeAction'


class HomeContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	static navigationOptions = {
       
	};
	
	componentDidMount(){
		console.log(this.props,'mmmm')
	}

	render() {
		return (
			<Home {...this.props} />
		)
	}
}

function mapStateToProps(state){
	const {home,rank} = state;
	return {
		home,
		rank
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({changeTitle}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);