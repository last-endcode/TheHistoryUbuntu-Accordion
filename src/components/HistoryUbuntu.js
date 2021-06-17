import React, { useState } from 'react';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

function HistoryUbuntu({ title, text, link }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='history'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? <FaMinusSquare /> : <FaPlusSquare />}
        </button>
      </header>
      {/* if true showing */}
      {showAnswer && (
        <footer>
          <p>
            {readMore ? text : `${text.substring(0, 358)}`}
            <button
              className='btnreadmore'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? '..Show Less' : '..Read More'}
            </button>
          </p>
        </footer>
      )}
    </article>
  );
}

export default HistoryUbuntu;
