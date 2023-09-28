interface PersonInputConfigProps {
    name: string,
    type: string,
    label?: string,
    required?: boolean
}

interface PersonSelectConfigProps {
    label: string,
    items: PersonInputConfigProps[]
}

// There is also a way to create a config file from which we can map into
// each InputField, but didn't have time to do it right now
export const personInputConfig: PersonInputConfigProps[] = [
    {
        name: "firstName",
        type: "text",
        label: "First Name",
        required: true,
    },
    {
        name: "birthday",
        type: "date",
        label: "Birthday",
        required: true
    },
    {
        name: "gender",
        type: "radio",
        label: "Gender",
    },
];

export const personSelectConfig = {
    label: "Expected Salary",
    items: [
        {
            name: "amount",
            type: "number",
            required: true,
        },
        {
            name: "currency",
            type: "select",
        },
    ]
}