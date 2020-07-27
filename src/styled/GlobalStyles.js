import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: #ffffff;
    font-family: 'Poppins', sans-serif, system-ui;
  }
  button {
    font-family: 'Poppins', sans-serif, system-ui;
  }
  .search-field{
    margin-bottom: 20px;
  }
  .search-field .search-box {
    width:100%;
    border: none;
    font-size:32px;
    margin-top: 1px;
    transition: 0.3s;
    margin-right: 8px;
    background-color: #ffffff;
    border-bottom: 2px solid #7A8C99;
  }
  .search-field .search-box::placeholder{
    font-size: 1em;
    color: #7A8C99;
    font-family: 'Poppins', sans-serif, system-ui;
  }
  .date-field .css-1kls8xb-Flex-leftLabel-Flex {
    border: none;
    border-bottom: solid 2px #7A8C99;
  }
  .descriptions {
    width: 100%;
  }
  @media (max-width: 468px) {
    .result-cards {
      width: 100%;
      /* overflow: auto; */
    }
    .descriptions {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .search-field .search-box{
      font-size: 18px;
    }
  }
  @media (max-width: 991px) {
    .search-field .search-box{
      font-size: 24px;
    }
  }
  .selected-filters>a{
    background-color: #e1eaff;
  }
`;

export default GlobalStyles;
