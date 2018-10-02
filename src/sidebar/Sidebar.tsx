import * as React from 'react';
import * as classnames from 'classnames';

import { ApiModel } from '../domain/ApiModel';
import { SidebarItem } from './sidebar-item/SidebarItem';

import './Sidebar.css';

interface Props {
    apiModel: ApiModel;

    className?: string;
}

export function Sidebar (props: Props) {

    const className = classnames(
        props.className
    );

    const sideBarItems = props.apiModel.endpoints.map(endpoint => {
        return (
            <SidebarItem
                key={endpoint.relativePath}
                to={endpoint.relativePath}
                name={endpoint.displayName}
            />
        );
    });

    return (
        <div className={className}>
            <SidebarItem to="/" name="Overview"/>
            {sideBarItems}
        </div>
    );

}