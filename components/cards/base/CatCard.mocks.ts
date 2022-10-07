import { ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'Felines',
  title: `What's new in Cats`,
  body: 'lorem ipsum dolor sit amet lorem, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt',
  author: 'Alex',
  time: '2h ago',
};

export const mockCatCardProps = {
  base,
};
