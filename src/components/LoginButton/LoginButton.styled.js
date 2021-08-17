import styled from 'styled-components';

const LoginIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${(props) => props.theme.button};
  color: black;
  margin: 0 0 0 15px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 10vh;
  width: 150px;
  transform: translateX(-60%);
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme.button};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  .dropdown-button {
    background-color: transparent;
    border: none;
    margin: 0;
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;

export { LoginIconWrapper, Dropdown };
