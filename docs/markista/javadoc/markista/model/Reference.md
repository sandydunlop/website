Package [io.github.sandydunlop.markista.model](index.md)

# Class Reference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Reference<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace;">public class __Reference__</span>

`Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description                          |
|------------------------------------------------------------------------------------------------------|---------------------------------------|--------------------------------------|
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |                                      |
| private [Reference.Kind](Reference.Kind.md)                                                          | [kind](#kind)                         |                                      |
| private [Reference.Scope](Reference.Scope.md)                                                        | [scope](#scope)                       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)                       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [className](#classname)               |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [uri](#uri)                           |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)                     |                                      |
| private boolean                                                                                      | [resolved](#resolved)                 |                                      |
| private boolean                                                                                      | [hasAnchor](#hasanchor)               |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [origin](#origin)                     | The package the link is coming from. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [target](#target)                     |                                      |

## Constructor Summary

| Constructor                       | Description                                                                     |
|-----------------------------------|---------------------------------------------------------------------------------|
| Reference()                       | Default constructor creates an empty reference with kind and scope set to NONE. |
| Reference( kind,  label,  target) | Constructs a Reference with given kind, name, and URI.                          |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                  | Description                                           |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| public static [Reference](Reference.md)                                                             | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                          | Sets the target of the reference.                     |
| public [Reference](Reference.md)                                                                    | [from](#from)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)                      | Sets the origin package of the reference.             |
| public [Reference](Reference.md)                                                                    | [withLabel](#withlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)             | Sets the display name of the reference.               |
| public [Reference](Reference.md)                                                                    | [withClassName](#withclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className) |                                                       |
| public [Reference](Reference.md)                                                                    | [withUri](#withuri)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                   |                                                       |
| public [Reference](Reference.md)                                                                    | [withKind](#withkind)([Reference.Kind](Reference.Kind.md) kind)                                                                         | Sets the kind/type of the reference.                  |
| public void                                                                                         | [setKind](#setkind)([Reference.Kind](Reference.Kind.md) kind)                                                                           | Sets the kind/type of the reference.                  |
| public [Reference.Kind](Reference.Kind.md)                                                          | [getKind](#getkind)()                                                                                                                   | Returns the kind/type of the reference.               |
| public void                                                                                         | [setScope](#setscope)([Reference.Scope](Reference.Scope.md) scope)                                                                      | Sets the scope of the reference.                      |
| public [Reference.Scope](Reference.Scope.md)                                                        | [getScope](#getscope)()                                                                                                                 | Returns the scope of the reference.                   |
| public void                                                                                         | [setLabel](#setlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)               | Sets the display name of the reference.               |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                                 | Returns the display name of the reference.            |
| public void                                                                                         | [setClassName](#setclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)        | Sets the class name associated with the reference.    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()                                                                                                         | Returns the class name associated with the reference. |
| public void                                                                                         | [setUri](#seturi)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                     | Sets the URI of the reference.                        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getUri](#geturi)()                                                                                                                     | Returns the URI of the reference.                     |
| public void                                                                                         | [setAnchor](#setanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)            | Sets the anchor part of the URI.                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getAnchor](#getanchor)()                                                                                                               | Returns the anchor part of the URI.                   |
| public void                                                                                         | [setOrigin](#setorigin)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)            | Sets the origin of this reference.                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getOrigin](#getorigin)()                                                                                                               | Gets the origin of this reference.                    |
| public void                                                                                         | [setTarget](#settarget)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)            | Sets the target of this reference.                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTarget](#gettarget)()                                                                                                               | Gets the target of this reference.                    |
| public void                                                                                         | [setResolved](#setresolved)(boolean b)                                                                                                  | Sets the resolved state of this reference.            |
| public boolean                                                                                      | [isResolved](#isresolved)()                                                                                                             | Gets the resolved status of this reference.           |
| public void                                                                                         | [setHasAnchor](#sethasanchor)(boolean b)                                                                                                | Specifies if this link is to an anchor                |
| public boolean                                                                                      | [hasAnchor](#hasanchor)()                                                                                                               | Gets the anchor status of this reference.             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                                 |                                                       |

## Field Details

### serialVersionUID



**See Also:**


[Constant Field Values](../constant-values.md)



---

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

### hasAnchor




---

### origin

The package the link is coming from. Empty string means there is no package. Null means it hasn't been set yet.


---

### target




---


## Method Details

### to

public static [Reference](Reference.md) to([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)

Sets the target of the reference.

**Returns:**

the reference with target set


---

### from

public [Reference](Reference.md) from([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)

Sets the origin package of the reference.

**Returns:**

the reference with origin set


---

### withLabel

public [Reference](Reference.md) withLabel([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)

Sets the display name of the reference.

**Returns:**

the reference with label set


---

### withClassName

public [Reference](Reference.md) withClassName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)




---

### withUri

public [Reference](Reference.md) withUri([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)




---

### withKind

public [Reference](Reference.md) withKind([Reference.Kind](Reference.Kind.md) kind)

Sets the kind/type of the reference.

**Returns:**

the label with kind set


---

### setKind

public void setKind([Reference.Kind](Reference.Kind.md) kind)

Sets the kind/type of the reference.


---

### getKind

public [Reference.Kind](Reference.Kind.md) getKind()

Returns the kind/type of the reference.

**Returns:**

The reference kind.


---

### setScope

public void setScope([Reference.Scope](Reference.Scope.md) scope)

Sets the scope of the reference.


---

### getScope

public [Reference.Scope](Reference.Scope.md) getScope()

Returns the scope of the reference.

**Returns:**

The reference scope.


---

### setLabel

public void setLabel([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)

Sets the display name of the reference.


---

### getLabel

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getLabel()

Returns the display name of the reference.

**Returns:**

The display name.


---

### setClassName

public void setClassName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the class name associated with the reference.


---

### getClassName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName()

Returns the class name associated with the reference.

**Returns:**

The class name.


---

### setUri

public void setUri([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)

Sets the URI of the reference.


---

### getUri

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getUri()

Returns the URI of the reference.

**Returns:**

The URI string.


---

### setAnchor

public void setAnchor([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)

Sets the anchor part of the URI.


---

### getAnchor

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getAnchor()

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### setOrigin

public void setOrigin([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)

Sets the origin of this reference. This is the location that is being linked from.


---

### getOrigin

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getOrigin()

Gets the origin of this reference. This is the location that is being linked from.

**Returns:**

the origin


---

### setTarget

public void setTarget([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)

Sets the target of this reference. This is the location that is being linked to.


---

### getTarget

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getTarget()

Gets the target of this reference. This is the location that is being linked from.

**Returns:**

the target


---

### setResolved

public void setResolved(boolean b)

Sets the resolved state of this reference.


---

### isResolved

public boolean isResolved()

Gets the resolved status of this reference.

**Returns:**

True if this reference has been resolved. False otherwise.


---

### setHasAnchor

public void setHasAnchor(boolean b)

Specifies if this link is to an anchor


---

### hasAnchor

public boolean hasAnchor()

Gets the anchor status of this reference.

**Returns:**

True if this reference is to an anchor. False otherwise.


---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()




---

