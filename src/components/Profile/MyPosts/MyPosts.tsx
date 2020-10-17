import React from 'react';
import posts from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsType} from "../../../redux/state";

type MyPostsPropsType = {
	postsData: Array<MyPostsType>
	addNewPost: (message: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

	const postElements = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}
																												 image={post.image}/>)

	const newPostElement = React.createRef<HTMLTextAreaElement>();


	const addNewPost = () => {
		let value = newPostElement.current?.value
		if (value) {
			props.addNewPost(value);
		}
	}

	return (
		<div>
			<div className={posts.post}>
				<p className={posts.title}>Create Post</p>
				<div className={posts.wrap}>
					<img className={posts.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
					<textarea ref={newPostElement} className={posts.textarea} placeholder="Write something here..."></textarea>
					<button className={posts.add__btn} onClick={addNewPost}>Add post</button>
				</div>
			</div>
			<div>
				{postElements}
			</div>
		</div>

	)
}

export default MyPosts;