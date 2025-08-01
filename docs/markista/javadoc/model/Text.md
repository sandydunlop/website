Package [io.github.sandydunlop.markista.model](index.md)

# Class Text
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Text<br/>
<br/>

----


## Nested Class Summary

| Modifier and Type | Class                           | Description |
|-------------------|---------------------------------|-------------|
| static            | [Text.Segment](Text.Segment.md) |             |

## Field Summary

| Modifier and Type                                                                                                                       | Field                 | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; | [segments](#segments) |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Text()      |             |

## Method Summary

| Modifier and Type                                                                                                               | Method                                                     | Description |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|-------------|
| static [Text](Text.md)                                                                                                          | [empty](#empty)()                                          |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [toString](#tostring)()                                    |             |
| boolean                                                                                                                         | [isEmpty](#isempty)()                                      |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; | [getSegments](#getsegments)()                              |             |
| void                                                                                                                            | [set](#set)([Text](Text.md) text)                          |             |
| [Text](Text.md)                                                                                                                 | [append](#append)([Text.Segment](Text.Segment.md) segment) |             |
| [Text](Text.md)                                                                                                                 | [append](#append)([Text](Text.md) text)                    |             |

## Field Details

### segments




---


## Method Details

### empty

static [Text](Text.md) empty()




---

### toString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()




---

### isEmpty

boolean isEmpty()




---

### getSegments

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Text.Segment](Text.Segment.md)&gt; getSegments()




---

### set

void set([Text](Text.md) text)




---

### append

[Text](Text.md) append([Text.Segment](Text.Segment.md) segment)




---

### append

[Text](Text.md) append([Text](Text.md) text)




---

