import React from 'react';
import { Card } from 'antd';

interface State {
}

export default class UserView extends React.Component<{}, State> {
    state = {}

    render() {
        return (
            <Card>
                User
            </Card>
        );
    }
}
