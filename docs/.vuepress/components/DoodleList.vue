<template>
    <div class="doodle-list">
        <el-row :span="24">
            <el-col class="row-bottom" shadow="hover" :span="7" v-for="item in items" :key="item.id" :offset="1">
                <el-card>
                    <img :src="item.img" :alt="item.alt" class="image" >
                    <div style="padding: 14px;">
                        <span>{{item.desc}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>  
</template>

<script>
export default {
  name: "DoodleList",
  data() {
    return {
      // currentDate: new Date()
      items: [
        {
          img: '/vuepressBlog/imgs/2.jpg',
          alt: '简约人像' 
        },
        {
          img: '/vuepressBlog/imgs/3.jpg',
          alt: '简约人像' 
        },
        { 
          img: '/vuepressBlog/imgs/4.jpg',
          alt: '简约人像' 
        },
      ]
    };

  },
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    currentDate() {
      let timeStamp = new Date();
      return timeStamp.toLocaleDateString()
      // return timeStamp
      //   .toISOString()
      //   .slice(0, 19)
      //   .replace("T", " ")
      //   .replace(".", ":");
    }
  },
  mounted() {}
};
</script>

<style>
.row-bottom {
   padding-bottom: 16px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
