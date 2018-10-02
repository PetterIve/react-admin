import * as React from 'react';
import { BaseEntity } from '../../domain/ApiModel';

interface Props<T> {
    entity: T;
}

export class EntityDetailsContainer<T extends BaseEntity> extends React.PureComponent<Props<T>> {
    render() {
        return (
            <div>
                {this.props.entity.verboseName ? this.props.entity.verboseName : this.props.entity.name}
            </div>
        );
    }
}