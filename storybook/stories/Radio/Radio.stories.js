import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import Radio from '../../../src/components/Radio';
import CenterView from '../CenterView';

storiesOf('Radio', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Radio
      label={text('label', 'Select Me')}
      isSelected={boolean('isSelected', true)}
      onPress={action('onPress')}
    />
  ));
