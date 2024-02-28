import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React, { PropsWithChildren, createContext } from 'react';
import { ConfigProvider } from 'antd';
import zhAntd from 'antd/locale/zh_CN';
import enAntd from 'antd/locale/en_GB';
import { Locale } from 'antd/es/locale';

async function dynamicActivate(locale: Lang) {
  const { messages } = await import(`../locales/${locale}.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
export type Lang = 'zh' | 'en'

type ContextValue = {
  lang: Lang,
  setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const LangContext = createContext<ContextValue>({} as ContextValue)

export const LangProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = React.useState<Lang>('en')
  const [localeAntd, setLocaleAntd] = React.useState<Locale | undefined>(enAntd);
  React.useEffect(() => {
    dynamicActivate(lang === 'en' ? 'en' : 'zh')
      .then(() => {
        const i18nAntd = lang === 'en' ? enAntd : zhAntd;
        setLocaleAntd(i18nAntd);
      })
  }, [lang]);
  return (
    <LangContext.Provider
      value={{
        lang,
        setLang
      }}>
      <I18nProvider i18n={i18n}>
        <ConfigProvider locale={localeAntd}>
          {children}
        </ConfigProvider>
      </I18nProvider>
    </LangContext.Provider>
  )
}
export default LangContext

