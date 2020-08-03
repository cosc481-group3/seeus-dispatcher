import React from 'react';
import { Card } from 'antd';

interface State {
}

export default class AdminView extends React.Component<{}, State> {
    state = {}

    render() {
        return (
            <Card>
                Admin
            </Card>
        );
    }
}
