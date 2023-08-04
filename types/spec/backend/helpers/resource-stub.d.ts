import BaseProperty from '../../../src/backend/adapters/property/base-property';
import BaseResource from '../../../src/backend/adapters/resource/base-resource';
export declare const expectedResult: {
    id: string;
    properties: BaseProperty[];
    resourceName: string;
    databaseName: string;
    databaseType: string;
    parent: {
        name: string;
        icon: string;
    };
    currentAdmin: {
        email: string;
    };
    roles: string[];
    permissions: string[];
};
declare const _default: () => BaseResource;
export default _default;
