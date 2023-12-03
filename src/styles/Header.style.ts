import { AppBar, Toolbar, styled } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
  color: ${(props) => props.theme.palette.text.primary};
  height: 70px;
`;

const StyledToolbar = styled(Toolbar)`
  height: 100%;
`;

const MenuWrap = styled("div")`
  flex-grow: 1;
  gap: 40px;
  display: flex;
  height: 100%;
  margin-left: 40px;
`;

interface MenuButtonProps {
  isActive: boolean;
}

const MenuButton = styled("div")<MenuButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, isActive }) =>
    !isActive ? theme.palette.text.primary : theme.palette.primary.main};
  border-bottom: 2px solid
    ${({ theme, isActive }) =>
      !isActive ? "transparent" : theme.palette.primary.main};
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  font-weight: ${({ isActive }) => (!isActive ? 500 : 600)};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`;

export { StyledAppBar, StyledToolbar, MenuButton, MenuWrap };
