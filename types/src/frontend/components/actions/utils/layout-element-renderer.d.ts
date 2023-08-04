import React from 'react';
import { ActionProps } from '../action.props';
import { PropertyPlace } from '../../../interfaces/property-json/property-json.interface';
import { ParsedLayoutElement } from '../../../../backend/utils/layout-element-parser';
import { BasePropertyProps } from '../../property-type/base-property-props';
import { UseRecordResult } from '../../../hooks/use-record/use-record.type';
declare type Props = ActionProps & {
    layoutElement: ParsedLayoutElement;
    where: PropertyPlace;
    onChange?: BasePropertyProps['onChange'];
    useRecordHook?: UseRecordResult;
};
export declare const LayoutElementRenderer: React.FC<Props>;
export default LayoutElementRenderer;
