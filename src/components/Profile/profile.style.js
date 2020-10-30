import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = {
  ProfileWrapper: styled.section`
    color: #fbfcfe;
    display: flex;
    flex-direction: column;
  `,
  ProfileLink: styled(Link)`
    color: #fbfcfe;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #fec107;
    }
  `,
  ProfileAuthor: styled.h1`
    font-size: 1.1rem;
    margin: 0.5rem auto 1.5rem;
  `,
  ProfilePosition: styled.small`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 0.5rem;
  `,
  ProfileDescription: styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
  `,
}

export default styles
