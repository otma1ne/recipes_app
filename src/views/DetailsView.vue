<template>
  <div class="about">
    <div class="max__width">
      <div class="container">
        <div class="recipe__img">
          <img :src="recipe['thumbnail_url'] ?? ''" alt="recipe" />
        </div>
        <div class="recipe__info">
          <div class="title">
            <h2>{{ recipe["name"] ?? "" }}</h2>
          </div>
          <div class="description">
            <p>{{ recipe["description"] ?? "" }}</p>
          </div>
          <div class="instruction" v-if="instructions.length > 0">
            <h3>Instruction</h3>
            <ul>
              <li v-for="(instruction, index) in instructions" :key="index">
                <div class="puce"></div>
                {{ instruction["display_text"] ?? "" }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeService from "@/services/RecipeService";

export default {
  props: ["id"],

  data() {
    return {
      recipe: {},
      instructions: [],
    };
  },
  created() {
    RecipeService.getRecipe(this.id)
      .then((response) => {
        this.recipe = response.data;
        this.instructions = this.recipe["instructions"];
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
<style>
.about {
  width: 100%;
  height: 100%;
  padding: 40px 0;
}
.about .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}
.about .container .recipe__img img {
  width: 100%;
  border-radius: 4px;
}
.about .container .recipe__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about .container .recipe__info .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.about .container .recipe__info .description {
  font-size: 16px;
  line-height: 24px;
}
.about .container .recipe__info .instruction h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
.about .container .recipe__info .instruction ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 22px;
}
.about .container .recipe__info .instruction ul li {
  position: relative;
  padding-left: 30px;
}
.about .container .recipe__info .instruction ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 10px;
  height: 10px;
  background: wheat;
  border-radius: 100%;
}
</style>
