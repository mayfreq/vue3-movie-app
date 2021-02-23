<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Movie",
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="card-movie-header">
        <img src="../assets/movie.jpg" alt="" />
      </div>
      <div class="card-movie-content">
        <div class="card-movie-content-head">
          <span>The Lego Movie</span>
          <span>1/10</span>
        </div>
        <div class="card-movie-info">
          <div class="movie-released">
            <span>released</span>
            <span>07 Feb 2014</span>
          </div>
          <div class="movie-runtime">
            <span>runtime</span>
            <span>100 min</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 220px;
  height: 320px;
  padding: 10px;
}
.card-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  text-transform: uppercase;
}

.card-content:hover {
  transform: scale(1.03);
}

.card-movie-header {
  width: 200px;
  height: 230px;
}
.card-movie-header > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-movie-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 50px;
}
.card-movie-content-head {
  display: flex;
}
.card-movie-content-head :first-child {
  font-weight: 600;
  font-size: 0.8em;
}
.card-movie-content-head :last-child {
  margin-left: auto;
  font-size: 0.6em;
  color: #2196f3;
  align-self: center;
}
.card-movie-info {
  display: flex;
  flex-direction: row;
  margin-top: 7px;
}

.movie-released {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie-released :first-child {
  font-size: 0.4em;
  color: rgba(0, 0, 0, 0.5);
}

.movie-released :last-child {
  font-size: 0.6em;
  margin-top: 5px;
  font-weight: 600;
}
.movie-runtime {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-items: center;
}
.movie-runtime :first-child {
  font-size: 0.4em;
  color: rgba(0, 0, 0, 0.5);
}
.movie-runtime :last-child {
  font-size: 0.6em;
  margin-top: 5px;
  font-weight: 600;
}
</style>
