// import FirstComponent from './components/learning/FirstComponent'
// /* import FifthComponent from './components/learning/FirstComponent' */
// import {FifthComponent} from './components/learning/FirstComponent'
// import SecondComponent from './components/learning/SecondComponent'
// import ThirdComponent from './components/learning/ThirdComponent'
// import FourthComponent from './components/learning/FourthComponent'

import FirstComponent from './FirstComponent'
/* import FifthComponent from './components/learning/FirstComponent' */
import {FifthComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'

function LearningComponent() {
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

  export default LearningComponent;
  