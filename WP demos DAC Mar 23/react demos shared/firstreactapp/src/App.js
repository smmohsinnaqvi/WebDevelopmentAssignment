import logo from './logo.svg';
import './App.css';
import HelloClsComp from './components/HelloClsComp';
import HelloFunComp from './components/HelloFunComp';
import ComplexComp from './components/ComplexComp';
import {One, Three, Two}  from './components/multiplecomp';
import PropsClsComp from './components/PropsClscomp';
import PropsFunComp from './components/PropsFunComp';
import StatefulClsComp from './components/StatefulClsComp';
import StatefulClsComp1 from './components/StatefulClsComp1';
import StatefulFunComp from './components/StatefulFunComp';
import StatefulFunComp1 from './components/StatefulFunComp1';
import AcceptNameComp from './components/AcceptNameComp';
import EmpForm from './components/EmpForm';
import CompStyling from './components/CompStyling';
import DynamicStyling from './components/DynamicStyling';
import MountingPhase from './components/MountingPhase';
import UpdatingPhase from './components/UpdatingPhase';
import UsingEffect from './components/UsingEffect';
import { Link, Routes, Route } from 'react-router-dom';
import InvalidUrlComp from './components/InvalidUrlCom';
import HomeComp from './components/HomeComp';
import DummyRESTComp from './components/DummyRESTComp';
import GetExpRESTComp from './components/GetExpRESTComp';
import FormValidation from './components/FormValidation';
import LoginComp from './components/LoginComp';
import { ErrorBoundary } from 'react-error-boundary';
import CountIncDec from './components/CountIncDec';

function App() {

  var nm = "Vishakha";
  var age = 34;
  var names=["Amit","Vishal","Ram"]
  return (
    <div className="App">
       {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a> 
        <h1>Welcome to React</h1> 

        <HelloClsComp />
        <HelloFunComp /> 
        <ComplexComp /> 
        <One />
        <Two />
        <Three />  

        <PropsClsComp name={nm} age={age}/> 
        <PropsFunComp names={names} age="34" /> 
        <StatefulClsComp1 /> 

         <StatefulFunComp /> 
         <StatefulFunComp1 /> 
         <AcceptNameComp /> 
         <EmpForm /> 
         <CompStyling /> 
         <DynamicStyling /> 
         <MountingPhase /> 
         <UpdatingPhase /> 
         <UsingEffect /> 
       </header> */}


        {/* <ul class="nav navbar">
            <li class="nav-item">
                <Link to="/hello" class="nav-link">Hello</Link>
            </li>
            <li class="nav-item">
                <Link to="/styling" class="nav-link">Styling</Link>
            </li>
            <li class="nav-item">
                <Link to="/form" class="nav-link">Form</Link>
            </li>
            <li class="nav-item">
                <Link to="/usingeffect" class="nav-link">Effecthook</Link>
            </li>
            <li class="nav-item">
                <Link to="/dystyling" class="nav-link">DynamicStyling</Link>
            </li>
            <li class="nav-item">
                <Link to="/exprest" class="nav-link">ExpRESTAPI</Link>
            </li>
            <li class="nav-item">
                <Link to="/login" class="nav-link">Login</Link>
            </li>
        </ul> */}
    

        {/* <Link to="/hello" >HelloComp</Link>
         &nbsp;&nbsp;
         <Link to="/styling" >Styling</Link>
         &nbsp;&nbsp;
         <Link to="/form" >Form </Link>
        */}
         {/* <Routes>
            <Route path="/" element={ <HomeComp/>   } />
            <Route path="/hello" element={ <HelloFunComp/>} />
            <Route path="/styling" element={<CompStyling/>}  />
            <Route path="/form" element={ <FormValidation />}  />
            <Route path="/usingeffect" element={ <UsingEffect/>}  />
            <Route path="/dystyling" element={ 
                <ErrorBoundary fallbackRender={()=>{
                    return <h1>Oops, something went wrong</h1>
                }}>
                     <DynamicStyling/>
                </ErrorBoundary> }
            />       
            <Route path="/dummyapi" element={ <DummyRESTComp/> } />
            <Route path="/exprest" element={ <GetExpRESTComp/> } />
            <Route path="/login" element={ <LoginComp /> } />
            <Route path="*" element={ <InvalidUrlComp />} />
         </Routes>
       */}
       <CountIncDec/>
    </div>
  );
}

export default App;
