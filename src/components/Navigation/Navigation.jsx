import { NavLinkNavigation } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavLinkNavigation to="/">Home</NavLinkNavigation>
      <NavLinkNavigation to="/tasks">Tasks</NavLinkNavigation>
    </nav>
  );
};
