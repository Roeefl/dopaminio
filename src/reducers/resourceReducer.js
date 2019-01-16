const resourceList = [
    {
        id: 0,
        name: 'health',
        label: 'Health',
        progress: 1,
        color: '#A31621',
        desc: 'Literally estimates how healthy you are currently'
    },
    {
        id: 1,
        name: 'mana',
        label: 'Mana',
        progress: 0.8,
        color: '#279AF1',
        desc: 'Willpower required to spend your free time doing non-obligated stuff ie learn a course, go to the gym or work on a personal project'
    },
    {
        id: 2,
        name: 'energy',
        label: 'Energy',
        progress: 0.6,
        color: '#ED6A5A',
        desc: 'Attempts to estimate daily amount of energy left at any given point'
    },
    {
        id: 3,
        name: 'stamina',
        label: 'Stamina',
        progress: 0.4,
        color: '#87FF65',
        desc: 'Unsure about this one'
    },
    {
        id: 4,
        name: 'dummy',
        label: 'Dummy',
        progress: 0.9,
        color: '#87FF65'
    },
    {
        id: 5,
        name: 'foo',
        label: 'Foo',
        progress: 0.1,
        color: '#87FF65'
    }
];

export const resourceReducer = () => {
    return resourceList;
};
