<template>
  <div class="home">
    <div class="max__width">
      <div class="recipes__container">
        <h3>Latest Recipes</h3>
        <div class="container" v-if="!this.isLoading">
          <RecipeCard
            v-for="recipe in recipes"
            :key="recipe.id"
            :recipe="recipe"
          />
        </div>
        <div v-if="this.isLoading === true">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import RecipeService from "@/services/RecipeService";

export default {
  name: "HomeView",
  components: {
    RecipeCard,
  },
  data() {
    return {
      isLoading: true,
      recipes: [],
    };
  },
  created() {
    RecipeService.getRecipes()
      .then((r) => {
        this.isLoading = false;
        this.recipes = r.data.results;
      })
      .catch((error) => {
        this.isLoading = false;
        console.error(error.message);
      });
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  padding: 40px 0;
}

.home .recipes__container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.home .recipes__container h3 {
  font-weight: 500;
}

.home .recipes__container .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
