import styled from 'styled-components';
import 'react-tabs/style/react-tabs.css';

export default function Tab({icon, value, onClick, className}) {

return (
   <TabStyled href="#" className={className} onClick={onClick}>
    {icon && icon}
    <p className='tabText'>{value && value}</p>
  </TabStyled> 
)
}
const TabStyled = styled.a`
  text-decoration: none;
  border-radius: 5px 5px 0 0;
  color: #666666;

  .tabText{
    padding: 0 8px;
  }
`;


