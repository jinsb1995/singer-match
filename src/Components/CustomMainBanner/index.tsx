import { Card, Layout, Menu } from 'antd';

const CustomBanner = (props:any) =>{
    const {cover,content} = props
    console.log(props)
    return(
        <>    
            <Card style={{width:'100%' , height:'250px', backgroundColor:'#f542cb',display:'flex',justifyContent:'center'}}>
                    <Card style={{ width:'400px' ,height:'200px',flex:'1',display:'inline-block'}}></Card>
                    <Card style={{ width:'400px' ,height:'200px',flex:'1',display:'inline-block'}}></Card>
            </Card>
        </>
    )



}


export default CustomBanner