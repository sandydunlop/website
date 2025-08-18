Package [io.github.sandydunlop.markista.util](index.md)

# Class MarkdownParser.Token
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.MarkdownParser.Token<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.util.MarkdownParser](MarkdownParser.md)


----

<span style="font-family: monospace;">public class __MarkdownParser.Token__</span>

Represents a token of the parsed Markdown input.
A token has a kind and associated text content, and links to the next token in sequence.


## Constructor Summary

| Constructor              | Description                              |
|--------------------------|------------------------------------------|
| MarkdownParser.Token( k) | Creates a token with the specified kind. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                              | Description                                             |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| public [MarkdownParser.TokenKind](MarkdownParser.TokenKind.md)                                      | [getKind](#getkind)()                                                                                               | Returns the token kind.                                 |
| public void                                                                                         | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t) | Sets the text content of the token.                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                               | Returns the text content of the token.                  |
| public void                                                                                         | [setNext](#setnext)([MarkdownParser.Token](MarkdownParser.Token.md) token)                                          | Sets the next token in the sequence.                    |
| public [MarkdownParser.Token](MarkdownParser.Token.md)                                              | [getNext](#getnext)()                                                                                               | Returns the next token, or an END token if none exists. |

## Method Details

### getKind

public [MarkdownParser.TokenKind](MarkdownParser.TokenKind.md) getKind()

Returns the token kind.

**Returns:**

The token kind.


---

### setText

public void setText([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t)

Sets the text content of the token.


---

### getText

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getText()

Returns the text content of the token.

**Returns:**

The text string.


---

### setNext

public void setNext([MarkdownParser.Token](MarkdownParser.Token.md) token)

Sets the next token in the sequence.


---

### getNext

public [MarkdownParser.Token](MarkdownParser.Token.md) getNext()

Returns the next token, or an END token if none exists.

**Returns:**

The next token or an END token.


---

