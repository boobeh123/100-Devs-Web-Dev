## Summary:
My notes from the crash course are in main.js & the everything "code-related" after 12:31 in the video is in a separate folder that was deployed to heroku.

This is the (basic) web server I developed through the Node.js Crash Course video from Traversy Media. 
It contains an index.html, an about.html, and a 404 page.

This webserver is deployed to heroku: https://cryptic-reaches-99689.herokuapp.com/

## Lessons learned:
I learned to create a server. I used the path module to look into the public folder and evaluate the request url to render pages. I also used the path module to get the extension of a file and used that file-extension-name to set the content type.

I used the file system module to determine if request url evaluates to index, about or 404.html. I check the error code for ENOENT or other server errors. 
On successful responses I use the file system module to write to the head and serve the status code & content type.

## Source:
Traversy Media: Node.js Crash Course
https://youtu.be/fBNz5xF-Kx4