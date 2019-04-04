---
section: News
title: News
---

<ul style="list-style: none;">
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}"><h2>{{ post.date | date: '%B %d, %Y' }}: {{
          post.title }}</h2></a><br/>
    {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

