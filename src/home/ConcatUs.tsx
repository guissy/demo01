import React from 'react';
import { Button } from 'antd';
import cx from 'classnames';

const ConcatUs: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Button type="primary" size="large" className={cx("inline", className)}>Talk to our team</Button>
  );
};

export default ConcatUs;
