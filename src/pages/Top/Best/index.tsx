import { Card } from 'antd';
import React, { useState } from 'react';
import ContentsLayout from 'Components/Layout/ContentsLayout';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import BestCardModal from './BestCardModal';
import Modal from 'antd/lib/modal/Modal';
import CustomModalConnector from 'Components/CustomModalConnector';
import { render } from 'react-dom';


const Best = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [sendModalId, setSendModalId] = useState<any>('');
    
    const [tmpContent, setContents] = useState<any>([
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title1', description: 'description1' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title2', description: 'description2' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title3', description: 'description3' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title4', description: 'description4' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title5', description: 'description5' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title6', description: 'description6' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title7', description: 'description7' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title8', description: 'description8' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title9', description: 'description9' },
    ]);
    
    const openPopup = (id:any) => {
        setModalVisible(!modalVisible)
        setSendModalId(id)
    }

    const modalClose = () => setModalVisible(false);
    
    return (
        <>
            
            <Card style={{ width: '100%', height: '250px', backgroundColor: '#E0E0E0', alignContent: 'center' }}>
                <label>asd</label>
                <Card style={{ width: '15%', height: '200px', backgroundColor: 'black', display: 'inline-block' }} onClick={() => {alert("????????? ????????? ???????????????")}} />                
                <Card style={{ width: '60%', height: '200px', display: 'inline-block' }} onClick={() => {alert("????????? ???????????????")}}/>
            </Card>

            <ContentsLayout title={'?????? ?????????'}>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    // slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    
                    {tmpContent.map(({ cover, title, description }:any) => {
                        return (
                            <SwiperSlide style={{width:'310px' , height:'310px'}}>
                                <Card
                                    hoverable
                                    style={{ width: '310px' ,height:'310px'}}
                                    cover={<img alt="example" src={cover} style={{width:'310px'}}/>}
                                    onClick={() => openPopup(title) }
                                >

                                </Card>
                            </SwiperSlide>
                        )
                    })}

                    {modalVisible && <BestCardModal modalVisible={modalVisible} modalClose={modalClose} id={sendModalId} />}
                    
                </Swiper>
                
            </ContentsLayout>
            


            
            

            {/* <ContentsLayout contents={'slide 1'}>
                <CustomSquareSwiper contents={tmpContent} />
            </ContentsLayout>

            <ContentsLayout contents={'slide 2'}>
                <CustomSquareSwiper contents={tmpContent} />
            </ContentsLayout>

            <ContentsLayout contents={'???????????? ???????????? ?????????'}>
                <CustomSquareSwiper contents={tmpContent} />
            </ContentsLayout> */}
        </>
    );
};

export default Best;
