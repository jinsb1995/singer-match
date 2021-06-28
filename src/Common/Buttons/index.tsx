import { Button } from 'antd';
import logo from './logo.svg';

// function TestButton({name}:any) {
function TestButton(props:any) {


  return (
    //   <Button>{name}</Button>
      <Button>{props.name}</Button>
  );
}

export default TestButton;