import { nanoid } from 'nanoid';
export const menuLinks = [
    { id: nanoid(), url: '/', text: 'home' },
    {
        id: nanoid(),
        url: 'education',
        text: 'education',
        submenu: [
            {
                subId: nanoid(),
                subUrl: 'education/more',
                subText: 'Coming soon!'
            }
        ]
    },
    {
        id: nanoid(),
        url: 'breweries',
        text: 'breweries',
        submenu: [
            {
                subId: nanoid(),
                subUrl: 'breweries/popular',
                subText: 'Popular'
            },
            { subId: nanoid(), subUrl: 'breweries/new', subText: 'New' },
            { subId: nanoid(), subUrl: 'breweries/az', subText: 'A-Z' }
        ]
    },
    {
        id: nanoid(),
        url: 'beers',
        text: 'cart',
        submenu: [
            { subId: nanoid(), subUrl: 'beers/popular', subText: 'Popular' },
            { subId: nanoid(), subUrl: 'beers/popular', subText: 'New' },
            { subId: nanoid(), subUrl: 'beers/popular', subText: 'A-Z' }
        ]
    },
    { id: nanoid(), url: 'blog', text: 'blog' },
    { id: nanoid(), url: 'contact', text: 'contact' }
];
