import React from 'react';
export declare type LoginProps = {
    message?: string;
    action: string;
};
declare const Login: React.ComponentType<LoginProps & {
    OriginalComponent?: React.FunctionComponent<LoginProps> | React.ComponentClass<LoginProps, any> | undefined;
}>;
export { Login };
export default Login;
