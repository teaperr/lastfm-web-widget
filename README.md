# Last.FM Web Widget

This is a short piece of javascript, css, and html to display your user's last played tracks, with a few parameters.

This repo is mostly for anyone looking for an example or template for using the Last.fm API with an application or website.

Have fun!

You can look at the widget on my website [thea.tantrum.org/last.fm](http://thea.tantrum.org/last.fm)  

## About the widget

This is what the widget looks like by default.

![Screenshot of the default look of the widget.](./assets/screenshot1.png) 

You can change the border colour of the widget with this:
```css
#lastfm-widget {
    border: 5px solid white;
}
```

![Screenshot of the widget with an alternative border colour](./assets/screenshot2.png) 

You can change the text colour using this:

```css
#lastfm-stuff a {
    color: #8ebaff;
}
```

![Screenshot of the widget with an alternative text colour](./assets/screenshot3.png) 

For the most part, CSS is pretty easy to read, so I wont bother with documenting every part of the script.
