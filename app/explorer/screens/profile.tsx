import React from 'react';
import { StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { ExplorerModuleStackParams } from 'app/explorer/explorer-module';

import { User } from 'app/shared/models/user';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';
import { SVGChevronBackOutline } from 'app/shared/components/icons/chevron-back-outline';

import { StatisticCard } from 'app/explorer/components/statistic-card';

import { useStatusBar } from 'app/shared/hooks/use-status-bar';

export interface ProfileScreenParams {
  user: User;
}

export function ProfileScreen() {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const { params } = useRoute<
    RouteProp<ExplorerModuleStackParams, 'Profile'>
  >();
  const statusBar = useStatusBar();

  return (
    <Column flex={1} justifyContent="space-between">
      <StatusBar {...statusBar} />

      <Column p="16px">
        <Row justifyContent="space-between">
          <Column>
            <Text
              variant={TextVariants.BOLD}
              fontSize="21px"
              letterSpacing="0.15px"
              color="onBackground">
              {params.user.name}
            </Text>

            <Text
              mt="6px"
              maxWidth="300px"
              fontSize="15px"
              letterSpacing="0.1px"
              color="onSurface">
              {params.user.bio}
            </Text>
          </Column>

          <Column
            as={Image}
            width="32px"
            height="32px"
            bg="surface"
            borderRadius={24}
            source={{ uri: params.user.avatarUrl }}
            progressiveRenderingEnabled
          />
        </Row>

        <Row mt="24px" justifyContent="space-between">
          <StatisticCard
            value={params.user.followers.totalCount}
            label="followers"
          />
          <StatisticCard
            value={params.user.following.totalCount}
            label="following"
          />
          <StatisticCard
            value={params.user.followers.totalCount}
            label="repositories"
          />
        </Row>
      </Column>

      <Column p="16px">
        <TouchableOpacity onPress={goBack}>
          <Row alignItems="center">
            <SVGChevronBackOutline color={colors.onBackground} />

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
