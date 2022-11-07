import React from 'react';

import './index.css';

interface IProps {
  listCell: string[];
}

const TableHeader = (props: IProps) => {
  const { listCell } = props;

  return (
    <thead className="table-header">
      <tr className="table-row">
        {listCell.map((cell) => (
          <th key={cell}>
            {cell}
            <span>|</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
