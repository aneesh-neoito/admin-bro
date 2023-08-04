import React from 'react';
export declare type ForgotPasswordProps = {
    message?: string;
    action: string;
};
declare const ForgotPassword: React.ComponentType<ForgotPasswordProps & {
    OriginalComponent?: React.FunctionComponent<ForgotPasswordProps> | React.ComponentClass<ForgotPasswordProps, any> | undefined;
}>;
export { ForgotPassword };
export default ForgotPassword;
