
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './SidebarItem.css';

interface Props {
    to: string;
    name: string;
}

export function SidebarItem(props: Props) {

    return (
        <NavLink
            to={props.to}
            className="sidebar-item"
            activeClassName="active"
            exact={true}
        >
            {props.name}
        </NavLink>
    );
}