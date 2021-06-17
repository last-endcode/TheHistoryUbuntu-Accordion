import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import history from './components/history';
import ShowHistory from './components/HistoryUbuntu';

function App() {
  const [showHistory, setShowHistory] = useState(history);
  return (
    <main>
      <div className='container'>
        <h3>the history of ubuntu ~</h3>
        <div className='section-history'>
          {showHistory.map((history) => {
            return <ShowHistory key={history.id} {...history} />;
          })}
        </div>
        <p class='center-text'>-QnA about ubuntu -</p>
      </div>
    </main>
  );
}

export default App;
