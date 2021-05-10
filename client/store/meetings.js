import crudStore from './generic'

export default {
    ...crudStore({
        url: 'meetings',
        name: 'meetings',
        keyName: 'meeting'
    })
}