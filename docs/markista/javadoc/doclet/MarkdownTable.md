Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownTable
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownTable<br/>
<br/>

----

A utility class for creating tables in Markdown documents.


## Nested Class Summary

| Modifier and Type | Class                                           | Description                                                        |
|-------------------|-------------------------------------------------|--------------------------------------------------------------------|
|                   | [MarkdownTable.Column](MarkdownTable.Column.md) | A class to represent the name and width of a column within a table |

## Field Summary

| Modifier and Type                                                                                                                                                                              | Field               | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-------------|
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MarkdownTable.Column](MarkdownTable.Column.md)&gt;                                                | [columns](#columns) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[]&gt; | [rows](#rows)       |             |

## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| MarkdownTable() |             |

## Method Summary

| Modifier and Type                 | Method                                                                                                                           | Description                                                       |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [MarkdownTable](MarkdownTable.md) | [addColumn](#addcolumn)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) heading)    | Adds a column with the specified heading to the table             |
| [MarkdownTable](MarkdownTable.md) | [addRow](#addrow)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] valueStrings)  | Adds a row of data to the table                                   |
| void                              | [render](#render)([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer)             | Renders the table as Markdown text without any indentation        |
| void                              | [render](#render)([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer, int indent) | Renders the table as Markdown text with a given indentation level |

## Field Details

### columns




---

### rows




---


## Method Details

### addColumn

[MarkdownTable](MarkdownTable.md) addColumn([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) heading)

Adds a column with the specified heading to the table

**Parameters:**

`heading` - String to be used as the column heading

**Returns:**

The table


---

### addRow

[MarkdownTable](MarkdownTable.md) addRow([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] valueStrings)

Adds a row of data to the table

**Parameters:**

`valueStrings` - one or more strings which represnet the data for this row

**Returns:**

The table


---

### render

void render([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer)

Renders the table as Markdown text without any indentation

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### render

void render([Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) writer, int indent)

Renders the table as Markdown text with a given indentation level

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

