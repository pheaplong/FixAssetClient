import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
	return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {props.links.map((e, i) => (
            <li>
              <NavLink to={e.url}>{e.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export const AssetNavBar=()=>{
	const links= [
		{name:'Asset',url:'/Asset'},
		{name:'Invoice',url:'/invoice'},
		{name:'Supplier',url:'/supplier'},
	]
	return <NavBar links={links}/>
}
export default NavBar
