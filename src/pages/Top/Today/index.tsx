import React, { useState } from 'react';
import ContentsLayout from 'Components/Layout/ContentsLayout'
import { Card, Layout, Menu ,PageHeader } from 'antd';
import CustomBanner from 'Components/CustomMainBanner'
import {CustomSwiper , CustomSquareSwiper ,CustomArtistInfoSwiper} from 'Components/CustomSwiper/index'
import { Footer } from 'antd/lib/layout/layout';
const { Meta } = Card;




const Today = () => {

    const [tmpContent, setContents] = useState<any>([
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title1', description: 'description1' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title2', description: 'description2' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title3', description: 'description3' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title4', description: 'description4' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title5', description: 'description5' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title6', description: 'description6' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title7', description: 'description7' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title8', description: 'description8' },
        { cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: 'title9', description: 'description9' },
    ])

    return (
        <>
            <PageHeader>
                <CustomBanner cover = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" content ='Hello Singer!'/>
            </PageHeader>
            
            <CustomSquareSwiper contents={tmpContent} title='오늘의 Hit!' />
            <CustomSquareSwiper contents={tmpContent} title='새로나왔어요' />
            <CustomArtistInfoSwiper contents={tmpContent} marginBottomSize='100px' title='오직 여기에서만!'/>
            <Footer style={{backgroundColor:'white'}}> </Footer>
        </>
    );
};

export default Today;
