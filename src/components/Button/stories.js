import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Button from './Button';
import {colors} from '../../constants'

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('Button')
	.add('with text', () => (
		<Button onClick={action('clicked')}>Click Button</Button>
	))
	.add('with primary color', () => (
		<Button onClick={action('clicked')} color={colors.orange.primary}>Click Button</Button>
	))
