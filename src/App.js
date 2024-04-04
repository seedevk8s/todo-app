import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning/FirstComponent'
/* import FifthComponent from './components/learning/FirstComponent' */
import {FifthComponent} from './components/learning/FirstComponent'
import SecondComponent from './components/learning/SecondComponent'
import ThirdComponent from './components/learning/ThirdComponent'
import FourthComponent from './components/learning/FourthComponent'


function App() {
  return (
    <div className="App">
      {/* 나의 할일 애플리케이션 */}
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent />
    </div>
  );
}
/* 
function FirstComponent() {
  return (
    <div className='FirstComponent'>첫번째 (함수형) 컴포넌트</div>
  )
}
 */

/* 
function SecondComponent() {
  return (
    <div className='SecondComponent'>두번째 (함수형) 컴포넌트</div>
  )
}
 */

/* 
class ThirdComponent extends Component {
  render() {
    return (
      <div className='ThirdComponent'>세번째 (함수형) 컴포넌트</div>
    )
  }
}
 */

/* 
class FourthComponent extends Component {
  render() {
    return (
      <div>
        <div className='FourthComponent'>네번째 (함수형) 컴포넌트1</div>
        <div className='FourthComponent'>네번째 (함수형) 컴포넌트2</div>
      </div>

    )
  }
}
 */

export default App;

