import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-screen-time' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ScreenTimeProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RNScreenTimeView';

export const ScreenTimeView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ScreenTimeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
