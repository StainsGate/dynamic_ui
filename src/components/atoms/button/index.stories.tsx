import React from 'react';
import {ComponentMeta,ComponentStory} from '@storybook/react';
import {Button} from '.';
import { userEvent,within} from '@storybook/testing-library';
import { expect } from '@storybook/jest';


export default {

	title:'dynamic_ui',
	component:Button,
} as ComponentMeta<typeof Button>;


const Template:ComponentStory<typeof Button> = (args) => <Button {...args}/>;


export const Primay = Template.bind({});

Primay.args = {
	name:'dynamic'
};

export const clickPrimay = Template.bind({});

clickPrimay.play = async ({canvasElement}) => {

	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByRole('button'));
	await expect(canvas.getByRole('button',{name:'click count:1'})).toBeInTheDocument();
};




