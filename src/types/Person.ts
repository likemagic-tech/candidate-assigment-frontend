import { Gender } from './Gender';

export interface Person {
	name: string;
	birthdate: string;
	gender: Gender | null;
	salary: string;
}
