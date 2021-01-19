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
import loginStyle from './Login.module.css'

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
	const onSubmit = (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div className={loginStyle.box}>
			<h2 className={loginStyle.title}>Sing In</h2>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className={loginStyle.form}>
			<div><Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField]}/></div>
			<div><Field placeholder={'Password'} name={'password'} type='password' component={Input}
									validate={[requiredField]}/></div>
			<div className={loginStyle.checkBoxWrap}>
				<Field type="checkbox" component={Input} name={'rememberMe'}/> <span
				className={loginStyle.remember}>Remember me</span></div>
			{error && <div className={style.formErrorSummary}> {error}</div>}
			<button type={'submit'} className={loginStyle.loginBtn}>Get Started</button>
		</form>
	)
}

export const LoginReduxForm = reduxForm<FormDataType>({
	form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login) as React.FunctionComponent<any>