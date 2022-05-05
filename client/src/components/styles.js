import styled from 'styled-components';

// Main page styles

const AppDiv = styled.div`
  background: #faf9f5;
  font-family: 'Barlow', sans-serif;
  font-weight: 200;
  height: 100%;
  color: #0e0e0e;
`;

const HEADER = styled.div`
  height: 62px;
  background: #0e0e0e;
  color: #ec2427;
  font-family: 'Tapestry', cursive;
  text-align: center;
  padding: 20px;
  text-shadow: 1px 1px #89181c;
  letter-spacing: 5px;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Logo = styled.img`
  height: 100%;
`;

const H1 = styled.h1`
  font-weight: 500;
  color: #0e0e0e;
  margin: auto;
  text-align: center;
`;

const Content = styled.div`
  padding: 20px;
`;

const NAV = styled.div`
  background: #26282a;
  color: #9fa9b3;
  font-weight: 400;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  border-top: 1px solid #bc1a0e;
`;

const NavItem = styled.div`
  padding: 10px;
  width: 25%;
  text-align: center;

  &:hover {
    color: #fefefe;
  }
`;

// Characters page styles

const CharacterDiv = styled.div`
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Input = styled.input`
  padding: 5px;
  margin: 5px;
`;

// Monsters page styles

const MonsterCard = styled.div`
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const MonsterStats = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
`;

const MonsterLI = styled.div`
  border-bottom: 1px solid black;
  width: 80%;
  margin: auto;
`;

const MonstesForm = styled.form`
  width: 80%;
  margin: auto;
`;

const MonsterSearch = styled.input`
  padding: 10px;
  background: lightgrey;
  margin: auto;
`;

// Encounters page styles

// Maps page styles

export {
  HEADER,
  NAV,
  AppDiv,
  H1,
  Content,
  Logo,
  NavItem,
  CharacterDiv,
  Form,
  Input,
  MonsterStats,
  MonsterLI,
  MonsterCard,
  MonsterSearch,
  MonstesForm,
};
