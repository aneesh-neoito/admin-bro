import React from 'react';
export declare type SignupProps = {
    message?: string;
    action: string;
};
declare const Signup: React.ComponentType<SignupProps & {
    OriginalComponent?: React.FunctionComponent<SignupProps> | React.ComponentClass<SignupProps, any> | undefined;
}>;
export { Signup };
export default Signup;
