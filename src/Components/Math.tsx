/**
 * Created by Min on 2017/3/21.
 */
import * as React from 'react';

export interface MathProps {
    compiler: string;
    framework: string;
}

export class Math extends React.Component<MathProps, undefined> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}。</h1>;
    }
}
