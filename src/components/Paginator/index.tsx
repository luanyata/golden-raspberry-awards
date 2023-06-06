import { useEffect, useState } from 'react'
import { Stack } from '@components/Stack'
import { IconButton } from '@components/IconButton'
import {
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySharp,
} from 'react-icons/io5'
import { Button } from '@components/Button'
import { PaginatorProps } from './types'

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginatorProps) => {
  const [displayedPages, setDisplayedPages] = useState<number[] | string[]>([])

  useEffect(() => {
    updateDisplayedPages()
  }, [totalPages, currentPage])

  const goToPage = (page: number) => {
    onPageChange(page)
  }

  const updateDisplayedPages = () => {
    if (totalPages <= 5) {
      setDisplayedPages([...Array(totalPages).keys()].map((i) => i + 1))
    } else {
      const pages: any[] = []
      const start = Math.max(1, currentPage - 2)
      const end = Math.min(totalPages, currentPage + 2)

      if (start > 1) {
        pages.push(1)
        if (start > 2) {
          pages.push('...')
        }
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...')
        }
        pages.push(totalPages)
      }

      setDisplayedPages(pages)
    }
  }

  const goToFirstPage = () => {
    goToPage(0)
  }

  const goToPreviousPage = () => {
    goToPage(currentPage - 1)
  }

  const goToNextPage = () => {
    goToPage(currentPage + 1)
  }

  const goToLastPage = () => {
    goToPage(totalPages - 1)
  }

  const renderPageNumbers = () => {
    return displayedPages.map((page, index) => {
      if (page === '...') {
        return (
          <span key={index} className="ellipsis">
            ...
          </span>
        )
      }
      return (
        <Button
          variant={page === currentPage + 1 ? 'primary' : 'ghost'}
          key={index}
          onClick={() => goToPage(Number(page) - 1)}
          style={{ width: '27px', height: '27px' }}
        >
          {page}
        </Button>
      )
    })
  }

  return (
    <Stack
      direction="horizontal"
      justify="center"
      align="center"
      h="7"
      bg="gray100"
      border="gray200"
    >
      <IconButton
        disabled={currentPage === 0}
        onClick={goToFirstPage}
        data-testid="first-page-button"
      >
        <IoPlaySkipBackSharp size={18} />
      </IconButton>
      <IconButton
        disabled={currentPage === 0}
        onClick={goToPreviousPage}
        data-testid="previous-button"
      >
        <IoPlaySharp size={18} style={{ transform: `rotate(180deg)` }} />
      </IconButton>

      {renderPageNumbers()}

      <IconButton
        disabled={currentPage + 1 === totalPages}
        onClick={goToNextPage}
        data-testid="next-button"
      >
        <IoPlaySharp size={18} />
      </IconButton>
      <IconButton
        disabled={currentPage + 1 === totalPages}
        onClick={goToLastPage}
        data-testid="last-page-button"
      >
        <IoPlaySkipForwardSharp size={18} />
      </IconButton>
    </Stack>
  )
}
