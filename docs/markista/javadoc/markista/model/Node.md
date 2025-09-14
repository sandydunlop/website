Package [io.github.sandydunlop.markista.model](index.md)

# Class Node
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Node<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)

Direct Known Subtypes:<br/>
    [AppliedAnnotationNode](AppliedAnnotationNode.md), [ModuleNode](ModuleNode.md), [PackageNode](PackageNode.md), [AnnotationElement](AnnotationElement.md), [AbstractMember](AbstractMember.md), [Api](Api.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __Node__</span>

The base class for all types of nodes in the API model.


## Field Summary

| Modifier and Type                                                                                                 | Field                                 | Description                                                             |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------|-------------------------------------------------------------------------|
| private [Text](Text.md)                                                                                           | [body](#body)                         | The body of the Javadoc for this node, not including the first sentence |
| private [Deprecation](Deprecation.md)                                                                             | [deprecation](#deprecation)           | The deprecation status of the node                                      |
| private [Text](Text.md)                                                                                           | [deprecationText](#deprecationtext)   | Text describing the deprecation state of the node                       |
| private [Text](Text.md)                                                                                           | [firstSentence](#firstsentence)       | The first sentence of the Javadoc for this node                         |
| protected [Kind](Node.Kind.md)                                                                                    | [kind](#kind)                         | The kind of this type (e.g., class, interface, enum, annotation).       |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> | [references](#references)             | A list of references specified in this node's Javadoc                   |
| private static final long                                                                                         | [serialVersionUID](#serialversionuid) |                                                                         |
| private [Text](Text.md)                                                                                           | [since](#since)                       | Text showing when this node was added to the API                        |
| protected [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html)                | [uuid](#uuid)                         | A unique identifier                                                     |



## Constructor Summary

| Constructor | Description             |
|-------------|-------------------------|
| Node()      | The default constructor |



## Method Summary

| Modifier and Type                                                                                                | Method                                                                                                                                          | Description                                                      |
|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| public [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html)                  | [getUUID](#getuuid)()                                                                                                                           |                                                                  |
| public void                                                                                                      | [setKind](#setkind)([Kind](Node.Kind.md) kind)                                                                                                  | Sets the kind (class, interface, enum, annotation) of this type. |
| public [Kind](Node.Kind.md)                                                                                      | [getKind](#getkind)()                                                                                                                           | Returns the kind of this type.                                   |
| public void                                                                                                      | [setDeprecation](#setdeprecation)([Deprecation](Deprecation.md) deprecation)                                                                    | Sets the deprecation status for this node.                       |
| public [Deprecation](Deprecation.md)                                                                             | [getDeprecation](#getdeprecation)()                                                                                                             | Retrieves the deprecation status of this node.                   |
| public void                                                                                                      | [setDeprecationText](#setdeprecationtext)([Text](Text.md) text)                                                                                 | Sets the deprecation text.                                       |
| public [Text](Text.md)                                                                                           | [getDeprecationText](#getdeprecationtext)()                                                                                                     | Returns the deprecation text.                                    |
| public void                                                                                                      | [setSince](#setsince)([Text](Text.md) text)                                                                                                     | Sets the 'since' documentation text.                             |
| public [Text](Text.md)                                                                                           | [getSince](#getsince)()                                                                                                                         | Returns the 'since' documentation text.                          |
| public void                                                                                                      | [setFirstSentence](#setfirstsentence)([Text](Text.md) t)                                                                                        | Sets the full body documentation text including tags.            |
| public [Text](Text.md)                                                                                           | [getFirstSentence](#getfirstsentence)()                                                                                                         | Returns the first sentence of the documentation.                 |
| public void                                                                                                      | [setBody](#setbody)([Text](Text.md) t)                                                                                                          | Sets the body documentation text including tags.                 |
| public [Text](Text.md)                                                                                           | [getBody](#getbody)()                                                                                                                           | Returns the body documentation text including tags.              |
| public [Text](Text.md)                                                                                           | [getFullBody](#getfullbody)()                                                                                                                   | Gets the full body documentation text including tags.            |
| public void                                                                                                      | [setReferences](#setreferences)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> refs) | Sets the list of references for this node.                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> | [getReferences](#getreferences)()                                                                                                               | Returns the list of references associated with this node.        |



## Field Details

### body

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __body__</span>

The body of the Javadoc for this node, not including the first sentence


---

### deprecation

<span style="font-family: monospace; font-size: 80%;">private [Deprecation](Deprecation.md) __deprecation__</span>

The deprecation status of the node


---

### deprecationText

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __deprecationText__</span>

Text describing the deprecation state of the node


---

### firstSentence

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __firstSentence__</span>

The first sentence of the Javadoc for this node


---

### kind

<span style="font-family: monospace; font-size: 80%;">protected [Kind](Node.Kind.md) __kind__</span>

The kind of this type (e.g., class, interface, enum, annotation).


---

### references

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __references__</span>

A list of references specified in this node's Javadoc


---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### since

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __since__</span>

Text showing when this node was added to the API


---

### uuid

<span style="font-family: monospace; font-size: 80%;">protected [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html) __uuid__</span>

A unique identifier


---


## Method Details

### getUUID

<span style="font-family: monospace; font-size: 80%;">public [UUID](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/UUID.html) __getUUID__()</span>




---

### setKind

<span style="font-family: monospace; font-size: 80%;">public void __setKind__([Kind](Node.Kind.md) kind)</span>

Sets the kind (class, interface, enum, annotation) of this type.

**Parameters:**

`kind` - the Kind enum value.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Kind](Node.Kind.md) __getKind__()</span>

Returns the kind of this type.

**Returns:**

the Kind enum value.


---

### setDeprecation

<span style="font-family: monospace; font-size: 80%;">public void __setDeprecation__([Deprecation](Deprecation.md) deprecation)</span>

Sets the deprecation status for this node.

**Parameters:**

`deprecation` - The deprecation enum value.


---

### getDeprecation

<span style="font-family: monospace; font-size: 80%;">public [Deprecation](Deprecation.md) __getDeprecation__()</span>

Retrieves the deprecation status of this node.

**Returns:**

The deprecation enum value.


---

### setDeprecationText

<span style="font-family: monospace; font-size: 80%;">public void __setDeprecationText__([Text](Text.md) text)</span>

Sets the deprecation text.

**Parameters:**

`text` - The text describing the deprecation.


---

### getDeprecationText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getDeprecationText__()</span>

Returns the deprecation text.

**Returns:**

The deprecation descriptive text.


---

### setSince

<span style="font-family: monospace; font-size: 80%;">public void __setSince__([Text](Text.md) text)</span>

Sets the 'since' documentation text.

**Parameters:**

`text` - The since text.


---

### getSince

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getSince__()</span>

Returns the 'since' documentation text.

**Returns:**

The since text.


---

### setFirstSentence

<span style="font-family: monospace; font-size: 80%;">public void __setFirstSentence__([Text](Text.md) t)</span>

Sets the full body documentation text including tags.

**Parameters:**

`t` - The full body text.


---

### getFirstSentence

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getFirstSentence__()</span>

Returns the first sentence of the documentation.

**Returns:**

The first sentence text.


---

### setBody

<span style="font-family: monospace; font-size: 80%;">public void __setBody__([Text](Text.md) t)</span>

Sets the body documentation text including tags.

**Parameters:**

`t` - The body text.


---

### getBody

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getBody__()</span>

Returns the body documentation text including tags.

**Returns:**

The body text.


---

### getFullBody

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getFullBody__()</span>

Gets the full body documentation text including tags.

**Returns:**

The full body text.


---

### setReferences

<span style="font-family: monospace; font-size: 80%;">public void __setReferences__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> refs)</span>

Sets the list of references for this node.

**Parameters:**

`refs` - List of Reference objects.


---

### getReferences

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __getReferences__()</span>

Returns the list of references associated with this node.

**Returns:**

List of Reference objects.


---

