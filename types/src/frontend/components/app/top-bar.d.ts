import React from 'react';
declare type Props = {
    toggleSidebar: (any: any) => void;
};
export declare const TopBarOriginal: React.FC<Props>;
declare const Topbar: React.ComponentType<Props & {
    OriginalComponent?: React.FunctionComponent<Props> | React.ComponentClass<Props, any> | undefined;
}>;
export { Topbar };
export default Topbar;
