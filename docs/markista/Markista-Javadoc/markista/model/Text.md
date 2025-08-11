Package [io.github.sandydunlop.markista.model](index.md)

# Class Text
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Text<br/>
<br/>

----

<span style="font-family: monospace;">public Class __Text__</span>

Represents a block of text. Text stores the text as a list of segments which
can be of kind text, markdown, link, or code for easy retrieval and manipulation.


## Nested Class Summary

| Modifier and Type | Class                           | Description                                                                 |
|-------------------|---------------------------------|-----------------------------------------------------------------------------|
| public static     | [Text.Segment](Text.Segment.md) | Represents a segment of the Text with its kind, content, and optional link. |

## Field Summary

| Modifier and Type                                                                                                                       | Field                 | Description                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-----------------------------------------------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; | [segments](#segments) | List of text segments composing this Text instance. |

## Constructor Summary

| Constructor | Description                                            |
|-------------|--------------------------------------------------------|
| Text()      | Private constructor to prevent external instantiation. |

## Method Summary

| Modifier and Type                                                                                                                      | Method                                                                                                               | Description                                                 |
|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| public static [Text](Text.md)                                                                                                          | [empty](#empty)()                                                                                                    | Creates an empty Text instance.                             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [toString](#tostring)()                                                                                              | Returns the combined string representation of all segments. |
| public boolean                                                                                                                         | [isEmpty](#isempty)()                                                                                                | Checks whether this Text instance is empty.                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; | [getSegments](#getsegments)()                                                                                        | Returns the list of segments composing this Text.           |
| public void                                                                                                                            | [set](#set)([Text](Text.md) text)                                                                                    | Sets the segments of this Text to match another Text.       |
| public [Text](Text.md)                                                                                                                 | [append](#append)([Text.Segment](Text.Segment.md) segment)                                                           | Appends a single segment to this Text.                      |
| public [Text](Text.md)                                                                                                                 | [append](#append)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text) | Appends a single text segment to this Text.                 |
| public [Text](Text.md)                                                                                                                 | [append](#append)([Text](Text.md) text)                                                                              | Appends all segments from another Text instance.            |

## Field Details

### segments

List of text segments composing this Text instance.


---


## Method Details

### empty

public static [Text](Text.md) empty()

Creates an empty Text instance.

**Returns:**

A new empty Text object.


---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the combined string representation of all segments.

**Returns:**

Concatenated string of all segment texts.


---

### isEmpty

public boolean isEmpty()

Checks whether this Text instance is empty.

**Returns:**

true if there are no segments or the segment list is null.


---

### getSegments

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; getSegments()

Returns the list of segments composing this Text.

**Returns:**

List of Text.Segment objects.


---

### set

public void set([Text](Text.md) text)

Sets the segments of this Text to match another Text.


---

### append

public [Text](Text.md) append([Text.Segment](Text.Segment.md) segment)

Appends a single segment to this Text.

**Returns:**

This Text instance for chaining.


---

### append

public [Text](Text.md) append([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)

Appends a single text segment to this Text.

**Returns:**

This Text instance for chaining.


---

### append

public [Text](Text.md) append([Text](Text.md) text)

Appends all segments from another Text instance.

**Returns:**

This Text instance for chaining.


---

