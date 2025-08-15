Package [io.github.sandydunlop.markista.model](index.md)

# Class Text.Segment
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Text.Segment<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.Text](Text.md)


----

<span style="font-family: monospace;">public static Class __Text.Segment__</span>

Represents a segment of the Text with its kind, content, and optional link.


## Field Summary

| Modifier and Type                                                                                    | Field         | Description                                           |
|------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------|
| private [Text.SegmentKind](Text.SegmentKind.md)                                                      | [kind](#kind) | The kind/type of this segment.                        |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [text](#text) | The textual content of this segment.                  |
| private [Reference](Reference.md)                                                                    | [link](#link) | The associated link if the segment represents a link. |

## Constructor Summary

| Constructor    | Description                                    |
|----------------|------------------------------------------------|
| Text.Segment() | Private constructor to restrict instantiation. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                                        |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| public static [Text.Segment](Text.Segment.md)                                                       | [empty](#empty)()                                                                                                      | Creates an empty segment instance.                 |
| public [Text.Segment](Text.Segment.md)                                                              | [setKind](#setkind)([Text.SegmentKind](Text.SegmentKind.md) k)                                                         | Sets the kind of this segment.                     |
| public [Text.SegmentKind](Text.SegmentKind.md)                                                      | [getKind](#getkind)()                                                                                                  | Returns the kind of this segment.                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the string representation of this segment. |
| public [Text.Segment](Text.Segment.md)                                                              | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text) | Sets the text content of this segment.             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                                  | Returns the text content of this segment.          |
| public [Text.Segment](Text.Segment.md)                                                              | [setLink](#setlink)([Reference](Reference.md) link)                                                                    | Sets the link value of this segment.               |
| public [Reference](Reference.md)                                                                    | [getLink](#getlink)()                                                                                                  | Returns the link associated with this segment.     |

## Field Details

### kind

The kind/type of this segment.


---

### text

The textual content of this segment.


---

### link

The associated link if the segment represents a link.


---


## Method Details

### empty

public static [Text.Segment](Text.Segment.md) empty()

Creates an empty segment instance.

**Returns:**

A new empty Segment object.


---

### setKind

public [Text.Segment](Text.Segment.md) setKind([Text.SegmentKind](Text.SegmentKind.md) k)

Sets the kind of this segment.

**Returns:**

This Segment instance for chaining.


---

### getKind

public [Text.SegmentKind](Text.SegmentKind.md) getKind()

Returns the kind of this segment.

**Returns:**

The current SegmentKind.


---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the string representation of this segment.
If text is null or empty, returns the link value.

**Returns:**

The text or link of this segment.


---

### setText

public [Text.Segment](Text.Segment.md) setText([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)

Sets the text content of this segment.

**Returns:**

This Segment instance for chaining.


---

### getText

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getText()

Returns the text content of this segment.

**Returns:**

The text string.


---

### setLink

public [Text.Segment](Text.Segment.md) setLink([Reference](Reference.md) link)

Sets the link value of this segment.

**Returns:**

This Segment instance for chaining.


---

### getLink

public [Reference](Reference.md) getLink()

Returns the link associated with this segment.

**Returns:**

The link reference.


---

