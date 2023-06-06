import { styled } from '@styles'
import { ComponentProps } from 'react'

export const Stack = styled('div', {
  display: 'flex',

  variants: {
    p: {
      none: {
        padding: 0,
      },
      1: {
        padding: '$1',
      },
      2: {
        padding: '$2',
      },
      3: {
        padding: '$3',
      },
    },
    border: {
      none: {
        border: 'none',
      },
      gray200: {
        borderLeft: '1px solid $gray200',
        borderRight: '1px solid $gray200',
        borderBottom: '1px solid $gray200',
      },
    },
    bg: {
      none: {
        backgroundColor: 'transparent',
      },
      gray100: {
        backgroundColor: '$gray100',
      },
    },
    mb: {
      none: {
        marginBottom: 0,
      },
      1: {
        marginBottom: '$1',
      },
      2: {
        marginBottom: '$2',
      },
      3: {
        marginBottom: '$3',
      },
      4: {
        marginBottom: '$4',
      },
      5: {
        marginBottom: '$5',
      },
    },
    h: {
      none: {
        height: 'auto',
      },
      1: {
        height: '$1',
      },
      2: {
        height: '$2',
      },
      3: {
        height: '$3',
      },
      4: {
        height: '$4',
      },
      5: {
        height: '$5',
      },
      6: {
        height: '$6',
      },
      7: {
        height: '$7',
      },
    },
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
    spacing: {
      none: {
        gap: 0,
      },
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      10: {
        gap: '$10',
      },
      12: {
        gap: '$12',
      },
      16: {
        gap: '$16',
      },
      20: {
        gap: '$20',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },
    wrap: {
      nowrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
  },
  defaultVariants: {
    direction: 'vertical',
    spacing: 'none',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
})

export interface StackProps extends ComponentProps<typeof Stack> {}
