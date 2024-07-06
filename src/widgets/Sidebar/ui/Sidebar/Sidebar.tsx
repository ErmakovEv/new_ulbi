import { classNames } from 'shared/lib/classNamesHelper/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <Button
        buttonTheme={ButtonTheme.CLEAR}
        onClick={onToggle}
        data-testid="sidebar-button-toggle"
      >
        Toggle
      </Button>
      <div className={cls.switchers}>
        <LangSwitch classNameFromParent={cls.lang} />
        <ThemeSwitch />
      </div>
    </div>
  );
};
