import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  PromptType?: 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subTitle,
  buttons,
  PromptType = 'plain-text',
  placeholder,
  defaultValue,
}: Options) => {
  prompt(
    title,
    subTitle,
    buttons,
    {
      type: PromptType,
      cancelable: false,
      defaultValue: defaultValue,
      placeholder: placeholder,
    },
  );
};
