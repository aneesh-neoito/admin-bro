import React from 'react';
export declare type ChangePasswordProps = {
    message?: string;
    action: string;
};
declare const ChangePassword: React.ComponentType<ChangePasswordProps & {
    OriginalComponent?: React.FunctionComponent<ChangePasswordProps> | React.ComponentClass<ChangePasswordProps, any> | undefined;
}>;
export { ChangePassword };
export default ChangePassword;
