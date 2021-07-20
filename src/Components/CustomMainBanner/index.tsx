import { Card, Layout, Menu } from 'antd';

const CustomBanner = (props:any) =>{
    const {cover,content} = props
    return(
        <>    
          <div style={{ width: '100%', height: '280px', backgroundColor: '#E0E0E0', alignContent: 'center' }}>
                <Card style={{ width: '30%', height: '280px', backgroundColor: 'black', display: 'inline-block' }}/>                
                <Card style={{ width: '70%', height: '280px', display: 'inline-block' ,backgroundColor: 'yellow'}}/>
            </div>
        </>
    )

}


export default CustomBanner