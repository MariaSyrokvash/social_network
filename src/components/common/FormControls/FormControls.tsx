import React from 'react';
import style from './FormControls.module.css';
import {Field} from 'redux-form';

// @ts-ignore
export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} className={style.textarea}/>
		</FormControl>
	)
}


// @ts-ignore
export const Input = (props) => {
	const {input, meta, child, ...restProps} = props
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} className={style.input}/>
		</FormControl>
	)
}

// @ts-ignore
const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
	const hasError = touched && error
	return (
		<div className={`${style.boxTextarea} ${style.formControl} ${hasError ? style.error : ''}`}>
			{children}
			{hasError && <p className={style.errorMessage}>{error}</p>}
		</div>
	)
}

export const createField = (placeholder: string, name: string, component: React.Component, validators: Array<any>) => {
	return (
		<Field placeholder={placeholder} name={name} component={component} validate={[validators]}/>
	)
}