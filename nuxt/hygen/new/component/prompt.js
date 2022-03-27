
module.exports = [
  {
    // type: 開発者自身が入力するinputや選択型のselectなどがあります
    type: 'select',
    // name: inputやselectで入力した値が入る変数名となります
    name: 'atomic',
    // message: 入力する際のメッセージとなります
    message: 'コンポーネント粒度:',
    choices: ['atoms', 'molecules', 'organisms', 'templates'],
  },
  {
    type: 'input',
    name: 'component_name',
    message: 'コンポーネント名(upper camel case)を入力してください。',
    validate:  (value) => {
      if (!value.length) {
        return "コンポーネント名(upper camel case)を入力してください。";
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'require_storybook',
    message: 'storybook はありますか？',
  },
  {
    type: "confirm",
    name: "hasCompositions",
    message: "compositionsはありますか？",
    initial: true,
  },
  {
    type: "confirm",
    name: "hasProps",
    message: "propsはありますか？",
  },
];