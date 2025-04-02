<template>
  <div class="col">
    <h6 class="mt-3">
      <slot></slot>
    </h6>
  </div>
  <ul class="mt-4">
    <li v-for="(person, index) in people" :key="index">
      <div class="info">
        <img :src="person.img" alt="person image" loading="lazy" />
        <p class="mb-0" :title="person.name">{{ person.name }}</p>
      </div>
      <span class="points">{{ person.points }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["people"],
};
</script>

<style scoped>
h6 {
  position: relative;
  color: #e8e8e8;
  font-size: 16px;
  font-weight: normal;
  padding-bottom: 19px;
  /* border-bottom: 1px solid #686868; */
  border-bottom: 1px solid #353535;
}
h6::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 120px;
  height: 1px;
  background-color: #e2606a;
}
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
  color: #19947b;
  border: 1px solid #19947b;
  padding: 1px 10px;
  border-radius: 50px;
}
</style>
