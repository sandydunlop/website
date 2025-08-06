Package [io.github.sandydunlop.markista.model](index.md)

# Class Reference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Reference<br/>
<br/>

----

`Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.


## Field Summary

| Modifier and Type                                                                                    | Field                   | Description                          |
|------------------------------------------------------------------------------------------------------|-------------------------|--------------------------------------|
| private [Reference.Kind](Reference.Kind.md)                                                          | [kind](#kind)           |                                      |
| private [Reference.Scope](Reference.Scope.md)                                                        | [scope](#scope)         |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)         |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [className](#classname) |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [uri](#uri)             |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)       |                                      |
| private boolean                                                                                      | [resolved](#resolved)   |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [origin](#origin)       | The package the link is coming from. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [target](#target)       |                                      |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                           | Description                                                                     |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Reference()                                                                                                                                                                                                                                                                                           | Default constructor creates an empty reference with kind and scope set to NONE. |
| Reference([Reference.Kind](Reference.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                                              | Constructs a Reference with given kind, name, and URI.                          |
| Reference([Reference.Scope](Reference.Scope.md) scope, [Reference.Kind](Reference.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                   | Constructs a Reference with given scope, kind, and name.                        |
| Reference([Reference.Scope](Reference.Scope.md) scope, [Reference.Kind](Reference.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri) | Constructs a Reference with full specification: scope, kind, name, and URI.     |

## Method Summary

| Modifier and Type                                                                            | Method                                                                                                                           | Description                                           |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| static [Reference](Reference.md)                                                             | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                   | Sets the target of the reference.                     |
| [Reference](Reference.md)                                                                    | [from](#from)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)               | Sets the origin package of the reference.             |
| [Reference](Reference.md)                                                                    | [withLabel](#withlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)      | Sets the display name of the reference.               |
| [Reference](Reference.md)                                                                    | [withKind](#withkind)([Reference.Kind](Reference.Kind.md) kind)                                                                  | Sets the kind/type of the reference.                  |
| void                                                                                         | [setKind](#setkind)([Reference.Kind](Reference.Kind.md) kind)                                                                    | Sets the kind/type of the reference.                  |
| [Reference.Kind](Reference.Kind.md)                                                          | [getKind](#getkind)()                                                                                                            | Returns the kind/type of the reference.               |
| void                                                                                         | [setScope](#setscope)([Reference.Scope](Reference.Scope.md) scope)                                                               | Sets the scope of the reference.                      |
| [Reference.Scope](Reference.Scope.md)                                                        | [getScope](#getscope)()                                                                                                          | Returns the scope of the reference.                   |
| void                                                                                         | [setLabel](#setlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)        | Sets the display name of the reference.               |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                          | Returns the display name of the reference.            |
| void                                                                                         | [setClassName](#setclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the class name associated with the reference.    |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()                                                                                                  | Returns the class name associated with the reference. |
| void                                                                                         | [setUri](#seturi)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)              | Sets the URI of the reference.                        |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getUri](#geturi)()                                                                                                              | Returns the URI of the reference.                     |
| void                                                                                         | [setAnchor](#setanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)     | Sets the anchor part of the URI.                      |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getAnchor](#getanchor)()                                                                                                        | Returns the anchor part of the URI.                   |
| void                                                                                         | [setOrigin](#setorigin)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)     |                                                       |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getOrigin](#getorigin)()                                                                                                        |                                                       |
| void                                                                                         | [setTarget](#settarget)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)     |                                                       |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTarget](#gettarget)()                                                                                                        |                                                       |
| void                                                                                         | [setResolved](#setresolved)(boolean b)                                                                                           |                                                       |
| boolean                                                                                      | [isResolved](#isresolved)()                                                                                                      |                                                       |

## Field Details

### kind




---

### scope




---

### label




---

### className




---

### uri




---

### anchor




---

### resolved




---

### origin

The package the link is coming from. Empty string means there is no package. Null means it hasn't been set yet.


---

### target




---


## Method Details

### to

static [Reference](Reference.md) to([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)

Sets the target of the reference.

**Parameters:**

`target` - The target to set.

**Returns:**

the reference with target set


---

### from

[Reference](Reference.md) from([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)

Sets the origin package of the reference.

**Parameters:**

`origin` - The origin package to set.

**Returns:**

the reference with origin set


---

### withLabel

[Reference](Reference.md) withLabel([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)

Sets the display name of the reference.

**Parameters:**

`label` - The display name to set.

**Returns:**

the reference with label set


---

### withKind

[Reference](Reference.md) withKind([Reference.Kind](Reference.Kind.md) kind)

Sets the kind/type of the reference.

**Parameters:**

`kind` - The kind to set.

**Returns:**

the label with kind set


---

### setKind

void setKind([Reference.Kind](Reference.Kind.md) kind)

Sets the kind/type of the reference.

**Parameters:**

`kind` - The kind to set.


---

### getKind

[Reference.Kind](Reference.Kind.md) getKind()

Returns the kind/type of the reference.

**Returns:**

The reference kind.


---

### setScope

void setScope([Reference.Scope](Reference.Scope.md) scope)

Sets the scope of the reference.

**Parameters:**

`scope` - The scope to set.


---

### getScope

[Reference.Scope](Reference.Scope.md) getScope()

Returns the scope of the reference.

**Returns:**

The reference scope.


---

### setLabel

void setLabel([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)

Sets the display name of the reference.

**Parameters:**

`label` - The display name to set.


---

### getLabel

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getLabel()

Returns the display name of the reference.

**Returns:**

The display name.


---

### setClassName

void setClassName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the class name associated with the reference.

**Parameters:**

`name` - The class name to set.


---

### getClassName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName()

Returns the class name associated with the reference.

**Returns:**

The class name.


---

### setUri

void setUri([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)

Sets the URI of the reference.

**Parameters:**

`uri` - The URI to set.


---

### getUri

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getUri()

Returns the URI of the reference.

**Returns:**

The URI string.


---

### setAnchor

void setAnchor([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)

Sets the anchor part of the URI.

**Parameters:**

`anchor` - The anchor to set.


---

### getAnchor

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getAnchor()

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### setOrigin

void setOrigin([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)




---

### getOrigin

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getOrigin()




---

### setTarget

void setTarget([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)




---

### getTarget

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getTarget()




---

### setResolved

void setResolved(boolean b)




---

### isResolved

boolean isResolved()




---

