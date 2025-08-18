Package [io.github.sandydunlop.markista.util](index.md)

# Class MarkdownParser
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.MarkdownParser<br/>
<br/>

----

<span style="font-family: monospace;">public class __MarkdownParser__</span>

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

## Constructor Summary

| Constructor         | Description                                                                       |
|---------------------|-----------------------------------------------------------------------------------|
| MarkdownParser( md) | Creates a new MarkdownParser and immediately parses the provided Markdown string. |

## Method Summary

| Modifier and Type                                      | Method                      | Description                                     |
|--------------------------------------------------------|-----------------------------|-------------------------------------------------|
| public [MarkdownParser.Token](MarkdownParser.Token.md) | [firstToken](#firsttoken)() | Returns the first token in the parsed sequence. |

## Method Details

### firstToken

public [MarkdownParser.Token](MarkdownParser.Token.md) firstToken()

Returns the first token in the parsed sequence.
If no tokens exist, returns an END kind token.

**Returns:**

The first token or an END token if none exist.


---

