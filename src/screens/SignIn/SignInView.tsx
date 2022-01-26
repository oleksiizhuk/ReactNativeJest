import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/molecules/Button/Button';
import Input from '../../components/molecules/Input/Input';
import Layout from '../../layout/Layout';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/type';

const SignInView = () => {
  const navigation = useNavigation<RootStackParamList>();
  const {values, handleChange} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: null,
    onSubmit: () => {},
  });
  const styles = StyleSheet.create({
    container: {},
  });
  return (
    <Layout withScroll>
      <View style={styles.container}>
        <Input
          onChange={handleChange('email')}
          value={values.email}
          placeholder={'placeholder'}
        />
        <Input
          onChange={handleChange('password')}
          value={values.password}
          placeholder={'placeholder'}
        />
        <Button text={'Send'} onPress={() => navigation.navigate('Home')} />
      </View>
    </Layout>
  );
};

export default SignInView;
