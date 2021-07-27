import React, { useState } from "react";
import styles from "./pagination.module.scss";
import ArrowIcon from "@/images/icons/quot";
export interface PaginationProps {
  totalPages: number;
  page: number;
  handleChangePage: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPages, page, handleChangePage } = props;
  const totalPageNumbersArray = Array(totalPages)
    .fill(0)
    .map((_: number, i: number) => i++ + 1);
  const lastPage = totalPages;
  const visiblePageNumbers = () => {
    if (page <= 2 && totalPageNumbersArray.length > 4) {
      return totalPageNumbersArray.slice(0, 3);
    } else if (totalPageNumbersArray.length <= 4) {
      return totalPageNumbersArray.slice(0, lastPage - 1);
    } else if (page >= 3 && page <= lastPage - 2) {
      return totalPageNumbersArray.slice(page - 1, page + 1);
    } else if (page >= lastPage - 3 && totalPageNumbersArray.length > 4) {
      return totalPageNumbersArray.slice(lastPage - 3, lastPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page !== lastPage) handleChangePage(page + 1);
  };
  const handlePrevPage = () => {
    if (page !== 1) handleChangePage(page - 1);
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.arrow}
        data-active={page !== 1}
        onClick={handlePrevPage}
      >
        <ArrowIcon
          strokeWidth={2}
          strokeColor={"green"}
          transformValue={"rotate(180deg)"}
        />
      </div>
      <ul className={styles.items_wrapper}>
        {page >= 3 && (
          <li
            className={styles.item}
            data-active={1 === page}
            onClick={() => handleChangePage(1)}
          >
            1
          </li>
        )}
        {page >= 3 && totalPageNumbersArray.length > 4 && (
          <li className={styles.item + " " + styles.__ellipsis}>...</li>
        )}
        {(visiblePageNumbers() || []).map(
          (pageNumber: number, index: number) => {
            return (
              <li
                className={styles.item}
                data-active={pageNumber === page}
                key={index}
                onClick={() => handleChangePage(pageNumber)}
              >
                {pageNumber}{" "}
              </li>
            );
          }
        )}
        {page <= lastPage - 3 && totalPageNumbersArray.length > 4 && (
          <li className={styles.item + " " + styles.__ellipsis}>...</li>
        )}
        <li
          className={styles.item}
          data-active={lastPage === page}
          onClick={() => handleChangePage(lastPage)}
        >
          {lastPage}
        </li>
      </ul>

      <div
        className={styles.arrow}
        data-active={page !== lastPage}
        onClick={handleNextPage}
      >
        <ArrowIcon strokeWidth={2} strokeColor={"green"} />
      </div>
    </div>
  );
};

export default Pagination;
