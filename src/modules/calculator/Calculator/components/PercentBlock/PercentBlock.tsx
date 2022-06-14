import { useState } from 'react'

import { PercentBlock } from 'modules/calculator/Calculator/styles'

const TipBlock = ({ setClickTip, item }) => {
  const [active, setActive] = useState<boolean>(false)

  return (
      <PercentBlock
        key={item}
        active={active}
        onClick={() => {
          setClickTip(item)
          setActive(!active)
        }}
      >
        {item}%
      </PercentBlock>
  )
}

export { TipBlock }
