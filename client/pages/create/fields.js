export const schema = {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'Название встречи',
      model: 'title',
      id: 'name-with-name',
      styleClasses: 'mt-2 py-2 px-4',
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Город',
      model: 'city',
      id: 'name-with-city',
      styleClasses: 'mt-2 py-2 px-4',
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Адрес',
      model: 'address',
      id: 'name-with-label',
      styleClasses: 'mt-2 py-2 px-4',
    },
    {
      type: 'vueMultiSelect',
      model: 'categories',
      label: 'Вид спорта',
      styleClasses: 'mt-2 py-2 px-4 w-64',
      placeholder: 'Выбрать вид спорта',
      selectOptions: {
        multiple: false,
        key: 'title',
        id: '_id',
        trackBy: 'title',
        label: 'title',
        searchable: true,
        hideSelected: true,
      },
      values: [],
    },
    // {
    //   type: 'select',
    //   label: 'Спорт',
    //   model: 'sportType',
    //   styleClasses: 'mt-2 py-2 px-4',
    //   values: [
    //     "Футбол",
    //     "Баскетбол",
    //     "Волейбол",
    //     "Теннис",
    //   ]
    // },
    // {
    //   type: 'input',
    //   inputType: 'text',
    //   label: 'Картинка',
    //   model: 'image',
    //   id: "image",
    //   styleClasses: 'mt-2 py-2 px-4',
    // },
    {
      type: 'input',
      inputType: 'data',
      label: 'Дата',
      model: 'date',
      id: "data",
      styleClasses: 'mt-2 py-2 px-4',
    },
    {
      type: 'input',
      inputType: 'time',
      label: 'Время',
      model: 'time',
      id: "time",
      styleClasses: 'mt-2 py-2 px-4',
    },
    {
      type: 'input',
      inputType: 'text',
      label: `Количество участников`,
      model: 'count',
      id: "name-with-ammount",
      styleClasses: 'mt-2 py-2 px-4',
    },
  ]
}

// image: {
//   type: String,
// default: '',
// },
// title: {
//   type: String,
// default: '',
// },
// city: {
//   type: String,
// default: '',
// },
// address: {
//   type: String,
// default: '',
// },
// sportType: {
//   type: String,
// default: '',
// },
// count: {
//   type: Number,
// default: 0,
// },
// date: {
//   type: String,
// default: '',
// },
// time: {
//   type: String,
// default: '',
// },
