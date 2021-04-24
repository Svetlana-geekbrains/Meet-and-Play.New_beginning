<template>
  <section class="views-main">
    <h2 class="views-main__title d-inline-block">Выберите спортивную игру</h2>
    <div class="filter-block">
      <FilterForm v-for="(filter, key) in filters" :key="`filters-${key}`" :filter="filter"/>
    </div>
    <div class="search-block mb-6">
      <input type="text" placeholder="Город"/>
      <button class="btn-fill">Найти</button>
    </div>
    <div class="play-cards-header">Популярные игры</div>
    <MeetingsForm
      v-for="(meeting, key) in meetings"
      :key="`meetingForm-${key}`"
      :meeting="meeting"
    />
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    FilterForm: () => import('@/components/FilterForm'),
    MeetingsForm: () => import('@/components/MeetingsForm'),
  },
  computed: {
    ...mapGetters({
      meetings: 'meetings/items',
      filters: 'categories/items'
    }),
  },
  methods: {
    ...mapActions({
      fetсhMeetings: 'meetings/fetchAll',
      fetchFilters: 'categories/fetchAll'
    }),
  },
  mounted() {
    this.fetсhMeetings()
    this.fetchFilters()
  },
  // data: () => ({
  //   filter: [
  //     {key: '', name: 'Футбол'},
  //     {key: '', name: 'Волейбол'},
  //     {key: '', name: 'Тенис'},
  //     {key: '', name: 'Баскетбол'},
  //     {key: '', name: 'Бег'},
  //     {key: '', name: 'Хоккей'},
  //     {key: '', name: 'Спортзал'},
  //   ],
  // }),
}
</script>
