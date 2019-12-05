import styled from 'styled-components';
import {
  GREEN,
  WHITE,
  LIGHT_GREY,
  SANS,
  VERY_SMALL_SCREEN,
} from '../../global/Theme';

const CommonStyle = `
  box-sizing: border-box;
  border-radius: 7px;
  border: 1px solid ${LIGHT_GREY};
  font-style: ${SANS};
  font-size: 16px;
  padding: 5px;
`;

const CommonInputStyle = `
   ${CommonStyle}
    &:focus {
    outline: none;
    border: 2px solid ${GREEN};
  }
`;

const CommonButtonStyle = `  
  ${CommonStyle}
  background: ${WHITE};
  margin: 10px !important;  
  cursor: pointer;
  width: 120px;
  height: 50px;
  &:hover {
      border: 2px solid ${GREEN};
      font-weight: bold;
      letter-spacing: 1px;
  }
`;

export const Label = styled.label`
  text-align: right;
  padding-right: 7px;
  display: inline-block;
  min-width: 80px;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  ${CommonInputStyle}
`;

export const Textarea = styled.textarea`
  vertical-align: top;
  width: 400px;
  height: 104px;
  ${CommonInputStyle}
`;

export const Button = styled.button`
  ${CommonButtonStyle}
`;

export const Reset = styled.input`
  ${CommonButtonStyle}
`;

export const InputWrapper = styled.div`
  margin: 10px 0 10px -80px;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
`;

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  @media ${VERY_SMALL_SCREEN} {
    ${Input}, ${Textarea} {
      width: 260px;
    }

    ${InputWrapper} {
      margin: 10px;
    }

    ${Label} {
      text-align: center;
      padding: 0 0 5px;
    }
  }
`;
