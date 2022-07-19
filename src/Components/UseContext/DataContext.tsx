import { createContext } from 'react';

const items = [
  {
    icon: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    copy: 'https://m.media-amazon.com/images/I/61FXcXkidxL.jpg'
  },
  {
    icon: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    copy: 'https://m.media-amazon.com/images/I/51huqm9ZJ7L.jpg'
  },
  {
    icon: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    copy: 'https://m.media-amazon.com/images/I/81dI08mZslL.jpg'
  },
  {
    icon: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    copy: 'https://m.media-amazon.com/images/I/51lb0UyOhSL.jpg'
  }
];

export const UserContext = createContext<any>(items);
