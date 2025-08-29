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

| Modifier and Type                                                                                    | Field                                     | Description                          |
|------------------------------------------------------------------------------------------------------|-------------------------------------------|--------------------------------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)                         |                                      |
| private boolean                                                                                      | [hasAnchor](#hasanchor)                   |                                      |
| private [Link.Kind](Link.Kind.md)                                                                    | [kind](#kind)                             |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)                           |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodName](#methodname)                 |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodSignature](#methodsignature)       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [origin](#origin)                         | The package the link is coming from. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [packageName](#packagename)               |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [qualifiedClassName](#qualifiedclassname) |                                      |
| private boolean                                                                                      | [resolved](#resolved)                     |                                      |
| private [Link.Scope](Link.Scope.md)                                                                  | [scope](#scope)                           |                                      |
| private static final long                                                                            | [serialVersionUID](#serialversionuid)     |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simpleClassName](#simpleclassname)       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [target](#target)                         |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [uri](#uri)                               |                                      |



## Constructor Summary

| Constructor                                                                                                                                                                                                              | Description                                                                     |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Link()                                                                                                                                                                                                                   | Default constructor creates an empty reference with kind and scope set to NONE. |
| Link(Kind kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target) | Constructs a Reference with given kind, name, and URI.                          |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                             | Description                                                     |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| public static [Link](Link.md)                                                                       | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                                     | Sets the target of the reference.                               |
| public static [Link](Link.md)                                                                       | [toMethod](#tomethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)                      |                                                                 |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodSignature](#getmethodsignature)()                                                                                                        |                                                                 |
| public [Link](Link.md)                                                                              | [from](#from)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)                                 | Sets the origin package of the reference.                       |
| public [Link](Link.md)                                                                              | [withLabel](#withlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)                        | Sets the display name of the reference.                         |
| public [Link](Link.md)                                                                              | [withClassName](#withclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)            |                                                                 |
| public [Link](Link.md)                                                                              | [withUri](#withuri)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                              |                                                                 |
| public [Link](Link.md)                                                                              | [withKind](#withkind)(Kind kind)                                                                                                                   | Sets the kind/type of the reference.                            |
| public [Link](Link.md)                                                                              | [withMethodName](#withmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)                  |                                                                 |
| public void                                                                                         | [setKind](#setkind)(Kind kind)                                                                                                                     | Sets the kind/type of the reference.                            |
| public [Link.Kind](Link.Kind.md)                                                                    | [getKind](#getkind)()                                                                                                                              | Returns the kind/type of the reference.                         |
| public [Link](Link.md)                                                                              | [setMethodName](#setmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                 | Sets the method name of the reference.                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)()                                                                                                                  | Returns the method name of the reference.                       |
| public void                                                                                         | [setScope](#setscope)(Scope scope)                                                                                                                 | Sets the scope of the reference.                                |
| public [Link.Scope](Link.Scope.md)                                                                  | [getScope](#getscope)()                                                                                                                            | Returns the scope of the reference.                             |
| public void                                                                                         | [setLabel](#setlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)                          | Sets the display name of the reference.                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                                            | Returns the display name of the reference.                      |
| public [Link](Link.md)                                                                              | [setPackageName](#setpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)               |                                                                 |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)()                                                                                                                |                                                                 |
| public [Link](Link.md)                                                                              | [setSimpleClassName](#setsimpleclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple class name associated with the reference.       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleClassName](#getsimpleclassname)()                                                                                                        | Returns the simple class name associated with the reference.    |
| public [Link](Link.md)                                                                              | [setQualifiedClassName](#setqualifiedclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified class name associated with the reference.    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getQualifiedClassName](#getqualifiedclassname)()                                                                                                  | Returns the qualified class name associated with the reference. |
| public void                                                                                         | [setUri](#seturi)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                                | Sets the URI of the reference.                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getUri](#geturi)()                                                                                                                                | Returns the URI of the reference.                               |
| public void                                                                                         | [setAnchor](#setanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)                       | Sets the anchor part of the URI.                                |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getAnchor](#getanchor)()                                                                                                                          | Returns the anchor part of the URI.                             |
| public void                                                                                         | [setOrigin](#setorigin)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)                       | Sets the origin of this reference.                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getOrigin](#getorigin)()                                                                                                                          | Gets the origin of this reference.                              |
| public void                                                                                         | [setTarget](#settarget)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                       | Sets the target of this reference.                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTarget](#gettarget)()                                                                                                                          | Gets the target of this reference.                              |
| public void                                                                                         | [setResolved](#setresolved)(boolean b)                                                                                                             | Sets the resolved state of this reference.                      |
| public boolean                                                                                      | [isResolved](#isresolved)()                                                                                                                        | Gets the resolved status of this reference.                     |
| public void                                                                                         | [setHasAnchor](#sethasanchor)(boolean b)                                                                                                           | Specifies if this link is to an anchor                          |
| public boolean                                                                                      | [hasAnchor](#hasanchor)()                                                                                                                          | Gets the anchor status of this reference.                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                                            |                                                                 |



## Field Details

### anchor

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __anchor__</span>




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

### packageName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __packageName__</span>




---

### qualifiedClassName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __qualifiedClassName__</span>




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

### simpleClassName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simpleClassName__</span>




---

### target

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __target__</span>




---

### uri

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __uri__</span>




---


## Method Details

### to

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __to__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)</span>

Sets the target of the reference.

**Returns:**

the reference with target set


---

### toMethod

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __toMethod__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)</span>




---

### getMethodSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodSignature__()</span>




---

### from

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __from__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)</span>

Sets the origin package of the reference.

**Returns:**

the reference with origin set


---

### withLabel

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Sets the display name of the reference.

**Returns:**

the reference with label set


---

### withClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)</span>




---

### withUri

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withUri__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)</span>




---

### withKind

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withKind__(Kind kind)</span>

Sets the kind/type of the reference.

**Returns:**

the label with kind set


---

### withMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)</span>




---

### setKind

<span style="font-family: monospace; font-size: 80%;">public void __setKind__(Kind kind)</span>

Sets the kind/type of the reference.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Link.Kind](Link.Kind.md) __getKind__()</span>

Returns the kind/type of the reference.

**Returns:**

The reference kind.


---

### setMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the method name of the reference.


---

### getMethodName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodName__()</span>

Returns the method name of the reference.

**Returns:**

The reference method name.


---

### setScope

<span style="font-family: monospace; font-size: 80%;">public void __setScope__(Scope scope)</span>

Sets the scope of the reference.


---

### getScope

<span style="font-family: monospace; font-size: 80%;">public [Link.Scope](Link.Scope.md) __getScope__()</span>

Returns the scope of the reference.

**Returns:**

The reference scope.


---

### setLabel

<span style="font-family: monospace; font-size: 80%;">public void __setLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Sets the display name of the reference.


---

### getLabel

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabel__()</span>

Returns the display name of the reference.

**Returns:**

The display name.


---

### setPackageName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__()</span>




---

### setSimpleClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setSimpleClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the simple class name associated with the reference.


---

### getSimpleClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleClassName__()</span>

Returns the simple class name associated with the reference.

**Returns:**

The simple class name.


---

### setQualifiedClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setQualifiedClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the qualified class name associated with the reference.


---

### getQualifiedClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedClassName__()</span>

Returns the qualified class name associated with the reference.

**Returns:**

The qualified class name.


---

### setUri

<span style="font-family: monospace; font-size: 80%;">public void __setUri__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)</span>

Sets the URI of the reference.


---

### getUri

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getUri__()</span>

Returns the URI of the reference.

**Returns:**

The URI string.


---

### setAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setAnchor__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)</span>

Sets the anchor part of the URI.


---

### getAnchor

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getAnchor__()</span>

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### setOrigin

<span style="font-family: monospace; font-size: 80%;">public void __setOrigin__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) origin)</span>

Sets the origin of this reference. This is the location that is being linked from.


---

### getOrigin

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOrigin__()</span>

Gets the origin of this reference. This is the location that is being linked from.

**Returns:**

the origin


---

### setTarget

<span style="font-family: monospace; font-size: 80%;">public void __setTarget__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)</span>

Sets the target of this reference. This is the location that is being linked to.


---

### getTarget

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTarget__()</span>

Gets the target of this reference. This is the location that is being linked from.

**Returns:**

the target


---

### setResolved

<span style="font-family: monospace; font-size: 80%;">public void __setResolved__(boolean b)</span>

Sets the resolved state of this reference.


---

### isResolved

<span style="font-family: monospace; font-size: 80%;">public boolean __isResolved__()</span>

Gets the resolved status of this reference.

**Returns:**

True if this reference has been resolved. False otherwise.


---

### setHasAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setHasAnchor__(boolean b)</span>

Specifies if this link is to an anchor


---

### hasAnchor

<span style="font-family: monospace; font-size: 80%;">public boolean __hasAnchor__()</span>

Gets the anchor status of this reference.

**Returns:**

True if this reference is to an anchor. False otherwise.


---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

