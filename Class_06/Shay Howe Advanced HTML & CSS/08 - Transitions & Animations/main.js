/**************************************************************
* Transitions
***************************************************************/
/*
CSS3 introduced the ability to write behaviors 
for transitions & animations, without the use of JavaScript. 

Transitions have the potential to alter the appearance and behavior 
of an element whenever a state change occurs, such as when it is 
hovered over, focused on, active, or targeted.

CSS Transitions is a module of CSS that lets you create 
gradual transitions between the values of specific CSS properties. 
The behavior of these transitions can be controlled 
by specifying their timing, duration, and other attributes.

For a transition to take place, an element must have a change in state, 
and different styles must be identified for each state. 

The transition-property CSS property:
Sets the CSS properties to which a transition effect should be applied.
(prefixes - -webkit-transition-property, -moz-transition-property, -o-transition-property)

The transition-duration CSS property:
Sets the length of time a transition animation should take to complete. 
By default, the value is 0s, meaning that no animation will occur.
prefixes - -webkit-transition-duration, -moz-transition-duration, -o-transition-duration

The transition-timing-function CSS property: 
Sets how intermediate values are calculated for CSS properties being affected 
by a transition effect.
(prefixes - -webkit-transition-timing-function, -moz-transition-timing-function, -o-transition-timing-function)

The transition-delay CSS property:
Specifies the duration to wait before starting a property's transition effect
when its value changes.

The transition-property, transition-duration, & transition-timing-function all
have vendor prefixes.
*/
/**************************************************************
* Transitions
***************************************************************/




/**************************************************************
* Transition-property
***************************************************************/
/*
The transition-property property determines exactly what properties will be altered 
in conjunction with the other transitional properties. 

If multiple properties need to be transitioned 
they may be comma separated within the transition-property value.

Not all properties may be transitioned.

background-color    background-position     border-color
border-width        border-spacing          bottom
clip                color                   crop
font-size           font-weight             height
left                letter-spacing          line-height
margin              max-height              max-width
min-height          min-width               opacity
outline-color       outline-offset          outline-width
padding             right                   text-indent
text-shadow         top                     vertical-align
visibility          width                   word-spacing
z-index
*/
/**************************************************************
* Transition-property
***************************************************************/




/**************************************************************
* Transition-duration
***************************************************************/
/*
The duration in which a transition takes place is set using 
the transition-duration property. 

When transitioning multiple properties you can set multiple durations, 
one for each property. 
*/
/**************************************************************
* Transition-duration
***************************************************************/




/**************************************************************
* Transition-timing-function
***************************************************************/
/*
The transition-timing-function property is used to set the speed 
in which a transition will move. 

Knowing the duration from the transition-duration property 
a transition can have multiple speeds within a single duration. 

A few of the more popular keyword values for the transition-timing-function 
property include:
     linear: Constant speed from one state to another. 
    ease-in: Starts slowly and speeds up throughout the transition.
   ease-out: Starts quickly and slows down throughout the transition.
ease-in-out: Starts slowly, speeds up in the middle, then slows down again before ending.

When transitioning multiple properties, you can set multiple timing functions. 
*/
/**************************************************************
* Transition-timing-function
***************************************************************/




/**************************************************************
* Transition-delay
***************************************************************/
/*
The delay that determines how long a transition should be stalled before executing. 

As with all other transition properties, to delay numerous transitions, 
each delay can be declared as comma separated values.
*/
/**************************************************************
* Transition-delay
***************************************************************/




/**************************************************************
* Shorthand transitions
***************************************************************/
/*
The transition CSS property is a shorthand property for 
transition-property, transition-duration, transition-timing-function, 
and transition-delay.
*/
/**************************************************************
* Shorthand transitions
***************************************************************/




/**************************************************************
* Animations
***************************************************************/
/*
Animations pick up where transitions leave off.
When more control is required, transitions need to have multiple states. 

CSS animations make it possible to animate transitions from one CSS style configuration 
to another. 
Animations consist of two components, 
a style describing the CSS animation and 
a set of keyframes that indicate the start 
and end states of the animation's style, as well as possible intermediate waypoints.
*/
/**************************************************************
* Animations 
***************************************************************/




