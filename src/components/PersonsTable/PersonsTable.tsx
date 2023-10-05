import { FC } from 'react'
import { Table } from '../Table'
import { usePersonsTable } from './usePersonsTable'
import { Button } from '../Button'
import { usePersonsContext } from '../../context/PersonsContext'
import { TRANSLATIONS } from '../../constants'

export const PersonsTable: FC = () => {
	const { deletePerson } = usePersonsContext()
	const { tableData, tableColumns } = usePersonsTable()

	return (
		<Table
			columns={tableColumns}
			data={tableData}
			renderCell={(columnName, rowData) => {
				if (columnName === 'delete') {
					return (
						<Button
							variant='red'
							onClick={() => deletePerson(rowData.id)}
						>
							Delete
						</Button>
					)
				}
				return rowData[columnName]
			}}
			placeholder={TRANSLATIONS.TABLE_PLACEHOLDER_TEXT}
		/>
	)
}
