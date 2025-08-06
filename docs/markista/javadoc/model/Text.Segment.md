Package [io.github.sandydunlop.markista.model](index.md)

# Class Text.Segment
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Text.Segment<br/>
<br/>
Enclosing Class:<br/>
    [Text](Text.md)


----

Represents a segment of the Text with its kind, content, and optional link.


## Field Summary

| Modifier and Type                                                                                    | Field         | Description                                           |
|------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------|
| private [Text.SegmentKind](Text.SegmentKind.md)                                                      | [kind](#kind) | The kind/type of this segment.                        |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [text](#text) | The textual content of this segment.                  |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [link](#link) | The associated link if the segment represents a link. |

## Constructor Summary

| Constructor    | Description                                    |
|----------------|------------------------------------------------|
| Text.Segment() | Private constructor to restrict instantiation. |

## Method Summary

| Modifier and Type                                                                            | Method                                                                                                                 | Description                                        |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| static [Text.Segment](Text.Segment.md)                                                       | [empty](#empty)()                                                                                                      | Creates an empty segment instance.                 |
| [Text.Segment](Text.Segment.md)                                                              | [setKind](#setkind)([Text.SegmentKind](Text.SegmentKind.md) k)                                                         | Sets the kind of this segment.                     |
| [Text.SegmentKind](Text.SegmentKind.md)                                                      | [getKind](#getkind)()                                                                                                  | Returns the kind of this segment.                  |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the string representation of this segment. |
| [Text.Segment](Text.Segment.md)                                                              | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text) | Sets the text content of this segment.             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                                  | Returns the text content of this segment.          |
| [Text.Segment](Text.Segment.md)                                                              | [setLink](#setlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) link) | Sets the link value of this segment.               |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLink](#getlink)()                                                                                                  | Returns the link associated with this segment.     |

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

static [Text.Segment](Text.Segment.md) empty()

Creates an empty segment instance.

**Returns:**

A new empty Segment object.


---

### setKind

[Text.Segment](Text.Segment.md) setKind([Text.SegmentKind](Text.SegmentKind.md) k)

Sets the kind of this segment.

**Parameters:**

`k` - The SegmentKind value.

**Returns:**

This Segment instance for chaining.


---

### getKind

[Text.SegmentKind](Text.SegmentKind.md) getKind()

Returns the kind of this segment.

**Returns:**

The current SegmentKind.


---

### toString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the string representation of this segment.
If text is null or empty, returns the link value.

**Returns:**

The text or link of this segment.


---

### setText

[Text.Segment](Text.Segment.md) setText([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)

Sets the text content of this segment.

**Parameters:**

`text` - The text to set.

**Returns:**

This Segment instance for chaining.


---

### getText

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getText()

Returns the text content of this segment.

**Returns:**

The text string.


---

### setLink

[Text.Segment](Text.Segment.md) setLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) link)

Sets the link value of this segment.

**Parameters:**

`link` - The link to set.

**Returns:**

This Segment instance for chaining.


---

### getLink

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getLink()

Returns the link associated with this segment.

**Returns:**

The link string.


---

