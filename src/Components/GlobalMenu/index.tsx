import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const GlobalMenu = () => {
    return (
        <>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="today" icon={<UserOutlined />}>
                    <Link to="/today">Today</Link>
                </Menu.Item>
                <Menu.Item key="best" icon={<VideoCameraOutlined />}>
                    <Link to="/best">Best</Link>
                </Menu.Item>
                <Menu.Item key="match" icon={<UploadOutlined />}>
                    <Link to="/match">Match</Link>
                </Menu.Item>

                <hr />

                <div style={{ marginTop: '50px' }} />
                
                <Menu.Item key="review" icon={<UserOutlined />}>
                    <Link to="/review">Review</Link>
                </Menu.Item>
                <Menu.Item key="artistqnd" icon={<VideoCameraOutlined />}>
                    <Link to="/artistqnd" >Artist Q&A</Link>
                </Menu.Item>
                <Menu.Item key="qna" icon={<UploadOutlined />}>
                    <Link to="/qna">Q&A</Link>
                </Menu.Item>
            </Menu>

        </>
    );
};

export default GlobalMenu;
