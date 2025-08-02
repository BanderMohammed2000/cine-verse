<template>
  <div class="col">
    <slot></slot>
  </div>
  <ul class="mt-4">
    <li v-for="(person, index) in people" :key="index">
      <div class="info">
        <img
          :src="`${getBaseUrl()}images/people/${person.img}`"
          alt="person image"
          loading="lazy"
        />
        <p class="mb-0" :title="person.name">{{ person.name }}</p>
      </div>
      <span class="points">{{ person.points }}</span>
    </li>
  </ul>
</template>

<script>
import.meta.env.BASE_URL;
export default {
  props: ["people"],
  methods: {
    getBaseUrl() {
      return import.meta.env.BASE_URL;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}

ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul li:not(:last-child) {
  margin-bottom: 12px;
}

ul li .info {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.info img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info p {
  font-size: 15px;
  margin-left: 12px;
  color: #e8e8e8;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all; /* يسمح بالكسر عند أي حرف */
  overflow-wrap: anywhere;
}

.points {
  font-size: 14px;
  color: var(--dark-teal);
  border: 1px solid var(--dark-teal);
  padding: 1px 10px;
  border-radius: 50px;
}
</style>
