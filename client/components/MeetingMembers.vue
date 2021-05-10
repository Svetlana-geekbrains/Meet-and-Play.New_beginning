<template>
  <div class="meetings-members grid grid-cols-3 gap-4">
    <div v-for="(member, key) in members" :key="`member-${key}`" class="meetings-members__item">
      <img class="meetings-members__item-img" :src="member.img" />
      <span class="meetings-members__item-name">{{ member.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingMembers",
  props: {
    members: {
      type: Array,
      default: () => [],
    }
  },
};
</script>




