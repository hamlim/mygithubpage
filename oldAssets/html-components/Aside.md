# Aside Component

## HTML Component
```HTML

    <head>
        ...
        <link rel="stylesheet" href="/../../Assets/css/articles.css">
        ...
    </head>

    ...
    <article>
        ...
    </article>

    ...
    <aside class="aside">
        <p>
            Check out some of my other posts:
        </p>
        <ul>
            <li>
                <a class="link" href="./LINK.html">
                    <em>TITLE</em>
                    <b>Published: PUBDATE</b>
                </a>
            </li>
            <li>
                <a class="link" href="./LINK.html">
                    <em>TITLE</em>
                    <b>Published: PUBDATE</b>
                </a>
            </li>
            ...
            <!-- additional links to articles -->
        </ul>
    </aside> <!-- .cd-read-more -->

```
## Description:

This will put an aside next to the article with the other articles from that month. It will only show up on larger displays, so that it doesn't crowd up the display on smaller devices.
