import styled from "@emotion/styled";

import type { PercentBlockProps } from 'modules/calculator/types'

export const Container = styled.div`
  display: flex;
  width: 700px;
  background: #ffffff;
  border-radius: 24px;
  height: 300px;
  padding: 40px;
  margin-top: 60px;
  @media only screen and (min-device-width: 280px) and (max-device-width: 640px) {
    height: 80vh;
    width: 89vw;
    padding: 20px;
    margin-top: 0;
    border-radius: 30px 30px 0 0;
    display: block;
  }
`

export const LeftSide = styled.div`
  width: 50%;
  padding-right: 40px;
  @media only screen and (min-device-width: 280px) and (max-device-width: 640px) {
    width: 100%;
    height: 58%;
    padding-right: 0;
  }
`

export const RightSide = styled.div`
  background: hsl(183, 100%, 15%);
  border-radius: 8px;
  max-height: 100%;
  width: 50%;
  padding: 40px;

  @media only screen and (min-device-width: 280px) and (max-device-width: 640px) {
    height: 25%;
    width: initial;
    padding: 20px;
    margin-top: 20px;
  }
`

export const PercentBlock = styled.div<PercentBlockProps>`
  background: ${props => (props.active ? 'hsl(186, 14%, 43%)' : 'hsl(183, 100%, 15%)')};
  color: ${props => (props.active ? 'black' : 'hsl(0, 0%, 100%)')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  height: 36px;
  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background: hsl(185, 41%, 84%);
    color: black;
    transition: all 0.25s;
  }
`

export const Button = styled.button`
  background: hsl(185, 41%, 84%);
  color: hsl(183, 100%, 15%);
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  height: 36px;
  font-family: inherit;
  line-height: 16px;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transition: all 0.2s;
  }
`

export const Title = styled.p`
  font-size: 14px;
  line-height: 8px;
  color: white;
  padding: 10px 0;
`

export const SubTitle = styled.p`
  font-size: 12px;
  line-height: 8px;
`

export const BillContainer = styled.div`
  height: 33%;
  @media only screen and (min-device-width: 280px) and (max-device-width: 640px) {
    height: 25%
  }
`

export const TipContainer = styled.div`
  height: 33%;
  align-items: center;
  @media only screen and (min-device-width: 280px) and (max-device-width: 640px) {
    height: 50%;
  }
`

export const PersonContainer = styled.div`
  height: 33%;
  display: flex;
  align-items: end;
  @media only screen and (min-device-width: 280px) and (max-device-width: 640px) {
    height: 25%
  }
`

export const ResultBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ResultContainer = styled.div`
  height: 50%;
`

export const ButtonContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: end;
`
