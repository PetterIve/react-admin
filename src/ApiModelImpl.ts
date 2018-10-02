import { ApiModel, Endpoint, EndpointModel, ModelFieldType } from './domain/ApiModel';

const userEndpointModel: EndpointModel = {
    modelFields: [
        {
            name: 'id',
            verboseName: 'User id',
            type: ModelFieldType.STRING
        },
        {
            name: 'email',
            verboseName: 'Email',
            type: ModelFieldType.EMAIL
        },
        {
            name: 'name',
            verboseName: 'Full name',
            type: ModelFieldType.STRING
        },
    ]
};

const userEndpoint: Endpoint = {
    relativePath: '/users',
    displayName: 'Users',
    endpointModel: userEndpointModel,
};

const courseEndpointModel: EndpointModel = {
    modelFields: [
        {
            name: 'id',
            verboseName: 'Course ID',
            type: ModelFieldType.STRING
        },
        {
            name: 'name',
            verboseName: 'Course name',
            type: ModelFieldType.STRING
        }
    ]
};

const courseEndpoint: Endpoint = {
    relativePath: '/courses',
    displayName: 'Courses',
    endpointModel: courseEndpointModel
};

export const ApiModelImpl: ApiModel = {
    endpoints: [
        userEndpoint,
        courseEndpoint
    ]
};