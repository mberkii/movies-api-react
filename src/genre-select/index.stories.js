import GenreSelect from ".";

export default {
  component: GenreSelect,
};

const baseArgs = {
    genres: [
        {id: '000', name: 'All'},
        {id: '001', name: 'Crime'},
        {id: '002', name: 'Comedy'},
        {id: '003', name: 'Romance'}
    ],
    onClick: (e) => e.preventDefault()
}

export const SelectedAll = {
    args: {
        ...baseArgs,
        selected: 'All',
    },
};

export const SelectedRomance = {
    args: {
        ...baseArgs,
        selected: 'Romance',
    },
};
