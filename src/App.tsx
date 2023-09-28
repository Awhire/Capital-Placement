import React, { useState } from "react"
import {
  HomeOutlined,
  FileOutlined,
  MenuOutlined, 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

import HomeNav from "./components/HomeNav";


const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('', '1', <MenuOutlined />),
  getItem('Home', '2', <HomeOutlined />),
  getItem('Files', '3', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Sider style={{ background: colorBgContainer }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{background: "#F5F5F5"}}>
        <Header style={{ padding: 0, background: "#F5F5F5" }} />
        <Content style={{ margin: '0 16px', background: "#F5F5F5" }}>
          <HomeNav />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;