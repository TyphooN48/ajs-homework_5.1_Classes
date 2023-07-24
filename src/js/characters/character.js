export default class Character {
  constructor(name, type) {
    if ((typeof name === 'string') && (name.length > 2 && name.length < 11)) {
      this.name = name;
    } else {
      throw new Error('Не корректное имя пользователя. Имя должно быть не менее 2х и не более 10и символов');
    }
    const types = [
      'bowerman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie',
    ];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Персонаж ${type} не существет`);
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
