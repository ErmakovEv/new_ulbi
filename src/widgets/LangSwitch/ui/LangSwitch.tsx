import { classNames } from 'shared/lib/classNamesHelper/classNames';
import cls from './LangSwitch.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

type Props = {
  classNameFromParent?: string;
};

export const LangSwitch = ({ classNameFromParent }: Props) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLang}
      buttonTheme={ButtonTheme.CLEAR}
      classNameFromParent={classNames(cls.langSwither, [classNameFromParent])}
    >
      <p>{t('Язык')}</p>
    </Button>
  );
};
