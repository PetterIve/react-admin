
export interface ApiModel {
    endpoints: Endpoint[];
}

export interface Endpoint {
    relativePath: string;
    displayName: string;
    endpointModel: EndpointModel;
}

export interface EndpointModel {
    modelFields: ModelField[];
}

export interface ModelField {
    name: string;
    verboseName: string;
    type: ModelFieldType;
}

export interface BaseEntity {
    id: string;
    name: string;
    verboseName?: string;
}

export enum ModelFieldType {
    STRING = 'STRING',
    INTEGER = 'INTEGER',
    NUMBER = 'NUMBER',
    DATE = 'DATE',
    EMAIL = 'EMAIL'
}
