import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = {
  MenuBarWrapper: styled.aside`
    align-items: center;
    border-left: 1px solid #303539;
    background: #192734;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.7rem;
  `,
  MenuBarGroup: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MenuBarLink: styled(Link)`
    display: block;
  `,
  MenuBarItem: styled.span`
    color: #fbfcfe;
    cursor: pointer;
    display: block;
    height: 2rem;
    padding: 1.1rem;
    position: relative;
    width: 2rem;
    transition: color 0.4s;

    &:hover {
      color: #fec107;
    }
  `,
}

export default styles
