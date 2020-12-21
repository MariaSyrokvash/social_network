import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from '../../../redux/store';
import {Field, InjectedFormProps} from 'redux-form';
import { reduxForm} from 'redux-form';

type MyPostsPropsType = {
	postsData: Array<MyPostsType>
	// trackTextarea: (value: string) => void
	addNewPost: () => void
	newPostContent: string
}


const MyPosts = (props: MyPostsPropsType) => {


	const postsData = props.postsData

	const postElements = postsData.map(post => <Post message={post.message}
																									 likeCount={post.likeCount}
																									 key={post.id}
																									 image={post.image}/>)

	const addNewPost = (values: any) => {
		alert('new Post')
		// props.addNewPost(values.newPostContent)
	}

	// const newPostElement = React.createRef<HTMLTextAreaElement>();y
	// const addNewPost = () => {
	// 	props.addNewPost()
	// }
	//
	// const onPostChange = () => {
	// 	const value = newPostElement.current?.value
	// 	if (value) {
	// 		props.trackTextarea(value)
	// 	}
	// }

	return (
		<div>
			<div className={posts.post}>
				<p className={posts.title}>Create Post</p>
				<AddPostFormRedux onSubmit={addNewPost}/>
			</div>
			<div>
				{postElements}
			</div>
		</div>
	)
}

type FormDataType = {
	newPostContent: string
}


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	console.log(props)
	return (
		<form className={posts.wrap} onSubmit={props.handleSubmit}>
			<img className={posts.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
			<Field className={posts.textarea} component='textarea' name='newPostContent' placeholder="Write something here..."/>
			{/*<textarea className={posts.textarea}*/}
			{/*					ref={newPostElement}*/}
			{/*					value={props.newPostContent}*/}
			{/*					onChange={onPostChange}*/}
			{/*					placeholder="Write something here..."></textarea>*/}
			<button className={posts.add__btn} >Add post</button>
		</form>
	)
}

const AddPostFormRedux = reduxForm<FormDataType>({
	form: 'newPostContent'
})(AddMessageForm)

export default MyPosts;