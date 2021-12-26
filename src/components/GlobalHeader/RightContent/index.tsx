import { Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import styles from './index.module.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const theme = 'dark';
  const layout = 'mix';

  let className = styles.right;

  // @ts-ignore
  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <span
        className={`${styles.action}`}
        onClick={() => window.open('https://github.com/theprimone/svg-pro', '_blank')}
      >
        <GithubOutlined style={{ fontSize: '1.4em' }} />
      </span>
    </Space>
  );
};

export default GlobalHeaderRight;
