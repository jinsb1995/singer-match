import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';



// interface CustomModal {
//     modalComponent : Component
// }


// export const CustomModalConnector:React.FC<CustomModal> = ({ modalComponent }) => {
const CustomModalConnector = ({ modalComponent, refData }:any) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const modalClose = () => setModalVisible(false);



    // 모달을 가져왔으니까 여기서 열어줘야 하는데
    // 평소에는 <BestCardModal /> 이렇게 열던걸 
    // 여기에서는 어떻게 열어야하지?

    return (
        <>

        </>
    )
}


export default CustomModalConnector;