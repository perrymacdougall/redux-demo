import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label><br />
						<input type="text" name="title" onChange={this.onChange} value={this.state.title} />
					</div>
					<div>
						<label>Body: </label><br />
						<textarea name="body" onChange={this.onChange} value={this.state.body} />
					</div>
					<br />
					<button type="submit" value={this.state.body}>Submit</button>
				</form>
			</div>
		)
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);