import { useState, useEffect } from 'react'

import { FormField } from 'ui'
import { Dollar, Person } from 'ui/Icons'

import {
  PersonContainer,
  ResultContainer,
  ButtonContainer,
  BillContainer,
  ResultBlocks,
  TipContainer,
  PercentBlock,
  RightSide,
  Container,
  SubTitle,
  LeftSide,
  Button,
  Title
} from './styles'

import type { ChangeEventHandler } from 'react'
import type { State } from 'modules/calculator/types'

const arrayOfPercents = [5, 10, 15, 25, 50]

const Calculator = () => {
  const [values, setValues] = useState<State>({
    bill: '',
    tip: '',
    person: ''
  })
  const [clickTip, setClickTip] = useState<number>()
  const [error, setError] = useState<boolean>(false)
  const [resultTip, setResultTip] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    if (+values.person === 0 && values.person !== '') {
      setError(true)
    } else {
      setError(false)
    }
  },[values.person])

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const onClick = () => {
    const { bill, tip, person } = values
    const forOne = +bill/+person
    const resultTip = clickTip ? forOne * clickTip/100 : forOne * +tip/100
    const result = forOne + resultTip
    setTotal(result)
    setResultTip(resultTip)
  }

  return (
      <Container>
        <LeftSide>
          <BillContainer>
            <FormField
              value={values.bill}
              name='bill'
              onChange={onChange}
              label='Bill'
              placeholder='0'
              icon={<Dollar />}
            />
          </BillContainer>

          <TipContainer>
            <p className='tip-block-title'>Select Tip%</p>
            <div className='grid-tips'>
              {arrayOfPercents.map(item =>
                <PercentBlock
                  key={item}
                  active={item === clickTip}
                  onClick={() => {
                    setClickTip(item)
                    setValues({
                      ...values,
                      tip: ''
                    })
                  }}
                >
                  {item}%
                </PercentBlock>
              )}
              <FormField
                size='nano'
                value={values.tip}
                onChange={onChange}
                onFocus={() => setClickTip(null)}
                name='tip'
                placeholder='CUSTOM'
                max={100}
                min={1}
              />
            </div>
          </TipContainer>

          <PersonContainer>
            <FormField
              value={values.person}
              onChange={onChange}
              name='person'
              error={error}
              label='Number of people'
              errorText='Can`t be 0'
              placeholder='0'
              icon={<Person />}
            />
          </PersonContainer>
        </LeftSide>

        <RightSide>
          <ResultContainer>
            <ResultBlocks>
              <div>
                <Title>Tip Amount</Title>
                <SubTitle>/ person</SubTitle>
              </div>
              <h1>{resultTip.toFixed(2)}</h1>
            </ResultBlocks>
            <ResultBlocks>
              <div>
                <Title>Total</Title>
                <SubTitle>/ person</SubTitle>
              </div>
              <h1>{total.toFixed(2)}</h1>
            </ResultBlocks>
          </ResultContainer>
          <ButtonContainer>
            <Button onClick={onClick}>RESET</Button>
          </ButtonContainer>
        </RightSide>

      </Container>
  )
}

export { Calculator }
