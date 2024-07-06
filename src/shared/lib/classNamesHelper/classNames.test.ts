import { classNames } from './classNames';

describe('classNamees', () => {
  test('test1', () => {
    expect(classNames('classNames')).toBe('classNames');
  });

  test('test2', () => {
    expect(classNames('class1', ['class2'])).toBe('class1 class2');
  });

  test('test3', () => {
    expect(classNames('class1', ['class2'], { class3: true })).toBe(
      'class1 class2 class3'
    );
  });
});
