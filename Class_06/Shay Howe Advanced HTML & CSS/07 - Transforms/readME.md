## Summary:
The concepts covered in this chapter:

* Transform property (2D) - Allows you to rotate, scale, skew, or translate an element.
    * Property has two settings, two-dimensional & three-dimensional. 
    * May combine multiple values together
    * Including multiple prefixes to support the transform property is encouraged.
    * Values for transform (2D):
        * Rotate - Provides the ability to rotate an element from 0 to 360 degrees. 
        * Scale - Provides the ability to change the appeared size of an element. 
        * Translate - Provides the ability to push & pull an element in different directions, without interrupting the normal flow of the document. 
        * Skew - Provides the ability to distort elements on the horizontal axis, vertical axis, or both. 
* Transform-origin property - Sets the origin for an element's transformations.
    * Using this with transform: translate() may cause undesired results.
* Perspective - The perspective of an element can be set in two different ways. 
    * The perspective property - Determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
        * Use this property on the parent element residing over child elements being transformed.
        * Can be used to transform a group of elements
    * The transform property & perspective value - Used on an individual element.
* Perspective-origin property - Determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.
* Transform property (3D) - Allows you to rotate, scale, or translate an element. Defines the length, width, and depth of the element.
    * Requires perspective.
    * The skew value cannot be used on three-dimensional scale.
* The transform-style property - Sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
    * The transform-style property needs to be placed on the parent element, above any nested transforms. 
* The backface-visibility property - Sets whether the back face of an element is visible when turned towards the user.
    * This property takes even more significance when using animations.

## Lessons learned:
This chapter deeply covers the transform property. 
It shows you how to use it on a two-dimensional & three-dimensional scale. It provides a variety of associated properties that either compliments the end result or requires the help of other properties.

While going through this chapter, I had trouble connecting the dots (still do) on where the transform property would be used in. Nonetheless, it is good to know what it's capable of and how to use it. 

P.S. There are additional resources to learn even deeper about 2D & 3D transforms.

## Source:
https://learn.shayhowe.com/advanced-html-css/css-transforms/