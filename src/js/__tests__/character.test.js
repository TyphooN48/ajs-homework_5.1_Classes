import Character from '../characters/character';

test.each([
  [['t', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
  [['asdfghjkloiu', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
  [['12', 'Undead'], 'Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов'],
])(
  ('class Character should throw name error'),
  (input, expected) => {
    expect(() => {
      // eslint-disable-next-line no-new
      new Character(input[0], input[1]);
    }).toThrowError(new Error(expected));
  },
);

test('class Character should throw type error', () => {
  const input = ['test', 'undea'];
  expect(() => {
    // eslint-disable-next-line no-new
    new Character(input[0], input[1]);
  }).toThrowError(new Error(`Персонаж ${input[1]} не существет`));
});

test('class Character should constructs object', () => {
  const input = ['test', 'swordsman'];
  const expected = {
    name: 'test',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  const received = new Character(input[0], input[1]);
  expect(received).toEqual(expected);
});
