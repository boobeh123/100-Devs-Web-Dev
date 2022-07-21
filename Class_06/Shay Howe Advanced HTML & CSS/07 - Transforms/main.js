/**************************************************************
* Transforms
***************************************************************/
/*
The transform CSS property lets you rotate, scale, skew, or translate an element. 
It modifies the coordinate space of the CSS visual formatting model.
It has two different settings, two-dimensional and three-dimensional. 

Including multiple prefixes to support the transform property is encouraged.
Declare the un-prefixed property last to overwrite the prefixed versions,
should a browser fully support the transform property.
*/
/**************************************************************
* Transforms
***************************************************************/




/**************************************************************
* Transforms - 2D / Two-Dimensional
***************************************************************/
/*
The transform property accepts a rotate, scale, skew, or translate value.

Rotate: Provides the ability to rotate an element from 0 to 360 degrees. 
Scale: Provides the ability to change the appeared size of an element. 
    - It is possible to scale only the height or width of an element 
    - Using the scaleX & scaleY values and scale elements at different sizes.
Translate: Provides the ability to push & pull an element in different directions, without interrupting the normal flow of the document. 
    - Using the translateX & translateY values changes the position of an element on the horizontal or vertical axis 
Skew: Provides the ability to distort elements on the horizontal axis, vertical axis, or both. 
    - Using the skewX & SkewY values distorts an element on the horizontal or vertical axis.

The transform property may combine multiple values together by 
listing values one after the other without the use of commas.
Using multiple transform declarations will not work.

The transform-origin CSS property sets the origin for an element's transformations.

The transform-origin property & the transform property with translate value
used together may cause undesired issues. Both attempt to position the element.
*/
/**************************************************************
 Transforms - 2D / Two-Dimensional
 ***************************************************************/




/**************************************************************
* Transforms - 3D / Three-Dimensional
***************************************************************/
 /*
Three-dimensional transforms work on the x, y, and z axes. 
These three-dimensional transforms define the length, width and depth of an element.

Three-dimensional transforms need a perspective from which to transform. 
The perspective CSS property determines the distance between the z=0 plane 
and the user in order to give a 3D-positioned element some perspective.

The perspective of an element can be set in two different ways. 
One way includes using the perspective value within the transform property on individual elements,
The other includes using the perspective property on the parent element residing over child elements being transformed.

When you want to transform a group of elements all with the same perspective, 
apply the perspective property to their parent element.

The perspective-origin CSS property determines the position 
at which the viewer is looking. 
It is used as the vanishing point by the perspective property.

Skew is the one two-dimensional transform that cannot be transformed 
on a three-dimensional scale. 

The properties for shorthand 3D transforms include:
rotate3d
scale3d
transition3d
matrix3d. 

The transform-style CSS property sets whether children of an element 
are positioned in the 3D space or are flattened in the plane of the element.
The transform-style property needs to be placed on the parent element, 
above any nested transforms. 

3D transform elements could be transformed in a way that causes them to face 
away from the screen.
The backface-visibility CSS property sets whether the back face of an element
is visible when turned towards the user.
The backface-visibility property takes even more significance when using animations.
*/
/**************************************************************
* Transforms - 3D / Three-Dimensional
***************************************************************/