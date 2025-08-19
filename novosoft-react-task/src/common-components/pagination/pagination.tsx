import { Pagination } from "./pagination.styled";

const PaginationControls: React.FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ totalPages, currentPage, onPageChange }) => {
  const getPages = () => {
    let pages: (number | string)[] = [];

    if (totalPages <= 6) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages - 1, totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <Pagination>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={currentPage === 1 ? "disabled" : ""}
      >
        {"<"}
      </button>
      {getPages().map((p, i) =>
        p === "..." ? (
          <button key={i} disabled className="disabled">
            ...
          </button>
        ) : (
          <button
            key={i}
            className={currentPage === p ? "active" : ""}
            onClick={() => onPageChange(Number(p))}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? "disabled" : ""}
      >
        {">"}
      </button>
    </Pagination>
  );
};
export default PaginationControls;
