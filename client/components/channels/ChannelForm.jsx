import React, {Component} from 'react';

class ChannelForm extends Component{

	onSubmit(e){
		e.preventDefault();
		const node = this.refs.channel;
		const channelName = node.value;
		this.props.addChannel(channelName);
		node.value = '';
	}

	render(){
		return(
			<div>
				<h3> Add Channel</h3>
				<form onSubmit = {this.onSubmit.bind(this)}>
					<div className='form-group'>
						<input 
							className='form-control'
							type='text'
							ref='channel'
							placeholder='Name of Channel'
						/>
					</div>
				</form>
			</div>
		)
	}
}

ChannelForm.propTypes = {
	addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm