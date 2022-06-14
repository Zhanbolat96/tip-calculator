import styled from "@emotion/styled";
import { ifProp } from 'styled-tools'

import { sizes } from 'ui/input/styles/sizes'

import type { FormFieldWrapProps } from 'ui/input/types'

export const FormFieldWrap = styled.div<FormFieldWrapProps>`
  width: ${props => (props.width ? props.width : '100%')};
    .__form-field-container {
    position: relative;
  }

  .__form-field-container {
    position: relative;
  }

  .__form-field-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0;
    left: 12px;
  }

  .__form-field-text {
    text-align: left;
  }

  .__form-field-error-text {
    text-align: right;
    color: red;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .__form-field-input {
    border: none;
    font-size: 16px;
    line-height: 24px;
    color: #10142D;
    border-radius: 4px;
    box-sizing: border-box;
    transition: all 0.2s;
    background: hsl(189, 41%, 97%);
    outline: none;
    width: 100%;
    text-align: right;
    height: 36px;
    ${() =>
      ifProp(
        'error',
        `
              border: 2px solid red;
            `,
      )
    }

    &::placeholder {
      color: #888A96;
      font-family: 'Space Mono', monospace;
    }

    &:focus {
      border: 2px solid hsl(186, 14%, 43%);
    }

    &:not(:focus) {
      display: block;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }

  ${sizes}
`
