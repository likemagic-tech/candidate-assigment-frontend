import { ChangeEvent } from 'react';
import { Gender } from '../../types/Gender';

export interface GenderInputProps {
	personGender: Gender | null;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
