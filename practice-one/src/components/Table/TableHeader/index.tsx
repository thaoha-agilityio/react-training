import './index.css';

interface IProps {
  listCell: string[];
}

const TableHeader = (props: IProps): React.ReactElement => {
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
