import { Dispatch, SetStateAction } from "react";

interface PaginatorProps {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const Paginator = ({ pageNumber, setPageNumber }: PaginatorProps) => {
  return (
    <div className="flex justify-between w-screen p-10 items-center">
      <button
        disabled={pageNumber === 1}
        className={`${
          pageNumber > 1 ? "opacity-100" : "opacity-20"
        } bg-slate-200 rounded-lg px-5 py-3`}
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        Previous page
      </button>
      <p>Page: {pageNumber}</p>
      <button
        className=" bg-slate-200 rounded-lg px-5 py-3"
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next page
      </button>
    </div>
  );
};

export default Paginator;
