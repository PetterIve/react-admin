import * as React from 'react';
import { Link } from 'react-router-dom';

import { BaseEntity, Endpoint } from '../domain/ApiModel';
import { get } from '../mock/MockRepository';

import './EntityList.css';

type Props = {
    endpoint: Endpoint;
};

type State<T> = {
    entities: T[];
    filteredEntities: T[];
    loadingEntities: boolean;
    searchValue: string;
};
export class EntityList<T extends BaseEntity> extends React.Component<Props, State<T>> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loadingEntities: true,
            entities: [],
            filteredEntities: [],
            searchValue: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const entities = get(this.props.endpoint.relativePath);
            this.setState({
                entities: entities as T[],
                filteredEntities: entities as T[],
                loadingEntities: false
            });
        });
    }

    filterEntities(query: string) {
        const filteredEntities = this.state.entities.filter(entity => {
            let isMatchingFilter = false;
            for (var key in entity) {
                if (entity[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    isMatchingFilter = true;
                }
            }
            return isMatchingFilter;
        });
        this.setState({
            filteredEntities: filteredEntities
        });
    }

    render() {

        const entityFieldNames = this.props.endpoint.endpointModel.modelFields.map(endpointField => {
            return (
                <th key={endpointField.name}>
                    {endpointField.verboseName}
                </th>
            );
        });

        const entityEntries = this.state.filteredEntities.map(entity => {
            const entityFields = [];
            for (var key in entity) {
                const entityEntry = (
                    <td>
                        {entity[key].toString()}
                    </td>
                );
                entityFields.push(entityEntry);
            }
            return (
                <tr className="entity-row" key={entity.id}>
                    <Link to={`${this.props.endpoint.relativePath}/${entity.id}`}>
                    {entityFields}
                    </Link>
                </tr>
            );
        });

        const entityTable = (
            <table>
                <thead>
                    <tr>
                        {entityFieldNames}
                    </tr>
                </thead>
                <tbody>
                    {entityEntries}
                </tbody>
            </table>
        );

        return (
            <div className="entity-details-container">
                <h1>{this.props.endpoint.displayName}</h1>
                <p className="m-t-m">Click one of the table rows to edit</p>
                <input
                    className="search-input"
                    placeholder={`Search ${this.props.endpoint.displayName.toLowerCase()}`}
                    value={this.state.searchValue}
                    onChange={e => {
                        this.setState({searchValue: e.target.value});
                        this.filterEntities(e.target.value);
                    }}
                />
                <div className="entity-details-content">
                    {
                        this.state.loadingEntities
                            ? <div>Loading...</div>
                            : this.state.filteredEntities.length > 0
                                ? entityTable
                                : <p>No matches</p>
                    }
                </div>
            </div>
        );
    }
}