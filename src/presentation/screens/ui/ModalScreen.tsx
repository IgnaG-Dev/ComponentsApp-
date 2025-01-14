import React, {useState} from 'react';
import {Modal, Platform, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal content" safe />
          </View>

          <View style={{flex: 1}} />

          <Button
            text="Cerrar modal"
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
