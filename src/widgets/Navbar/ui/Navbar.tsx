import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNamesHelper/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  classNameFromParent?: string;
}

export const Navbar = ({ classNameFromParent }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, [classNameFromParent])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
