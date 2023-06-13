import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link';

export const Pagination = ({ totalPages, currentPage }) => {
  const pageNumbers = [];
  const visiblePages = 3;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (totalPages <= visiblePages) {
    pageNumbers.push(...range(1, totalPages));
  } else {
    let startPage, endPage;

    if (isFirstPage) {
      startPage = currentPage;
      endPage = Math.min(currentPage + visiblePages - 1, totalPages);
    } else if (isLastPage) {
      startPage = Math.max(currentPage - visiblePages + 1, 1);
      endPage = currentPage;
    } else {
      startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
      endPage = Math.min(startPage + visiblePages - 1, totalPages);

      if (endPage - startPage < visiblePages - 1) {
        startPage = endPage - visiblePages + 1;
      }
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    pageNumbers.push(...range(startPage, endPage));

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
  }

  const previousPage = parseInt(currentPage) - 1;
  const nextPage = parseInt(currentPage) + 1;

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationInner}>
        <li>
          {currentPage <= 1 ?
            <span>Anterior</span>
            :
            <Link href={`/listings?page=${previousPage}`}>
              Anterior
            </Link>
          }
        </li>

        {pageNumbers.map((number, index) => (
          <li
            key={index}
            className={`${number == currentPage ? `${styles.active} ${styles.page}` : styles.page}`}
          >
            {number === '...' ? (
              <span className={styles.ellipsis}>...</span>
            ) : (
              <Link href={`/listings?page=${number}`}>
                {number}
              </Link>
            )}
          </li>
        ))}

        <li>
          {nextPage > totalPages ?
            <span>Próximo</span>
            :
            <Link href={`/listings?page=${nextPage}`}>
              Próximo
            </Link>
          }
        </li>
      </div>
    </div>
  )
};