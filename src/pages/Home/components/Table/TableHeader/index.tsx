import './index.css';

interface IProps {
  columns: string[];
}

const TableHeader = (props: IProps): React.ReactElement => {
  const { columns } = props;

  return (
    <thead className="table-header">
      <tr className="table-row">
        {columns.map((cell) => (
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
