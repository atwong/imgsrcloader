imgsrcloader
============

Angular directive to load IMG src into local blobs

A simple, pure Angular directive to fetch remote image URLs, convert them into local object URLs and assign the SRC attribute to the local URL.  It specifically addresses the CSP restriction in Chrome extensions of loading remote URLs in the IMG within. Also could be used as a template for use cases that require intercepting the IMG fetch.

To use:

    <img img-src-loader uri="http://www.yo.com/img/logo.png" />
    

