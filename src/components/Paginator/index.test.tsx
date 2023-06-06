import { render, fireEvent } from '@testing-library/react'
import { Pagination } from './'

describe('Pagination', () => {
  const onPageChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render the correct number of pages', () => {
    const totalPages = 10
    const currentPage = 5

    const { getAllByRole } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Verifica se o número de páginas é o correto
    const pages = getAllByRole('button')
    expect(pages).toHaveLength(totalPages + 1)
  })

  it('calls onPageChange when a page number is clicked', () => {
    const totalPages = 10
    const currentPage = 5

    const { getByText } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Simula o clique no número de página 3
    const pageNumber3 = getByText('3')
    fireEvent.click(pageNumber3)

    // Verifica se a função onPageChange foi chamada com o número de página correto
    expect(onPageChange).toHaveBeenCalledWith(2) // Os índices das páginas começam em zero

    // Simula o clique no número de página 8
    const pageNumbe7 = getByText('7')
    fireEvent.click(pageNumbe7)

    // Verifica se a função onPageChange foi chamada com o número de página correto
    expect(onPageChange).toHaveBeenCalledWith(6) // Os índices das páginas começam em zero
  })

  it('call goToFirstPage when first page button is clicked', () => {
    const totalPages = 10
    const currentPage = 5

    const { getByTestId } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Simula o clique no botão de primeira página
    const firstPageButton = getByTestId('first-page-button')
    fireEvent.click(firstPageButton)

    // Verifica se a função onPageChange foi chamada com o número de página correto
    expect(onPageChange).toHaveBeenCalledWith(0) // Os índices das páginas começam em zero
  })

  it('calls onPageChange when previous page button is clicked', () => {
    const totalPages = 10
    const currentPage = 5

    const { getByTestId } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Simula o clique no botão de página anterior
    const previousButton = getByTestId('previous-button')
    fireEvent.click(previousButton)

    // Verifica se a função onPageChange foi chamada com o número de página correto
    expect(onPageChange).toHaveBeenCalledWith(4) // Os índices das páginas começam em zero
  })

  it('calls goToLastPage when last page button is clicked', () => {
    const totalPages = 10
    const currentPage = 5

    const { getByTestId } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Simula o clique no botão de última página
    const lastPageButton = getByTestId('last-page-button')
    fireEvent.click(lastPageButton)

    // Verifica se a função onPageChange foi chamada com o número de página correto
    expect(onPageChange).toHaveBeenCalledWith(9) // Os índices das páginas começam em zero
  })

  test('calls onPageChange when next page button is clicked', () => {
    const totalPages = 10
    const currentPage = 5

    const { getByTestId } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Simula o clique no botão de próxima página
    const nextButton = getByTestId('next-button')
    fireEvent.click(nextButton)

    // Verifica se a função onPageChange foi chamada com o número de página correto
    expect(onPageChange).toHaveBeenCalledWith(6) // Os índices das páginas começam em zero
  })

  it('disables previous button when on the first page', () => {
    const totalPages = 10
    const currentPage = 0

    const { getByTestId } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Verifica se o botão de página anterior está desabilitado
    const previousButton = getByTestId('previous-button')
    expect(previousButton).toBeDisabled()
  })

  test('disables next button when on the last page', () => {
    const totalPages = 10
    const currentPage = 9

    const { getByTestId } = render(
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />,
    )

    // Verifica se o botão de próxima página está desabilitado
    const nextButton = getByTestId('next-button')
    expect(nextButton).toBeDisabled()
  })
})
