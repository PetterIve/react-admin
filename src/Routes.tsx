import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Generator } from './home-view/HomeView';
import { EntityList } from './entity-list/EntityListContainer';
import { ApiModel } from './domain/ApiModel';
import { ApiModelImpl } from './ApiModelImpl';
import { Sidebar } from './sidebar/Sidebar';

import './Routes.css';

interface RouterProps {
    apiModel: ApiModel;
}

export function Routes (props: RouterProps) {

    const routes = props.apiModel.endpoints.map(endpoint => {

        const entityDetailsContainer = () => <EntityList endpoint={endpoint}/>;
        return (
            <Route
                key={endpoint.relativePath}
                render={entityDetailsContainer}
                path={endpoint.relativePath}
                exact={true}
            />
        );
    });

    const renderGenerator = () => <Generator apiModel={ApiModelImpl} />;

    const NotFound = () => <div>Not found</div>;

    return (
        <BrowserRouter basename="/">
            <div className="route-wrapper">
                <Sidebar
                    className="sidebar"
                    apiModel={props.apiModel}
                />
                <div className="content">
                    <Switch>
                        {routes}
                        <Route render={renderGenerator} path="/" exact={true}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}