import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

// App에서 라우터를 쓰기위해 여기 Root에서 app을 호출해 browserRouter로 감싸준다

// 리덕스도 여기에서 설정해주면 됨

const Root = () => {

    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default Root