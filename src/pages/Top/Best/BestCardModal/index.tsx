import { Modal } from 'antd'
import React from 'react'

const BestCardModal = ({ modalVisible, modalClose, tmpContent }:any) => {

    // 여기에서 title 등 받아온 값으로 axios이용해서 데이터를 받아오면 됩니다.

    console.log(tmpContent)
    return(
        <>
            <Modal
                title="Basic Modal"
                visible={modalVisible}
                onCancel={modalClose}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>   
        </>
    )
}

export default BestCardModal;