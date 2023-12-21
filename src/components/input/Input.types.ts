import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
	label: string;
	type: HTMLInputTypeAttribute;
	id: string;
	name: string;
	value: string | number;
	handleChange: ChangeEventHandler;
	required?: boolean;
}
