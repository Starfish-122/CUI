import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { reset } from 'styled-reset';

export const fontFamily = {
    default:
        '"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    heading: '"Noto Sans KR", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  /* Reset */
  ${reset}
  ${normalize}
  
  body {
        font-family: ${fontFamily.default};
        font-size:16px;
    }
`;

export default GlobalStyle;
