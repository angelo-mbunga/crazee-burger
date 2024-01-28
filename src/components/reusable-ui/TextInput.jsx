import styled from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({value, onChange, Icon, ...extraProps}) {
    return (
        <InputStyled>
            {Icon && Icon}
            <input value={value} onChange={onChange} type="text" {...extraProps}/>
        </InputStyled>
  )
}
const InputStyled = styled.div `
    display: flex;
    position: relative;
    margin: 12px auto;
    width: 66%;

    input {
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: 16px;
        padding-left: 72px;
        font-size: 16px;
        text-overflow: ellipsis;
        background-color: ${theme.colors.white};
    }
    input:focus {
        outline: none;
    }
    .inputIcon {
        position: absolute;
        top: 12px;
        width: 24px;
        height: 24px;
        left: 24px;
        color: ${theme.colors.greyLight};
    }
  `