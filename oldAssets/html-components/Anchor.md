# Anchor Component

## HTML Component

```HTML
    <head>
        ...
        <!-- To add the hashtag on each paragraph -->
        <script type="text/javascript" src="/../../Assets/js/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
        <script type="text/javascript" src="/../../Assets/js/articles.js"></script>
        <!--
            classes:
            id="1" class="hover-link"
            <i class="fa fa-hashtag left-of" id="1-anchor"></i>
        -->
        ...
    </head>
    <body>
        ...
        <article>
            ...
            <p id="1" class="hover-link"> TEXT HERE ...</p>
            <i class="fa fa-hashtag left-of" id="1-anchor"></i>
            <p id="2" class="hover-link"> TEXT HERE ...</p>
            <i class="fa fa-hashtag left-of" id="2-anchor"></i>
            .
            .
            .

            ...
        </article>
        ...
        <script src="/../../Assets/js/notie.js"></script>
    </body>

```

## Description:
This component will do a few things:
1. First it will display a notification with [notie.js](https://github.com/jaredreich/notie.js) alerting the reader that they can copy links to paragraphs by clicking on the paragraph
2. When the reader hovers over the paragraph (with class `hover-link`) a small hashtag will appear to the left of the paragraph as a visual indicator that they can copy the link to that paragraph
3. When the user clicks on the paragraph the link to it will be copied (if the browser supports the link), and a notification will be shown saying it was copied
    * If the browser doesn't support the copy JS code, it will warn the user that it couldn't copy the links
4. When the user navigates to the link with the #id at the end of it, the browser will focus on that paragraph, and jQueryUI will highlight it for a few ms.
