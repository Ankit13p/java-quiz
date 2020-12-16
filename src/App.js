import './Style/Bootstrap.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Question from './component/Question.jsx'
import Navigation from './component/Navigation.jsx'
import Footer from './component/Footer.jsx'
import Welcome from './component/Welcome.jsx'
import Error from './component/Error.jsx'
import AddQuestion from './component/AddQuestion';

function App() {
  return (
    <Router>
                <Navigation/>
                <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/questions" component={Question} />
                <Route path="/create" component={AddQuestion} />
                <Route component={Error} /> 
                </Switch>
                <Footer/>
            </Router>
  );
}
export default App;
