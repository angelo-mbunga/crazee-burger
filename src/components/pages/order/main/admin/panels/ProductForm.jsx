import React from 'react'
import { getTextInputs } from './getTextInputs';
import { TextInput } from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';

const ProductForm = React.forwardRef(({onSubmit, onChange, product, formFooterContent, formFooterClass}, ref) => {

    const textInputs = getTextInputs(product)

    return (
        <ProductFormStyled>
            <div className='preview'>
                { product.imageSource 
                    ? <img src={product.imageSource} alt={product.title} />
                    : <span className='emptyImageMsg'>Pas d'image</span>
                }
            </div> 
            <form onSubmit={onSubmit} onChange={onChange}>
                {textInputs.map((input) => (
                    <TextInput 
                        key={input.id}
                        name={input.name}
                        value={input.value}
                        onChange={onChange}
                        placeholder={input.placeholder}
                        Icon={input.Icon}
                        ref={ref && input.name === 'title' ? ref : null}
                    />
                ))}
                    <PrimaryButton
                        label={formFooterContent} 
                        className={formFooterClass}
                    />
            </form>
        </ProductFormStyled>
  )
})
export default ProductForm;

const ProductFormStyled = styled.form`
    display: grid;
    grid-template-columns: 30% 69%;
    grid-gap: 8px;
    padding: 24px;

    .preview {
        display: flex;
        justify-content: start;
        align-items: start;

        .emptyImageMsg {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.size.P0};
        }
        img {
            border-radius: ${theme.borderRadius.round};
            width: 66%;
            height: 80%;
            margin: auto;
            object-fit: contain;
            object-position: center;
        }
    }
    form {
        div {
            display: block;
            float: left;
            margin-left: 8px;
            height: 24px;
        }
    }
    input {
        padding: 10px 12px;
        padding-left: 64px;
        background-color: ${theme.colors.background_white};
        height: 16px;
    }
    .inputIcon {
        height: 16px;
        width: 16px;
        margin-top: -3px;
    }
    .input {
        width: 100%;
    }
    .formFooterBtn {
        width: 50%; 
        padding: 10px;
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
        border: none;
        cursor: pointer;
    }
    .formFooterBtn:hover {
        background-color: ${theme.colors.green};
    } 
`
