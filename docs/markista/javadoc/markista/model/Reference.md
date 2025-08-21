Package [io.github.sandydunlop.markista.model](index.md)

# Class Reference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Reference<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __Reference__</span>

`Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description                                                     |
|------------------------------------------------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------|
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |                                                                 |
| private [Reference.Kind](Reference.Kind.md)                                                          | [kind](#kind)                         |                                                                 |
| private [Reference.Scope](Reference.Scope.md)                                                        | [scope](#scope)                       |                                                                 |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)                       |                                                                 |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [className](#classname)               |                                                                 |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [uri](#uri)                           |                                                                 |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)                     |                                                                 |
| private boolean                                                                                      | [resolved](#resolved)                 |                                                                 |
| private boolean                                                                                      | [hasAnchor](#hasanchor)               |                                                                 |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodSignature](#methodsignature)   |                                                                 |
| private [Text](Text.md)                                                                              | [text](#text)                         | Text with a link to the class the overridden method belongs to. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [origin](#origin)                     | The package the link is coming from.                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [target](#target)                     |                                                                 |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                  | Description                                                                     |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Reference()                                                                                                                                                                                                                                                  | Default constructor creates an empty reference with kind and scope set to NONE. |
| Reference([Reference.Kind](Reference.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target) | Constructs a Reference with given kind, name, and URI.                          |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                  | Description                                           |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| public static [Reference](Reference.md)                                                             | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                          | Sets the target of the reference.                     |
| public static [Reference](Reference.md)                                                             | [toMethod](#tomethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)           |                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodSignature](#getmethodsignature)()                                                                                             |                                                       |
| public void                                                                                         | [setText](#settext)([Text](Text.md) text)                                                                                               |                                                       |
| public [Text](Text.md)                                                                              | [getText](#gettext)()                                                                                                                   |                                                       |
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

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### kind

<span style="font-family: monospace; font-size: 80%;">private [Reference.Kind](Reference.Kind.md) __kind__</span>




---

### scope

<span style="font-family: monospace; font-size: 80%;">private [Reference.Scope](Reference.Scope.md) __scope__</span>




---

### label

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __label__</span>




---

### className

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __className__</span>




---

### uri

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __uri__</span>




---

### anchor

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __anchor__</span>




---

### resolved

<span style="font-family: monospace; font-size: 80%;">private boolean __resolved__</span>




---

### hasAnchor

<span style="font-family: monospace; font-size: 80%;">private boolean __hasAnchor__</span>




---

### methodSignature

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodSignature__</span>




---

### text

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __text__</span>

Text with a link to the class the overridden method belongs to.


---

### origin

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __origin__</span>

The package the link is coming from. Empty string means there is no package. Null means it hasn't been set yet.


---

### target

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __target__</span>




---


## Method Details

### to

<span style="font-family: monospace; font-size: 80%;">public static [Reference](Reference.md) __to__</span>

Sets the target of the reference.

**Returns:**

the reference with target set


---

### toMethod

<span style="font-family: monospace; font-size: 80%;">public static [Reference](Reference.md) __toMethod__</span>




---

### getMethodSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodSignature__</span>




---

### setText

<span style="font-family: monospace; font-size: 80%;">public void __setText__</span>




---

### getText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getText__</span>




---

### from

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __from__</span>

Sets the origin package of the reference.

**Returns:**

the reference with origin set


---

### withLabel

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __withLabel__</span>

Sets the display name of the reference.

**Returns:**

the reference with label set


---

### withClassName

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __withClassName__</span>




---

### withUri

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __withUri__</span>




---

### withKind

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __withKind__</span>

Sets the kind/type of the reference.

**Returns:**

the label with kind set


---

### setKind

<span style="font-family: monospace; font-size: 80%;">public void __setKind__</span>

Sets the kind/type of the reference.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Reference.Kind](Reference.Kind.md) __getKind__</span>

Returns the kind/type of the reference.

**Returns:**

The reference kind.


---

### setScope

<span style="font-family: monospace; font-size: 80%;">public void __setScope__</span>

Sets the scope of the reference.


---

### getScope

<span style="font-family: monospace; font-size: 80%;">public [Reference.Scope](Reference.Scope.md) __getScope__</span>

Returns the scope of the reference.

**Returns:**

The reference scope.


---

### setLabel

<span style="font-family: monospace; font-size: 80%;">public void __setLabel__</span>

Sets the display name of the reference.


---

### getLabel

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabel__</span>

Returns the display name of the reference.

**Returns:**

The display name.


---

### setClassName

<span style="font-family: monospace; font-size: 80%;">public void __setClassName__</span>

Sets the class name associated with the reference.


---

### getClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getClassName__</span>

Returns the class name associated with the reference.

**Returns:**

The class name.


---

### setUri

<span style="font-family: monospace; font-size: 80%;">public void __setUri__</span>

Sets the URI of the reference.


---

### getUri

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getUri__</span>

Returns the URI of the reference.

**Returns:**

The URI string.


---

### setAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setAnchor__</span>

Sets the anchor part of the URI.


---

### getAnchor

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getAnchor__</span>

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### setOrigin

<span style="font-family: monospace; font-size: 80%;">public void __setOrigin__</span>

Sets the origin of this reference. This is the location that is being linked from.


---

### getOrigin

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOrigin__</span>

Gets the origin of this reference. This is the location that is being linked from.

**Returns:**

the origin


---

### setTarget

<span style="font-family: monospace; font-size: 80%;">public void __setTarget__</span>

Sets the target of this reference. This is the location that is being linked to.


---

### getTarget

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTarget__</span>

Gets the target of this reference. This is the location that is being linked from.

**Returns:**

the target


---

### setResolved

<span style="font-family: monospace; font-size: 80%;">public void __setResolved__</span>

Sets the resolved state of this reference.


---

### isResolved

<span style="font-family: monospace; font-size: 80%;">public boolean __isResolved__</span>

Gets the resolved status of this reference.

**Returns:**

True if this reference has been resolved. False otherwise.


---

### setHasAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setHasAnchor__</span>

Specifies if this link is to an anchor


---

### hasAnchor

<span style="font-family: monospace; font-size: 80%;">public boolean __hasAnchor__</span>

Gets the anchor status of this reference.

**Returns:**

True if this reference is to an anchor. False otherwise.


---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__</span>




---

