Package [io.github.sandydunlop.markista.markdown](index.md)

# Class MarkdownTable
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.MarkdownTable<br/>
<br/>

----

A utility class for creating tables in Markdown documents.

This class allows adding columns with headings and rows with data.
It automatically calculates column widths to align the table content.

The table can be rendered as Markdown text to a Writer, optionally with indentation for nested formatting.


## Nested Class Summary

| Modifier and Type | Class                                           | Description                                                         |
|-------------------|-------------------------------------------------|---------------------------------------------------------------------|
|                   | [MarkdownTable.Column](MarkdownTable.Column.md) | A class to represent the name and width of a column within a table. |

## Field Summary

| Modifier and Type                                                                                                                                                                              | Field               | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-------------|
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MarkdownTable.Column](MarkdownTable.Column.md)&gt;                                                | [columns](#columns) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[]&gt; | [rows](#rows)       |             |

## Constructor Summary

| Constructor     | Description                        |
|-----------------|------------------------------------|
| MarkdownTable() | Constructs an empty MarkdownTable. |

## Method Summary

| Modifier and Type                 | Method                                                                                                                           | Description                                                                           |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [MarkdownTable](MarkdownTable.md) | [addColumn](#addcolumn)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) heading)    | Adds a column with the specified heading to the table.                                |
| [MarkdownTable](MarkdownTable.md) | [addRow](#addrow)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] valueStrings)  | Adds a row of data to the table.                                                      |
| void                              | [render](#render)([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer)             | Renders the table as Markdown text without any indentation.                           |
| void                              | [render](#render)([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer, int indent) | Renders the table as Markdown text with a given indentation level (number of spaces). |

## Field Details

### columns




---

### rows




---


## Method Details

### addColumn

[MarkdownTable](MarkdownTable.md) addColumn([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) heading)

Adds a column with the specified heading to the table.

**Parameters:**

`heading` - String to be used as the column heading.

**Returns:**

The table (this) to allow method chaining.


---

### addRow

[MarkdownTable](MarkdownTable.md) addRow([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] valueStrings)

Adds a row of data to the table.
The number of values should match or be less than the number of columns.

**Parameters:**

`valueStrings` - One or more strings representing the data for this row.

**Returns:**

The table (this) to allow method chaining.


---

### render

void render([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer)

Renders the table as Markdown text without any indentation.

**Parameters:**

`writer` - The Writer to output Markdown text to.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### render

void render([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer, int indent)

Renders the table as Markdown text with a given indentation level (number of spaces).

**Parameters:**

`writer` - The Writer to output Markdown text to.

`indent` - The number of spaces to indent each line.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

