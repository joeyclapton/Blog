import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = {
  MenuLinksWrapper: styled.nav``,
  MenuLinksList: styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 300;
  `,
  MenuLinksItem: styled.li`
    padding: 0.5rem 0;
  `,
  MenuLinksLink: styled(Link)`
    color: #fbfcfe;
    margin: 8px 0;
    padding: 8px 0;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: #fec107;
    }
  `,
}

export default styles
