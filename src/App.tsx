import { capitalize } from 'format';
import * as React from 'react';

type AppProps = {};

export default (props: AppProps) => <div>{capitalize('hi')}</div>;

export { AppProps };
