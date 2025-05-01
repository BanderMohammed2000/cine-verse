<template>
  <section class="not-found">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="status">404</h1>
          <p class="mb-4">We are sorry, Page not found!</p>
          <router-link to="/home">
            <base-button class="light-pink-background"
              >Back to Home</base-button
            >
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  height: 100vh;
  background-color: #0a0f23;
  display: flex;
  align-items: center;
}

h1.status {
  font-size: 8rem;
  color: var(--secondary-color);
}

p {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7;
  color: var(--dark-teal);
}

@media (max-width: 575.98px) {
  h1.status {
    font-size: 6rem;
  }
  p {
    font-size: 1.2rem;
  }
}
</style>
