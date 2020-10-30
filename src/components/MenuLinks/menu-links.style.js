import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = {
  MenuLinksWrapper: styled.nav``,
  MenuLinksList: styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
  `,
  MenuLinksItem: styled.li`
    padding: 0.5rem 0;
  `,
  MenuLinksLink: styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: #1fa1f2;
    }
  `,
}

export default styles
