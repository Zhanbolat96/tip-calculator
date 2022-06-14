import type { SVGAttributes } from 'react'

export type IconProps = {
  originalWidth?: number
  originalHeight?: number
  width?: number
  height?: number
  fill?: string
  stroke?: string
  viewBox?: string
  color?: string
  className?: string
} & SVGAttributes<SVGElement>

const getSize = (width: number, height: number, ratio: number) => {
  if (!width && !height) {
    return {
      width: 13,
      height: 13,
    }
  }

  if (width && height) {
    return {
      width,
      height,
    }
  }

  return {
    ...(width && { width, height: width / ratio }),
    ...(height && { width: height * ratio, height }),
  }
}

const getViewBox = (
  viewBox: string,
  originalWidth: number,
  originalHeight: number,
) => viewBox || `0 0 ${originalWidth} ${originalHeight}`

const Icon = ({
  originalWidth,
  originalHeight,
  width,
  height,
  fill,
  stroke,
  children,
  viewBox,
  ...props
}: IconProps) => (
  <svg
    {...props}
    fill={fill}
    stroke={stroke}
    viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
    {...getSize(width, height, originalWidth / originalHeight)}
  >
    {children}
  </svg>
)

Icon.defaultProps = {
  fill: '#000000',
  stroke: '',
}

export { Icon }
