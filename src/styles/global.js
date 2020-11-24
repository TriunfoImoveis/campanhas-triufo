import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, html, #root {
    height: 100%;
    background: #e5e5e5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
