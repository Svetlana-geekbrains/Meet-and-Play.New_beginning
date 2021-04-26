<template>
  <section class="views-main">
    <h2 class="views-main__title d-inline-block">Избранное</h2>
    <button class="btn-search btn d-block" type="button">Найти игру</button>
    <div class="filter-block">
      <FilterForm :filter="filter" />
    </div>
    <MeetingsForm :meetings="meetings" />
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  components: {
    FilterForm: () => import('@/components/FilterForm'),
    MeetingsForm: () => import('@/components/MeetingsForm'),
  },
  data: () => ({
    meetings: [
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
        required_quantity: '20',
        available_quantity: '15',
      },
    ],
    filter: [
      { key: '', name: 'Футбол' },
      { key: '', name: 'Волейбол' },
      { key: '', name: 'Тенис' },
      { key: '', name: 'Баскетбол' },
      { key: '', name: 'Бег' },
      { key: '', name: 'Хоккей' },
      { key: '', name: 'Спортзал' },
    ],
  }),
}
</script>
