import React from 'react';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="blurb">
          <p>Placeholder for blurb!</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  document.getElementById('root')
);

export default Home;
