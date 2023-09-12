import { FormEvent, FunctionComponent, useContext, useRef, useState } from "react";
import { Action, Currencies, Currency, Gender, Genders, User } from "../../models";
import { UsersContext, initialUserState } from "../../store";
import './user-form.css';

type GenderKey = keyof typeof Gender;

export const UserForm: FunctionComponent = () => {
    let { dispatch } = useContext(UsersContext);

    let [name, setName] = useState<User['name']>('');
    let [gender, setGender] = useState<User['gender']>('' as Gender);
    let [birthdate, setBirthDate] = useState<User['birthdate'] | null>(null);
    let [salary, setSalary] = useState<User['salary']>(0);
    let [currency, setCurrency] = useState<User['currency']>(Currency.EUR);

    let inputDateRef = useRef<HTMLInputElement>(null);

    const genders = Object.keys(Gender) as Genders[];
    const curencies = Object.keys(Currency) as Currencies[];

    /**
     * Currently it is not possible to set property `valueAsDate` directly
     * This is a known stale react issue. It has to be lowercase
     * https://github.com/facebook/react/issues/11369
     */
    const dateInnerProps = (date: User['birthdate']) => ({
        valueasdate: date
    })

    const resetForm = () => {
        setName(initialUserState.name);
        setGender(initialUserState.gender);
        setBirthDate(initialUserState.birthdate);
        setSalary(initialUserState.salary);
        setCurrency(initialUserState.currency);

        if(inputDateRef.current) {
            inputDateRef.current.valueAsDate = null;
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: User = {
            id: window.crypto.randomUUID(),
            name,
            gender,
            birthdate,
            salary,
            currency
        };

        dispatch({
            type: Action.CREATE,
            payload: data
        });

        resetForm();
      }

    return <form onSubmit={e => { handleSubmit(e) }}>
        <div className="form-control">
            <label htmlFor="user-name">Name</label>
            <span>*</span>
            <input
                type="text"
                name="name"
                id="user-name"
                value={name}
                required={true}
                onChange={e => setName(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="user-birthdate">Birthday</label>
            <span>*</span>
            <input
                type="date"
                name="birthdate"
                id="user-birthdate"
                required={true}
                ref={inputDateRef}
                {...dateInnerProps(birthdate)}
                onChange={e => setBirthDate(e.target.valueAsDate as Date)}
            />
        </div>
        <div className="form-control">
            <fieldset>
                <legend>Gender:</legend>
                {
                    genders.map((g, idx) =>
                        <div key={idx}>
                            <input
                                type="radio"
                                id={`user-gender-${Gender[g]}`}
                                name="gender"
                                value={Gender[g]}
                                checked={gender === Gender[g]}
                                onChange={() => setGender(Gender[g])}
                                />
                            <label htmlFor={`user-gender-${Gender[g]}`}>{ g }</label>
                        </div>
                    )
                }
            </fieldset>
        </div>
        <div className="form-control">
            <label htmlFor="user-salary">Expected salary</label>
            <span>*</span>
            <input
                type="number"
                name="salary"
                id="user-salary"
                value={salary}
                required={true}
                min={100}
                onChange={e => setSalary(e.target.valueAsNumber)}
            />
            <select
                name="currency"
                id="user-currency"
                aria-label="Currency"
                value={currency}
                onChange={e => setCurrency(e.target.value as Currency)}
            >{
                curencies.map((c, idx) =>
                    <option value={Currency[c]} key={idx}>{ c }</option>
                )
            }</select>
        </div>
        <button>Submit</button>
    </form>
}
