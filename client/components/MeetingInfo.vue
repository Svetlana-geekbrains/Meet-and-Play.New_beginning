<template>
  <div class="meetings-info">
    <div class="meetings-info__item">
      <span class="meetings-info__item-name">Адрес:</span>
      <p class="meetings-info__item-content font-bold">{{ info.address }}</p>
    </div>
    <div class="meetings-info__item">
      <span class="meetings-info__item-name">Спорт:</span>
      <p class="meetings-info__item-content font-bold">{{ info.sportType }}</p>
    </div>
    <div class="meetings-info__item">
      <span class="meetings-info__item-name">Дата:</span>
      <p class="meetings-info__item-content font-bold">{{ info.date }}</p>
    </div>
    <div class="meetings-info__item">
      <span class="meetings-info__item-name">Время:</span>
      <p class="meetings-info__item-content font-bold">{{ info.time }}</p>
    </div>
    <div class="meetings-info__item">
      <span class="meetings-info__item-name">Участники:</span>
      <p class="meetings-info__item-content font-bold">{{ info.count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingInfo",
  props: {
    info: {
      type: Object,
      default: () => {
      },
    }
  },
};
</script>




