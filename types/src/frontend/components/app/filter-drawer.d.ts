import React from 'react';
import { ResourceJSON } from '../../interfaces';
export declare type FilterProps = {
    resource: ResourceJSON;
    toggleFilter: () => void;
    isVisible: boolean;
};
export declare const FilterDrawerOriginal: React.FC<FilterProps>;
declare const FilterDrawer: React.ComponentType<FilterProps & {
    OriginalComponent?: React.FunctionComponent<FilterProps> | React.ComponentClass<FilterProps, any> | undefined;
}>;
export { FilterDrawer };
export default FilterDrawer;
