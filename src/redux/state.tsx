import {rerenderApp} from "../render";

export type MyPostsType = {
	id: number
	message: string
	likeCount: number
	image: string
}
export type ProfilePageType = {
	postsData: Array<MyPostsType>
}
export type DialogsDataType = {
	id: number
	name: string
	image: string
}
export type MessagesDataType = {
	id: number
	message: string
}
export type MessagePageType = {
	messagesData: Array<MessagesDataType>
	dialogsData: Array<DialogsDataType>
}
export type NavBarDataType = {
	id: number
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
			{id: 1, message: 'Do you know who killed Kennedy?', likeCount: 3, image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'},
			{id: 2, message: 'Do you have plans to weekend?', likeCount: 10, image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
		]
	},
	dialogsPage: {
		messagesData: [
			{id: 1, message: 'Go outside!'},
			{id: 2, message: 'What are you doing?'},
			{id: 3, message: 'There is the house where my family lives.'},
			{id: 4, message: 'We go jogging every Sunday!'},
			{id: 5, message: 'They didn’t go to school last year.'},
		],
		dialogsData: [
			{id: 1, name: 'Boris', image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg' },
			{id: 2, name: 'Denis', image: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg'},
			{id: 3, name: 'Iosif', image: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg'},
			{id: 4, name: 'Yekaterina', image: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg'},
			{id: 5, name: 'Larisa', image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
		]
	},
	navBarPage: {
		navBarData: [
			{id: 1, friend: 'Boris'},
			{id: 2, friend: 'Denis'},
			{id: 3, friend: 'Iosif'},
			{id: 4, friend: 'Jack'},
			{id: 5, friend: 'Larisa'}
		]
	}
}


export const addNewPost = (message: string) => {
	const newPost: MyPostsType = {
		id: new Date().getTime(),
		message: message,
		likeCount: 0,
		image: 'https://iqonic.design/themes/socialv/html/images/user/01.jpg'
	}

	state.profilePage.postsData.push(newPost);
	rerenderApp(state)
}

export default state;