<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
  
</template>

<script>
import BlogPost from "../componentes/BlogPost";

export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
       welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
           title: "Blog 1 title",
           blogHTML: "Blog 1 filter post title",
           blogCoverPhoto: "beautiful-stories"
        },
        {
           title: "Blog 2 title",
           blogHTML: "Blog 2 filter post title",
           blogCoverPhoto: "designed-for-everyone"
        }
      ]
    }
  }
};
</script>