import styled, { keyframes } from 'styled-components';


const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
`;

const Input = styled.div`
display: flex;
justify-content: flex-end;
`;

const ListBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

const FoundUser = styled.div`
  display: flex;
  font-family: monospace;
  align-items: center;
  width: fit-content;
  margin: 5px;
  padding: .2rem;
  border-radius: 5px;
  gap: 1rem;
  border-style: solid;
  border-width: thin;
`;

const Header = styled.div`
  font-family:monospace;
  font-size: 5rem;
  display: flex;
  justify-content: center;
`;
const InboxBody = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 100%;
 justify-content: space-between;
`;

const UserMsg = styled.div`
  display: flex;
  gap: 50px;
  box-shadow: 0 0 2px;
  align-items: center;
  padding: 2px;
  border-radius: 5px;
  margin: 5px;
  padding-top: 5px;

`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  background-color: none;
`;

const Message = styled.div`
  position: relative;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  width: 75%;
`;

const CardSect = styled.div`
  display: inline-block;
`;

const PokeCard = styled.img`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const PokeEntry = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  box-sizing: content-box;
  width: 200px;
  height: 50%;
  padding: 15px;
  margin: 25px;
  display: inline-block;
`;

// const Contents = styled.div`
//   display: grid;
//   grid-template-rows: 100%, 100%, 100%, 100%, 100%;
//   grid-row-gap: 10px;
//   justify-items: center;
// `;

const Contents = styled.div`
  display: grid;
  grid-template-rows: 100%, 100%, 100%, 100%, 100%;
  grid-row-gap: 10px;
  justify-items: flex-start;
`;

const CreateCharContainer = styled.div`
  display: flex;
  position: relative;
  top: 20rem;
  right: 42rem;
`;

const FavoritePokemon = styled.div`
  display: flex;
  position: relative;
  top: 10rem;
  left: 10rem;
`;

const TrainerCreatorContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 32rem;
  right: 38rem;
`;

const TrainerCarItem = styled.img`
  display: flex;
  position: relative;
  display: flex;
  position: relative;
  margin: 1rem;
`;


const TrainerHair = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;

const TrainerFace = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;

const TrainerBody = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;


const PokeTypesBody = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;


const OuterTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  width: 16.6666666667%;
  height: 33.33333%;
`;




const blinkHover = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
`;

const TypeImg = styled.img`
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 50%;
  
    &:hover{
    animation: ${blinkHover} 1.5s ease-in-out infinite;
    }
  width: 5rem;
  height: 5rem;
  margin: 5rem;
  padding: 2rem;
  letter-spacing: .2rem;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  font-family: 'Pokemon Solid', sans-serif;
  background: linear-gradient(to bottom, #ff0000, #ffff00);
  &:hover{
  animation: ${blinkHover} 1.5s ease-in-out infinite;
  }
`;
const UserHistBox = styled.div`
  background-color: rgba(247, 248, 248, 0.2);
  padding: 10px;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  /* min-width: 200px;
  min-height: 100px;
  max-width: 400px;
  max-height: 800px; */
`;

const UserHistBox1 = styled.div`
  border-radius: 10px;
  width: 50%;
  height: 200px;
  background-color: rgba(247, 248, 248, 0.5);
  margin-top: 150px;
  text-align: center;
`;

const UserHistBox2 = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100px;
  background-color: rgba(247, 248, 248, 0.5);
  margin-bottom: 100px;
  text-align: center;

`;

const ColorBar = styled.div`
border-top-left-radius: 10px;
border-top-right-radius: 10px;
  width: 100%;
  height: 50px;
  background-color: #160355;
`;

const Text = styled.div`
  color: gold;
  font-size: 30px;
`;

const Text2 = styled.div`
color: purple;
font-size: 50px;
margin-top: 30px;
`;

const Text3 = styled.div`
  color: purple;
  font-size: 50px;
`;

const TextTypeDiv = styled.h1`
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 1rem;
    letter-spacing: .2rem;
    text-align: center;
`;

export { Body, FoundUser, Header, InboxBody,
  UserMsg, UserInfo, Message, ListBody, Input,
  PokeEntry, Contents, CreateCharContainer,
  FavoritePokemon, TrainerCreatorContainer,
  TrainerCarItem, TrainerHair, TrainerFace,
  TrainerBody, TypeImg, UserHistBox, UserHistBox1, 
  UserHistBox2, ColorBar, Text, Text2, Text3, 
  TextTypeDiv, OuterTypeContainer, PokeTypesBody
};

