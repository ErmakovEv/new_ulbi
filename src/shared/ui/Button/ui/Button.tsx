import { classNames } from 'shared/lib/classNamesHelper/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNameFromParent?: string;
  buttonTheme?: ButtonTheme;
  children: ReactNode;
}

export const Button = ({
  classNameFromParent,
  children,
  buttonTheme = ButtonTheme.CLEAR,
  ...otherProps
}: Props) => {
  return (
    <button
      className={classNames(cls.Button, [
        classNameFromParent,
        cls[buttonTheme],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
