Package [io.github.sandydunlop.markista.util](index.md)

# Class MarkdownParser.Segment
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.MarkdownParser.Segment<br/>
<br/>
Enclosing Class:<br/>
    [MarkdownParser](MarkdownParser.md)


----

Represents a segment of the parsed Markdown input.
A segment has a kind and associated text content, and links to the next segment in sequence.


## Field Summary

| Modifier and Type                                                                            | Field         | Description |
|----------------------------------------------------------------------------------------------|---------------|-------------|
| [MarkdownParser.Segment](MarkdownParser.Segment.md)                                          | [next](#next) |             |
| [MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md)                                  | [kind](#kind) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [text](#text) |             |

## Constructor Summary

| Constructor                                                                           | Description                                |
|---------------------------------------------------------------------------------------|--------------------------------------------|
| MarkdownParser.Segment([MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) k) | Creates a Segment with the specified kind. |

## Method Summary

| Modifier and Type                                                                            | Method                                                                                                              | Description                                                 |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| void                                                                                         | [setKind](#setkind)([MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) k)                                  | Sets the Segment kind.                                      |
| [MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md)                                  | [getKind](#getkind)()                                                                                               | Returns the Segment kind.                                   |
| void                                                                                         | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t) | Sets the text content of the Segment.                       |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                               | Returns the text content of the Segment.                    |
| void                                                                                         | [setNext](#setnext)([MarkdownParser.Segment](MarkdownParser.Segment.md) segment)                                    | Sets the next Segment in the sequence.                      |
| [MarkdownParser.Segment](MarkdownParser.Segment.md)                                          | [getNext](#getnext)()                                                                                               | Returns the next Segment, or an END Segment if none exists. |

## Field Details

### next




---

### kind




---

### text




---


## Method Details

### setKind

void setKind([MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) k)

Sets the Segment kind.

**Parameters:**

`k` - The SegmentKind to set.


---

### getKind

[MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) getKind()

Returns the Segment kind.

**Returns:**

The SegmentKind.


---

### setText

void setText([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t)

Sets the text content of the Segment.

**Parameters:**

`t` - The text string.


---

### getText

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getText()

Returns the text content of the Segment.

**Returns:**

The text string.


---

### setNext

void setNext([MarkdownParser.Segment](MarkdownParser.Segment.md) segment)

Sets the next Segment in the sequence.

**Parameters:**

`segment` - The next Segment.


---

### getNext

[MarkdownParser.Segment](MarkdownParser.Segment.md) getNext()

Returns the next Segment, or an END Segment if none exists.

**Returns:**

The next Segment or an END Segment.


---

