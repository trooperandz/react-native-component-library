import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import Button from '../../../src/components/Button';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
    <Button
      type="primary"
      isLoading={boolean('isLoading', false)}
      onPress={action('onPress')}>
      {text('Button text', 'Primary Button')}
    </Button>
  ))
  .add('Secondary', () => (
    <Button
      isLoading={boolean('isLoading', false)}
      type="secondary"
      onPress={action('onPress')}>
      {text('Button text', 'Secondary Button')}
    </Button>
  ));
