//CHECKED
import styled, { css } from 'styled-components'
//why import css? because of using theme.ts
export const Title = styled.h1`
//destructering theme from props.
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 0;
    text-align: center;
  `}
`
