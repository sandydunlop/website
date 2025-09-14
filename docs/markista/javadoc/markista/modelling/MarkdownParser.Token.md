Package [io.github.sandydunlop.markista.modelling](index.md)

# Class Token
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.modelling.MarkdownParser.Token<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.modelling.MarkdownParser](MarkdownParser.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __Token__</span>

Represents a token of the parsed Markdown input.A token has a kind and associated text content, and links to the next token in sequence.


## Field Summary

| Modifier and Type                                                                            | Field         | Description |
|----------------------------------------------------------------------------------------------|---------------|-------------|
| [TokenKind](MarkdownParser.TokenKind.md)                                                     | [kind](#kind) |             |
| [Token](MarkdownParser.Token.md)                                                             | [next](#next) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [text](#text) |             |



## Constructor Summary

| Constructor                                       | Description                              |
|---------------------------------------------------|------------------------------------------|
| Token([TokenKind](MarkdownParser.TokenKind.md) k) | Creates a token with the specified kind. |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                              | Description                                             |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| public [TokenKind](MarkdownParser.TokenKind.md)                                                     | [getKind](#getkind)()                                                                                               | Returns the token kind.                                 |
| public void                                                                                         | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t) | Sets the text content of the token.                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                               | Returns the text content of the token.                  |
| public void                                                                                         | [setNext](#setnext)([Token](MarkdownParser.Token.md) token)                                                         | Sets the next token in the sequence.                    |
| public [Token](MarkdownParser.Token.md)                                                             | [getNext](#getnext)()                                                                                               | Returns the next token, or an END token if none exists. |



## Field Details

### kind

<span style="font-family: monospace; font-size: 80%;">[TokenKind](MarkdownParser.TokenKind.md) __kind__</span>




---

### next

<span style="font-family: monospace; font-size: 80%;">[Token](MarkdownParser.Token.md) __next__</span>




---

### text

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __text__</span>




---


## Method Details

### getKind

<span style="font-family: monospace; font-size: 80%;">public [TokenKind](MarkdownParser.TokenKind.md) __getKind__()</span>

Returns the token kind.

**Returns:**

The token kind.


---

### setText

<span style="font-family: monospace; font-size: 80%;">public void __setText__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t)</span>

Sets the text content of the token.

**Parameters:**

`t` - The text string.


---

### getText

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getText__()</span>

Returns the text content of the token.

**Returns:**

The text string.


---

### setNext

<span style="font-family: monospace; font-size: 80%;">public void __setNext__([Token](MarkdownParser.Token.md) token)</span>

Sets the next token in the sequence.

**Parameters:**

`token` - The next token.


---

### getNext

<span style="font-family: monospace; font-size: 80%;">public [Token](MarkdownParser.Token.md) __getNext__()</span>

Returns the next token, or an END token if none exists.

**Returns:**

The next token or an END token.


---

