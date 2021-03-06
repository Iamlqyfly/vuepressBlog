<strong>
    采用 <a href="https://vuepress.vuejs.org/">VuePress</a> 构建的 Web 应用程序
  </strong>
  <br>
  <br>
[VuePress](https://vuepress.vuejs.org/) 由两部分组成：一部分是支持用 `Vue` 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 `Vue` 及其子项目的文档需求。

每一个由 `VuePress` 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（`SEO`）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（`SPA`），其他的页面则会只在用户浏览到的时候才按需加载。除此之外，它还内置了以下优秀特性：

* 为技术文档而优化的[内置 Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)
* [在 Markdown 文件中使用 Vue 组件的能力](https://vuepress.vuejs.org/zh/guide/using-vue.html)
* [Vue 驱动的自定义主题系统](https://vuepress.vuejs.org/zh/guide/custom-themes.html)
* [自动生成 Service Worker](https://vuepress.vuejs.org/zh/config/#serviceworker)
* [Google Analytics 集成](https://vuepress.vuejs.org/zh/config/#ga)
* [多语言支持](https://vuepress.vuejs.org/zh/guide/i18n.html)
* 默认主题包含：
    * 响应式布局
    * [可选的主页](https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5)
    * [简洁的开箱即用的标题搜索](https://vuepress.vuejs.org/zh/default-theme-config/#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2)
    * [Algolia 搜索](https://vuepress.vuejs.org/zh/default-theme-config/#algolia-%E6%90%9C%E7%B4%A2)
    * 可自定义的[导航栏](https://vuepress.vuejs.org/zh/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F)和[侧边栏](https://vuepress.vuejs.org/zh/default-theme-config/#%E4%BE%A7%E8%BE%B9%E6%A0%8F)
    * [自动生成的 GitHub 链接和页面的编辑链接](https://vuepress.vuejs.org/zh/default-theme-config/#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5)

#### 如何使用
可将项目 Fork 至自己的代码仓库，运行一下命令即可：
```
git clone https://github.com/Iamlqyfly/vuepressBlog.git
cd vuepressBlog
npm start
```
修改 deploy.sh 文件中的“自定义域名”以及“仓库路径”，运行如下命令，即可实现部署（默认发布至 github pages；如果暂不使用自定义域名，注释该行即可。

```
yarn deploy || npm deploy
```