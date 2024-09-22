---
layout: page
title: Unser Bücherregal
permalink: /regal/
---

<div class="book-wrapper">
  <div class="book-items">
    {% for book in site.static_files %}
      {% if book.path contains "/assets/books/" %}
        {% assign book_name = book.basename | downcase %}
        {% assign matched_post = site.posts | where_exp: "post", "post.slug == book_name" | first %}

        {% if matched_post %}
        <div class="main-book-wrap">
          <div class="book-cover">
            <a href="{{ matched_post.url }}" class="book-link">
              <div class="book-inside"></div>
              <div class="book-image">
                <img src="{{ book.path }}" alt="{{ matched_post.title }}">
                <div class="effect"></div>
                <div class="light"></div>
              </div>
            </a>
          </div>
        </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>


<style>
body {
  width: 100%;
}
.book-wrapper {
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 4px;
}
.book-items {
  display: flex; /* Use flexbox for horizontal layout */
  flex-wrap: wrap; /* Wrap to the next line if items overflow */
  justify-content: space-between; /* Add space between items */
  gap: 12px; /* Adjust gap between books */
  padding: 16px;
  margin: 0 auto;
}

.main-book-wrap {
  position: relative;
  flex: 1 1 30%; /* Adjust book width */
  max-width: 180px; /* Set max width for each book */
  margin-bottom: 20px; /* Add spacing at the bottom */
}

.book-cover {
  position: relative;
}

.book-cover .book-inside {
  position: absolute;
  width: 90%;
  height: 96%;
  top: 1%;
  left: 16px;
  border: 1px solid grey;
  border-radius: 2px 6px 6px 2px;
  background: white;
  box-shadow: 10px 40px 40px -10px #00000030, inset -2px 0 0 grey,
    inset -3px 0 0 #dbdbdb, inset -4px 0 0 white, inset -5px 0 0 #dbdbdb,
    inset -6px 0 0 white, inset -7px 0 0 #dbdbdb, inset -8px 0 0 white,
    inset -9px 0 0 #dbdbdb;
}

.book-cover .book-image {
  line-height: 0;
  position: relative;
  border-radius: 2px 6px 6px 2px;
  box-shadow: 6px 6px 18px -2px rgba(0, 0, 0, 0.2),
    24px 28px 40px -6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  transform: perspective(2000px) rotateY(-15deg) translateX(-10px) scaleX(0.94);
  cursor: pointer;
}

.book-image img {
  grid-row: 1 / -1;
  grid-column: 1;
  width: 100%;
  border-radius: 2px 6px 6px 2px;
}

.book-image:hover {
  transform: perspective(2000px) rotateY(0deg) translateX(0px) scaleX(1);
  transform-style: preserve-3d;
  box-shadow: 6px 6px 12px -1px rgba(0, 0, 0, 0.1),
    20px 14px 16px -6px rgba(0, 0, 0, 0.1);
}

.effect {
  position: absolute;
  width: 20px;
  height: 100%;
  margin-left: 16px;
  top: 0;
  border-left: 2px solid #00000010;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: all 0.5s ease;
  z-index: 5;
}

.light {
  width: 90%;
  height: 100%;
  position: absolute;
  border-radius: 3px;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  top: 0;
  right: 0;
  opacity: 0.1;
  transition: all 0.5s ease;
  z-index: 4;
}

.book-image:hover .effect{
    margin-left: 14px;
}

.realvjy{
  width: 900px;
  padding: 20px;
  margin: 0 auto;
  font-family: sans-serif;
  text-align: center
}
</style>
