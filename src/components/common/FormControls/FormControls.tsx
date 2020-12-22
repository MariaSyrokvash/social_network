import React from 'react';
import style from './FormControls.module.css';

// @ts-ignore
export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props
	return (
		<FormControl {...props}><textarea {...input} {...restProps} className={style.textarea}/></FormControl>
	)
}


// @ts-ignore
export const Input = (props) => {
	// @ts-ignore
	const {input, meta, child, ...restProps} = props
	return (
		<FormControl {...props}><input {...input} {...restProps} className={style.input}/></FormControl>
	)
}

// @ts-ignore
const FormControl = ({input, meta, child, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={`${style.boxTextarea} ${style.formControl} ${hasError ? style.error : ''}`}>

			{props.children}
			{hasError && <p className={style.errorMessage}>{meta.error}</p>}
		</div>
	)
}