import React, {Component} from 'react';

class UserForm extends Component{

	onSubmit(e){
		e.preventDefault();
		const node = this.refs.userName;
		const userName = node.value;
		this.props.setUserName(userName);
		node.value = '';
	}

	render(){
		return(
			<div>
				<h3> Add User</h3>
				<form onSubmit = {this.onSubmit.bind(this)}>
					<div className='form-group'>
						<input 
							ref='userName'
							type='text'
							className='form-control'
							placeholder='Enter User Name'
						/>
					</div>
				</form>
			</div>
		)
	}
}

UserForm.propTypes = {
	setUserName: React.PropTypes.func.isRequired
}

export default UserForm