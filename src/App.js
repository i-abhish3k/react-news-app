import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
          <NavBar/>
          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} counrty="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} counrty="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} counrty="in" category="entertainment"/>}></Route>
          <Route exact path="/generalhealth" element={<News setProgress={setProgress} apiKey={apiKey}  key="generalhealth" pageSize={pageSize} counrty="in" category="generalhealth"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} counrty="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} counrty="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} counrty="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
  export default App;

