import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={s.navigation}
      activeClassName={s.navigationActive}
    >
      HomePage
    </NavLink>
    <NavLink
      exact
      to="/movies"
      className={s.navigation}
      activeClassName={s.navigationActive}
    >
      MoviesPage
    </NavLink>
  </nav>
);

export default Navigation;
