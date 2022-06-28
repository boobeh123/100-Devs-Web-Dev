/**************************************************************
* ADDING AN IMAGE & RESIZING AN IMAGE
***************************************************************/
/*
HTML provides a way to embed media in the form of images, audio, videos, and inline frames.
CSS provides another way to embed images.

The <img> element embeds an image into the document. This is an inline element.
    * The src attribute is required, and contains the path to the image you want to embed.
        * The src attribute value is a URL or path.
    * The alt attribute holds a text description of the image. Useful for screen readers and accessibility.
        * Text is displayed if the image is not loaded.
The background-image CSS property assigns an image to an element. 

The <img> element within HTML is the preferred option 
when the image being used holds semantic value 
and its content is relevant to the content of the page.

The background property is the preferred option 
when the image being used is part of the design or user interface of the page. 

Images may be re-sized using the height & width properties in CSS. 
When both the HTML attributes and CSS properties are used to resize an image, 
the CSS will take priority over the HTML.

Setting a height causes the width to adjust automatically. This occurs to maintain aspect ratio of the image. 
Setting both a height & width works. This may break the aspect ratio of an image. The image may appear distorted.   

There are a variety of image file formats.
The most common formats supported are gif, jpg, and png images. 

The jpg format provides quality images with high color counts while maintaining a decent file size. 
Jpg images are used for photographs and are ideal for faster load times. 

The png format is great for images with transparencies or low color counts. 
Png images are used for icons or background patterns.
*/
/**************************************************************
* ADDING AN IMAGE & RESIZING AN IMAGE
***************************************************************/




/**************************************************************
* POSITIONING IMAGES
***************************************************************/
/*
We can position images by using floats, display properties, and box model properties.

Adding an image to the page positions the image in the same line as the content that surrounds it. Images are inline elements by default.

Setting the image display property to block makes the image appear on its own line, 
allowing the surrounding content to be positioned above and below the image.

We use the float property to position an image on the left or right side of its containing element.
*/
/**************************************************************
* POSITIONING IMAGES
***************************************************************/




/**************************************************************
* ADDING AUDIO
***************************************************************/
/*
HTML5 provides a quick and easy way to add audio files to a website.

The <audio> element is used to embed sound content in documents. 
    * The src attribute is required, and contains the path to the media you want to embed.
        * The src attribute value is a URL or path.
    * The source element specifies multiple media resources for <picture>, <audio>, <video> elements.
        * It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers.
    * It may contain one or more audio sources. 
        * The three most supported audio formats are ogg, mp3, and wav. 
    * autoplay, controls, and loop attributes are all boolean attributes. 
        * When each attribute is present its value will be set to true.
        * Using the controls attribute displays pause, play, volume control interfaces.
        * Using the loop attribute causes the audio to repeat, from beginning to end.
    * preload attribute helps identify information about the audio file.
        * Using metadata or none value when an audio file is not essential to a page. 
            * It’ll help to conserve bandwidth and allow pages to load faster.

*/
/**************************************************************
* ADDING AUDIO
***************************************************************/




/**************************************************************
* ADDING VIDEO
***************************************************************/
/*
HTML5 also introduced the <video> element, which share similarities with the <audio>.

The <video> element embeds a media player which supports video playback into the document. 
    * The src attribute is required, and contains the path to the media you want to embed.
        * The src attribute value is a URL or path.
    * The source element specifies multiple media resources for <picture>, <audio>, <video> elements.
        * It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers.
    * autoplay, controls, and loop attributes are all boolean attributes. 
        * When each attribute is present its value will be set to true.
        * Using the controls attribute displays pause, play, volume control interfaces.
    * Specify width or height when adding a video.
    * Poster attribute:
        * A URL for an image to be shown while the video is downloading. 
            * If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.

The <iframe> element represents a nested browsing context, embedding another HTML page into the current one.
*/
/**************************************************************
* ADDING VIDEO
***************************************************************/




/**************************************************************
* FIGURES & CAPTIONS
***************************************************************/
/*
HTML5 came the introduction of the <figure> and <figcaption> elements. 

The <figure> element represents self-contained content. The figure, its caption, and its contents are referenced as a single unit.
The <figcaption> element represents a caption describing the rest of the contents of its parent <figure> element.

<figure> may surround images, audio clips, videos, blocks of code, diagrams, illustrations, or other self-contained media. 
<figcaption> adds a caption that displays at the top of, bottom of, or anywhere within the <figure> element; it may only appear once. 

Additionally, the <figcaption> element may replace an <img> element’s alt attribute 
if the content of the <figcaption> element provides a useful description of the visual content of the image.
*/
/**************************************************************
* FIGURES & CAPTIONS
***************************************************************/