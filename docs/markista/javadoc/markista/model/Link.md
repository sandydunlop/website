Package [io.github.sandydunlop.markista.model](index.md)

# Class Link
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Link<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __Link__</span>

`Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description                          |
|------------------------------------------------------------------------------------------------------|---------------------------------------|--------------------------------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)                     |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [className](#classname)               |                                      |
| private boolean                                                                                      | [hasAnchor](#hasanchor)               |                                      |
| private [Link.Kind](Link.Kind.md)                                                                    | [kind](#kind)                         |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)                       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodName](#methodname)             |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodSignature](#methodsignature)   |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [origin](#origin)                     | The package the link is coming from. |
| private boolean                                                                                      | [resolved](#resolved)                 |                                      |
| private [Link.Scope](Link.Scope.md)                                                                  | [scope](#scope)                       |                                      |
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [target](#target)                     |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [uri](#uri)                           |                                      |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                   | Description                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Link()                                                                                                                                                                                                                                        | Default constructor creates an empty reference with kind and scope set to NONE. |
| Link([Link.Kind](Link.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target) | Constructs a Reference with given kind, name, and URI.                          |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                  | Description                                           |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| public [Link](Link.md)                                                                              | [from](#from)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)                      | Sets the origin package of the reference.             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getAnchor](#getanchor)()                                                                                                               | Returns the anchor part of the URI.                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()                                                                                                         | Returns the class name associated with the reference. |
| public [Link.Kind](Link.Kind.md)                                                                    | [getKind](#getkind)()                                                                                                                   | Returns the kind/type of the reference.               |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                                 | Returns the display name of the reference.            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)()                                                                                                       | Returns the method name of the reference.             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodSignature](#getmethodsignature)()                                                                                             |                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getOrigin](#getorigin)()                                                                                                               | Gets the origin of this reference.                    |
| public [Link.Scope](Link.Scope.md)                                                                  | [getScope](#getscope)()                                                                                                                 | Returns the scope of the reference.                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTarget](#gettarget)()                                                                                                               | Gets the target of this reference.                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getUri](#geturi)()                                                                                                                     | Returns the URI of the reference.                     |
| public boolean                                                                                      | [hasAnchor](#hasanchor)()                                                                                                               | Gets the anchor status of this reference.             |
| public boolean                                                                                      | [isResolved](#isresolved)()                                                                                                             | Gets the resolved status of this reference.           |
| public void                                                                                         | [setAnchor](#setanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)            | Sets the anchor part of the URI.                      |
| public void                                                                                         | [setClassName](#setclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)        | Sets the class name associated with the reference.    |
| public void                                                                                         | [setHasAnchor](#sethasanchor)(boolean b)                                                                                                | Specifies if this link is to an anchor                |
| public void                                                                                         | [setKind](#setkind)([Link.Kind](Link.Kind.md) kind)                                                                                     | Sets the kind/type of the reference.                  |
| public void                                                                                         | [setLabel](#setlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)               | Sets the display name of the reference.               |
| public [Link](Link.md)                                                                              | [setMethodName](#setmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)      | Sets the method name of the reference.                |
| public void                                                                                         | [setOrigin](#setorigin)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)            | Sets the origin of this reference.                    |
| public void                                                                                         | [setResolved](#setresolved)(boolean b)                                                                                                  | Sets the resolved state of this reference.            |
| public void                                                                                         | [setScope](#setscope)([Link.Scope](Link.Scope.md) scope)                                                                                | Sets the scope of the reference.                      |
| public void                                                                                         | [setTarget](#settarget)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)            | Sets the target of this reference.                    |
| public void                                                                                         | [setUri](#seturi)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                     | Sets the URI of the reference.                        |
| public static [Link](Link.md)                                                                       | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                          | Sets the target of the reference.                     |
| public static [Link](Link.md)                                                                       | [toMethod](#tomethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)           |                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                                 |                                                       |
| public [Link](Link.md)                                                                              | [withClassName](#withclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className) |                                                       |
| public [Link](Link.md)                                                                              | [withKind](#withkind)([Link.Kind](Link.Kind.md) kind)                                                                                   | Sets the kind/type of the reference.                  |
| public [Link](Link.md)                                                                              | [withLabel](#withlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)             | Sets the display name of the reference.               |
| public [Link](Link.md)                                                                              | [withUri](#withuri)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                   |                                                       |



## Field Details

### anchor

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __anchor__</span>




---

### className

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __className__</span>




---

### hasAnchor

<span style="font-family: monospace; font-size: 80%;">private boolean __hasAnchor__</span>




---

### kind

<span style="font-family: monospace; font-size: 80%;">private [Link.Kind](Link.Kind.md) __kind__</span>




---

### label

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __label__</span>




---

### methodName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodName__</span>




---

### methodSignature

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodSignature__</span>




---

### origin

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __origin__</span>

The package the link is coming from. Empty string means there is no package. Null means it hasn't been set yet.


---

### resolved

<span style="font-family: monospace; font-size: 80%;">private boolean __resolved__</span>




---

### scope

<span style="font-family: monospace; font-size: 80%;">private [Link.Scope](Link.Scope.md) __scope__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### target

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __target__</span>




---

### uri

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __uri__</span>




---


## Method Details

### from

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __from__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)</span>

Sets the origin package of the reference.

**Returns:**

the reference with origin set


---

### getAnchor

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getAnchor__()</span>

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### getClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getClassName__()</span>

Returns the class name associated with the reference.

**Returns:**

The class name.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Link.Kind](Link.Kind.md) __getKind__()</span>

Returns the kind/type of the reference.

**Returns:**

The reference kind.


---

### getLabel

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabel__()</span>

Returns the display name of the reference.

**Returns:**

The display name.


---

### getMethodName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodName__()</span>

Returns the method name of the reference.

**Returns:**

The reference method name.


---

### getMethodSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodSignature__()</span>




---

### getOrigin

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOrigin__()</span>

Gets the origin of this reference. This is the location that is being linked from.

**Returns:**

the origin


---

### getScope

<span style="font-family: monospace; font-size: 80%;">public [Link.Scope](Link.Scope.md) __getScope__()</span>

Returns the scope of the reference.

**Returns:**

The reference scope.


---

### getTarget

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTarget__()</span>

Gets the target of this reference. This is the location that is being linked from.

**Returns:**

the target


---

### getUri

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getUri__()</span>

Returns the URI of the reference.

**Returns:**

The URI string.


---

### hasAnchor

<span style="font-family: monospace; font-size: 80%;">public boolean __hasAnchor__()</span>

Gets the anchor status of this reference.

**Returns:**

True if this reference is to an anchor. False otherwise.


---

### isResolved

<span style="font-family: monospace; font-size: 80%;">public boolean __isResolved__()</span>

Gets the resolved status of this reference.

**Returns:**

True if this reference has been resolved. False otherwise.


---

### setAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setAnchor__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)</span>

Sets the anchor part of the URI.


---

### setClassName

<span style="font-family: monospace; font-size: 80%;">public void __setClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the class name associated with the reference.


---

### setHasAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setHasAnchor__(boolean b)</span>

Specifies if this link is to an anchor


---

### setKind

<span style="font-family: monospace; font-size: 80%;">public void __setKind__([Link.Kind](Link.Kind.md) kind)</span>

Sets the kind/type of the reference.


---

### setLabel

<span style="font-family: monospace; font-size: 80%;">public void __setLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Sets the display name of the reference.


---

### setMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the method name of the reference.


---

### setOrigin

<span style="font-family: monospace; font-size: 80%;">public void __setOrigin__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)</span>

Sets the origin of this reference. This is the location that is being linked from.


---

### setResolved

<span style="font-family: monospace; font-size: 80%;">public void __setResolved__(boolean b)</span>

Sets the resolved state of this reference.


---

### setScope

<span style="font-family: monospace; font-size: 80%;">public void __setScope__([Link.Scope](Link.Scope.md) scope)</span>

Sets the scope of the reference.


---

### setTarget

<span style="font-family: monospace; font-size: 80%;">public void __setTarget__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)</span>

Sets the target of this reference. This is the location that is being linked to.


---

### setUri

<span style="font-family: monospace; font-size: 80%;">public void __setUri__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)</span>

Sets the URI of the reference.


---

### to

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __to__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)</span>

Sets the target of the reference.

**Returns:**

the reference with target set


---

### toMethod

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __toMethod__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

### withClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)</span>




---

### withKind

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withKind__([Link.Kind](Link.Kind.md) kind)</span>

Sets the kind/type of the reference.

**Returns:**

the label with kind set


---

### withLabel

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Sets the display name of the reference.

**Returns:**

the reference with label set


---

### withUri

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withUri__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)</span>




---

