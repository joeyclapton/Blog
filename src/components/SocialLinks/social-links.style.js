import styled from 'styled-components'

const styles = {
  SocialLinksWrapper: styled.nav`
    margin: 2rem auto;
    width: 100%;
  `,
  SocialLinksList: styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;
  `,
  SocialLinksItem: styled.li``,
  SocialLinksLink: styled.a`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #afa1f2;
    }
  `,
  IconWrapper: styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
  `,
}

export default styles
