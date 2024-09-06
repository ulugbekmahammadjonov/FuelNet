import { HelmetProps } from '../types/types';
import { Helmet as ReactHelmet } from 'react-helmet-async';


const Helmet: React.FC<HelmetProps> = ({ title }) => (
   <ReactHelmet>
      <title>{title}</title>

   </ReactHelmet>
);

export default Helmet;
