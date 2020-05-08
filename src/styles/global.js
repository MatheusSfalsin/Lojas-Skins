import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;

}

html {
  /* background: linear-gradient(156deg, #191917 45%, #545454 100%); */
  /* background-color: #FBDA61; */
  /* background:  linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%); */
  font: 14px 'Roboto', sans-serif;
}

body{
  -webkit-font-smoothing: antialiased;
  /* background: linear-gradient(225deg,#cb55e8 0%,#784BA0 50%,#2B86C5 100%); */
  background: linear-gradient(225deg,#cb55e8 0%,#5d3f77 24%,#2B86C5 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

body, input, button{
  font: 14px 'Roboto', sans-serif;
}

#app{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button{
  cursor: pointer;
}

`;
