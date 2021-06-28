import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {


    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo"> 
                  로고
                </div>
                <div style={{ backgroundColor: 'white', width: '70%', margin: '30px auto' }}> 
                  로그인 정보(css 수정)
                </div>

                <hr />

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UserOutlined />}>
                        nav 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<UserOutlined />}>
                        nav 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<UserOutlined />}>
                        nav 8
                    </Menu.Item>
                </Menu>

                <hr />

                <div style={{ marginTop: '30px' }}>
                  <label style={{ color: 'white' }}>보관함 같은것들</label>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                      <Menu.Item key="1" icon={<UserOutlined />}>
                          nav 1
                      </Menu.Item>
                      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                          nav 2
                      </Menu.Item>
                      <Menu.Item key="3" icon={<UploadOutlined />}>
                          nav 3
                      </Menu.Item>
                  </Menu>
                </div>
            </Sider>

            
            
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflowY: 'scroll' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 300, marginBottom: '10px'}}>
                        content
                    </div>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 300, marginBottom: '10px' }}>
                        content
                    </div>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 300, marginBottom: '10px' }}>
                        content
                    </div>
                    {/* <Test /> */}
                </Content>
                <Footer style={{ textAlign: 'center' }}>JT Comp ©2021</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
