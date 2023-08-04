import React from 'react';
import { DefaultTheme } from 'styled-components';
import { ActionProps } from './action.props';
declare type CombinedProps = ActionProps & {
    theme: DefaultTheme;
};
declare const ListWithTheme: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CombinedProps>, "record" | "resource" | "records" | "action" | "children" | "setTag"> & {
    theme?: DefaultTheme | undefined;
}>;
export { ListWithTheme as default, ListWithTheme as List, };
