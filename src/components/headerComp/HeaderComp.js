import "./headerComp.css";
import logo from "../../assets/logoImage.png";
import { NavLink } from "react-router-dom";

function HeaderComp() {
  const navObj = {
    navNames: [
      "Apartments",
      "Townhouses",
      "Info",
      "Blog",
      "Our Team",
      "Contact",
    ],
  };

  const listItems = navObj.navNames.map((navName, i) => (
    <li className='navEl' key={i}>
      {navName}
    </li>
  ));

  const aboveNav = ["Apply Now", "Email us Today", "1-855-371-1201"];

  const aboveNavEls = aboveNav.map((el) => <NavLink to='/add'>{el}</NavLink>);

  return (
    <div className='panHeader'>
      <div className='logoDiv'>
        <img alt='logo' className='logoImg' src={logo}></img>
      </div>
      <div className='NavbarDiv'>
        <div>{aboveNavEls}</div>
        <div className='navbarLinks'>
          <ul className='nav'>{listItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderComp;
