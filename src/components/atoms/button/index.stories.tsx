import React from "react";
import {ComponentMeta,ComponentStory} from '@storybook/react'
import {Button} from '.'



export default {

    title:'dynamic_ui',
    component:Button,
} as ComponentMeta<typeof Button>


const Template:ComponentStory<typeof Button> = (args) => <Button {...args}/>


export const Primay = Template.bind({})

Primay.args = {
    name:'dynamic'
}




