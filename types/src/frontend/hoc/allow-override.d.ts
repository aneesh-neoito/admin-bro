import { ComponentType } from 'react';
import { OverridableComponent } from '../utils/overridable-component';
/**
 * @private
 *
 * @classdesc
 * Overrides one of the component form AdminBro core when user pass its name to
 * {@link AdminBro.bundle} method.
 *
 * If case of being overridden, component receives additional prop: `OriginalComponent`
 *
 * @example
 * AdminBro.bundle('./path/to/component', 'SidebarFooter', true)
 */
declare function allowOverride<P>(OriginalComponent: ComponentType<P>, name: OverridableComponent, keepOriginal?: boolean): ComponentType<P & {
    OriginalComponent?: ComponentType<P>;
}>;
export { allowOverride as default, allowOverride, };
