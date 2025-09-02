Package [io.github.sandydunlop.markista.modelling](index.md)

# Class MarkdownParser
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.modelling.MarkdownParser<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __MarkdownParser__</span>

Parses a Markdown string into a sequence of tokens representing text and special markup such as brackets and parentheses.

This parser is designed to tokenize the Markdown content by identifying textual parts and tokens enclosed in brackets `[]` and parentheses `()`.
It also handles inline code spans denoted by backticks (`) to avoid parsing markup inside code.

The parsed tokens can be iterated in sequence starting from the firstToken() method.
Each token carries its type (kind) which specifies how it should be interpreted or rendered.

Token kinds include TEXT for normal text, BRACKETS_TAG for content inside square brackets,
PARENS_TAG for content inside parentheses following brackets (typical Markdown link syntax),
and END indicating the end of the sequence.


## Nested Class Summary

| Modifier and Type | Class                                           | Description                                      |
|-------------------|-------------------------------------------------|--------------------------------------------------|
| public            | [MarkdownParser.Token](MarkdownParser.Token.md) | Represents a token of the parsed Markdown input. |



## Field Summary

| Modifier and Type                                                                                                                                       | Field                                 | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| int                                                                                                                                                     | [closeBracket](#closebracket)         |             |
| int                                                                                                                                                     | [closeParenthesis](#closeparenthesis) |             |
| private int                                                                                                                                             | [head](#head)                         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [markdown](#markdown)                 |             |
| int                                                                                                                                                     | [openBracket](#openbracket)           |             |
| int                                                                                                                                                     | [openParenthesis](#openparenthesis)   |             |
| private [MarkdownParser.Token](MarkdownParser.Token.md)                                                                                                 | [prev](#prev)                         |             |
| private int                                                                                                                                             | [tail](#tail)                         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MarkdownParser.Token](MarkdownParser.Token.md)> | [tokens](#tokens)                     |             |



## Constructor Summary

| Constructor                                                                                                     | Description                                                                       |
|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| MarkdownParser([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) md) | Creates a new MarkdownParser and immediately parses the provided Markdown string. |



## Method Summary

| Modifier and Type                                      | Method                                                                          | Description                                                                          |
|--------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| private void                                           | [processCharInGeneral](#processcharingeneral)()                                 | Handles a character encountered when not in code or special markup.                  |
| private void                                           | [handleOpenBracket](#handleopenbracket)()                                       | Handles the open bracket `[` encountered in the markdown.                            |
| private boolean                                        | [handleOpenParenthesis](#handleopenparenthesis)(char prevChar)                  | Handles an open parenthesis `(` encountered immediately after closing bracket `]`.   |
| private void                                           | [handleCloseBracket](#handleclosebracket)()                                     | Handles the close bracket `]` encountered in the markdown.                           |
| private boolean                                        | [handleCloseParenthesis](#handlecloseparenthesis)(boolean parensFollowBrackets) | Handles the close parenthesis `)` encountered.                                       |
| private void                                           | [saveText](#savetext)()                                                         | Saves any text from the tail position up to the current head as a TEXT token.        |
| private void                                           | [saveBracketsTag](#savebracketstag)()                                           | Saves the content between the most recent pair of brackets as a BRACKETS_TAG token.  |
| private void                                           | [saveParensTag](#saveparenstag)()                                               | Saves the content between the most recent pair of parentheses as a PARENS_TAG token. |
| private void                                           | [saveToken](#savetoken)([MarkdownParser.Token](MarkdownParser.Token.md) token)  | Adds the specified token to the list and links it to the previously saved token.     |
| public [MarkdownParser.Token](MarkdownParser.Token.md) | [firstToken](#firsttoken)()                                                     | Returns the first token in the parsed sequence.                                      |



## Field Details

### closeBracket

<span style="font-family: monospace; font-size: 80%;">int __closeBracket__</span>




---

### closeParenthesis

<span style="font-family: monospace; font-size: 80%;">int __closeParenthesis__</span>




---

### head

<span style="font-family: monospace; font-size: 80%;">private int __head__</span>




---

### markdown

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __markdown__</span>




---

### openBracket

<span style="font-family: monospace; font-size: 80%;">int __openBracket__</span>




---

### openParenthesis

<span style="font-family: monospace; font-size: 80%;">int __openParenthesis__</span>




---

### prev

<span style="font-family: monospace; font-size: 80%;">private [MarkdownParser.Token](MarkdownParser.Token.md) __prev__</span>




---

### tail

<span style="font-family: monospace; font-size: 80%;">private int __tail__</span>




---

### tokens

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MarkdownParser.Token](MarkdownParser.Token.md)> __tokens__</span>




---


## Method Details

### processCharInGeneral

<span style="font-family: monospace; font-size: 80%;">private void __processCharInGeneral__()</span>

Handles a character encountered when not in code or special markup.
Currently a placeholder for any general character processing.


---

### handleOpenBracket

<span style="font-family: monospace; font-size: 80%;">private void __handleOpenBracket__()</span>

Handles the open bracket `[` encountered in the markdown.
Saves any preceding text token before marking the position of the open bracket.


---

### handleOpenParenthesis

<span style="font-family: monospace; font-size: 80%;">private boolean __handleOpenParenthesis__(char prevChar)</span>

Handles an open parenthesis `(` encountered immediately after closing bracket `]`.

**Returns:**

true if parentheses follow brackets, false otherwise.


---

### handleCloseBracket

<span style="font-family: monospace; font-size: 80%;">private void __handleCloseBracket__()</span>

Handles the close bracket `]` encountered in the markdown.
Records the position and saves a bracket-tag token.


---

### handleCloseParenthesis

<span style="font-family: monospace; font-size: 80%;">private boolean __handleCloseParenthesis__(boolean parensFollowBrackets)</span>

Handles the close parenthesis `)` encountered.
If parentheses follow brackets, saves a parentheses-tag token.

**Returns:**

Always returns false to reset parsing state for parentheses.


---

### saveText

<span style="font-family: monospace; font-size: 80%;">private void __saveText__()</span>

Saves any text from the tail position up to the current head as a TEXT token.
Does nothing if no text is available in that range.


---

### saveBracketsTag

<span style="font-family: monospace; font-size: 80%;">private void __saveBracketsTag__()</span>

Saves the content between the most recent pair of brackets as a BRACKETS_TAG token.


---

### saveParensTag

<span style="font-family: monospace; font-size: 80%;">private void __saveParensTag__()</span>

Saves the content between the most recent pair of parentheses as a PARENS_TAG token.


---

### saveToken

<span style="font-family: monospace; font-size: 80%;">private void __saveToken__([MarkdownParser.Token](MarkdownParser.Token.md) token)</span>

Adds the specified token to the list and links it to the previously saved token.


---

### firstToken

<span style="font-family: monospace; font-size: 80%;">public [MarkdownParser.Token](MarkdownParser.Token.md) __firstToken__()</span>

Returns the first token in the parsed sequence.
If no tokens exist, returns an END kind token.

**Returns:**

The first token or an END token if none exist.


---

