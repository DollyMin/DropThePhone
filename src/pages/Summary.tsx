import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Languages} from '../../types/i18n';

const Title = styled.Text`
  color: ${(props: StylesProps) => props.theme.color.fontColor1};
  font-size: 30px;
  font-weight: 900;
`;

function Summary() {
  const {t, i18n} = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView>
      <View>
        <Title>{t('SUMMARY')}</Title>
      </View>
    </SafeAreaView>
  );
}

export default Summary;
