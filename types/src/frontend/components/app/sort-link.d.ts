import React, { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';
import { BasePropertyJSON } from '../../interfaces';
export declare type SortLinkProps = {
    property: BasePropertyJSON;
    direction?: 'asc' | 'desc';
    sortBy?: string;
};
declare class SortLinkOriginal extends React.PureComponent<SortLinkProps & RouteComponentProps> {
    constructor(props: any);
    isActive(): boolean;
    render(): ReactNode;
}
declare const SortLink: React.ComponentType<Pick<SortLinkProps & RouteComponentProps<{}, import("react-router").StaticContext, unknown>, "direction" | "sortBy" | "property"> & {
    wrappedComponentRef?: ((instance: SortLinkOriginal | null) => void) | React.RefObject<SortLinkOriginal> | null | undefined;
} & {
    OriginalComponent?: React.ComponentClass<Pick<SortLinkProps & RouteComponentProps<{}, import("react-router").StaticContext, unknown>, "direction" | "sortBy" | "property"> & {
        wrappedComponentRef?: ((instance: SortLinkOriginal | null) => void) | React.RefObject<SortLinkOriginal> | null | undefined;
    }, any> | React.FunctionComponent<Pick<SortLinkProps & RouteComponentProps<{}, import("react-router").StaticContext, unknown>, "direction" | "sortBy" | "property"> & {
        wrappedComponentRef?: ((instance: SortLinkOriginal | null) => void) | React.RefObject<SortLinkOriginal> | null | undefined;
    }> | undefined;
}>;
export { SortLink };
export default SortLink;
