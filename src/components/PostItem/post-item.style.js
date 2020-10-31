import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = {
  PostItemLink: styled(Link)`
    color: #fbfcfe;
    display: flex;
    text-decoration: none;

    &:hover {
      color: #fec107;
    }
  `,
  PostItemWrapper: styled.section`
    align-items: center;
    border-bottom: 1px solid #38444d;
    display: flex;
    padding: 2rem 3rem;
    width: 100%;
  `,
  PostItemTag: styled.div`
    align-items: center;
    background: black;
    border-radius: 50%;
    color: #fff;
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    justify-content: center;
    min-height: 90px;
    min-width: 90px;
    text-transform: uppercase;
  `,
  PostItemInfo: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
  `,
  PostItemDate: styled.time`
    font-size: 1rem;
  `,
    PostItemTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    margin: .2rem 0 .5rem;
  `,
    PostItemDescription: styled.p`
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.2;
    `
}

export default styles
