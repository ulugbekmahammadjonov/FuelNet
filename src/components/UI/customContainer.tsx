
import { ContainerProps } from '../../types/types';
;
import React from 'react';
import { Container as MuiContainer, } from '@mui/material';

// interface Props extends ContainerProps {
//    children: React.ReactNode;
// }

const    Container: React.FC<ContainerProps> = ({ children, ...props }) => {
   return (
      <MuiContainer
         maxWidth={false}
         sx={{
            paddingX: '10px',
            // margin: '0 auto',
          
          
            width: '100%',
            maxWidth:{
              
               xl: '1500px',
            }
            
         }}
         {...props}
      >
         {children}
      </MuiContainer>
   );
};

export default Container;
