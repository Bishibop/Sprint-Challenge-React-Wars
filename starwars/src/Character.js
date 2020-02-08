import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  background-color: white;
  padding: 15px 50px;
  border-radius: 10px;
  margin: 20px;
  flex-basis: 20%;
`;

const Character = ({ characterData }) => {

  return (
    <StyledCharacter>
      <h2>{characterData.name}</h2>
      <p><strong>Height:</strong> {characterData.height}cm</p>
      <p><strong>Mass:</strong> {characterData.mass}kg</p>
      <p><strong>Hair color:</strong> {characterData.hair_color}</p>
      <p><strong>Skin color:</strong> {characterData.skin_color}</p>
      <p><strong>Eye color:</strong> {characterData.eye_color}</p>
      <p><strong>Eye color:</strong> {characterData.eye_color}</p>
      <p><strong>Birth year:</strong> {characterData.birth_year}</p>
      <p><strong>Gender:</strong> {characterData.gender}</p>
      <p><strong>Number of film appearances:</strong> {characterData.films.length}</p>
    </StyledCharacter>
  );
};

export default Character;
