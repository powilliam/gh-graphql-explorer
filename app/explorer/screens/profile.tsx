import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { ExplorerModuleStackParams } from 'app/explorer/explorer-module';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';
import { SVGChevronBackOutline } from 'app/shared/components/icons/chevron-back-outline';

import { StatisticCard } from 'app/explorer/components/statistic-card';

import { dark } from 'app/shared/themes/dark';

export interface ProfileScreenParams {
  id: string | number;
}

export function ProfileScreen() {
  const { goBack } = useNavigation();
  const {} = useRoute<RouteProp<ExplorerModuleStackParams, 'Profile'>>();

  return (
    <Column flex={1} justifyContent="space-between">
      <StatusBar
        backgroundColor={dark.colors.background}
        barStyle="light-content"
      />

      <Column p="16px">
        <Row justifyContent="space-between">
          <Column>
            <Text
              variant={TextVariants.BOLD}
              fontSize="21px"
              letterSpacing="0.15px"
              color="onBackground">
              powilliam
            </Text>

            <Text
              mt="4px"
              fontSize="15px"
              letterSpacing="0.1px"
              color="onSurface">
              Mobile developer at @naveteam
            </Text>
          </Column>

          <Column width="32px" height="32px" bg="surface" borderRadius={24} />
        </Row>

        <Row mt="24px" justifyContent="space-between">
          <StatisticCard value={30} label="followers" />
          <StatisticCard value={60} label="following" />
          <StatisticCard value={42} label="repositories" />
        </Row>
      </Column>

      <Column p="16px">
        <TouchableOpacity onPress={goBack}>
          <Row alignItems="center">
            <SVGChevronBackOutline />

            <Text
              variant={TextVariants.MEDIUM}
              ml="12px"
              color="onBackground"
              fontSize="15px"
              letterSpacing="1.25px">
              RETURN
            </Text>
          </Row>
        </TouchableOpacity>
      </Column>
    </Column>
  );
}
