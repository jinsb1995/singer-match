import React, { useState } from 'react';
import ContentsLayout from '../../../Components/Layout/ContentsLayout'
import { Card, Layout, Menu } from 'antd';

import CustomSwiper from '../../../Components/CustomSwiper'
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
            <ContentsLayout contents={"Today 페이지 입니다."} > 

                {/* 
                    contents는 contents대로 받아주면 되는데 
                    <ContentsLayout>사이에 들어가는 애들은 그쪽으로 넘어가서  children으로 받아주면 
                    ex) <div><span><a>등 태그들도 고대로 같이 받아주기 때문에 그냥 넣으면 된다.
                */}
                <CustomSwiper contents={tmpContent} />

            </ContentsLayout>

            <ContentsLayout contents={"Today 페이지 입니다."} />

            <ContentsLayout contents={"Today 페이지 입니다."} />

            <ContentsLayout contents={"Today 페이지 입니다."} />
            
            <ContentsLayout contents={"Today 페이지 입니다."} />
        </>
    );
};

export default Today;
