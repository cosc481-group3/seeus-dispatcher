import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import Sidebar, { MenuItemKey, MenuSelectEvent } from '@/app/components/Sidebar';

const AppLayout = styled(Layout)`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const Content = styled(Layout.Content)`
    margin: 18px;
    padding: 16px;
    background: #fff;
`;

const Header = styled(Layout.Header)`
    background: #fff;
`;

interface AppState {
    isSidebarCollapsed: boolean;
    isLoggedIn: boolean;
    selectedTab: MenuItemKey;
}

class App extends React.Component<any, AppState> {
    state = {
        isSidebarCollapsed: false,
        isLoggedIn: true,
        selectedTab: MenuItemKey.Dashboard,
    };

    handleMenuSelect = ({ key }: MenuSelectEvent) => {
        console.log(key);
        switch(key) {
            case MenuItemKey.Logout:
                this.setState({ isLoggedIn: false });
            break;
            default:
                this.setState({ selectedTab: key as MenuItemKey });
        }
    };

    render() {
        const { isSidebarCollapsed, selectedTab, isLoggedIn } = this.state;

        if(!isLoggedIn) {
            return (<div>Logged Out</div>);
        }

        return (
            <AppLayout>
                <Sidebar
                    selectedTab={selectedTab}
                    onMenuSelect={this.handleMenuSelect}
                    collapsed={isSidebarCollapsed}
                    onCollapse={(collapsed) => this.setState({ isSidebarCollapsed: collapsed })}
                />
                <Layout>
                    <Header />
                    <Content>
                        { this.state.isLoggedIn ? 'Logged In' : 'Logged Out' }
                    </Content>
                </Layout>
            </AppLayout>
        );
    }
}

export default App;
