import React from 'react'
import { Layout } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

// 각 페이지에서 내용을 출력할때 공통으로 쓰기위한 레이아웃이다.(무조건 수정해야함)
// <ContentsLayout contents={"asd"} /> 일단 이렇게 사용중

const ContentsLayout = ({ contents }: any) => {
    return (
        <>
            <Content style={{ margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 300, marginBottom: '10px' }}>

                    {contents}

                </div>
            </Content>
        </>
    );
}

export default ContentsLayout