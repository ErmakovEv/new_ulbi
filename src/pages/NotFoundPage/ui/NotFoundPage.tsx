import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNamesHelper/classNames';

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFoundPage)}>
      <h1>{t('NotFoundPage')}</h1>
    </div>
  );
}

export default NotFoundPage;
