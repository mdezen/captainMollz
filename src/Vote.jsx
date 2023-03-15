import './App.css';
import './Vote.css';
import React, { useState } from 'react';

function Vote() {
  // initialize 1 stateful variable, vote
  const [vote, setVote] = useState();
  // const [current state, set state]
  const [currentYesCount, setCurrentYesCount] = useState();
  const [currentNoCount, setCurrentNoCount] = useState();

  // this func is called when the input fields change (y/n radio buttons)
  // it takes in the change event and sets the vote variable to the value (y or n)
  const voteInputChange = (event) => {
    setVote(event.target.value);
  };

  async function postVote() {
    // fetch makes an http request to that url and returns the response
    // it sets data variable to that response which inlcudse the y/n vote counts
    const data = await fetch('https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vote }),
    });

    // .json converts it to JSON form (a dictionary)
    // yesCount and noCount just pull the yes /no count out of the jsonData dict
    const jsonData = await data.json();
    setCurrentYesCount(jsonData.body.yesCount);
    setCurrentNoCount(jsonData.body.noCount);
  }

  return (
    <>
      <fieldset>
        <div className="question-box">
          <h2>IS COORS WATER?</h2>

          <div>
            <label htmlFor="yes">
              <input
                type="radio"
                name="vote"
                id="voteYes"
                value="yes"
                onChange={voteInputChange}
              />
              YES
            </label>
          </div>

          <div>
            <label htmlFor="no">
              <input
                type="radio"
                name="vote"
                id="voteNo"
                value="no"
                onChange={voteInputChange}
              />
              NO
            </label>
          </div>

          <div className="vote-button">
            <button id="vote-button" type="button" onClick={() => postVote()}>
              VOTE
            </button>
          </div>
        </div>
      </fieldset>

      <fieldset>
        {(currentYesCount || currentNoCount)
          ? (
            <VoteResults
              yesCount={currentYesCount}
              noCount={currentNoCount}
              totalCount={currentYesCount + currentNoCount}
            />
          )
          : null}
      </fieldset>
    </>

  );
}
export default Vote;

function VoteResults({ yesCount, noCount, totalCount }) {
  return (
    <div className="results-box">
      <p>
        YES
        {' '}
        {Math.floor((yesCount / totalCount) * 100)}
        %
      </p>

      <p>
        NO
        {' '}
        {Math.floor(100 - (yesCount / totalCount) * 100)}
        %
      </p>

      <p>
        Total Votes
        {' '}
        {totalCount}
      </p>

    </div>
  );
}
