Package [io.github.sandydunlop.markista.model](index.md)

# Class Text
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Text<br/>
<br/>

----

Represents a block of text. Text stores the text as a list of segments which
can be of kind text, markdown, link, or code for easy retrieval and manipulation.


## Nested Class Summary

| Modifier and Type | Class                           | Description                                                                 |
|-------------------|---------------------------------|-----------------------------------------------------------------------------|
| static            | [Text.Segment](Text.Segment.md) | Represents a segment of the Text with its kind, content, and optional link. |

## Field Summary

| Modifier and Type                                                                                                                       | Field                 | Description                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-----------------------------------------------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; | [segments](#segments) | List of text segments composing this Text instance. |

## Constructor Summary

| Constructor | Description                                            |
|-------------|--------------------------------------------------------|
| Text()      | Private constructor to prevent external instantiation. |

## Method Summary

| Modifier and Type                                                                                                               | Method                                                                                                               | Description                                                 |
|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| static [Text](Text.md)                                                                                                          | [empty](#empty)()                                                                                                    | Creates an empty Text instance.                             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [toString](#tostring)()                                                                                              | Returns the combined string representation of all segments. |
| boolean                                                                                                                         | [isEmpty](#isempty)()                                                                                                | Checks whether this Text instance is empty.                 |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; | [getSegments](#getsegments)()                                                                                        | Returns the list of segments composing this Text.           |
| void                                                                                                                            | [set](#set)([Text](Text.md) text)                                                                                    | Sets the segments of this Text to match another Text.       |
| [Text](Text.md)                                                                                                                 | [append](#append)([Text.Segment](Text.Segment.md) segment)                                                           | Appends a single segment to this Text.                      |
| [Text](Text.md)                                                                                                                 | [append](#append)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text) | Appends a single text segment to this Text.                 |
| [Text](Text.md)                                                                                                                 | [append](#append)([Text](Text.md) text)                                                                              | Appends all segments from another Text instance.            |

## Field Details

### segments

List of text segments composing this Text instance.


---


## Method Details

### empty

static [Text](Text.md) empty()

Creates an empty Text instance.

**Returns:**

A new empty Text object.


---

### toString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the combined string representation of all segments.

**Returns:**

Concatenated string of all segment texts.


---

### isEmpty

boolean isEmpty()

Checks whether this Text instance is empty.

**Returns:**

true if there are no segments or the segment list is null.


---

### getSegments

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; getSegments()

Returns the list of segments composing this Text.

**Returns:**

List of Text.Segment objects.


---

### set

void set([Text](Text.md) text)

Sets the segments of this Text to match another Text.

**Parameters:**

`text` - The Text source to copy from.


---

### append

[Text](Text.md) append([Text.Segment](Text.Segment.md) segment)

Appends a single segment to this Text.

**Parameters:**

`segment` - The segment to add.

**Returns:**

This Text instance for chaining.


---

### append

[Text](Text.md) append([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)

Appends a single text segment to this Text.

**Parameters:**

`text` - text to go in the segment

**Returns:**

This Text instance for chaining.


---

### append

[Text](Text.md) append([Text](Text.md) text)

Appends all segments from another Text instance.

**Parameters:**

`text` - The Text whose segments should be appended.

**Returns:**

This Text instance for chaining.


---

