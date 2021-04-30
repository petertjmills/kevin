import {create} from 'tailwind-rn';
import styles from './styles.json';
import fontStyles from './font-styles.json';
import shadowStyles from './shadowStyle.json';
  
const {tailwind, getColor} = create({...styles, ...fontStyles, ...shadowStyles});
export {tailwind as tw, getColor};