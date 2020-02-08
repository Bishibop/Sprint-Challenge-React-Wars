import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './Character';
import PaginationButton from './PaginationButton';

const initialCharactersUrl = 'https://swapi.co/api/people/';

const StyledApp = styled.div`
  width: 80%;
  margin: 50px auto;
`;

const StyledCharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledButtonContainer = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  function getCharacters(characterUrl) {
    axios.get(characterUrl).then(res => {
      console.log(res.data);
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
      setCharacters(res.data.results);
      console.log("pagination urls: ", res.data.next, res.data.previous);
    });
  }

  useEffect(() => {
    getCharacters(initialCharactersUrl);
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className>
      <h1 className='Header'>React Wars</h1>
      <StyledButtonContainer>
        <PaginationButton text='Previous' url={previousPageUrl} callback={() => getCharacters(previousPageUrl)} />
        <PaginationButton text='Next' url={nextPageUrl} callback={() => {getCharacters(nextPageUrl)} }/>
      </StyledButtonContainer>
      <StyledCharacterContainer>
        {characters.map(character => 
        <Character key={character.url} characterData={character} />
        )}
      </StyledCharacterContainer>
    </StyledApp>
  );
};

export default App;
