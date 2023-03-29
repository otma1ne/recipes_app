<template>
  <router-link :to="{ name: 'details', params: { id: recipe.id } }">
    <div class="card">
      <img :src="recipe['thumbnail_url'] ?? ''" alt="recipe" />
      <div class="card__content">
        <h4>{{ recipe["name"] ?? "" }}</h4>
        <p>{{ recipe["description"] ?? "" }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.card {
  position: relative;
  padding-top: 120%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.card img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  width: 100%;
  object-fit: cover;
  color: white;
  padding: 20px;
}
.card .card__content h4 {
  font-weight: 500;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card .card__content p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
