import { styled } from '@styles'

export const TableContainer = styled('table', {
  borderCollapse: 'collapse',
  border: '1px solid $gray200',
  tableLayout: 'fixed',
  width: '100%',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$md',
      },
      large: {
        fontSize: '$lg',
      },
    },
    isStriped: {
      true: {
        '& > tbody > tr:nth-child(even)': {
          backgroundColor: '$gray100',
        },
      },
    },
  },

  defaultVariants: {
    size: 'small',
    isStriped: false,
  },
})

export const TableHeadContainer = styled('thead', {
  fontWeight: '$bold',
  backgroundColor: '$gray100',
})

export const TableBodyContainer = styled('tbody', {})

export const TableRowContainer = styled('tr', {})

export const TableCellContainer = styled('td', {
  padding: '$1 $2',
  borderBottom: '1px solid $gray200',
  borderRight: '1px solid $gray200',

  variants: {
    xAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    yAlign: {
      top: {
        verticalAlign: 'top',
      },
      middle: {
        verticalAlign: 'middle',
      },
    },
  },

  defaultVariants: {
    xAlign: 'left',
    yAlign: 'top',
  },
})
