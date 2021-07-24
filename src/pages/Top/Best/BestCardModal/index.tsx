import { Card, Modal } from 'antd'
import React from 'react'
import AlbemListGrid from './AlbemListGrid'

const BestCardModal = ({ modalVisible, modalClose, id }:any) => {

    // 여기에서 title 등 받아온 값으로 axios이용해서 데이터를 받아오면 됩니다.
    console.log(id)


    
    return(
        <>
            <Modal
                title="곡 상세 페이지 입니다.(수정해야함)"
                visible={modalVisible}
                onCancel={modalClose}
                width="60%"
                
            >
                
                    <div style={{ border: '1px solid black', width: '80%', minHeight: '150px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', display: 'flex'  }}>
                            <Card 
                                cover={<img alt="example" src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' style={{width:'150px', height: '100%'}}/>}
                            />
                            {/* <div style={{ alignSelf: 'center' }}> */}
                            <div>
                                <span style={{ fontSize: '25px', fontWeight: 'bold'}}>라일락</span><br />
                                아이유<br />
                                댄스 / 힙합<br />
                                설명이 들어가야함<br />
                            </div>
                    </div>
                    <div style={{ border: '1px solid black', width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>
                        <AlbemListGrid />
                    </div>
                    <div style={{ border: '1px solid black', width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>
                        아티스트가 알아서 이미지를 올리는 영역
                    </div>




            </Modal>   
        </>
    )
}

export default BestCardModal;