/**************************************************************
* Animation Keyframes
***************************************************************/
/*
The @keyframes CSS at-rule controls the intermediate steps 
in a CSS animation sequence by defining styles for keyframes (or waypoints) 
along the animation sequence. 
This gives more control over the intermediate steps of the animation sequence 
than transitions.

To set multiple points at which an element should undergo a transition, 
use the @keyframes rule. 
The @keyframes rule includes the animation name, any animation breakpoints, 
and the properties intended to be animated.
The @keyframes rule must be vendor prefixed:
@-moz-keyframes@-o-keyframes@-webkit-keyframes

The different keyframe breakpoints are set using percentages, 
starting at 0% and working to 100% with an intermediate breakpoint at 50%. 

The element properties to be animated are listed inside each of the breakpoints.

Individual properties may be animated. 
Animations can only apply a transition within a single property, not from one property to another.
*/
/**************************************************************
* Animation Keyframes
***************************************************************/




/**************************************************************
* Animation Name
***************************************************************/
/*
Once the keyframes for an animation have been declared 
they need to be assigned to an element. 

The animation-name CSS property specifies the names of one or more @keyframes at-rules 
describing the animation or animations to apply to the element.
*/
/**************************************************************
* Animation Name
***************************************************************/




/**************************************************************
* Animation Duration, timing-function, delay
***************************************************************/
/*
Once you have declared the animation-name property on an element, 
animations behave similarly to transitions. 

They include a duration, timing function, and delay if desired. 

To start, animations need a duration declared using 
the animation-duration property. 

The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.

The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.

The animation-delay CSS property specifies the amount of time to wait 
from applying the animation to an element before beginning to perform the animation. 
The animation can start later, immediately from its beginning, or immediately and partway through the animation.
*/
/**************************************************************
* Animation Duration, timing-function, delay
***************************************************************/




/**************************************************************
* Animation Iteration
***************************************************************/
/*
Animations also provide the ability to further customize an element’s behavior, 
including the ability to declare the number of times an animation runs, 
as well as the direction in which an animation completes.

By default, animations run their cycle once from beginning to end 
and then stop. 

The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping.
*/
/**************************************************************
* Animation Iteration
***************************************************************/




/**************************************************************
* Animation Direction
***************************************************************/
/*
You may also declare the direction an animation completes using 
the animation-direction property. 

Values for the animation-direction property include:
           normal: Animation plays forwards each cycle (resets to beginning state)
          reverse: Animation plays backwards each cycle (resets to the end state)
        alternate: Animation reverses direction each cycle (first iteration plays forward)
alternate-reverse: Animation reverses direction each cycle (first iteration plays backward)
*/
/**************************************************************
* Animation Direction
***************************************************************/




/**************************************************************
* Animation Play State
***************************************************************/
/*
The animation-play-state CSS property sets whether an animation is running or paused.
*/
/**************************************************************
* Animation Play State
***************************************************************/




/**************************************************************
* Animation Fill Mode
***************************************************************/
/*
The animation-fill-mode CSS property sets how a CSS animation applies 
styles to its target before and after its execution.

The animation-fill-mode property identifies how an element should be styled 
either before, after, or before and after an animation is run. 

The animation-fill-mode property accepts four keyword values, including
     none: Won't apply any styles to an element before or after an animation has been run.
 forwards: Apply the styles declared within the last specified keyframe. 
backwards: Apply the styles declared within the first specified keyframe.
     both: Apply the behaviors from both the forwards and backwards values.
*/
/**************************************************************
* Animation Fill Mode
***************************************************************/




/**************************************************************
* Shorthand Animations
***************************************************************/
/*
The animation shorthand CSS property applies an animation between styles. 

It is a shorthand for animation-name, animation-duration, 
animation-timing-function, animation-delay, animation-iteration-count, 
animation-direction, animation-fill-mode, and animation-play-state.
*/
/**************************************************************
* Shorthand Animations
***************************************************************/