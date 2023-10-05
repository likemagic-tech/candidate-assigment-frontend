import { FC, ReactNode } from 'react'
import { ColumnType } from '../../types'

type TableProps = {
	columns: ColumnType[]
	data: RowType[]
	renderCell?: (columnName: string, rowData: RowType) => ReactNode
	placeholder: string
}

type RowType = {
	[key: string]: ReactNode
	id: string
}

export const Table: FC<TableProps> = ({
	columns,
	data,
	renderCell,
	placeholder,
}) => {
	return (
		<table className='w-full table-b-colapse'>
			<thead className='border-bottom-1'>
				<tr>
					{columns.map((column) => (
						<th
							key={column.value}
							className='text-left'
							style={{ width: 150 }}
						>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.length ? (
					data.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							className='border-bottom-1'
						>
							{columns.map((column) => (
								<td
									key={column.value}
									className='padding-5'
								>
									{renderCell
										? renderCell(column.value, row)
										: row[column.value]}
								</td>
							))}
						</tr>
					))
				) : (
					<tr className='border-bottom-1'>
						<td className='padding-5'>{placeholder}</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}
