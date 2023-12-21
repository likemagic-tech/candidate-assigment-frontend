import { Gender } from '../../types/Gender';
import { GenderInputProps } from './GenderInput.type';
import './genderInput.style.css';

const GenderInput = ({ personGender, handleChange }: GenderInputProps) => {
	return (
		<div className='row gender'>
			<label htmlFor='gender'>Gender:</label>
			{Object.values(Gender).map((gender) => (
				<div key={gender}>
					<input
						type='radio'
						name='gender'
						id={gender}
						value={gender}
						checked={gender === personGender}
						onChange={handleChange}
					/>
					<label>{gender}</label>
				</div>
			))}
		</div>
	);
};

export default GenderInput;
