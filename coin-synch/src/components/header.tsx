"use client"

import { styled } from 'styled-components'
import { CoinSynchLogo } from './CoinSynch-logo'

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1440px;
  height: 64px;
  top: 20px;
  padding-left: 112px;
  background-color: var(--bg-primary-color);
  gap: 40px;
`

const CoinCarrousel = styled.div`
  display: flex;
  padding-left: 290px;
`

const SignUp = styled.div`
  background-color: var(--button--primary);
  padding: 8px 26.5px;
  border-radius: 32px;
  color: white;
`

interface HeaderProps {

}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <CoinSynchLogo />
      <div className="about">About us</div>
      <div>Top Cryptos</div>

      <CoinCarrousel>BRL</CoinCarrousel>
      <div>Sign in</div>
      <SignUp>Sign up</SignUp>
    </TagHeader>
  )
}