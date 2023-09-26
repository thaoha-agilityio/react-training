import { Global } from '@emotion/react';

import poppinsBold from '@assets/Poppins/Poppins-Bold.ttf';
import poppinsLight from '@assets/Poppins/Poppins-Light.ttf';
import poppinsMedium from '@assets/Poppins/Poppins-Medium.ttf';
import poppinsRegular from '@assets/Poppins/Poppins-Regular.ttf';
import poppinsSemiBold from '@assets/Poppins/Poppins-SemiBold.ttf';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'boldFont';
        font-display: swap;
        font-weight: 700;
        font-style: normal;
        src: url('${poppinsBold}') format('woff2');
      }
      
      @font-face {
        font-family: 'Poppins';
        font-weight: 300;
        font-display: swap;
        font-style: normal;
        src: url('${poppinsLight}') format('woff2');
      }

      @font-face {
        font-family: 'Poppins';
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        src: url('${poppinsMedium}') format('woff2');
      }

      @font-face {
        font-family: 'Poppins';
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        src: url('${poppinsRegular}') format('woff2');
      }

      @font-face {
        font-family: 'Poppins';
        font-display: swap;
        font-style: normal;
        font-weight: 600;
        src: url('${poppinsSemiBold}') format('woff2');
      }
    `}
  />
);

export default Fonts;
