## Summary:
The concepts covered in this chapter:
* The < table > element - Represents data presented in a two-dimensional table comprised of rows and columns.
    * The < tr > element - Defines a row of cells in a table. 
        * A table may have multiple table rows.
    * The < td > element - Defines a cell of a table that contains data.
        * The colspan attribute is used to span a single cell across multiple columns.
        * The rowspan attribute is used to span a single cell across multiple rows. 
    * The < th > element - Defines a cell as header of a group of table cells. 
        * Helps screen readers.
        * The scope attribute:
            * Helps to identify exactly what content a table header relates to. 
            * Indicates whether a table header applies to a row or column. 
                * The col value represents that every cell within the column.
                * The row value represents that every cell within the row.
        * The headers attribute:
            * Contains a list of space-separated strings, each corresponding to the id attribute of the < th > elements that apply to this element.
        * The colspan attribute is used to span a single cell across multiple columns.
        * The rowspan attribute is used to span a single cell across multiple rows. 
* Structuring a table:
    * The < caption > element - Provides a caption or title for a table. 
    * The < thead > element - Defines a set of rows defining the head of the columns of the table.
    * The < tbody > element - Encapsulates a set of table rows, indicating that they comprise the body of the table.
    * The < tfoot > element - Defines a set of rows summarizing the columns of the table.
* Styling a table:
    * The border-collapse property - Sets whether cells inside a < table > have shared or separate borders.
        * Default value is separate.
        * Collapse value - Condenses the borders into one. Choosing the table cell as the primary border.
    * The border-spacing property - Sets the distance between the borders of adjacent cells in a < table >. 
    * This property applies only when border-collapse is separate.
    * Striping - A design practice to make tables more legible by recoloring table rows with alternating colors.
        * Place a class on every other < tr > element and set a background color.
        * Use the :nth-child pseudo-class selector with an even or odd argument.
    * The vertical-align property - Sets vertical alignment of an inline, inline-block or table-cell box.
        * The alignment of horizontal & vertical text cells helps with table formatting. 




## What did you learn?
Reading: I am pleased with this chapters use of pseudoclasses. I selected various elements and targeted their nth-child, first, or last-child. I learned how to initialize a table. I mimiced an invoice / receipt while creating my table. I structured this table using thead,tbody,and tfoot. I learned "Striping", a design practice to make tables more legible. 


## Project link
The most recent link:
https://100devsconference-11.netlify.app/