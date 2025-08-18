Package [io.github.sandydunlop.markista.model](index.md)

# Class Node
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Node<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace;">public class __Node__</span>

The base class for all types of nodes in the API model.


## Field Summary

| Modifier and Type                                                                                  | Field                           | Description                                     |
|----------------------------------------------------------------------------------------------------|---------------------------------|-------------------------------------------------|
| protected [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html) | [uuid](#uuid)                   | A unique identifier                             |
| protected [Text](Text.md)                                                                          | [firstSentence](#firstsentence) | The first sentence of the Javadoc for this node |

## Constructor Summary

| Constructor | Description             |
|-------------|-------------------------|
| Node()      | The default constructor |

## Method Summary

| Modifier and Type                                                                                                          | Method                                                                                                                                                    | Description                                               |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| public [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html)                            | [getUUID](#getuuid)()                                                                                                                                     |                                                           |
| public void                                                                                                                | [setDeprecation](#setdeprecation)([Deprecation](Deprecation.md) deprecation)                                                                              | Sets the deprecation status for this node.                |
| public [Deprecation](Deprecation.md)                                                                                       | [getDeprecation](#getdeprecation)()                                                                                                                       | Retrieves the deprecation status of this node.            |
| public void                                                                                                                | [setDeprecationText](#setdeprecationtext)([Text](Text.md) text)                                                                                           | Sets the deprecation text.                                |
| public [Text](Text.md)                                                                                                     | [getDeprecationText](#getdeprecationtext)()                                                                                                               | Returns the deprecation text.                             |
| public void                                                                                                                | [setSince](#setsince)([Text](Text.md) text)                                                                                                               | Sets the 'since' documentation text.                      |
| public [Text](Text.md)                                                                                                     | [getSince](#getsince)()                                                                                                                                   | Returns the 'since' documentation text.                   |
| public void                                                                                                                | [setFirstSentence](#setfirstsentence)([Text](Text.md) text)                                                                                               | Sets the first sentence of the documentation.             |
| public [Text](Text.md)                                                                                                     | [getFirstSentence](#getfirstsentence)()                                                                                                                   | Returns the first sentence of the documentation.          |
| public void                                                                                                                | [setBody](#setbody)([Text](Text.md) text)                                                                                                                 | Sets the main body documentation text.                    |
| public [Text](Text.md)                                                                                                     | [getBody](#getbody)()                                                                                                                                     | Returns the main body documentation text.                 |
| public void                                                                                                                | [setFullBody](#setfullbody)([Text](Text.md) text)                                                                                                         | Sets the full body documentation text including tags.     |
| public [Text](Text.md)                                                                                                     | [getFullBody](#getfullbody)()                                                                                                                             | Returns the full body documentation text including tags.  |
| public void                                                                                                                | [setReferences](#setreferences)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> refs) | Sets the list of references for this node.                |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> | [getReferences](#getreferences)()                                                                                                                         | Returns the list of references associated with this node. |

## Field Details

### uuid

A unique identifier


---

### firstSentence

The first sentence of the Javadoc for this node


---


## Method Details

### getUUID

public [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html) getUUID()




---

### setDeprecation

public void setDeprecation([Deprecation](Deprecation.md) deprecation)

Sets the deprecation status for this node.


---

### getDeprecation

public [Deprecation](Deprecation.md) getDeprecation()

Retrieves the deprecation status of this node.

**Returns:**

The deprecation enum value.


---

### setDeprecationText

public void setDeprecationText([Text](Text.md) text)

Sets the deprecation text.


---

### getDeprecationText

public [Text](Text.md) getDeprecationText()

Returns the deprecation text.

**Returns:**

The deprecation descriptive text.


---

### setSince

public void setSince([Text](Text.md) text)

Sets the 'since' documentation text.


---

### getSince

public [Text](Text.md) getSince()

Returns the 'since' documentation text.

**Returns:**

The since text.


---

### setFirstSentence

public void setFirstSentence([Text](Text.md) text)

Sets the first sentence of the documentation.


---

### getFirstSentence

public [Text](Text.md) getFirstSentence()

Returns the first sentence of the documentation.

**Returns:**

The first sentence text.


---

### setBody

public void setBody([Text](Text.md) text)

Sets the main body documentation text.


---

### getBody

public [Text](Text.md) getBody()

Returns the main body documentation text.

**Returns:**

The body text.


---

### setFullBody

public void setFullBody([Text](Text.md) text)

Sets the full body documentation text including tags.


---

### getFullBody

public [Text](Text.md) getFullBody()

Returns the full body documentation text including tags.

**Returns:**

The full body text.


---

### setReferences

public void setReferences([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> refs)

Sets the list of references for this node.


---

### getReferences

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> getReferences()

Returns the list of references associated with this node.

**Returns:**

List of Reference objects.


---

