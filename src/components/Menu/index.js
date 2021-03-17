import styled from 'styled-components';
import { Link } from "react-router-dom";

const menuMargin = 20; //px

const LinkList = styled.ul`
  display: flex;
  list-style-type: none;
  position: absolute;
  right: ${menuMargin}px;
  top: ${menuMargin}px;
`;

const ListItem = styled.li`
  margin: 0 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    top: 100%;
    height: 2px;
    background: red;
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

const Menu = () => (
  <LinkList>
    <ListItem>
      <StyledLink to="/">About </StyledLink>
    </ListItem>
    <ListItem>
      <StyledLink to="/bio">Bio </StyledLink>
    </ListItem>
  </LinkList>
);

export default Menu;
