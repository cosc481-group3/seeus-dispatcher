import React, { ReactInstance, ReactText } from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { BarChartOutlined, DashboardOutlined, LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

import logo from '../seeus-logo.png';

const SideHeader = styled.div`
    color: #fff;
    font-size: 28px;
    margin: 16px;
    text-align: center;
    img {
      width: 35px;
    }
    span {
      padding-left: 10px;
    }
`;

export type MenuSelectEvent = { key: ReactText, item: ReactInstance, domEvent: any, selectedKeys?: ReactText[] };
export type MenuSelectHandler = (event: MenuSelectEvent) => void;

export interface ISidebarProps {
    collapsed: boolean;
    onCollapse: (collapsed: boolean) => void;
    onMenuSelect: MenuSelectHandler;
    selectedTab: MenuItemKey;
}

export enum MenuItemKey {
    Dashboard = "dashboard",
    Reporting = "reporting",
    User = "user",
    Admin = "admin",
    Logout = "logout"
}

export default function Sidebar({ collapsed, onCollapse, onMenuSelect, selectedTab }: ISidebarProps) {
    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <SideHeader>
                <img src={logo}/>
                {!collapsed && <span>SEEUS</span>}
            </SideHeader>
            <Menu theme="dark"
                  mode="inline"
                  selectedKeys={[selectedTab]}
                  forceSubMenuRender={true}
                  onSelect={onMenuSelect}
            >
                <Menu.Item key={MenuItemKey.Dashboard} icon={<DashboardOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key={MenuItemKey.Reporting} icon={<BarChartOutlined />}>
                    Reporting
                </Menu.Item>
                <Menu.Item key={MenuItemKey.Admin} icon={<LockOutlined/>} disabled={false}>
                    Administrator
                </Menu.Item>
                <Menu.Item key={MenuItemKey.User} icon={<UserOutlined/>}>
                    njohns48
                </Menu.Item>
                <Menu.Item key={MenuItemKey.Logout} icon={<LogoutOutlined/>}>
                    Logout
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}
