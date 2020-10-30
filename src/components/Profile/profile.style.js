import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = {
  ProfileWrapper: styled.section`
    color: #8899a6;
    display: flex;
    flex-direction: column;
  `,
  ProfileLink: styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #1fa1f2;
    }
  `,
  ProfileAuthor: styled.h1`
    font-size: 1.1.rem;
    margin: 0.5rem auto 1.5rem;
  `,
  ProfilePosition: styled.small`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
  `,
  ProfileDescription: styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
  `,
}

export default styles
