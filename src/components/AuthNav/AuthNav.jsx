import { NavLinkAuthNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkAuthNav to="/register">Register</NavLinkAuthNav>
      <NavLinkAuthNav to="/login">Log In</NavLinkAuthNav>
    </div>
  );
};
