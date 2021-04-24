import crudStore from './generic'

export default {
  ...crudStore({
    url: 'categories',
    name: 'categories',
    keyName: 'category'
  })
}
