import { useMemo } from 'react'
import { usePersonsContext } from '../../context/PersonsContext'
import { ColumnType } from '../../types'
import { TABLE_COLUMNS } from '../../constants'

export const usePersonsTable = () => {
	const { persons } = usePersonsContext()
	const tableColumns: ColumnType[] = TABLE_COLUMNS
	const tableData = useMemo(
		() =>
			persons.map((item) => ({
				name: item.name,
				birthdate: item.birthdate,
				gender: item.gender,
				salary: `${item.salary.amount} ${item.salary.currency}`,
				id: item.id,
			})),
		[persons]
	)

	return { tableData, tableColumns }
}
