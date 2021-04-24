<template>
  <div class="play-cards-block">
    <template v-if="meetings">
      <div
        v-for="(meeting, key) in meetings"
        :key="`meeting-${key}`"
        class="max-h-56 hover:cursor-pointer play-card"
      >
        <div class="play-card__favorite">
          <svg width="48px" height="48px" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.6265 24.7216L24.2582 34L14.8899 24.7216C14.272 24.1203 13.7852 23.3976 13.4604 22.5989C13.1355 21.8003 12.9795 20.943 13.0022 20.0811C13.0249 19.2192 13.2258 18.3713 13.5923 17.5909C13.9588 16.8104 14.4829 16.1143 15.1316 15.5464C15.7803 14.9784 16.5396 14.551 17.3617 14.2909C18.1837 14.0308 19.0507 13.9438 19.908 14.0352C20.7654 14.1267 21.5945 14.3947 22.3432 14.8223C23.0919 15.2499 23.7439 15.828 24.2582 16.52C24.7748 15.833 25.4276 15.26 26.1757 14.8369C26.9239 14.4138 27.7513 14.1497 28.6063 14.0611C29.4612 13.9725 30.3252 14.0613 31.1443 14.322C31.9633 14.5827 32.7197 15.0096 33.3662 15.5761C34.0126 16.1425 34.5352 16.8363 34.9012 17.614C35.2671 18.3918 35.4687 19.2366 35.4931 20.0958C35.5175 20.955 35.3644 21.8099 35.0432 22.6072C34.722 23.4044 34.2397 24.1268 33.6265 24.7291"
            />
          </svg>
        </div>
        <img
          class="block mb-2 rounded-2xl"
          :src="meeting.src"
          alt="play-card"
        />
        <div class="play-card__header">
          <span class="inline-block font-bold meeting-name">{{
            meeting.name
          }}</span>
          <span class="inline-block font-bold">(до {{ meeting.age }} лет)</span>
        </div>
        <span class="inline-block"
          >{{ meeting.available_quantity }} из
          {{ meeting.required_quantity }}</span
        >
        <span class="inline-block float-right">{{ meeting.date }}</span>
      </div>
    </template>
    <template v-if="meeting">
      <nuxt-link
        :to="`/MeetingsCard/${meet._id}`"
        v-for="(meet, key) in meeting"
        :key="`meeting-${key}`"
        class="max-h-56 hover:cursor-pointer play-card"
      >
        <div v-for="category in meet.categories" :key="category">
        <img v-if="category === 'Футбол'" class="block mb-2 rounded-2xl" src="../static/img/football.jpg" alt="play-card" />
        <img v-if="category === 'Баскетбол'" class="block mb-2 rounded-2xl" src="../static/img/basketball.jpg" alt="play-card" />
        <img v-if="category === 'Теннис'" class="block mb-2 rounded-2xl" src="../static/img/tennis.jpg" alt="play-card" />
        <img v-if="category === 'Волейбол'" class="block mb-2 rounded-2xl" src="../static/img/volleyball.jpg" alt="play-card" />
        <img v-if="category === 'Регби'" class="block mb-2 rounded-2xl" src="../static/img/rugby.jpg" alt="play-card" />
        <img v-if="category === 'Хоккей'" class="block mb-2 rounded-2xl" src="../static/img/hockey.jpg" alt="play-card" />
        </div>
        <div class="play-card__header">
          <span class="inline-block font-bold meeting-name">{{
            meet.title
          }}</span>
          <!-- <span class="inline-block font-bold">(до {{ meeting.age }} лет)</span> -->
        </div>
        <span class="inline-block">{{ meet.count }} из 21</span>
        <span class="inline-block float-right">{{ meet.date }}</span>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    meetings: {
      type: Array,
      default: () => [],
    },
    meeting: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
