//import { keyframes } from '@emotion/react';

/** @type {import('tailwindcss').Config} */
export const content = [
   './src/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    height: {
      '5vh':'5vh',
      '15vh':'15vh',
      '30vh':'30vh',
      '40vh':'40vh',
      '20vh':'20vh',
      '100%': '100%',
      '10vh':'10vh',
      '50vh':'50vh',
      '40%': '40%',
      '50%':'50%',
      '30%':'30%',
      '8vh':'8vh',
      '48vh':'48vh',
      '70vh':'70vh',
      '100vh':'100vh',
    },
    fontFamily: {
      Poppins: ['Poppins','sans-serif'],
      Quicksand:["Quicksand", 'sans-serif'],
    },
    screens: {
      'xs': "350px",
    },
    width: {
      '100px':'30rem'
    },
    animation: {
      'slide':'slide 20s linear infinite ',
     
    },
    keyframes:{
      slide:{
        from: {
          transform: 'translateX(0)'
        },
        to:{
          transform: 'translateX(-20%)'
        }
      },
    }
  },
};
export const plugins = [];
