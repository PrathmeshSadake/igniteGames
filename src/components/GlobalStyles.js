import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0%;
    box-sizing: border-box;
}

html{
    ::-webkit-scrollbar {
        width: 5px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #888; 
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #666; 
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #333; 
      }
}
body{
    font-family: 'Nunito', sans-serif;
    width:100%;
    background-color: #151515;
}
h2{
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
}
h3{
    font-size: 1.25rem;
    font-weight: 600;
    color: #eee;

}
p{
    font-size:1.2rem;
    line-height:200%;
    color: #aaa;
}
a{
    text-decoration:none;
    color: #999;
}

`;

export default GlobalStyles;
