
import { ImageBackground } from 'react-native';

import backdrounImg from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background( { children }: Props) {
  return (
    <ImageBackground 
    source={backdrounImg}
    defaultSource={backdrounImg}
    style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}