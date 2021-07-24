import { Card, Modal } from 'antd'
import React, { useState } from 'react'
import AlbemListGrid from './AlbemListGrid'

const BestCardModal = ({ modalVisible, modalClose, id }:any) => {

    // 여기에서 title 등 받아온 값으로 axios이용해서 데이터를 받아오면 됩니다.
    console.log(id)


    const [tmpContent, setContents] = useState<any>([
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title1', description: 'description1' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title2', description: 'description2' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title3', description: 'description3' },
        { cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', title: 'title4', description: 'description4' },
    ]);

    
    return(
        <>
            <Modal
                title="곡 상세 페이지 입니다.(수정해야함)"
                visible={modalVisible}
                onCancel={modalClose}
                width="60%"
                
            >
                
                    <div style={{ width: '80%', minHeight: '150px', marginLeft: 'auto', marginRight: 'auto', display: 'flex'  }}>
                            <div style={{ width: '100%', minHeight: '260px', backgroundColor: '#E0E0E0', alignContent: 'center', display: 'flex' }}>
                                <Card style={{ width: '30%', height: '260px', backgroundColor: 'black' }}/>                
                                <Card 
                                    style={{ width: '70%', height: '260px' }} 
                                    cover={<span style={{ fontSize: '25px', fontWeight: 'bold', padding: '20px 0px 0 23px'}}>라일락</span>}
                                >
                                    아이유<br />
                                    댄스 / 힙합<br />
                                    설명이 들어가야함<br />
                                    
                                </Card>
                            </div>
                    </div>
                    <div style={{  width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px' }}>
                        <AlbemListGrid />
                    </div>
                    <div style={{ width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px' }}>
                        아티스트가 알아서 이미지를 올리는 영역
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {tmpContent.map(({ cover, title, description }:any) => {
                                return (
                                    <Card
                                        // hoverable
                                        bordered={false}
                                        style={{ margin: '15px 35px' }}
                                        cover={<img alt="example" src={cover} style={{width:'160px'}}/>}
                                    />
                                )
                            })}
                        </div>    
                    </div>




            </Modal>   
        </>
    )
}

export default BestCardModal;