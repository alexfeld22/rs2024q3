type PaginationProps = {
  currentPage: number;
  pages: number;
  handlePagination: (num: number) => void;
};

const Pagination = ({
  currentPage,
  pages,
  handlePagination,
}: PaginationProps) => {
  const paginationNumbers = [];
  for (let i = 1; i <= pages; i++) {
    paginationNumbers.push(i);
  }
  return (
    <div className="flex flex-wrap justify-center border p-5">
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={
            currentPage == pageNumber
              ? 'border border-white bg-black p-2 text-white'
              : 'p-2'
          }
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
