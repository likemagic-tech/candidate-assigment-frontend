import { InputProps } from './Input.types';

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
		<div>
			<label htmlFor='name'>
				{label}: {required ? <span>*</span> : ''}
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
