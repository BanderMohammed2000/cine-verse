<template>
  <div v-if="!verticalCard" class="card horizontal mb-4">
    <div class="row g-0">
      <div class="col-md-6">
        <!-- img -->
        <img
          :src="article.img"
          class="img-fluid rounded-start"
          alt="movie image"
          loading="lazy"
        />
      </div>
      <div class="col-md-6">
        <div class="card-body pt-2 pt-md-0 ps-0 ps-md-3">
          <!-- author and ago -->
          <div class="card-text ago mb-3">
            {{ article.ago }} -
            <span :title="article.author">by {{ article.author }}</span>
          </div>
          <h5 class="card-title">
            <!-- title -->
            {{ article.title }}
          </h5>
          <p class="card-text">
            <!-- text -->
            {{ article.text }}
          </p>
          <p class="card-text">
            <base-button
              class="outline"
              style="padding-bottom: 3px; border-bottom: 1px solid #e2606a"
              >Read Full Article</base-button
            >
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="card vertical">
    <img :src="article.img" class="card-img-top" alt="movie image" />
    <div class="card-body ps-0 pt-2 pb-3 pb-md-0">
      <div class="card-text ago mb-1">
        {{ article.ago }} - <span>by {{ article.author }}</span>
      </div>
      <h6 class="card-title">
        {{ article.title }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    verticalCard: {
      type: Boolean,
      required: false,
      default: false,
    },
    article: {
      type: Object,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: transparent;
  border: 0;
}

.card img {
  border-radius: 10px !important;
}

.card.horizontal img {
  height: 300px;
  /* max-height: 284px; */
  width: 100%;
}

.card .card-title {
  color: var(--dark-teal);
}

.card.horizontal .card-title {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card.horizontal .card-text {
  font-size: 14px;
  color: var(--secondary-color);
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card .card-text.ago {
  font-size: 13px;
  color: var(--secondary-color);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  overflow-wrap: anywhere;
}

.card.vertical img {
  height: 170px;
}

/*لوضع القسمين نفس الحجم*/
/* ملاحظة: لو كان في margin عناصر الابناء راح يتم احتسابه ضمن الطول !!!*/
/* .card.horizontal > .row {
  display: flex;
  align-items: stretch;
}
.card.horizontal > .row > .col-md-6,
.card.horizontal > .row > .col-md-6 {
  display: flex;
  flex-direction: column;
}

.card.horizontal .col-md-6 img,
.card.horizontal .col-md-6 .card {
  flex: 1;
} */

/*النهاية*/

@media (max-width: 767.98px) {
  .card.vertical img {
    height: 300px;
  }
  .card .card-title {
    line-height: 1.5;
  }
  .card {
    width: 80%;
    margin: auto;
  }
}

@media (max-width: 575.98px) {
  .card {
    width: 100%;
    margin: 0;
  }
}
</style>
