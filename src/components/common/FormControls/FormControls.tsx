import React from 'react';
import style from './FormControls.module.css';
import {Field, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from '../../../utils/validators/validators';

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

export function createField<FormKeysType extends string>(placeholder: string | undefined,
																												 name: FormKeysType,
																												 validators: Array<FieldValidatorType>,
																												 component: React.FC<WrappedFieldProps>,
																												 props = {}, text = "") {
	return <div>
		<Field placeholder={placeholder} name={name}
					 validate={validators}
					 component={component}
					 {...props}
		/> {text}
	</div>
}

export type GetStringKeys<T> = Extract<keyof T, string>