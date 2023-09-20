import React from "react";

import "./Table.css";

export interface TableProps {
  column: { label: string; value: string }[];
  data: { [key: string]: React.ReactNode }[];
}

const Table = ({ column, data }: TableProps) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {column.map((item, index) => (
              <th className="table__heading" key={index}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="table__row">
              {column.map((title, titleIndex) => (
                <td key={titleIndex}>{item[title.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
