/**************************************************************
* Responsive Web Design
***************************************************************/
/*
The growth of mobile usage is out pacing the growth of desktop usage.
With mobile Internet usage comes the question of how to build websites suitable for all devices. 

Responsive web design is the practice of building a website suitable to work on every device and every screen size.

Responsive web design means to react quickly and positively to any change.
Responsive web design favors designs that dynamically adapt to different browser & device viewports, changing layout and content along the way. 

Adaptive web design means to be easily modified for a new purpose or situation, such as change. 
Adaptive websites are built to a group of preset factors. 

A combination of the two is ideal. 
*/
/**************************************************************
* Responsive Web Design
***************************************************************/




/**************************************************************
* Flexible Layouts
***************************************************************/
/*
Responsive web design is broken down into three main components, 
including flexible layouts, media queries, and flexible media. 

A flexible layout is the practice of building a website's layout with a flexible grid, capable of dynamically resizing to any width. 
Flexible grids are built using relative length units, most commonly percentages or em units. 

A few other relative length units that relate to the viewport size of the browser or device:
vw - 1vw is equal to 1% of the viewport's width.
vh - 1vh is equal to 1% of the viewport's height.   
vmin - Represents in percentage the smaller of vw and vh. Represents the viewport-percentage length unit based on the browser default viewport size.
vmax - Represents in percentage the larger of vw and vh. Represents the viewport-percentage length unit based on the browser default viewport size.

Flexible layouts should not use fixed measurement units (px) due to viewport height & width on varying devices.
The min-width, max-width, min-height, and max-height properties help with flexible layouts.

min-width sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
max-width sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
min-height sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
max-height sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
*/
/**************************************************************
* Flexible Layouts
***************************************************************/




/**************************************************************
* Media Queries, Media Types, Logical Operators, Media Features
***************************************************************/
/*
Media queries provide the ability to specify different styles 
for browser and device circumstances, the width of the viewport or device orientation. 

Using the @media rule initializes the media query.
It is recommend to use the @media rule inside of an existing style sheet.

Each media query may include a media type followed by one or more expressions. 
Media types describe the general category of a device. A few media types:
all - Suitable for all devices.
screen - Intended primarily for screens.
print - Intended for paged material and documents viewed on a screen in print preview mode.

The logical operators not, and, and only can be used to compose a complex media query. 
You can also combine multiple media queries into a single rule by separating them with commas.
A few logical operators:
and - Used for combining multiple media features together into a single media query. It is also used for joining media features with media types.
not - Used to negate a media query, returning true if the query would otherwise return false. When using the not operator, specify the media type.
only - Applies a style only if an entire query matches. It is useful for preventing older browsers from applying selected styles. When using the only operator, specify the media type.

Media features identify what attributes or properties will be targeted within the media query expression.

One media feature involves determining the height or width for a device viewport. 

The orientation media feature can be used to test the orientation of the viewport (or the page box, for paged media).
Portrait mode - The viewport is in a portrait orientation. The height is greater than or equal to the width.
Landscape mode - The viewport is in a landscape orientation. The width is greater than the height.

The aspect-ratio media feature can be used to test the aspect ratio of the viewport.                                                    Accepts the min-aspect-ratio and max-aspect-ratio prefixes.
The resolution media feature can be used to test the pixel density of the output device.                                                Accepts the min and max prefixes. 

The color CSS media feature can be used to test the number of bits per color component (red, green, blue) of the output device.         Accepts min-color and max-color prefixes
The color-index media feature can be used to test the number of entries in the output device's color lookup table.                      Accepts min-color-index and max-color-index prefixes.
The monochrome CSS media feature can be used to test the number of bits per pixel in the monochrome frame buffer of the output device.  Accepts min-monochrome and max-monochrome prefixes

Using media queries we will now refactor the flexible layout we built previously. 
One of the current problems within the demo appears when the aside width becomes uselessly small within smaller viewports. 
Adding a media query for viewports under 420 pixels wide 
we can change the layout by turning off the floats and changing the widths of the section and aside.

Your instinct might be to write media query breakpoints around common viewport sizes, such as 320px, 480px, 768px, 1024px, 1224px. This is a bad idea.
Breakpoints should only be introduced when a website starts to break, look weird, or the experience is being hampered.
Building a responsive website should adjust to an array of different viewport sizes. 
*/
/**************************************************************
* Media Queries, Media Types, Logical Operators, Media Features
***************************************************************/




/**************************************************************
* Mobile First
***************************************************************/
/*
The mobile first approach uses styles targeting smaller viewports as the default style for a website, 
then using media queries to add styles as the viewport grows.

The belief behind mobile first is that a mobile device shouldn’t have to load styles for a desktop.

Downloading unnecessary media can be stopped by using media queries. 
Avoid CSS3 shadows, gradients, transforms, and animations on mobile.

The "viewport" <meta> tag controls the viewport's size and shape. Accepts multiple values by comma separating 
It is recommend that you use the default value of device-height and device-width.
It is recommend to use the CSS @rule over the HTML viewport meta tag. This provides a more semantic approach.

To control how a website is scaled on a mobile device, these properties are available:
initial-scale - Controls the zoom level when the page is first loaded. 
minimum-scale - Controls how much zoom out is allowed on the page.
maximum-scale - Controls how much zoom in is allowed on the page. Any value less than 3 fails accessibility.
user-scalable - Controls whether zoom in and zoom out actions are allowed on the page. Default: 1. Setting the value to 0, is against Web Content Accessibility Guidelines (WCAG).

Using the target-densitydpi viewport value is rare, but extremely helpful when pixel by pixel control is needed.
*/
/**************************************************************
* Mobile First
***************************************************************/




/**************************************************************
* Flexible Media
***************************************************************/
/*
Responsive web design involves flexible media. 
One way to make media scalable is by using the max-width property with a value of 100%. 

The max-width property doesn’t work well for iframes and embedded media. 

Responsive embedded media requires the embedded element to be absolutely positioned within a parent element. 
The parent element needs to have a width of 100% and a height of 0. This to trigger the hasLayout mechanism.

Padding is then given to the bottom of the parent element. This allows the height of the parent element to be proportionate to its width. 
*/
/**************************************************************
* Flexible Media
***************************************************************/




