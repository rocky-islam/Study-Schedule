import React from 'react';
import './Question.css'

const Question = () => {
    return (
      <div>
        <div>
          <h3>Q.How does react work</h3>
          <p>
            Answer: ReactJS divides the UI into isolated reusable pieces of code
            known as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code
          </p>

          <h3>Q.props vs state in react</h3>
          <p>
            Answer: Props are used to pass data from one component to another.
            The state is a local data storage that is local to the component
            only and cannot be passed to other components. The this. setState
            property is used to update the state values in the component.
          </p>
        </div>
      </div>
    );
};

export default Question;