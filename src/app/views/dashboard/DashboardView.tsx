import React from 'react';
import { Card, Table } from 'antd';

const COLUMNS = [
    { title: 'Location', dataIndex: 'location'},
    { title: 'Destination', dataIndex: 'destination'},
    { title: 'EID #', dataIndex: 'eid'},
    { title: 'Name', dataIndex: 'name'},
];

export default class DashboardView extends React.Component<{}, {}> {
    state = {
        data: [
            { location: 'test', destination: 'test', eid: 1361232, name: 'njohns48', id: 1 },
        ]
    }

    render() {
        return (
            <Card title="Requests">
                <Table dataSource={this.state.data} columns={COLUMNS} bordered={true} rowKey="id"/>
            </Card>
        );
    }
}
