import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { ExplorerModuleStackParams } from 'app/explorer/explorer-module';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';
import { hitSlop } from 'app/shared/constants/hit-slop';
import { SVGClose } from 'app/shared/components/icons/close';

import { User } from 'app/shared/models/user';

export interface SearchedUserProps {
  data: User;
  onDelete?(): void;
}

export function SearchedUser({ data, onDelete }: SearchedUserProps) {
  const { navigate } = useNavigation<
    NavigationProp<ExplorerModuleStackParams, 'Profile'>
  >();

  return (
    <TouchableWithoutFeedback
      key={data.id}
      onPress={() =>
        navigate('Profile', {
          user: data,
        })
      }>
      <Row p="8px 16px" alignItems="center" justifyContent="space-between">
        <Row alignItems="center">
          <Column
            as={Image}
            width="48px"
            height="48px"
            bg="surface"
            borderRadius={48}
            source={{ uri: data.avatarUrl }}
          />

          <Column ml="12px">
            <Text
              variant={TextVariants.MEDIUM}
              fontSize="14px"
              letterSpacing="0.25px"
              color="onBackground">
              {data.name}
            </Text>

            {!!data.bio && (
              <Text
                mt="2px"
                width="220px"
                variant={TextVariants.MEDIUM}
                fontSize="12px"
                letterSpacing="1.25px"
                color="onSurface"
                numberOfLines={1}>
                {data.bio}
              </Text>
            )}
          </Column>
        </Row>

        <TouchableOpacity onPress={onDelete} hitSlop={hitSlop}>
          <SVGClose />
        </TouchableOpacity>
      </Row>
    </TouchableWithoutFeedback>
  );
}
