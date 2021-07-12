import React from 'react'
import { Card, Layout, Menu } from 'antd';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Navigation]);

// 이 스타일은 어떻게 해야할지 논의가 필요함 2021-07-12
import './styles.css'


const { Meta } = Card;

// 필요한것: card에 들어갈 이미지, 타이틀, 설명 -> 이걸 우리에게 필요한 값으로 바꿔줘야함

// 여기서 props로 이미지(card)에 들어갈 내용들을 받아서 card에 넣어주고
// 나중에 모달 컴포넌트가 완성되면, 이것또한 props로 받아서 onclick에 넣어주는 방식으로 진행할 예정
// (style은 구글검색을 통해 가져옴)

const CustomSwiper = ({ contents }:any) => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true
            }}
            navigation={true}
            className="mySwiper"
        >
            
            {contents.map(({cover, title, description}:any, index:number) => {
                return (
                    <SwiperSlide>
                        <Card
                            hoverable
                            style={{ width: 250}}
                            cover={<img alt="example" src={cover} />}
                            onClick={() => alert("모달을 띄울것이다."+index)}
                        >
                            <Meta title={title} description={description} />
                        </Card>
                    </SwiperSlide>
                )
            })}
            
        </Swiper>
    )
}

export default CustomSwiper;