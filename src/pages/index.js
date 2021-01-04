import styles from './index.css';
import { List } from 'antd';
import Link from 'umi/link';
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <div className={styles.list}>
        <List>
          <List.Item>
            <Link to="/class/lists">lists</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/dva">dva</Link>
          </List.Item>
          <List.Item></List.Item>
          <List.Item></List.Item>
        </List>
      </div>
    </div>
  );
}
