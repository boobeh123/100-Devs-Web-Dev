## Summary:
The concepts covered in this chapter:
* Adding an image onto a page
    * HTML: The < img > element.
        * Embeds an image into the document.
        * An inline-level element.
        * The preferred option when the image being used holds semantic value and its content is relevant to the content of the page.
    * CSS: The background property.
        * Assigns an image to an element.
        * The preferred option when the image being used is part of the design or user interface of the page. 
* Resizing an image on the page.
    * Can be resized with height & width HTML attributes.
    * Can be resized with height & width CSS properties.
    * Setting a height causes the width to adjust automatically, vice versa.
        * This occurs to maintain aspect ratio of the image. 
        * Setting height & width may distort an image.
* Image file formats
    * Most supported image file formats are:
        * gif, jpg, png
            * The jpg format provides quality images with high color counts while maintaining a decent file size. 
            * Jpg images are used for photographs and are ideal for faster load times. 
            * The png format is great for images with transparencies or low color counts. 
            * Png images are used for icons or background patterns.
* We can position images by using floats and display properties.
    * Adding an image to the page positions the image in the same line as the content that surrounds it. 
        * Images are inline elements by default.
    * Setting the image display property to block makes the image appear on its own line.
        * This allows the surrounding content to be positioned above and below the image.
    * The float property positions an image on the left or right side of its containing element.
* Adding audio to the page.
    * The < audio > element is used to embed sound content in documents. 
    * The < source > element specifies multiple media resources to offer same media content in multiple file formats.
    * The three most supported audio formats are ogg, mp3, and wav. 
    * preload attribute helps identify information about the audio file.
    * autoplay, controls, and loop attributes are all boolean attributes
        * When each attribute is present its value will be set to true.
* Adding video to the page.
    * The < video > element embeds a media player which supports video playback into the document. 
    * The < source > element specifies multiple media resources to offer same media content in multiple file formats.
    * The poster attribute:
        * A URL for an image to be shown while the video is downloading. 
        * If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.
* The < iframe > element - Represents a nested browsing context, embedding another HTML page into the current one.
* The < figure > element - Represents self-contained content.
    * Surround images, audio clips, videos, blocks of code, diagrams, illustrations, or other self-contained media. 
    * The < figcaption > element represents a caption describing the rest of the contents of its parent figure element.
        * Adds a caption that displays at the top of, bottom of, or anywhere within the figure element; 
        * figcaption may only appear once. 

## What did you learn?
Reading: I learned that specifying an image's height will automatically adjust the width, and vice versa. This maintains aspect ratio of the image. I learned the differences between jpg and png images, and jpg sounds the best overall. I have a better understanding of how to position images. I was able to embed audio, video, and even other pages. I am not too sure where I would use figure and figcaption, but it is nice to know these elements exist.

Project: Two main things changed in this practice. I embedded images in the learn.html and embedded content from google maps in the build.html. I now have a better idea on how to embed different medias onto a page.

## Project link
The most recent link:
https://100devsconference-09.netlify.app/