import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --primary: #F1F2F3;
    --secondary: #15181C;
    --tercery: #FF7A00;
    --terceryligth: #ff8e26;
    --gray: #E6E6E6;
    --orangelight: #ffae52;
    --white: #FFF;
    --darkgray: #33312f;
}

body{
    background: var(--primary);
    color: var(--secondary);
    font-family: "Dosis", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
}

ul, nav{list-style-type: none;}
a{text-decoration: none;}
`
