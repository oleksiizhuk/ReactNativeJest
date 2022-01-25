import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

type TabParamList = {
  Home: NavigatorScreenParams<StackParamList>;
};

type ProfileScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamList>
>;
