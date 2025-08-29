Package [io.github.sandydunlop.markista.scanning](index.md)

# Class MarkdownParser.Token
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.scanning.MarkdownParser.Token<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.scanning.MarkdownParser](MarkdownParser.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __MarkdownParser.Token__</span>

Represents a token of the parsed Markdown input.
A token has a kind and associated text content, and links to the next token in sequence.


## Field Summary

| Modifier and Type                                                                            | Field         | Description |
|----------------------------------------------------------------------------------------------|---------------|-------------|
| [MarkdownParser.TokenKind](MarkdownParser.TokenKind.md)                                      | [kind](#kind) |             |
| [MarkdownParser.Token](MarkdownParser.Token.md)                                              | [next](#next) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [text](#text) |             |



## Constructor Summary

| Constructor                                                                     | Description                              |
|---------------------------------------------------------------------------------|------------------------------------------|
| MarkdownParser.Token([MarkdownParser.TokenKind](MarkdownParser.TokenKind.md) k) | Creates a token with the specified kind. |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                              | Description                                             |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| public [MarkdownParser.TokenKind](MarkdownParser.TokenKind.md)                                      | [getKind](#getkind)()                                                                                               | Returns the token kind.                                 |
| public void                                                                                         | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t) | Sets the text content of the token.                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                               | Returns the text content of the token.                  |
| public void                                                                                         | [setNext](#setnext)([MarkdownParser.Token](MarkdownParser.Token.md) token)                                          | Sets the next token in the sequence.                    |
| public [MarkdownParser.Token](MarkdownParser.Token.md)                                              | [getNext](#getnext)()                                                                                               | Returns the next token, or an END token if none exists. |



## Field Details

### kind

<span style="font-family: monospace; font-size: 80%;">[MarkdownParser.TokenKind](MarkdownParser.TokenKind.md) __kind__</span>




---

### next

<span style="font-family: monospace; font-size: 80%;">[MarkdownParser.Token](MarkdownParser.Token.md) __next__</span>




---

### text

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __text__</span>




---


## Method Details

### getKind

<span style="font-family: monospace; font-size: 80%;">public [MarkdownParser.TokenKind](MarkdownParser.TokenKind.md) __getKind__()</span>

Returns the token kind.

**Returns:**

The token kind.


---

### setText

<span style="font-family: monospace; font-size: 80%;">public void __setText__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t)</span>

Sets the text content of the token.


---

### getText

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getText__()</span>

Returns the text content of the token.

**Returns:**

The text string.


---

### setNext

<span style="font-family: monospace; font-size: 80%;">public void __setNext__([MarkdownParser.Token](MarkdownParser.Token.md) token)</span>

Sets the next token in the sequence.


---

### getNext

<span style="font-family: monospace; font-size: 80%;">public [MarkdownParser.Token](MarkdownParser.Token.md) __getNext__()</span>

Returns the next token, or an END token if none exists.

**Returns:**

The next token or an END token.


---

