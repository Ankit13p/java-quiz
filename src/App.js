import './App.css';
import './Style/Bootstrap.css'
import Question from './component/Question'
import Navigation from './component/Navigation'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Question />
      <Footer/>
    </div>
  );
}

export default App;
