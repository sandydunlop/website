Package [io.github.sandydunlop.markista.util](index.md)

# Class MarkdownParser
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.MarkdownParser<br/>
<br/>

----

<span style="font-family: monospace;">public Class __MarkdownParser__</span>

Parses a Markdown string into a sequence of segments representing text and special markup such as brackets and parentheses.

This parser is designed to tokenize the Markdown content by identifying textual parts and segments enclosed in brackets `[]` and parentheses `()`.
It also handles inline code spans denoted by backticks (`) to avoid parsing markup inside code.

The parsed segments can be iterated in sequence starting from the firstSegment() method.
Each segment carries its type (kind) which specifies how it should be interpreted or rendered.

Segment kinds include TEXT for normal text, BRACKETS_TAG for content inside square brackets,
PARENS_TAG for content inside parentheses following brackets (typical Markdown link syntax),
and END indicating the end of the sequence.


## Nested Class Summary

| Modifier and Type | Class                                               | Description                                        |
|-------------------|-----------------------------------------------------|----------------------------------------------------|
| public            | [MarkdownParser.Segment](MarkdownParser.Segment.md) | Represents a segment of the parsed Markdown input. |

## Field Summary

| Modifier and Type                                                                                                                                                 | Field                                 | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| private int                                                                                                                                                       | [head](#head)                         |             |
| private int                                                                                                                                                       | [tail](#tail)                         |             |
| int                                                                                                                                                               | [openBracket](#openbracket)           |             |
| int                                                                                                                                                               | [openParenthesis](#openparenthesis)   |             |
| int                                                                                                                                                               | [closeBracket](#closebracket)         |             |
| int                                                                                                                                                               | [closeParenthesis](#closeparenthesis) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                              | [markdown](#markdown)                 |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MarkdownParser.Segment](MarkdownParser.Segment.md)&gt; | [segments](#segments)                 |             |
| private [MarkdownParser.Segment](MarkdownParser.Segment.md)                                                                                                       | [prev](#prev)                         |             |

## Constructor Summary

| Constructor                                                                                                     | Description                                                                       |
|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| MarkdownParser([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) md) | Creates a new MarkdownParser and immediately parses the provided Markdown string. |

## Method Summary

| Modifier and Type                                          | Method                                                                                   | Description                                                                            |
|------------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| private void                                               | [processCharInGeneral](#processcharingeneral)()                                          | Handles a character encountered when not in code or special markup.                    |
| private void                                               | [handleOpenBracket](#handleopenbracket)()                                                | Handles the open bracket 'Handles the open bracket '[' encountered in the markdown.    |
| private boolean                                            | [handleOpenParenthesis](#handleopenparenthesis)(char prevChar)                           | Handles an open parenthesis '(' encountered immediately after closing bracket ''.      |
| private void                                               | [handleCloseBracket](#handleclosebracket)()                                              | Handles the close bracket '' encountered in the markdown.                              |
| private boolean                                            | [handleCloseParenthesis](#handlecloseparenthesis)(boolean parensFollowBrackets)          | Handles the close parenthesis ')' encountered.                                         |
| private void                                               | [saveText](#savetext)()                                                                  | Saves any text from the tail position up to the current head as a TEXT segment.        |
| private void                                               | [saveBracketsTag](#savebracketstag)()                                                    | Saves the content between the most recent pair of brackets as a BRACKETS_TAG segment.  |
| private void                                               | [saveParensTag](#saveparenstag)()                                                        | Saves the content between the most recent pair of parentheses as a PARENS_TAG segment. |
| private void                                               | [saveSegment](#savesegment)([MarkdownParser.Segment](MarkdownParser.Segment.md) segment) | Adds the specified segment to the list and links it to the previously saved segment.   |
| public [MarkdownParser.Segment](MarkdownParser.Segment.md) | [firstSegment](#firstsegment)()                                                          | Returns the first Segment in the parsed sequence.                                      |

## Field Details

### head




---

### tail




---

### openBracket




---

### openParenthesis




---

### closeBracket




---

### closeParenthesis




---

### markdown




---

### segments




---

### prev




---


## Method Details

### processCharInGeneral

private void processCharInGeneral()

Handles a character encountered when not in code or special markup.
Currently a placeholder for any general character processing.


---

### handleOpenBracket

private void handleOpenBracket()

Handles the open bracket 'Handles the open bracket '[' encountered in the markdown.
Saves any preceding text segment before marking the position of the open bracket.


---

### handleOpenParenthesis

private boolean handleOpenParenthesis(char prevChar)

Handles an open parenthesis '(' encountered immediately after closing bracket ''.

**Returns:**

true if parentheses follow brackets, false otherwise.


---

### handleCloseBracket

private void handleCloseBracket()

Handles the close bracket '' encountered in the markdown.
Records the position and saves a bracket-tag segment.


---

### handleCloseParenthesis

private boolean handleCloseParenthesis(boolean parensFollowBrackets)

Handles the close parenthesis ')' encountered.
If parentheses follow brackets, saves a parentheses-tag segment.

**Returns:**

Always returns false to reset parsing state for parentheses.


---

### saveText

private void saveText()

Saves any text from the tail position up to the current head as a TEXT segment.
Does nothing if no text is available in that range.


---

### saveBracketsTag

private void saveBracketsTag()

Saves the content between the most recent pair of brackets as a BRACKETS_TAG segment.


---

### saveParensTag

private void saveParensTag()

Saves the content between the most recent pair of parentheses as a PARENS_TAG segment.


---

### saveSegment

private void saveSegment([MarkdownParser.Segment](MarkdownParser.Segment.md) segment)

Adds the specified segment to the list and links it to the previously saved segment.


---

### firstSegment

public [MarkdownParser.Segment](MarkdownParser.Segment.md) firstSegment()

Returns the first Segment in the parsed sequence.
If no segments exist, returns an END kind Segment.

**Returns:**

The first Segment or an END Segment if none exist.


---

