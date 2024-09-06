
import { ContainerProps } from '../../types/types';
;
import React from 'react';
import { Container as MuiContainer, } from '@mui/material';

// interface Props extends ContainerProps {
//    children: React.ReactNode;
// }

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
   return (
      <MuiContainer
         maxWidth={false}
         sx={{
            paddingX: '20px',
           margin: '0 auto',
          
            width: '100%',
            maxWidth:{
               xs: '400',
               sm: '680px',
               md: '900px',
               lg: '1200px',
               xl: '1392px',
            }
            
         }}
         {...props}
      >
         {children}
      </MuiContainer>
   );
};

export default Container;
