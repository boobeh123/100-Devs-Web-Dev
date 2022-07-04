## Summary:
The concepts covered in this chapter:
* Emphasizes keeping code lean and well organized.
    * The goal is to write well-structured and standards-compliant markup. 
    * Providing a comment keeps our code organized.     
        * We can use comments to build a table of contents.
    * Overall we need to keep our code well documented. 
        * If a specific part of our code is more complex, explain how it works and what it applies to within comments. 
* Creating accessible websites
    * HTML is large with over 100 elements available. 
    * We need to ensure we are using the proper semantic elements.
    * Always be sure to the use proper document structure.
* HTML Classes - Creating ID and class values should relate to the content itself and not the style of the content.
* Image alt attribute - Images should always include the alt attribute. 
    * Screen readers and other accessibility software rely on the alt attribute to provide context for images.
    * The alt attribute value should be very descriptive of what the image contains. 
* Separation of Concerns:
    * Avoid using inline styles within HTML. 
        * Pages will take longer to load, are difficult to maintain. 
    * Use external stylesheet
* CSS Classes: 
    * Should be reusuable and available to share across elements.
    * Should relate to content within an element and not appearance.
    * Should be all lowercase and should use hyphen delimiters.
* High specificity weight: 
    * The longer a selector is and the more prequalifiers it includes, the higher specificity it will contain.
    * The higher the specificity the more likely a selector is to break the cascade and cause issues.
* Remove the unit from any zero value. Zero is always zero, no matter which unit is being used—pixels, percentages, rem.

## What did you learn?
This chapter expresses the importance of documenting ones code and to keep code organized. I learned how to structure semantic & accessible webpages. I have a better understand about how classes or IDs should relate to content instead of a style or appearance. I have a better understanding that higher specificity weights are more likely to cause issues when changes are introduced.

## Project link
The final link:
https://100devsconference-11.netlify.app/