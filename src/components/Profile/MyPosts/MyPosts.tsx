import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsType, MyPostsType, ProfilePageType} from '../../../redux/store';

type MyPostsPropsType = {
	// postsData: ProfilePageType
	postsData: Array<MyPostsType>
	// dispatch: (action: ActionsType) => void
	trackTextarea: (value: string) => void
	addNewPost: () => void
	newPostContent: string
}


const MyPosts = (props: MyPostsPropsType) => {


	const postsData = props.postsData
	console.log(postsData)
	const postElements = postsData.map(post => <Post message={post.message}
																																	 likeCount={post.likeCount}
																																	 key={post.id}
																																	 image={post.image}/>)

	const newPostElement = React.createRef<HTMLTextAreaElement>();


	const addNewPost = () => {
		props.addNewPost()
	}

	const onPostChange = () => {
		const value = newPostElement.current?.value
		if (value) {
			props.trackTextarea(value)
		}
	}

	return (
		<div>
			<div className={posts.post}>
				<p className={posts.title}>Create Post</p>
				<div className={posts.wrap}>
					<img className={posts.ava} src='https://iqonic.design/themes/socialv/html/images/user/1.jpg'/>
					<textarea className={posts.textarea}
										ref={newPostElement}
										value={props.newPostContent}
										onChange={onPostChange}
										placeholder="Write something here..."></textarea>
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