import React from 'react';
import { ActionHeaderProps } from './action-header-props';
/**
 * Header of an action. It renders Action name with buttons for all the actions.
 *
 * ### Usage
 *
 * ```
 * import { ActionHeader } from 'admin-bro'
 * ```
 *
 * @component
 * @subcategory Application
 */
export declare const ActionHeaderOriginal: React.FC<ActionHeaderProps>;
declare const ActionHeader: React.ComponentType<ActionHeaderProps & {
    OriginalComponent?: React.FunctionComponent<ActionHeaderProps> | React.ComponentClass<ActionHeaderProps, any> | undefined;
}>;
export { ActionHeader };
export default ActionHeader;
