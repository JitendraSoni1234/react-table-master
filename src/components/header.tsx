import Search from './search';

interface HeaderInterface {
  search?: { [key: string]: string };
  headerElements?: React.FC | null;
}

function Header({ search, headerElements: HeaderElements }: HeaderInterface) {
  return (
    <section className='rtm-table-header-wapper'>
      {!search?.hidden ? <Search {...search} /> : null}
      {HeaderElements ? <HeaderElements /> : null}
    </section>
  );
}

export default Header;
