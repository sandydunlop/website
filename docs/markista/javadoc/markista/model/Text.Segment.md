Package [io.github.sandydunlop.markista.model](index.md)

# Class Text.Segment
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Text.Segment<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)

Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.Text](Text.md)


----

<span style="font-family: monospace; font-size: 80%;">public static class __Text.Segment__</span>

Represents a segment of the Text with its kind, content, and optional link.


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description                                           |
|------------------------------------------------------------------------------------------------------|---------------------------------------|-------------------------------------------------------|
| private [Text.Segment.Kind](Text.Segment.Kind.md)                                                    | [kind](#kind)                         | The kind/type of this segment.                        |
| private [Link](Link.md)                                                                              | [link](#link)                         | The associated link if the segment represents a link. |
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |                                                       |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [text](#text)                         | The textual content of this segment.                  |



## Constructor Summary

| Constructor    | Description                                    |
|----------------|------------------------------------------------|
| Text.Segment() | Private constructor to restrict instantiation. |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                                        |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| public static [Text.Segment](Text.Segment.md)                                                       | [empty](#empty)()                                                                                                      | Creates an empty segment instance.                 |
| public [Text.Segment](Text.Segment.md)                                                              | [setKind](#setkind)([Text.Segment.Kind](Text.Segment.Kind.md) k)                                                       | Sets the kind of this segment.                     |
| public [Text.Segment.Kind](Text.Segment.Kind.md)                                                    | [getKind](#getkind)()                                                                                                  | Returns the kind of this segment.                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the string representation of this segment. |
| public [Text.Segment](Text.Segment.md)                                                              | [setText](#settext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text) | Sets the text content of this segment.             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getText](#gettext)()                                                                                                  | Returns the text content of this segment.          |
| public [Text.Segment](Text.Segment.md)                                                              | [setLink](#setlink)([Link](Link.md) link)                                                                              | Sets the link value of this segment.               |
| public [Link](Link.md)                                                                              | [getLink](#getlink)()                                                                                                  | Returns the link associated with this segment.     |



## Field Details

### kind

<span style="font-family: monospace; font-size: 80%;">private [Text.Segment.Kind](Text.Segment.Kind.md) __kind__</span>

The kind/type of this segment.


---

### link

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __link__</span>

The associated link if the segment represents a link.


---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### text

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __text__</span>

The textual content of this segment.


---


## Method Details

### empty

<span style="font-family: monospace; font-size: 80%;">public static [Text.Segment](Text.Segment.md) __empty__()</span>

Creates an empty segment instance.

**Returns:**

A new empty Segment object.


---

### setKind

<span style="font-family: monospace; font-size: 80%;">public [Text.Segment](Text.Segment.md) __setKind__([Text.Segment.Kind](Text.Segment.Kind.md) k)</span>

Sets the kind of this segment.

**Returns:**

This Segment instance for chaining.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Text.Segment.Kind](Text.Segment.Kind.md) __getKind__()</span>

Returns the kind of this segment.

**Returns:**

The current Segment.Kind.


---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>

Returns the string representation of this segment.
If text is null or empty, returns the link value.

**Returns:**

The text or link of this segment.


---

### setText

<span style="font-family: monospace; font-size: 80%;">public [Text.Segment](Text.Segment.md) __setText__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)</span>

Sets the text content of this segment.

**Returns:**

This Segment instance for chaining.


---

### getText

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getText__()</span>

Returns the text content of this segment.

**Returns:**

The text string.


---

### setLink

<span style="font-family: monospace; font-size: 80%;">public [Text.Segment](Text.Segment.md) __setLink__([Link](Link.md) link)</span>

Sets the link value of this segment.

**Returns:**

This Segment instance for chaining.


---

### getLink

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getLink__()</span>

Returns the link associated with this segment.

**Returns:**

The link reference.


---

