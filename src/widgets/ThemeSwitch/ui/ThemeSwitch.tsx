import { Theme, UseTheme } from 'app/providers/themeProvider';
import MoonIcon from 'shared/assets/icon/MoonIcon.svg';
import SunIcon from 'shared/assets/icon/SunIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

type Props = {
  classNameFromParent?: string;
};
export const ThemeSwitch = ({ classNameFromParent }: Props) => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <Button
      buttonTheme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      classNameFromParent={classNameFromParent}
    >
      {theme === Theme.DARK ? (
        <SunIcon width={'30px'} />
      ) : (
        <MoonIcon width={'30px'} />
      )}
    </Button>
  );
};
