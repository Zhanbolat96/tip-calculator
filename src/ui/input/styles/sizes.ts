import { css } from '@emotion/react'
import { variant } from 'styled-system'

import type { SizesMap } from 'ui/input/types'

const sizesStyles = (): SizesMap => {
  const nano = css`
    .__form-field-input {
      padding: 0 12px 1px;
    }
  `
  const defaultSize = css`
    .__form-field-input {
      padding: 0 12px 1px 25px;
    }
  `

  return {
    nano,
    default: defaultSize,
  }
}

export const sizes = () =>
  variant({
    variants: sizesStyles(),
    prop: 'size',
  })
