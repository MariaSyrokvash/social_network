import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {Field} from 'redux-form';

const Login = () => {
	const onSubmit= (formData: FormDataType) => {
		console.log(formData)
	}
	return (
		<div className={''}>
			<h2>Login</h2>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

type FormDataType = {
	login: string
	password: string
	rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
			<div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
			<div><Field type="checkbox" component={'input'} name={'rememberMe'}/> Remember me</div>
			<button type={'submit'}>Login</button>
		</form>
	)
}

export const LoginReduxForm = reduxForm<FormDataType>({
	form: 'login'
})(LoginForm)

export default Login;