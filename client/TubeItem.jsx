import * as styles from './TubeItem.css'

// Accept a tube item, render some properties
// Add css class to the tubeItem
const TubeItem = ({ item }) => {
  return <div className={ styles.item }>{ item.title }</div>;
};

export default TubeItem;
