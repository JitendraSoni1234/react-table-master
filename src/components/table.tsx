import Header from './header';
import '../scss/index.scss';
import Pagination from './pagination';

interface TableInterface {
  header?: object;
  table?: object;
  pagination?: object;
}
function Table({ header, pagination }: TableInterface) {
  return (
    <>
      <Header {...(header || {})} />
      <Pagination {...pagination} />
    </>
  );
}

export default Table;
