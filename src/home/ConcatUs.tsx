import React, { useContext } from 'react';
import { Button } from 'antd';
import cx from 'classnames';
import { Trans } from '@lingui/macro';
import LangContext, { Lang } from '../locales/LangContext.tsx';

const ConcatUs: React.FC<{ className?: string }> = ({ className }) => {
  const { setLang } = useContext(LangContext);
  const onClick = React.useCallback(() => {
    setLang((prev: Lang) => {
      return prev === 'en' ? 'zh' : 'en'
    });
  }, [setLang]);
  return (
    <Button onClick={onClick} type="primary" size="large" className={cx("inline", className)}><Trans>Talk to our
      team</Trans></Button>
  );
};

export default ConcatUs;
