interface PaginationProps {
  pageNo?: number;
  total?: number;
  perPage?: number;
  showPagination?: boolean;
  onChange?: (pageNo: number) => void;
}

function Pagination({ pageNo = 1, total = 100, perPage = 10, showPagination = true, onChange }: PaginationProps) {
  const totalPages = Math.ceil(total / perPage);
  const pages = [];

  if (!showPagination || totalPages <= 1) {
    return null;
  }

  const pageNumbersToShow = 5;
  const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);

  let startPage = pageNo - halfPageNumbersToShow;
  if (startPage < 1) {
    startPage = 1;
  }

  let endPage = startPage + pageNumbersToShow - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - pageNumbersToShow + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <ul className='rtm-pagination-wrapper'>
      <li className={`rtm-pagination-item ${pageNo === 1 ? 'disable' : ''}`} onClick={() => pageNo > 1 && onChange?.(pageNo - 1)}>
        &lt;
      </li>
      {startPage > 1 && (
        <>
          <li className='rtm-pagination-item' onClick={() => onChange?.(1)}>
            {1}
          </li>
          {startPage > 2 && (
            <li className='rtm-pagination-item' onClick={() => onChange?.(pageNo - 5)}>
              •••
            </li>
          )}
        </>
      )}
      {pages.map(page => (
        <li key={page} className={`rtm-pagination-item ${pageNo === page ? 'active' : ''}`} onClick={() => onChange?.(page)}>
          {page}
        </li>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <li onClick={() => onChange?.(pageNo + 5)} className='rtm-pagination-item'>
              •••
            </li>
          )}
          <li className='rtm-pagination-item' onClick={() => onChange?.(totalPages)}>
            {totalPages}
          </li>
        </>
      )}
      <li className={`rtm-pagination-item ${pageNo === totalPages ? 'disable' : ''}`} onClick={() => pageNo < totalPages && onChange?.(pageNo + 1)}>
        &gt;
      </li>
    </ul>
  );
}

export default Pagination;
