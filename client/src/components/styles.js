import styled from 'styled-components';

// Main page styles

const AppDiv = styled.div`
  background: grey;
`;

const HEADER = styled.div`
  height: 100px;
  background: #0e0e0e;
  color: #ec2427;
  font-family: 'Tapestry', cursive;
  text-align: center;
  padding: 20px;
  text-shadow: 1px 1px #89181c;
  letter-spacing: 5px;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Logo = styled.img`
  height: 100%;
`;

const H1 = styled.h1`
  height: 100%;
  text-shadow: 1px 1px #fbacac;
  letter-spacing: 5px;

`;

const Content = styled.div`
  padding: 20px;
`

const NAV = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

const NavItem = styled.div`
  padding: 10px;
  width: 25%;
  text-align: center;

  &:hover{
    background: darkgrey;
  }
`;

// Characters page styles

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Input = styled.input`
  padding: 5px;
  margin: 5px;
`

// Monsters page styles



// Encounters page styles



// Maps page styles




export { HEADER, NAV, AppDiv, H1, Content, Logo, NavItem, Form, Input };
