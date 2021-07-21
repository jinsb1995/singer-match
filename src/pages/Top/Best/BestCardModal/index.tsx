import { Modal } from 'antd'
import React from 'react'

const BestCardModal = ({ modalVisible, modalClose, id }:any) => {

    // 여기에서 title 등 받아온 값으로 axios이용해서 데이터를 받아오면 됩니다.
    console.log(id)


    
    return(
        <>
            <Modal
                title="곡 상세 페이지 입니다.(수정해야함)"
                visible={modalVisible}
                onCancel={modalClose}
                
            >
                
                <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <div style={{ border: '1px solid black', width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
                        card에 요약
                    </div>
                    <div style={{ border: '1px solid black', width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
                        그리드에서 앨범 목록
                    </div>
                    <div style={{ border: '1px solid black', width: '80%', minHeight: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
                        아티스트가 알아서 이미지를 올리는 영역
                    </div>

                </div>



            </Modal>   
        </>
    )
}

export default BestCardModal;