import SearchForm from ".";
import { userEvent, within } from '@storybook/test';

export default {
    component: SearchForm
};

export const SubmitForm = {
    args: {
        initialValue: 'Search......'
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        const button = canvas.getByRole('button');

        await userEvent.type(input, 'something new');
        await userEvent.click(button);
    }
};
