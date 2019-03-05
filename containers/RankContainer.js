'use strict';

import React from 'react';

import {connect} from 'react-redux';

import {Rank} from '../components/Rank';

import {changeContent} from '../actions/rankAction'

import { bindActionCreators } from 'redux';

class RankContainer extends React.Component{
	render() {
		return (
			<Rank {...this.props} />
		)
	}
}

function mapStateToProps(state){
	const {rank} = state;
	return {
		rank
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({changeContent}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RankContainer);