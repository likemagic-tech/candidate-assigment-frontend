import { InputProps } from './Input.types';
import './input.style.css';
const Input = ({
	label,
	type,
	id,
	name,
	value,
	handleChange,
	required,
}: InputProps) => {
	return (
		<div className='row'>
			<label htmlFor={name}>
				{label}: {required ? <span id='required'>*</span> : ''}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={handleChange}
				required={required}
			/>
		</div>
	);
};

export default Input;
