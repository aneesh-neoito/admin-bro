import * as DesignSystem from '@admin-bro/design-system'

import allowOverride from '../../hoc/allow-override'

const Input = allowOverride(DesignSystem.Input, 'Input');
const Button = allowOverride(DesignSystem.Button, 'Button');
const Table = allowOverride(DesignSystem.Table, 'Table');
const TableHead = allowOverride(DesignSystem.TableHead, 'TableHead');
const TableBody = allowOverride(DesignSystem.TableBody, 'TableBody');
const TableRow = allowOverride(DesignSystem.TableRow, 'TableRow');
const TableCell = allowOverride(DesignSystem.TableCell, 'TableCell');

// const overridableComponents: OverridableComponent[] = [
//   'Button',
//   'TableRow',
//   'TableCell'
// ];

// const components = overridableComponents.reduce((exportable, component) => {
//   exportable[component] = allowOverride(DesignSystem[component], component);
//   return exportable;
// }, {});

export {
  Input,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
};