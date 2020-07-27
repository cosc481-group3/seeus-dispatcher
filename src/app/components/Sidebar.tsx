import React, { ReactInstance, ReactText } from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { HistoryOutlined, LockOutlined, LogoutOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

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

export type MenuSelectHandlerProps = { key: ReactText, item: ReactInstance, domEvent: any, selectedKeys?: ReactText[] };
export type MenuSelectHandler = (props: MenuSelectHandlerProps) => void;

export interface ISidebarProps {
    collapsed: boolean;
    onCollapse: (collapsed: boolean) => void;
    onMenuSelect: MenuSelectHandler;
    selected: MenuItemKey;
}

export enum MenuItemKey {
    Dashboard = "dashboard",
    History = "history",
    User = "user",
    Admin = "admin",
    Logout = "logout"
}

export default function Sidebar({ collapsed, onCollapse, onMenuSelect, selected }: ISidebarProps) {
    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <SideHeader>
                <img src={logo}/>
                {!collapsed && <span>SEEUS</span>}
            </SideHeader>
            <Menu theme="dark"
                  mode="inline"
                  selectedKeys={[selected]}
                  forceSubMenuRender={true}
                  onSelect={onMenuSelect}
            >
                <Menu.Item key={MenuItemKey.Dashboard} icon={<UnorderedListOutlined/>}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key={MenuItemKey.History} icon={<HistoryOutlined/>}>
                    History
                </Menu.Item>
                <Menu.Item key={MenuItemKey.User} icon={<UserOutlined/>}>
                    njohns48
                </Menu.Item>
                <Menu.Item key={MenuItemKey.Admin} icon={<LockOutlined/>}>
                    Administrator
                </Menu.Item>
                <Menu.Item key={MenuItemKey.Logout} icon={<LogoutOutlined/>}>
                    Logout
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}
