import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Today from './pages/Top/Today';
import GlobalMenu from './Components/GlobalMenu';
import Best from './pages/Top/Best';
import Match from './pages/Top/Match';
import Review from './pages/Bottom/Review';
import QuestionAnswer from './pages/Bottom/Q&A';
import Artist from './pages/Bottom/ArtistQ&A';

const { Header, Content, Footer, Sider } = Layout;

// 메뉴와 컨텐츠를 라우터로 이용한다.


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

                <GlobalMenu />

            </Sider>

            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflowY: 'scroll' }}>

                    <Route exact path="/today" component={Today} />
                    <Route exact path="/best" component={Best} />
                    <Route exact path="/match" component={Match} />

                    <Route exact path="/review" component={Review} />
                    <Route exact path="/artistqnd" component={Artist} />
                    <Route exact path="/qna" component={QuestionAnswer} />

                </Content>
                <Footer style={{ textAlign: 'center' }}>JT Comp ©2021</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
