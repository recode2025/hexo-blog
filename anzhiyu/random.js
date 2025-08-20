var posts=["2025/08/20/dict/","2025/08/20/set/","2025/08/20/basic_sort/","2025/08/20/search/","2025/08/20/hello-world/","2025/08/20/why_and_how_to_learn/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };