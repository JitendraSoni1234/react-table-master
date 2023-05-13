import { ChangeEvent } from 'react';

interface SearchInterface {
  value?: string;
  hidden?: boolean;
  className?: string;
  placeholder?: string | 'Search';
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

function Search(props: SearchInterface) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.onChange?.(e.target.value, e);
  };

  return (
    <label title='rtm-table-search-label'>
      <input
        type='text'
        value={props.value}
        hidden={props.hidden}
        className={`rtm-table-search ${props.className ? props.className : ''}`}
        placeholder={props.placeholder || 'Search'}
        onChange={handleChange}
      />
    </label>
  );
}

export default Search;
