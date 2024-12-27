import React, {useContext} from 'react';
import {Alert, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {userInterfaceStyle: isDark ? 'dark' : 'light'},
    );
  };
  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {userInterfaceStyle: isDark ? 'dark' : 'light'},
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Ingresa tu correo.',
      subTitle: 'Debes digitar tu correo electronico a continuación.',
      buttons: [{text: 'Ok', onPress: () => console.log('Ok')}],
      placeholder: 'Digite aquí...',
    });

    // Codigo nativo
    // Alert.prompt(
    //   'Correo electronico',
    //   'Debes rellenar tu correo en tu bandeja de entrada',
    //   (value: string) => console.log({value}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pat',
    // );
  };

  return (
    <CustomView margin style={globalStyles.globalMargin}>
      <Title text="Alertas" safe />

      <Button text="Alerta - 2 Botonoes" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />

      <Button text="Alerta - 3 Botonoes" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
      <View style={{height: 10}} />
    </CustomView>
  );
};
