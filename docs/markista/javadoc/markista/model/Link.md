Package [io.github.sandydunlop.markista.model](index.md)

# Class Link
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Link<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)

Direct Known Subtypes:<br/>
    [FileLink](FileLink.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __Link__</span>

`target` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)                     |             |
| protected [Kind](Link.Kind.md)                                                                       | [kind](#kind)                         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodName](#methodname)             |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodSignature](#methodsignature)   |             |
| protected [Reference](Reference.md)                                                                  | [origin](#origin)                     |             |
| private boolean                                                                                      | [resolved](#resolved)                 |             |
| protected [Scope](Link.Scope.md)                                                                     | [scope](#scope)                       |             |
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |             |
| private [SourceCodeLocation](SourceCodeLocation.md)                                                  | [source](#source)                     |             |
| protected [Reference](Reference.md)                                                                  | [target](#target)                     |             |
| protected [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html)      | [uri](#uri)                           |             |



## Constructor Summary

| Constructor | Description                                                                  |
|-------------|------------------------------------------------------------------------------|
| Link()      | Default constructor creates an empty target with kind and scope set to NONE. |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                      | Description                                            |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| public static [Link](Link.md)                                                                       | [toWeb](#toweb)([URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) url)                                  | Sets the target of the link to the provided URL.       |
| public static [Link](Link.md)                                                                       | [to](#to)([Reference](Reference.md) ref)                                                                                                    | Sets the target of the link to the provided reference. |
| public [Link](Link.md)                                                                              | [from](#from)([Reference](Reference.md) ref)                                                                                                |                                                        |
| public void                                                                                         | [setSourceCodeLocation](#setsourcecodelocation)([SourceCodeLocation](SourceCodeLocation.md) source)                                         |                                                        |
| public [SourceCodeLocation](SourceCodeLocation.md)                                                  | [getSourceCodeLocation](#getsourcecodelocation)()                                                                                           |                                                        |
| public void                                                                                         | [setOrigin](#setorigin)([Reference](Reference.md) ref)                                                                                      |                                                        |
| public [Reference](Reference.md)                                                                    | [getOrigin](#getorigin)()                                                                                                                   |                                                        |
| public [Reference](Reference.md)                                                                    | [getTarget](#gettarget)()                                                                                                                   |                                                        |
| public void                                                                                         | [setKind](#setkind)([Kind](Link.Kind.md) kind)                                                                                              | Sets the kind/type of the target.                      |
| public [Kind](Link.Kind.md)                                                                         | [getKind](#getkind)()                                                                                                                       | Returns the kind/type of the target.                   |
| public void                                                                                         | [setScope](#setscope)([Scope](Link.Scope.md) scope)                                                                                         | Sets the scope of the target.                          |
| public [Scope](Link.Scope.md)                                                                       | [getScope](#getscope)()                                                                                                                     | Returns the scope of the target.                       |
| public void                                                                                         | [setUri](#seturi)([URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) uri)                                | Sets the URI of the target.                            |
| public [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html)        | [getUri](#geturi)()                                                                                                                         | Returns the URI of the target.                         |
| public void                                                                                         | [setResolved](#setresolved)(boolean b)                                                                                                      | Sets the resolved state of this target.                |
| public boolean                                                                                      | [isResolved](#isresolved)()                                                                                                                 | Gets the resolved status of this target.               |
| public void                                                                                         | [setMethodSignature](#setmethodsignature)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sig) |                                                        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodSignature](#getmethodsignature)()                                                                                                 |                                                        |
| public [Link](Link.md)                                                                              | [setMethodName](#setmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)          | Sets the method name of the target.                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)()                                                                                                           | Returns the method name of the target.                 |
| public void                                                                                         | [setAnchor](#setanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)                | Sets the anchor part of the URI.                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getAnchor](#getanchor)()                                                                                                                   | Returns the anchor part of the URI.                    |
| public [Link](Link.md)                                                                              | [withKind](#withkind)([Kind](Link.Kind.md) kind)                                                                                            | Sets the kind/type of the target.                      |
| public [Link](Link.md)                                                                              | [withMethodName](#withmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)           |                                                        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                                     |                                                        |



## Field Details

### anchor

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __anchor__</span>




---

### kind

<span style="font-family: monospace; font-size: 80%;">protected [Kind](Link.Kind.md) __kind__</span>




---

### methodName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodName__</span>




---

### methodSignature

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodSignature__</span>




---

### origin

<span style="font-family: monospace; font-size: 80%;">protected [Reference](Reference.md) __origin__</span>




---

### resolved

<span style="font-family: monospace; font-size: 80%;">private boolean __resolved__</span>




---

### scope

<span style="font-family: monospace; font-size: 80%;">protected [Scope](Link.Scope.md) __scope__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### source

<span style="font-family: monospace; font-size: 80%;">private [SourceCodeLocation](SourceCodeLocation.md) __source__</span>




---

### target

<span style="font-family: monospace; font-size: 80%;">protected [Reference](Reference.md) __target__</span>




---

### uri

<span style="font-family: monospace; font-size: 80%;">protected [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) __uri__</span>




---


## Method Details

### toWeb

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __toWeb__([URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) url)</span>

Sets the target of the link to the provided URL.

**Parameters:**

`url` - The URL to use

**Returns:**

the link with its target set


---

### to

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __to__([Reference](Reference.md) ref)</span>

Sets the target of the link to the provided reference.

**Parameters:**

`ref` - The reference to use

**Returns:**

the link with its target set


---

### from

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __from__([Reference](Reference.md) ref)</span>




---

### setSourceCodeLocation

<span style="font-family: monospace; font-size: 80%;">public void __setSourceCodeLocation__([SourceCodeLocation](SourceCodeLocation.md) source)</span>




---

### getSourceCodeLocation

<span style="font-family: monospace; font-size: 80%;">public [SourceCodeLocation](SourceCodeLocation.md) __getSourceCodeLocation__()</span>




---

### setOrigin

<span style="font-family: monospace; font-size: 80%;">public void __setOrigin__([Reference](Reference.md) ref)</span>




---

### getOrigin

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __getOrigin__()</span>




---

### getTarget

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __getTarget__()</span>




---

### setKind

<span style="font-family: monospace; font-size: 80%;">public void __setKind__([Kind](Link.Kind.md) kind)</span>

Sets the kind/type of the target.

**Parameters:**

`kind` - The kind to set.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Kind](Link.Kind.md) __getKind__()</span>

Returns the kind/type of the target.

**Returns:**

The target kind.


---

### setScope

<span style="font-family: monospace; font-size: 80%;">public void __setScope__([Scope](Link.Scope.md) scope)</span>

Sets the scope of the target.

**Parameters:**

`scope` - The scope to set.


---

### getScope

<span style="font-family: monospace; font-size: 80%;">public [Scope](Link.Scope.md) __getScope__()</span>

Returns the scope of the target.

**Returns:**

The target scope.


---

### setUri

<span style="font-family: monospace; font-size: 80%;">public void __setUri__([URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) uri)</span>

Sets the URI of the target.

**Parameters:**

`uri` - The URI to set.


---

### getUri

<span style="font-family: monospace; font-size: 80%;">public [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) __getUri__()</span>

Returns the URI of the target.

**Returns:**

The URI.


---

### setResolved

<span style="font-family: monospace; font-size: 80%;">public void __setResolved__(boolean b)</span>

Sets the resolved state of this target.

**Parameters:**

`b` - Whether this target is resolved or not.


---

### isResolved

<span style="font-family: monospace; font-size: 80%;">public boolean __isResolved__()</span>

Gets the resolved status of this target.

**Returns:**

True if this target has been resolved. False otherwise.


---

### setMethodSignature

<span style="font-family: monospace; font-size: 80%;">public void __setMethodSignature__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sig)</span>




---

### getMethodSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodSignature__()</span>




---

### setMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the method name of the target.

**Parameters:**

`name` - The method name to set.


---

### getMethodName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodName__()</span>

Returns the method name of the target.

**Returns:**

The target method name.


---

### setAnchor

<span style="font-family: monospace; font-size: 80%;">public void __setAnchor__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)</span>

Sets the anchor part of the URI.

**Parameters:**

`anchor` - The anchor to set.


---

### getAnchor

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getAnchor__()</span>

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### withKind

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withKind__([Kind](Link.Kind.md) kind)</span>

Sets the kind/type of the target.

**Parameters:**

`kind` - The kind to set.

**Returns:**

the label with kind set


---

### withMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

