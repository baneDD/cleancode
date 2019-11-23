/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const lineColor = '#030617'
const step = 3
const total = 1000
const borderWeight = '1px'

const createEffect = (num, template) => {
  let value = `0px 0px ${lineColor}`
  for (let i = 0; i < num; i++) {
    value = template(value, i)
  }
  return value
}

const borderShadow = createEffect(
  total,
  (value, i) => `${value}, 0px ${step * i}px ${lineColor}`
)

const stripeShadow = createEffect(
  total,
  (value, i) => `${value}, ${step * i}px 0px ${lineColor}`
)

export default createGlobalStyle`
  ${reset};

  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');

  html {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #5091DD 0%, #030617 100%);
  }

  body {
    font-family: 'Anonymous Pro','Menlo','Monaco','Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace;
    font-weight: 500;
    }

  #___gatsby {
      width: 100%;
      height: ${borderWeight};
      box-shadow: ${borderShadow};

      &:before {
        content: "";
        position: absolute;
        top: 0px;
        width: ${borderWeight};
        height: 100%;
        box-shadow: ${stripeShadow};
        z-index: -1;
      }
  }    
`
