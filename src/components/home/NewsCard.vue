<template>
  <div v-if="!verticalCard" class="card horizontal mb-4">
    <div class="row g-0">
      <div class="col-md-6">
        <img
          src="/movie/bad-boys.jpg"
          class="img-fluid rounded-start"
          alt="..."
          loading="lazy"
        />
      </div>
      <div class="col-md-6">
        <div class="card-body pt-2 pt-md-0 ps-0 ps-md-3">
          <div class="card-text ago mb-3">
            2 Hours Ago - <span>by Yoga</span>
          </div>
          <h5 class="card-title">"Bad Boys: Ride or Die" – Latest Updates</h5>
          <p class="card-text">
            The fourth installment of the Bad Boys franchise, Bad Boys: Ride or
            Die, was released in June 2024 and became a massive box office
            success, grossing over $404 million worldwide. Will Smith and Martin
            Lawrence reprise their roles as detectives Mike Lowrey and Marcus
            Burnett, facing a new high-stakes mission in Miami. The film
            received positive audience feedback, boasting a 97% rating on Rotten
            Tomatoes.
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
    <img src="/movie/fight-club.jpg" class="card-img-top" alt="..." />
    <div class="card-body ps-0 pt-2 pb-3 pb-md-0">
      <div class="card-text ago mb-1">2 Hours Ago - <span>by Yoga</span></div>
      <h6 class="card-title">"Fight Club: Chaos, Identity, and Rebellion"</h6>
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
  width: 100%;
}

.card .card-title {
  color: #19947b;
}

.card.horizontal .card-text {
  font-size: 14px;
  color: #ffffff;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card .card-text.ago {
  font-size: 13px;
  color: #ffffff;
}

.card.vertical img {
  height: 170px;
}

@media (max-width: 767.98px) {
  .card.vertical img {
    height: 300px;
  }
  .card .card-title {
    line-height: 1.5;
  }
}
</style>
