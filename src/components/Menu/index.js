import styled from 'styled-components';
import { Link } from "react-router-dom";

const menuMargin = 30;

const LinkList = styled.ul`
  display: flex;
  list-style-type: none;
  position: absolute;
  right: ${menuMargin}px;
  top: ${menuMargin}px;
  z-index: 30;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 5px;
`;

const StyledLinkStyles = `
  text-decoration: none;
  position: relative;
  color: #485b94;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    width: 0;
    top: 100%;
    height: 2px;
    background: #485b94;
  }

  &:hover::after {
    animation: .5s ease-out 1 forwards expand;
  }

  @keyframes expand {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const StyledRouterLink = styled(Link)`${StyledLinkStyles}`;
const StyledLink = styled.a`${StyledLinkStyles}`;

const Menu = () => (
  <LinkList>
    <ListItem>
      <StyledRouterLink to="/">About </StyledRouterLink>
    </ListItem>
    <ListItem>
      <StyledRouterLink to="/bio">Bio </StyledRouterLink>
    </ListItem>
    <ListItem>
      <StyledLink href="mailto:beetlerom@gmail.com">Contact</StyledLink>
    </ListItem>
  </LinkList>
);

export default Menu;
