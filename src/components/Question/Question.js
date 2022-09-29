import React from 'react';
import './Question.css'

const Question = () => {
    return (
      <div>
        <div className="question">
          <br />
          <h3>Q.How does react work</h3>
          <p>
            Answer: ReactJS divides the UI into isolated reusable pieces of code
            known as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code
          </p>
          <br />
          <br />
          <h3>Q.props vs state in react</h3>
          <p>
            Answer: Props are used to pass data from one component to another.
            The state is a local data storage that is local to the component
            only and cannot be passed to other components. The this. setState
            property is used to update the state values in the component.
          </p>
          <br />
          <br />
          <h3>Q.when should you use useeffect</h3>
          <ol>
            <li>useEffect() is for side-effects</li>
            <li>Dependencies argument</li>
            <li>Component lifecycle</li>
            <li>Component did mount / Component did update</li>
            <li>Side-effect cleanup</li>
            <li>Fetching data</li>
          </ol>
        </div>
      </div>
    );
};

export default Question;