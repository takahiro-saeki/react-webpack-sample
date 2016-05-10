import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1024,
    height: 1000,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'img/test.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'img/test1.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'img/test2.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'img/test3.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'img/test4.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'img/test5.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'img/test6.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'img/test7.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const Grid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Grid;
