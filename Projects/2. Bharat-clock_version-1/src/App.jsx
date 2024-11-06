// App CSS file
import './App.css'
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

// BootStrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return <center>

    {/* Clock Heading */}
    <ClockHeading />

    {/* Clock Slogan */}
    <ClockSlogan />

    {/* Current Time */}
    <CurrentTime />

  </center>
}

export default App;