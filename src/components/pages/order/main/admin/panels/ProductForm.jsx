import React from 'react'
import { getTextInputs } from './getTextInputs';
import { TextInput } from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import ProductPreview from './ProductPreview';

const ProductForm = React.forwardRef(({onSubmit, onChange, product, formFooterContent, formFooterClass}, ref) => {

    const textInputs = getTextInputs(product)
    const defaultImage = "/src/assets/img/coming-soon.png";

    return (
        <ProductFormStyled>
            <ProductPreview product={product} />
            <form onSubmit={onSubmit} onChange={onChange}>
                {textInputs.map((input) => (
                    <TextInput 
                        key={input.id}
                        name={input.name}
                        value={input.value === defaultImage ? input.value = '' : input.value }
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

const ProductFormStyled = styled.div`
    display: grid;
    grid-template-columns: 30% 69%;
    grid-gap: 8px;
    padding: 24px;

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
