import './Style/Bootstrap.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Question from './component/Question.jsx'
import Navigation from './component/Navigation.jsx'
import Footer from './component/Footer.jsx'
import Welcome from './component/Welcome.jsx'
import Error from './component/Error.jsx'
import Login from './component/login/Login.jsx'




function App() {
  return (
    // <div>
    //   <Navigation/>
    //   <Question />
    //   <Footer/>
    // </div>
    <Router>
                <Navigation/>
                <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/questions" component={Question} />
                <Route path="/login" component={Login} />

                {/* <Route path="/temp" component={Temp} /> */}
                {/* <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                <AuthenticatedRoute path="/todos/:id" component={TodoView} />
                <AuthenticatedRoute path="/todos" component={TodoList} />*/}
                {/* <AuthenticatedRoute path="/login" component={Login} /> */}
                <Route component={Error} /> 
                </Switch>
                <Footer/>
            </Router>
  );
  
}

export default App;
