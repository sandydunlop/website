Package [io.github.sandydunlop.markista.model](index.md)

# Class Text
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Text<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __Text__</span>

Represents a block of text. Text stores the text as a list of segments which
can be of kind text, markdown, link, or code for easy retrieval and manipulation.


## Nested Class Summary

| Modifier and Type | Class                           | Description                                                                 |
|-------------------|---------------------------------|-----------------------------------------------------------------------------|
| public static     | [Text.Segment](Text.Segment.md) | Represents a segment of the Text with its kind, content, and optional link. |



## Field Summary

| Modifier and Type                                                                                                                 | Field                                 | Description                                         |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|-----------------------------------------------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Text.Segment](Text.Segment.md)> | [segments](#segments)                 | List of text segments composing this Text instance. |
| private static final long                                                                                                         | [serialVersionUID](#serialversionuid) |                                                     |



## Constructor Summary

| Constructor | Description                                            |
|-------------|--------------------------------------------------------|
| Text()      | Private constructor to prevent external instantiation. |



## Method Summary

| Modifier and Type                                                                                                                | Method                                                                                                               | Description                                                 |
|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| public [Text](Text.md)                                                                                                           | [append](#append)([Text.Segment](Text.Segment.md) segment)                                                           | Appends a single segment to this Text.                      |
| public [Text](Text.md)                                                                                                           | [append](#append)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text) | Appends a single text segment to this Text.                 |
| public [Text](Text.md)                                                                                                           | [append](#append)([Text](Text.md) text)                                                                              | Appends all segments from another Text instance.            |
| public static [Text](Text.md)                                                                                                    | [empty](#empty)()                                                                                                    | Creates an empty Text instance.                             |
| public [Text.Segment](Text.Segment.md)                                                                                           | [getSegment](#getsegment)(int n)                                                                                     |                                                             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Text.Segment](Text.Segment.md)> | [getSegments](#getsegments)()                                                                                        | Returns the list of segments composing this Text.           |
| public boolean                                                                                                                   | [isEmpty](#isempty)()                                                                                                | Checks whether this Text instance is empty.                 |
| public static [Text](Text.md)                                                                                                    | [of](#of)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) string)       | Creates a Text object containing the supplied string value  |
| public static [Text](Text.md)                                                                                                    | [of](#of)([Text.Segment](Text.Segment.md) segment)                                                                   | Creates a Text object containing the supplied segment value |
| public void                                                                                                                      | [set](#set)([Text](Text.md) text)                                                                                    | Sets the segments of this Text to match another Text.       |
| public [Text](Text.md)                                                                                                           | [subtext](#subtext)(int start)                                                                                       |                                                             |
| public [Text](Text.md)                                                                                                           | [subtext](#subtext)(int start, int end)                                                                              |                                                             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                              | [toString](#tostring)()                                                                                              | Returns the combined string representation of all segments. |



## Field Details

### segments

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Text.Segment](Text.Segment.md)> __segments__</span>

List of text segments composing this Text instance.


---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---


## Method Details

### append

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __append__([Text.Segment](Text.Segment.md) segment)</span>

Appends a single segment to this Text.

**Returns:**

This Text instance for chaining.


---

### append

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __append__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)</span>

Appends a single text segment to this Text.

**Returns:**

This Text instance for chaining.


---

### append

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __append__([Text](Text.md) text)</span>

Appends all segments from another Text instance.

**Returns:**

This Text instance for chaining.


---

### empty

<span style="font-family: monospace; font-size: 80%;">public static [Text](Text.md) __empty__()</span>

Creates an empty Text instance.

**Returns:**

A new empty Text object.


---

### getSegment

<span style="font-family: monospace; font-size: 80%;">public [Text.Segment](Text.Segment.md) __getSegment__(int n)</span>




---

### getSegments

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Text.Segment](Text.Segment.md)> __getSegments__()</span>

Returns the list of segments composing this Text.

**Returns:**

List of Text.Segment objects.


---

### isEmpty

<span style="font-family: monospace; font-size: 80%;">public boolean __isEmpty__()</span>

Checks whether this Text instance is empty.

**Returns:**

true if there are no segments.


---

### of

<span style="font-family: monospace; font-size: 80%;">public static [Text](Text.md) __of__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) string)</span>

Creates a Text object containing the supplied string value

**Returns:**

A Text object representing the string


---

### of

<span style="font-family: monospace; font-size: 80%;">public static [Text](Text.md) __of__([Text.Segment](Text.Segment.md) segment)</span>

Creates a Text object containing the supplied segment value

**Returns:**

A Text object representing the segment


---

### set

<span style="font-family: monospace; font-size: 80%;">public void __set__([Text](Text.md) text)</span>

Sets the segments of this Text to match another Text.


---

### subtext

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __subtext__(int start)</span>




---

### subtext

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __subtext__(int start, int end)</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>

Returns the combined string representation of all segments.

**Returns:**

Concatenated string of all segment texts.


---

