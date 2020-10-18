import {rerenderApp} from "../render";
import {v1} from 'uuid'

export type MyPostsType = {
	id: string
	message: string
	likeCount: number
	image: string
}
export type ProfilePageType = {
	postsData: Array<MyPostsType>
	newPostContent: string
}
export type DialogsDataType = {
	id: string
	name: string
	image: string
}
export type MessagesDataType = {
	id: string
	message: string
}
export type MessagePageType = {
	messagesData: Array<MessagesDataType>
	dialogsData: Array<DialogsDataType>
}
export type NavBarDataType = {
	id: string
	friend: string
}
export type NavbarPageType = {
	navBarData: Array<NavBarDataType>
}
export type stateTypeProps = {
	profilePage: ProfilePageType
	dialogsPage: MessagePageType
	navBarPage: NavbarPageType
}

const state: stateTypeProps = {
	profilePage: {
		postsData: [
			{id: v1(), message: 'Do you know who killed Kennedy?', likeCount: 3, image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'},
			{id: v1(), message: 'Do you have plans to weekend?', likeCount: 10, image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
		],
		newPostContent: ''
	},
	dialogsPage: {
		messagesData: [
			{id: v1(), message: 'Go outside!'},
			{id: v1(), message: 'What are you doing?'},
			{id: v1(), message: 'There is the house where my family lives.'},
			{id: v1(), message: 'We go jogging every Sunday!'},
			{id: v1(), message: 'They didn’t go to school last year.'},
		],
		dialogsData: [
			{id: v1(), name: 'Boris', image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg' },
			{id: v1(), name: 'Denis', image: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg'},
			{id: v1(), name: 'Iosif', image: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg'},
			{id: v1(), name: 'Yekaterina', image: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg'},
			{id: v1(), name: 'Larisa', image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
		]
	},
	navBarPage: {
		navBarData: [
			{id: v1(), friend: 'Boris'},
			{id: v1(), friend: 'Denis'},
			{id: v1(), friend: 'Iosif'},
			{id: v1(), friend: 'Jack'},
			{id: v1(), friend: 'Larisa'}
		]
	}
}


export const addNewPost = () => {
	const newPost: MyPostsType = {
		id: v1(),
		message: state.profilePage.newPostContent,
		likeCount: 0,
		image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
	}

	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostContent = ''
	rerenderApp(state)
}


export const trackTextarea = (newText: string) => {
	state.profilePage.newPostContent = newText;
	rerenderApp(state)
}

export default state;