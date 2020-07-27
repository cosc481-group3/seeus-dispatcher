import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Layout } from 'antd';

import Sidebar, { MenuItemKey, MenuSelectHandlerProps } from '@/app/components/Sidebar';

const {Header, Content, Footer, Sider} = Layout;

const AppLayout = styled(Layout)`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const ContentLayout = styled(Layout)`
    background: #f5f8fa;
`;

const MainContainer = styled.div`
    flex: 3;
    padding: 15px;
`;

function App() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [selectedMenuItem, setSelectedMenuItem] = React.useState(MenuItemKey.Dashboard);

    const handleMenuSelect = ({ key }: MenuSelectHandlerProps) => {
        console.log(key);
        switch(key) {
            case MenuItemKey.Logout:
                setIsLoggedIn(false);
            break;
            default:
                setSelectedMenuItem(key as MenuItemKey);
        }
    };

    return (
        <AppLayout>
            <Sidebar
                collapsed={isCollapsed}
                onCollapse={setIsCollapsed}
                selected={selectedMenuItem}
                onMenuSelect={handleMenuSelect}
            />
            <ContentLayout>
                {/*<Header className="site-layout-background" style={{padding: 0}}/>*/}
                <Content style={{margin: '0 16px'}}>
                    <div style={{padding: 24, minHeight: 360}}>
                        { isLoggedIn ? 'Logged In' : 'Logged Out' }
                    </div>
                </Content>
            </ContentLayout>
        </AppLayout>
    );
}

export default App;
