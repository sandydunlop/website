Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownTable
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownTable<br/>
<br/>

----


## Nested Class Summary

| Modifier and Type | Class                                           | Description |
|-------------------|-------------------------------------------------|-------------|
|                   | [MarkdownTable.Column](MarkdownTable.Column.md) |             |

## Field Summary

| Modifier and Type                | Field   | Description |
|----------------------------------|---------|-------------|
| List&lt;String[]&gt;             | rows    |             |
| List&lt;MarkdownTable.Column&gt; | columns |             |

## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| MarkdownTable() |             |

## Method Summary

| Modifier and Type                 | Method                                       | Description                                                       |
|-----------------------------------|----------------------------------------------|-------------------------------------------------------------------|
| void                              | [render](#render)(Writer writer)             | Renders the table as Markdown text without any indentation        |
| void                              | [render](#render)(Writer writer, int indent) | Renders the table as Markdown text with a given indentation level |
| [MarkdownTable](MarkdownTable.md) | [addRow](#addrow)(String[] valueStrings)     | Adds a row of data to the table                                   |
| [MarkdownTable](MarkdownTable.md) | [addColumn](#addcolumn)(String heading)      | Adds a column with the specified heading to the table             |

## Method Details

### render

`void render(Writer writer)`



### render

`void render(Writer writer, int indent)`



### addRow

`MarkdownTable addRow(String[] valueStrings)`



Returns:

[The table]

### addColumn

`MarkdownTable addColumn(String heading)`



Returns:

[The table]

