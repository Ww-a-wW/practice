import React from 'react';
import styles from './index.module.less';
import classnames from 'classnames';
import Draw from './draw';

const P5 = () => {
  return (
    <div className={classnames('main', styles.P5)}>
      <Draw />
    </div>
  );
};
export default P5;
