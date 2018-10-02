import * as React from 'react';

import { ApiModel } from '../domain/ApiModel';

import './HomeView.css';

interface GeneratorProps {
    apiModel: ApiModel;
}

export const Generator = (props: GeneratorProps) => {

    const endpoints = props.apiModel.endpoints.map(endpoint => {
            return (
                <div key={endpoint.relativePath} className="entry">
                    <a href={endpoint.relativePath}>{endpoint.displayName}</a>
                    <button>Add</button>
                    <button>Change</button>
                </div>
            );
        }
    );

    return (
        <div>
            {endpoints}
        </div>
    );
};