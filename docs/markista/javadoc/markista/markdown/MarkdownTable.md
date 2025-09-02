Package [io.github.sandydunlop.markista.markdown](index.md)

# Class MarkdownTable
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.MarkdownTable<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __MarkdownTable__</span>

A utility class for creating tables in Markdown documents.

This class allows adding columns with headings and rows with data.
It automatically calculates column widths to align the table content.

The table can be rendered as Markdown text to a Writer, optionally with indentation for nested formatting.


## Nested Class Summary

| Modifier and Type | Class                                           | Description                                                         |
|-------------------|-------------------------------------------------|---------------------------------------------------------------------|
| public            | [MarkdownTable.Column](MarkdownTable.Column.md) | A class to represent the name and width of a column within a table. |



## Field Summary

| Modifier and Type                                                                                                                         | Field               | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-------------|
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MarkdownTable.Column](MarkdownTable.Column.md)> | [columns](#columns) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<java.lang.String[][]>                            | [rows](#rows)       |             |



## Constructor Summary

| Constructor     | Description                        |
|-----------------|------------------------------------|
| MarkdownTable() | Constructs an empty MarkdownTable. |



## Method Summary

| Modifier and Type                        | Method                                                                                                                           | Description                                                                           |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| public [MarkdownTable](MarkdownTable.md) | [addColumn](#addcolumn)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) heading)    | Adds a column with the specified heading to the table.                                |
| public [MarkdownTable](MarkdownTable.md) | [addRow](#addrow)(java.lang.String[][] valueStrings)                                                                             | Adds a row of data to the table.                                                      |
| public void                              | [render](#render)([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer)             | Renders the table as Markdown text without any indentation.                           |
| public void                              | [render](#render)([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer, int indent) | Renders the table as Markdown text with a given indentation level (number of spaces). |



## Field Details

### columns

<span style="font-family: monospace; font-size: 80%;">[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MarkdownTable.Column](MarkdownTable.Column.md)> __columns__</span>




---

### rows

<span style="font-family: monospace; font-size: 80%;">[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<java.lang.String[][]> __rows__</span>




---


## Method Details

### addColumn

<span style="font-family: monospace; font-size: 80%;">public [MarkdownTable](MarkdownTable.md) __addColumn__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) heading)</span>

Adds a column with the specified heading to the table.

**Returns:**

The table (this) to allow method chaining.


---

### addRow

<span style="font-family: monospace; font-size: 80%;">public [MarkdownTable](MarkdownTable.md) __addRow__(java.lang.String[][] valueStrings)</span>

Adds a row of data to the table.
The number of values should match or be less than the number of columns.

**Returns:**

The table (this) to allow method chaining.


---

### render

<span style="font-family: monospace; font-size: 80%;">public void __render__([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer)</span>

Renders the table as Markdown text without any indentation.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### render

<span style="font-family: monospace; font-size: 80%;">public void __render__([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer, int indent)</span>

Renders the table as Markdown text with a given indentation level (number of spaces).

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

