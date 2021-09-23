import * as styles from './TubeItem.css'

const TubeItem = ({ item }) => {
  return <div className={ styles.item }>{ item.title }</div>;
};

export default TubeItem;
