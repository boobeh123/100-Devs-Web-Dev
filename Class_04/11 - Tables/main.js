/**************************************************************
* TABLES
***************************************************************/
/*
HTML tables were created to provide a way to mark up 
structured tabular data and to display that data

The <table> element represents data presented 
in a two-dimensional table comprised of rows and columns.

Once a table has been defined in HTML, table rows may be added. 
The <tr> element defines a row of cells in a table. A table may have multiple table rows.

Once rows within table have been set up, data cells may be added.
The <td> element defines a cell of a table that contains data.  

To designate a heading for a column or row of cells, table headers may be added.
The <th> element defines a cell as header of a group of table cells. 
The exact nature of this group is defined by the scope and headers attributes.

td has similarities to paragraphs 
th has similarities to headings

The scope attribute helps to identify exactly what content a table header relates to. 
The scope attribute indicates whether a table header applies to a row or column. 
The col value represents that every cell within the column relates directly to that table header.
The row value represents that every cell within the row relates directly to that table header.

Using the <th> element with the scope attribute helps screen readers.

The headers attribute contains a list of space-separated strings, 
each corresponding to the id attribute of the <th> elements that apply to this element.
*/
/**************************************************************
* TABLES
***************************************************************/




/**************************************************************
* STRUCTURING A TABLE
***************************************************************/
/*
Knowing how to build a table and arrange data is extremely powerful;
there are a few elements to help us organize the data of a table. 

The <caption> element provides a caption or title for a table. 

Using a table head, table body, and a table foot provide structured tables.

The table head should be placed near the top of a table, 
after the <caption> element and before the <tbody> element.
The <thead> element defines a set of rows defining the head of the columns of the table.

The <tbody> element encapsulates a set of table rows (<tr> elements), 
indicating that they comprise the body of the table (<table>).

The <tfoot> element defines a set of rows summarizing the columns of the table.

The <td> or <th> elements have colspan & rowspan attributes. 
These attributes can combine two or more cells into one, without breaking the row & column layout.
The colspan attribute is used to span a single cell across multiple columns.
The rowspan attribute is used to span a single cell across multiple rows. 
*/
/**************************************************************
* STRUCTURING A TABLE 
***************************************************************/




/**************************************************************
* STYLING A TABLE 
***************************************************************/
/*
Effective use of borders can help make tables more comprehensible. 
Borders around a table or individual cells can make a large impact when a user is looking for information. 

The border-collapse property sets whether cells inside a <table> have shared or separate borders.
Border-collapse's default value is separate. Every border stacks up next to one another. 
Border-collapse's collapse value, condenses the borders into one. Choosing the table cell as the primary border.

The border-spacing property sets the distance between the borders of adjacent cells in a <table>. 
This property applies only when border-collapse is separate.

Border-bottom can be used to add borders to rows.

One design practice to make tables more legible, 
is to “stripe” table rows with alternating background colors. 
One way to do this is to place a class on every other <tr> element 
and set a background color to that class.
Another way, is to use the :nth-child pseudo-class selector 
with an even or odd argument to select every other <tr> element.

The alignment of horizontal & vertical text cells helps with table formatting. 
Names and descriptions are commonly far left. Numbers are far right. Other information may be centered. 

The vertical-align property sets vertical alignment of an inline, inline-block or table-cell box.
*/
/**************************************************************
* STYLING A TABLE  
***************************************************************/