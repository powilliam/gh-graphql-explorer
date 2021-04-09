import React from 'react';

import { Column } from 'app/shared/components/column';
import { Text, TextVariants } from 'app/shared/components/text';

export interface StatisticCardProps {
  value: number;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <Column
      minWidth="120px"
      p="12px"
      py="16px"
      bg="surface"
      alignItems="center"
      justifyContent="center"
      borderRadius={6}>
      <Text
        variant={TextVariants.MEDIUM}
        fontSize="17px"
        letterSpacing="0.5px"
        color="onSurface">
        {value}
      </Text>

      <Text mt="8px" fontSize="11px" letterSpacing="1.5px" color="onSurface">
        {label.toUpperCase()}
      </Text>
    </Column>
  );
}
