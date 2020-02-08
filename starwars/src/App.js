import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './Character';

const starwarsApiUrl = 'https://swapi.co/api/people/';

const StyledApp = styled.div`
  width: 80%;
  margin: 50px auto;
`;

const StyledCharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(starwarsApiUrl).then(res => {
      setCharacters(res.data.results);
    });
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className>
      <h1 className='Header'>React Wars</h1>
      <StyledCharacterContainer>
        {characters.map(character => 
        <Character key={character.url} characterData={character} />
        )}
      </StyledCharacterContainer>
    </StyledApp>
  );
};

export default App;
