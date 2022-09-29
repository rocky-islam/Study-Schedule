
import './App.css';
import Question from './components/Question/Question';
import ReadingControl from './components/ReadingControl/ReadingControl';

function App() {

  return (
    <div>
      <div className='study'>
        <img className='study-icon'
          src="https://cdn1.iconfinder.com/data/icons/blue-sapphire-education/256/32-512.png"
          alt=""
        />
        <h3 className="study-text">Study Schedule</h3>
      </div>
      <ReadingControl></ReadingControl>
      <Question></Question>
    </div>
  );
}

export default App;
