import { render, screen } from '@testing-library/react'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { Table } from '.'
import { TableRow } from './TableRow'

describe('TableBody', () => {
  it('should render a table body with the correct number of rows', () => {
    const items = [
      { id: '1', name: 'title 1' },
      { id: '2', name: 'title 2' },
      { id: '3', name: 'title 3' },
    ]
    const columns = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
    ]
    const { container } = render(
      <Table>
        <TableBody items={items} columns={columns} />
      </Table>,
    )
    const rows = container.querySelectorAll('tbody tr')
    expect(rows.length).toBe(items.length)
  })
})

describe('TableHeader', () => {
  it('should render a table header with the correct number of columns', () => {
    const columns = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
    ]
    const { container } = render(
      <Table>
        <TableHeader columns={columns} />
      </Table>,
    )

    const rows = container.querySelectorAll('thead tr')

    expect(rows.length).toBe(1)
  })
})

describe('TableBody', () => {
  it('should render the correct number of rows', () => {
    const items = [
      { id: '1', name: 'title 1' },
      { id: '2', name: 'title 2' },
      { id: '3', name: 'title 3' },
    ]
    const columns = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
    ]
    const { getAllByRole } = render(
      <Table>
        <TableBody items={items} columns={columns} />
      </Table>,
    )
    const rows = getAllByRole('row')
    expect(rows.length).toBe(items.length)
  })
})

describe('TableRow', () => {
  it('renders the correct number of cells', () => {
    const item = { id: 1, name: 'Movie 1', year: 2021 }
    const columns = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
      { field: 'year', title: 'Year' },
    ]
    const { getAllByRole } = render(
      <Table>
        <tbody>
          <TableRow item={item} columns={columns} />
        </tbody>
      </Table>,
    )
    const cells = getAllByRole('cell')
    expect(cells).toHaveLength(columns.length)
  })
})

const MockBodyTable = () => {
  return (
    <tbody>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </tbody>
  )
}

describe('Table', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Table>
        <MockBodyTable />
      </Table>,
    )

    expect(getByText('Row 1, Column 1')).toBeInTheDocument()
    expect(getByText('Row 1, Column 2')).toBeInTheDocument()
    expect(getByText('Row 2, Column 1')).toBeInTheDocument()
    expect(getByText('Row 2, Column 2')).toBeInTheDocument()
  })

  it('applies isStriped prop', () => {
    render(
      <Table isStriped>
        <MockBodyTable />
      </Table>,
    )

    const tableElement = screen.getByRole('table')

    expect(tableElement).toBeInTheDocument()

    expect(tableElement).toHaveAttribute(
      'class',
      expect.stringContaining('isStriped'),
    )
  })

  it('applies size prop', () => {
    render(
      <Table size="large">
        <MockBodyTable />
      </Table>,
    )

    const tableElement = screen.getByRole('table')

    expect(tableElement).toBeInTheDocument()

    expect(tableElement).toHaveAttribute(
      'class',
      expect.stringContaining('large'),
    )
  })
})
