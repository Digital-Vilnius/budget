import React, { FC } from 'react';
import { Switch as RNSwitch } from 'react-native-switch';

interface Props {
  selected: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const Switch: FC<Props> = (props) => {
  const { onChange, selected, disabled } = props;

  return (
    <RNSwitch
      value={selected}
      onValueChange={onChange}
      disabled={disabled}
      circleSize={28}
      barHeight={32}
      circleBorderWidth={0}
      changeValueImmediately={true}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={3}
      switchRightPx={3}
      switchWidthMultiplier={1.9}
    />
  );
};

export default Switch;
