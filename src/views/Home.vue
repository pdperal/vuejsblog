<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import BlogPost from "../componentes/BlogPost";
import BlogCards from "../componentes/BlogCard";

export default {
  name: "Home",
  components: { BlogPost, BlogCards },
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
        },
        {
           title: "Blog 3 title",
           blogHTML: "Blog 3 filter post title",
           blogCoverPhoto: "designed-for-everyone"
        }
      ],

      sampleBlogCards: [
      {
           blogTitle: "Blog 4 title",
           blogCoverPhoto: "stock-1"
        },
        {
           blogTitle: "Blog 5 title",
           blogCoverPhoto: "stock-2"
        },
        {
           blogTitle: "Blog 6 title",
           blogCoverPhoto: "stock-3"
        },
        {
           blogTitle: "Blog 7 title",
           blogCoverPhoto: "stock-4",
           blogDate: "May 1, 2021"
        }
      ]           
    }
  }
};
</script>

<style lang="scss" scoped>

  .blog-card-wrap {
    
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
</style>