
import './App.css';
import Question from './components/Question/Question';
import ReadingControl from './components/ReadingControl/ReadingControl';

function App() {

  return (
    <div>
      <h3 className='study'>Study Schedule</h3>
      <ReadingControl></ReadingControl>
      <Question></Question>
    </div>
  );
}

export default App;
