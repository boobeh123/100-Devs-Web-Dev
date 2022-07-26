## Summary:
The concepts covered in this chapter:

* CSS3 introduced the ability to write behaviors for transitions & animations, without the use of JavaScript.
    * CSS Transitions is a module of CSS that lets you create gradual transitions between the values of specific CSS properties. 
* Transition-property CSS property: 
    * Sets the CSS properties to which a transition effect should be applied.
    * Vendor prefixes exist for this property.
    * Multiple properties can be used by separating values with a comma.
* Transition-duration CSS property:
    * Sets the length of time a transition animation should take to complete. 
    * Vendor prefixes exist for this property.
    * Multiple durations can be used by separating values with a comma.
* Transition-timing-function CSS property: 
    * Sets how intermediate values are calculated for CSS properties being affected by a transition effect.
    * Vendor prefixes exist for this property.
    * Multiple durations can be used by separating values with a comma.
* Transition-delay CSS property:
    * Specifies the duration to wait before starting a property's transition effect when its value changes.
    * Multiple durations can be used by separating values with a comma.
* Shorthand transition property: 
    * Shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.
* Animations - Animate transitions from one CSS style configuration to another. 
    * Consists of two components:
        * Style describing the CSS animation.
        * Set of keyframes that indicate the start.
* @keyframes at-rule - Controls the CSS animation sequence by defining styles for keyframes along the animation sequence.
    * This gives more control over the intermediate steps of the animation sequence than transitions.
    * The different keyframe breakpoints are set using percentages, starting at 0% and working to 100% with an intermediate breakpoint at 50%. 
    * The element properties to be animated are listed inside each of the breakpoints.
        * Animations can only apply a transition within a single property, not from one property to another.
* Animation-name CSS Property:
    * Specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element.
* Animation-duration CSS property: 
    * Sets the length of time that an animation takes to complete one cycle.
* Animation-timing-function CSS property: 
    * Sets how an animation progresses through the duration of each cycle.
* The animation-delay CSS property:
    * Specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. 
    * The animation can start later, immediately from its beginning, or immediately and partway through the animation.
* Animation-iteration-count CSS property:
    * Sets the number of times an animation sequence should be played before stopping.
* Animation-direction CSS property:
    * Sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
* Animation-play-state CSS property:
    * Sets whether an animation is running or paused.    
* Animation-fill-mode CSS property:
    * Sets how a CSS animation applies styles to its target before and after its execution.
* Animation shorthand CSS property: Applies an animation between styles. 
    * It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.

## Lessons learned:
This chapter is really dang cool!! 
I didn't know a thing about transitions or animations. 

I built a transition that I want to use on an upcoming project. 
This transition will be applied to a "pop-up notice" after the notice has been X'ed out.
I have also built a card flip animation that could be used for further projects!

Reading this chapter has given me many ideas to bring my web apps to life.
Clone my repo and take a peek!

## Source:
https://learn.shayhowe.com/advanced-html-css/transitions-animations/