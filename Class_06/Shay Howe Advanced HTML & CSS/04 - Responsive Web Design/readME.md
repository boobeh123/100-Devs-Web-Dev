## Summary:
The concepts covered in this chapter:
* Adaptive web design - Means to be easily modified for a new purpose or situation, such as change. 
* Responsive web design - The practice of building a website suitable to work on every device and every screen size.
    * It is ideal for a website to be adaptive and responsive.
    * Reacts quickly and positively to any change.
    * Favors designs that dynamically adapt to different browser & device viewports, changing layout and content along the way. 
* Flexible Layouts - The practice of building a website's layout with a flexible grid, capable of dynamically resizing to any width. 
    * Built using relative length units, should not use fixed length units
* Relative length units:
    * vw - 1vw is equal to 1% of the viewport's width.
    * vh - 1vh is equal to 1% of the viewport's height.   
    * vmin - Represents in percentage the smaller of vw and vh.
    * vmax - Represents in percentage the larger of vw and vh.
    * min-width - Sets the minimum width of an element.
    * max-width - Sets the maximum width of an element.
    * min-height - Sets the minimum height of an element.
    * max-height - Sets the maximum height of an element.
* Media queries - Provide the ability to specify different styles for browser and device circumstances, the width of the viewport or device orientation. 
    * Each media query may include a media type followed by one or more expressions. 
* Media types - Describe the general category of a device.
    * all - Suitable for all devices.
    * screen - Intended primarily for screens.
    * print - Intended for paged material and documents viewed on a screen in print preview mode.
* Logical operators - Can be used to compose a complex media query. 
    * and - Used for combining multiple media features together into a single media query. 
    * not - Used to negate a media query, returning true if the query would otherwise return false.
    * only - Applies a style only if an entire query matches. 
* Media features - Identify which attributes or properties will be targeted within the media query expression.
* The orientation media feature - Can be used to test the orientation of the viewport.
    * Portrait mode - The viewport is in a portrait orientation. The height is greater than or equal to the width.
    * Landscape mode - The viewport is in a landscape orientation. The width is greater than the height.
* The aspect-ratio media feature - Can be used to test the aspect ratio of the viewport.
* The resolution media feature - Can be used to test the pixel density of the output device.
* The color media feature - Can be used to test the number of bits per color component of the output device.
* The color-index media feature - Can be used to test the number of entries in the output device's color lookup table.
* The monochrome media feature - Can be used to test the number of bits per pixel in the monochrome frame buffer of the output device.
* The mobile first approach - Uses styles targeting smaller viewports as the default style for a website, then using media queries to add styles as the viewport grows.
* The "viewport" < meta > tag - Controls the viewport's size and shape. 
    * Use the default value of device-width and device-height.
    * initial-scale - Controls the zoom level when the page is first loaded. 
    * minimum-scale - Controls how much zoom out is allowed on the page.
    * maximum-scale - Controls how much zoom in is allowed on the page. Any value less than 3 fails accessibility.
    * user-scalable - Controls whether zoom in and zoom out actions are allowed on the page. Setting to 0 is against Web Content Accessibility Guidelines (WCAG).
    * target-densitydpi viewport value is helpful when pixel by pixel control is needed.
* Flexible media:
    * One way to make media scalable is by using the max-width property with a value of 100%. 
    * The max-width property doesn’t work well for iframes and embedded media. 
* Responsive embedded media - Requires the embedded element to be absolutely positioned within a parent element. 

## What did you learn?
The takeaway here is learn the mobile first approach. The look on my face when I realized I could write the mobile styles as the default and use media queries to scale up. I am glad to have read this chapter in its entirety. I am curious if the orientation media feature is commonly used?

## Source:
https://learn.shayhowe.com/advanced-html-css/responsive-web-design/