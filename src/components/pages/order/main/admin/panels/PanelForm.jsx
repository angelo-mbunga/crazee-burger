import React from 'react'
import TextInput from '../../../../../reusable-ui/TextInput';
import PrimaryButton from '../../../../../reusable-ui/PrimaryButton';
import {thumbnail} from '../../../../../../assets/img/no-image.png';
import { FiCheck } from "react-icons/fi";
import { Zoom, toast } from 'react-toastify';

export default function PanelForm(ctaName) {

    const textInputs = getTextInputs(productInfosToDisplay);

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.info("Ajouté avec succes !", {
            icon: <FiCheck size={30} />,
            theme: 'dark',
            transition: Zoom,
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
        })
    }

    return (
        <PanelFormStyled>
            <div className='preview'>
                { newProduct.imageSource 
                    ? <img src={newProduct.imageSource} alt={newProduct.title} />
                    : <img src={thumbnail} alt='aucun image' />
                }
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    {textInputs.map((input) => (
                        <TextInput 
                            key={input.id}
                            name={input.name}
                            value={input.value}
                            onChange={handleChange}
                            placeholder={input.placeholder}
                            Icon={input.Icon}
                        />
                    ))}
                        <PrimaryButton
                            label={ctaName} 
                            className={"addProductBtn"}
                        />
                </form>
            </div>
        </PanelFormStyled>
  )
}
const PanelFormStyled = styled.form`
  
`;
