Package [io.github.sandydunlop.markista.model](index.md)

# Class Node
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Node<br/>
<br/>

----

The base class for all types of nodes in the API model.


## Nested Class Summary

| Modifier and Type | Class                                         | Description                                                             |
|-------------------|-----------------------------------------------|-------------------------------------------------------------------------|
| static            | [Node.ModifierSorter](Node.ModifierSorter.md) | Utility class to sort modifiers according to Java language conventions. |

## Field Summary

| Modifier and Type                                                                                                                 | Field                               | Description                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [simpleName](#simplename)           | The simple form of the node's name                                           |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [qualifiedName](#qualifiedname)     | The canonical form of the node's name                                        |
| protected [PackageNode](PackageNode.md)                                                                                           | [packageNode](#packagenode)         | A [PackageNode](PackageNode.md) representing the package the node belongs to |
| private [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](Modifier.md)&gt;     | [modifiers](#modifiers)             | A list of the modifiers a node has                                           |
| private [Deprecation](Deprecation.md)                                                                                             | [deprecation](#deprecation)         | The deprecation status of the node                                           |
| private [Text](Text.md)                                                                                                           | [deprecationText](#deprecationtext) | Text describing the deprecation state of the node                            |
| private [Text](Text.md)                                                                                                           | [since](#since)                     | Text showing when this node was added to the API                             |
| protected [Text](Text.md)                                                                                                         | [firstSentence](#firstsentence)     | The first sentence of the Javadoc for this node                              |
| private [Text](Text.md)                                                                                                           | [body](#body)                       | The body text of the Javadoc for this node                                   |
| private [Text](Text.md)                                                                                                           | [fullBody](#fullbody)               | The full text of the Javadoc for this node                                   |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; | [references](#references)           | A list of references specified in this node's Javadoc                        |

## Constructor Summary

| Constructor | Description             |
|-------------|-------------------------|
| Node()      | The default constructor |

## Method Summary

| Modifier and Type                                                                                                         | Method                                                                                                                                                          | Description                                                       |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| void                                                                                                                      | [addModifier](#addmodifier)([Modifier](Modifier.md) mod)                                                                                                        | Adds a modifier to the set of modifiers.                          |
| [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](Modifier.md)&gt;     | [getModifiers](#getmodifiers)()                                                                                                                                 | Returns the set of modifiers for this node.                       |
| void                                                                                                                      | [setDeprecation](#setdeprecation)([Deprecation](Deprecation.md) deprecation)                                                                                    | Sets the deprecation status for this node.                        |
| [Deprecation](Deprecation.md)                                                                                             | [getDeprecation](#getdeprecation)()                                                                                                                             | Retrieves the deprecation status of this node.                    |
| void                                                                                                                      | [setDeprecationText](#setdeprecationtext)([Text](Text.md) text)                                                                                                 | Sets the deprecation text.                                        |
| [Text](Text.md)                                                                                                           | [getDeprecationText](#getdeprecationtext)()                                                                                                                     | Returns the deprecation text.                                     |
| void                                                                                                                      | [setSince](#setsince)([Text](Text.md) text)                                                                                                                     | Sets the 'since' documentation text.                              |
| [Text](Text.md)                                                                                                           | [getSince](#getsince)()                                                                                                                                         | Returns the 'since' documentation text.                           |
| void                                                                                                                      | [setFirstSentence](#setfirstsentence)([Text](Text.md) text)                                                                                                     | Sets the first sentence of the documentation.                     |
| [Text](Text.md)                                                                                                           | [getFirstSentence](#getfirstsentence)()                                                                                                                         | Returns the first sentence of the documentation.                  |
| void                                                                                                                      | [setBody](#setbody)([Text](Text.md) text)                                                                                                                       | Sets the main body documentation text.                            |
| [Text](Text.md)                                                                                                           | [getBody](#getbody)()                                                                                                                                           | Returns the main body documentation text.                         |
| void                                                                                                                      | [setFullBody](#setfullbody)([Text](Text.md) text)                                                                                                               | Sets the full body documentation text including tags.             |
| [Text](Text.md)                                                                                                           | [getFullBody](#getfullbody)()                                                                                                                                   | Returns the full body documentation text including tags.          |
| void                                                                                                                      | [setReferences](#setreferences)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; refs) | Sets the list of references for this node.                        |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; | [getReferences](#getreferences)()                                                                                                                               | Returns the list of references associated with this node.         |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                              | [getModifiersString](#getmodifiersstring)()                                                                                                                     | Returns a string representation of modifiers, excluding 'public'. |

## Field Details

### simpleName

The simple form of the node's name


---

### qualifiedName

The canonical form of the node's name


---

### packageNode

A [PackageNode](PackageNode.md) representing the package the node belongs to


---

### modifiers

A list of the modifiers a node has


---

### deprecation

The deprecation status of the node


---

### deprecationText

Text describing the deprecation state of the node


---

### since

Text showing when this node was added to the API


---

### firstSentence

The first sentence of the Javadoc for this node


---

### body

The body text of the Javadoc for this node


---

### fullBody

The full text of the Javadoc for this node


---

### references

A list of references specified in this node's Javadoc


---


## Method Details

### addModifier

void addModifier([Modifier](Modifier.md) mod)

Adds a modifier to the set of modifiers.

**Parameters:**

`mod` - The modifier to add.


---

### getModifiers

[Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](Modifier.md)&gt; getModifiers()

Returns the set of modifiers for this node.

**Returns:**

Set of modifiers.


---

### setDeprecation

void setDeprecation([Deprecation](Deprecation.md) deprecation)

Sets the deprecation status for this node.

**Parameters:**

`deprecation` - The deprecation enum value.


---

### getDeprecation

[Deprecation](Deprecation.md) getDeprecation()

Retrieves the deprecation status of this node.

**Returns:**

The deprecation enum value.


---

### setDeprecationText

void setDeprecationText([Text](Text.md) text)

Sets the deprecation text.

**Parameters:**

`text` - The text describing the deprecation.


---

### getDeprecationText

[Text](Text.md) getDeprecationText()

Returns the deprecation text.

**Returns:**

The deprecation descriptive text.


---

### setSince

void setSince([Text](Text.md) text)

Sets the 'since' documentation text.

**Parameters:**

`text` - The since text.


---

### getSince

[Text](Text.md) getSince()

Returns the 'since' documentation text.

**Returns:**

The since text.


---

### setFirstSentence

void setFirstSentence([Text](Text.md) text)

Sets the first sentence of the documentation.

**Parameters:**

`text` - The first sentence text.


---

### getFirstSentence

[Text](Text.md) getFirstSentence()

Returns the first sentence of the documentation.

**Returns:**

The first sentence text.


---

### setBody

void setBody([Text](Text.md) text)

Sets the main body documentation text.

**Parameters:**

`text` - The body text.


---

### getBody

[Text](Text.md) getBody()

Returns the main body documentation text.

**Returns:**

The body text.


---

### setFullBody

void setFullBody([Text](Text.md) text)

Sets the full body documentation text including tags.

**Parameters:**

`text` - The full body text.


---

### getFullBody

[Text](Text.md) getFullBody()

Returns the full body documentation text including tags.

**Returns:**

The full body text.


---

### setReferences

void setReferences([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; refs)

Sets the list of references for this node.

**Parameters:**

`refs` - List of Reference objects.


---

### getReferences

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; getReferences()

Returns the list of references associated with this node.

**Returns:**

List of Reference objects.


---

### getModifiersString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModifiersString()

Returns a string representation of modifiers, excluding 'public'.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.


---

