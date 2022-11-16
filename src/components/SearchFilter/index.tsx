import './index.css';

interface IProps {
  children: React.ReactNode;
}

const SearchFilter = ({ children }: IProps): React.ReactElement => (
  <div className="dropdown">
    <h2>Search filter</h2>
    <div className="dropdown-menu">{children}</div>
  </div>
);

export default SearchFilter;
