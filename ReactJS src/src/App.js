import logo from './logo.svg';
import './App.css';
import FuncGreetComp from './Components/FuncGreetComp';
import ClassGreetComp from './Components/ClassGreetComp';
import FuncHello from './Components/FuncHello';
import Timer from './Components/Timer';
import Factorial from './Components/Factorial';
import DisplayNames from './Components/DisplayNames';
import DisplayEmp from './Components/DisplayEmp';
import State1Cls from './Components/State1Cls';
import State1Func from './Components/State1Func';
import TextColor from './Components/TextColor';
import IncDecCount from './Components/IncDecCount';
import ImageCheckBox from './Components/ImageChecbox';
import CompStyling1 from './CompStyling1';
import HeaderBts from './Components/HeaderBts';
import FirstForm from './Components/FirstForm';
import RegForm from './Components/RegForm';
import REST1 from './Components/REST1';
import GetEmp from './Components/GetEmp';
import { Link, Route, Routes } from 'react-router-dom';
import EmpRegForm from './Components/EmpRegForm';
import UpdateEmp from './Components/UpdateEmp';
import StudentForm_010 from './Components/StudentForm_010';

function App() {
   var arr=[{eid:101,name:"Abhay",sal:15000},{eid:102,name:"Abhishek",sal:25000},{eid:103,name:"Sachin",sal:35000}]
   return (
    <div className="App">

      <header className='My-header'>
      {/* <FuncHello/> */}
    

      
      </header>

      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Timer/>
        <FuncGreetComp/>
        <ClassGreetComp/>
        <Factorial n="6"/>
        <DisplayNames names={['hello','hi']}/>
        <DisplayEmp emp={arr}/> */}
        {/* <State1Cls/>
        <State1Func/>
        <TextColor/>
        <IncDecCount/> */}
        {/* <ImageCheckBox/>
        <CompStyling1/>
        <FirstForm/> */}
        {/* <FirstForm/> */}
        {/* <RegForm/> */}
        {/* <REST1/> */}
        {/* <GetEmp/>*/}
        {/* <Link to='/data' style={{textDecoration:'none'}}>GET INFO</Link>
        <Routes>
          <Route path='/data' element={<REST1/>}></Route>
        </Routes> 
        <Routes>
          <Route path ="/form" element={<RegForm/>}></Route>
          <Route path="/users" element={<REST1/>}></Route>
          <Route path="/emp" element={<GetEmp/>}></Route>
          <Route path="/regemp" element={<EmpRegForm/>}></Route>
          <Route path="/update" element={<UpdateEmp/>}></Route>

        </Routes>
        */}
<StudentForm_010/>
      </header>
    </div>
  );
}

export default App;
