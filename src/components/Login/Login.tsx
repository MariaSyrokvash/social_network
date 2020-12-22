import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {Field} from 'redux-form';
import {Input} from '../common/FormControls/FormControls';
import {requiredField} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import style from './../common/FormControls/FormControls.module.css';

// email: "mariya.syrokvash@yandex.ru"
// password: "1234567890-="

type LoginType = {
	email: string
	password: string
	rememberMe: boolean
	login: (email: string, password: string, rememberMe: boolean) => void
	isAuth: boolean
}

const Login = (props: LoginType) => {
	const onSubmit= (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div className={''}>
			<h2>Login</h2>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField]}/></div>
			<div><Field placeholder={'Password'} name={'password'} type='password' component={Input} validate={[requiredField]}/></div>
			<div><Field type="checkbox" component={Input} name={'rememberMe'}/> Remember me</div>
			{ props.error && <div className={style.formErrorSummary}> {props.error}</div> }
			<button type={'submit'}>Login</button>
		</form>
	)
}

export const LoginReduxForm = reduxForm<FormDataType>({
	form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);