Package [io.github.sandydunlop.markista.util](index.md)

# Class MarkdownParser.Segment
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.MarkdownParser.Segment<br/>
<br/>
Enclosing Class:<br/>
    [MarkdownParser](MarkdownParser.md)


----

<span style="font-family: monospace;">public Class __MarkdownParser.Segment__</span>

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

| Modifier and Type                                                                                   | Method                                                                                                              | Description                                                 |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| public void                                                                                         | [setKind](#setkind)([MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) k)                                  | Sets the Segment kind.                                      |
| public [MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md)                                  | [getKind](#getkind)()                                                                                               | Returns the Segment kind.                                   |
| public void                                                                                         | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t) | Sets the text content of the Segment.                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                               | Returns the text content of the Segment.                    |
| public void                                                                                         | [setNext](#setnext)([MarkdownParser.Segment](MarkdownParser.Segment.md) segment)                                    | Sets the next Segment in the sequence.                      |
| public [MarkdownParser.Segment](MarkdownParser.Segment.md)                                          | [getNext](#getnext)()                                                                                               | Returns the next Segment, or an END Segment if none exists. |

## Field Details

### next




---

### kind




---

### text




---


## Method Details

### setKind

public void setKind([MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) k)

Sets the Segment kind.


---

### getKind

public [MarkdownParser.SegmentKind](MarkdownParser.SegmentKind.md) getKind()

Returns the Segment kind.

**Returns:**

The SegmentKind.


---

### setText

public void setText([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) t)

Sets the text content of the Segment.


---

### getText

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getText()

Returns the text content of the Segment.

**Returns:**

The text string.


---

### setNext

public void setNext([MarkdownParser.Segment](MarkdownParser.Segment.md) segment)

Sets the next Segment in the sequence.


---

### getNext

public [MarkdownParser.Segment](MarkdownParser.Segment.md) getNext()

Returns the next Segment, or an END Segment if none exists.

**Returns:**

The next Segment or an END Segment.


---

