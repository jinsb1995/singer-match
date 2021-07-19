import { Card, Layout, Menu } from 'antd';

const CustomBanner = (props:any) =>{
    const {cover,content} = props
    return(
        <>    
            <div style={{backgroundColor:'black' , width:'98%',height:'300px' ,display:'flex',justifyContent:'space-around'}}>
                <div style={{width:'200px' ,backgroundColor:'white',height:'300px'}}>
                </div>
                <div style={{width:'200px' ,backgroundColor:'white',height:'300px'}}>
                </div>
            </div>
        </>
    )

}


export default CustomBanner