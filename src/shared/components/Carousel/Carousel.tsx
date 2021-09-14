import React from 'react';
import useStyles from './styles';

interface Item {
  src: string;
}

interface CarouselProps {
  items: Item[];
  onChange?: (value: Item) => void;
}

const Carousel: React.FC<CarouselProps> = ({ items, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((item, idx) => (
        <img key={idx} src={item.src} alt="image" className={classes.item} />
      ))}
    </div>
  );
};

export default Carousel;
