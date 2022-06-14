import type { InputHTMLAttributes } from 'react'
import type { SerializedStyles } from '@emotion/react'

type InputDefaultProps = InputHTMLAttributes<HTMLInputElement>

type InputProps = {
  size?: SizesType
} & Omit<InputDefaultProps, 'size'>

export type SizesType = 'default' | 'nano'
export type SizesMap = { [name in SizesType]: SerializedStyles }

export interface FormFieldProps extends InputProps {
  label?: string
  error?: boolean
  errorText?: string
  width?: string
  icon?: JSX.Element
}

export interface FormFieldWrapProps {
  size: SizesType
  error: boolean
  width?: string
  height?: string
  value: string | ReadonlyArray<string> | number | undefined
}
