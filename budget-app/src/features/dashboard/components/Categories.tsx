import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { bottomSpacings, colors, fonts, fontSizes, topSpacings } from '@styles/constants';
import { Button } from '@components';
import { CategoriesGrid } from '@features/categories/components';
import { Category } from '@features/categories/types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@navigation/MainNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '@navigation/TabsNavigator';
import { categoriesRoute, categoryRoute } from '@navigation/types';

interface Props {
  categories: Category[];
  categoriesCount: number;
  style?: StyleProp<ViewStyle>;
}

const Categories: FC<Props> = (props) => {
  const { categories, categoriesCount, style } = props;

  const { t } = useTranslation();
  const stackNavigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const tabsNavigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();

  return (
    <View style={style}>
      <Text style={[styles.title, bottomSpacings.xl]}>{t('titles.categories')}</Text>
      <CategoriesGrid
        iconSize="m"
        data={categories}
        onItemPress={(item) => stackNavigation.navigate(categoryRoute, { id: item.id })}
      />
      {categoriesCount > categories.length && (
        <Button
          style={topSpacings.m}
          onPress={() => tabsNavigation.navigate(categoriesRoute)}
          label={t('buttons.see_all')}
          variant="secondary"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.text.primary,
    fontSize: fontSizes.m,
    fontFamily: fonts.primary.bold,
    letterSpacing: -0.28,
  },
});

export default Categories;
