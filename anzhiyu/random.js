var posts=["posts/23050700/","posts/40055/","posts/40247/","posts/2304301/","posts/44472/","posts/12731/","posts/15810/","posts/33326/","posts/16107/","posts/20702/","posts/41036/","posts/59420/","posts/61250/","posts/2304300/","posts/57981/","posts/2226/","posts/18763/","posts/9268/","posts/58030/","posts/10812/","posts/20703/","posts/30075/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};