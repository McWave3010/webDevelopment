//import { keyframes } from '@emotion/react';

/** @type {import('tailwindcss').Config} */
export const content = [
   './src/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  extend: {
    colors: {
      customColor: "#1d1f34",
      navys:'#252a40'
    },
    height: {
      '7vh':"7vh",
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
      '60vh':'60vh',
      '90vh':'90vh',
      '80vh':'80vh',
      '87vh':'87vh'
    },
    fontFamily: {
      Poppins: ['Poppins','sans-serif'],
      Quicksand:["Quicksand", 'sans-serif'],
      Roboto:["Roboto", 'sans-serif'],
      Lexend:["Lexend", 'sans-serif']
    },
    screens: {
      'xs': "350px",
    },
    width: {
      '100px':'30rem'
    },
    animation: {
      'slide':'slide 20s linear infinite ',
      "form": "form 2s linear ease-in-out"
     
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
      form: {
        from: {
          width: '0px'
        },
        to: {
          width: "100px"
        }
      }
    },
    clipPath: {
      'custom-shape': 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
    },
  },
};
export const plugins = [
  require('tailwind-clip-path'),
  
];

