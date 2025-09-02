Package [io.github.sandydunlop.markista.model](index.md)

# Class Link
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Link<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __Link__</span>

`target` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.


## Field Summary

| Modifier and Type                                                                                    | Field                                     | Description                          |
|------------------------------------------------------------------------------------------------------|-------------------------------------------|--------------------------------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [anchor](#anchor)                         |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [className](#classname)                   |                                      |
| private [Link.Kind](Link.Kind.md)                                                                    | [kind](#kind)                             |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)                           |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodName](#methodname)                 |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodSignature](#methodsignature)       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [moduleName](#modulename)                 |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [nestedClassName](#nestedclassname)       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [originPackage](#originpackage)           | The package the link is coming from. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [originType](#origintype)                 |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [packageName](#packagename)               |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [qualifiedClassName](#qualifiedclassname) |                                      |
| private boolean                                                                                      | [resolved](#resolved)                     |                                      |
| private [Link.Scope](Link.Scope.md)                                                                  | [scope](#scope)                           |                                      |
| private static final long                                                                            | [serialVersionUID](#serialversionuid)     |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simpleClassName](#simpleclassname)       |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [target](#target)                         |                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [uri](#uri)                               |                                      |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                   | Description                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Link()                                                                                                                                                                                                                                        | Default constructor creates an empty target with kind and scope set to NONE. |
| Link([Link.Kind](Link.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target) | Constructs a target with given kind, name, and URI.                          |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                             | Description                                                  |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| public static [Link](Link.md)                                                                       | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                                     | Sets the target of the target.                               |
| public static [Link](Link.md)                                                                       | [toMethod](#tomethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)                      |                                                              |
| public void                                                                                         | [setOriginPackage](#setoriginpackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)           | Sets the origin of this target.                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getOriginPackage](#getoriginpackage)()                                                                                                            | Gets the origin of this target.                              |
| public void                                                                                         | [setOriginType](#setorigintype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                 |                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getOriginType](#getorigintype)()                                                                                                                  |                                                              |
| public void                                                                                         | [setTarget](#settarget)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                       | Sets the target of this target.                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTarget](#gettarget)()                                                                                                                          | Gets the target of this target.                              |
| public void                                                                                         | [setKind](#setkind)([Link.Kind](Link.Kind.md) kind)                                                                                                | Sets the kind/type of the target.                            |
| public [Link.Kind](Link.Kind.md)                                                                    | [getKind](#getkind)()                                                                                                                              | Returns the kind/type of the target.                         |
| public void                                                                                         | [setScope](#setscope)([Link.Scope](Link.Scope.md) scope)                                                                                           | Sets the scope of the target.                                |
| public [Link.Scope](Link.Scope.md)                                                                  | [getScope](#getscope)()                                                                                                                            | Returns the scope of the target.                             |
| public [Link](Link.md)                                                                              | [setModuleName](#setmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                 |                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getModuleName](#getmodulename)()                                                                                                                  |                                                              |
| public [Link](Link.md)                                                                              | [setPackageName](#setpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)               |                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)()                                                                                                                |                                                              |
| public [Link](Link.md)                                                                              | [setClassName](#setclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                   | Sets the class name associated with the target.              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()                                                                                                                    | Returns the class name associated with the target.           |
| public [Link](Link.md)                                                                              | [setQualifiedClassName](#setqualifiedclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified class name associated with the target.    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getQualifiedClassName](#getqualifiedclassname)()                                                                                                  | Returns the qualified class name associated with the target. |
| public [Link](Link.md)                                                                              | [setSimpleClassName](#setsimpleclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple class name associated with the target.       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleClassName](#getsimpleclassname)()                                                                                                        | Returns the simple class name associated with the target.    |
| public [Link](Link.md)                                                                              | [setNestedClassName](#setnestedclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the nested class name associated with the target.       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getNestedClassName](#getnestedclassname)()                                                                                                        | Returns the nested class name associated with the target.    |
| public void                                                                                         | [setLabel](#setlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)                          | Sets the display name of the target.                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                                            | Returns the display name of the target.                      |
| public void                                                                                         | [setUri](#seturi)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                                | Sets the URI of the target.                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getUri](#geturi)()                                                                                                                                | Returns the URI of the target.                               |
| public void                                                                                         | [setResolved](#setresolved)(boolean b)                                                                                                             | Sets the resolved state of this target.                      |
| public boolean                                                                                      | [isResolved](#isresolved)()                                                                                                                        | Gets the resolved status of this target.                     |
| public void                                                                                         | [setMethodSignature](#setmethodsignature)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)  |                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodSignature](#getmethodsignature)()                                                                                                        |                                                              |
| public [Link](Link.md)                                                                              | [setMethodName](#setmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                 | Sets the method name of the target.                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)()                                                                                                                  | Returns the method name of the target.                       |
| public void                                                                                         | [setAnchor](#setanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)                       | Sets the anchor part of the URI.                             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getAnchor](#getanchor)()                                                                                                                          | Returns the anchor part of the URI.                          |
| public [Link](Link.md)                                                                              | [fromPackage](#frompackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                     | Sets the origin package of the target.                       |
| public [Link](Link.md)                                                                              | [fromType](#fromtype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                           |                                                              |
| public [Link](Link.md)                                                                              | [withLabel](#withlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)                        | Sets the display name of the target.                         |
| public [Link](Link.md)                                                                              | [withClassName](#withclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)            |                                                              |
| public [Link](Link.md)                                                                              | [withUri](#withuri)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)                              |                                                              |
| public [Link](Link.md)                                                                              | [withKind](#withkind)([Link.Kind](Link.Kind.md) kind)                                                                                              | Sets the kind/type of the target.                            |
| public [Link](Link.md)                                                                              | [withMethodName](#withmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)                  |                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                                            |                                                              |



## Field Details

### anchor

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __anchor__</span>




---

### className

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __className__</span>




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

### moduleName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__</span>




---

### nestedClassName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __nestedClassName__</span>




---

### originPackage

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __originPackage__</span>

The package the link is coming from. Empty string means there is no package. Null means it hasn't been set yet.


---

### originType

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __originType__</span>




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

Sets the target of the target.

**Returns:**

the target with target set


---

### toMethod

<span style="font-family: monospace; font-size: 80%;">public static [Link](Link.md) __toMethod__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)</span>




---

### setOriginPackage

<span style="font-family: monospace; font-size: 80%;">public void __setOriginPackage__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the origin of this target. This is the location that is being linked from.


---

### getOriginPackage

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOriginPackage__()</span>

Gets the origin of this target. This is the location that is being linked from.

**Returns:**

the origin


---

### setOriginType

<span style="font-family: monospace; font-size: 80%;">public void __setOriginType__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### getOriginType

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOriginType__()</span>




---

### setTarget

<span style="font-family: monospace; font-size: 80%;">public void __setTarget__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)</span>

Sets the target of this target. This is the location that is being linked to.


---

### getTarget

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTarget__()</span>

Gets the target of this target. This is the location that is being linked from.

**Returns:**

the target


---

### setKind

<span style="font-family: monospace; font-size: 80%;">public void __setKind__([Link.Kind](Link.Kind.md) kind)</span>

Sets the kind/type of the target.


---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Link.Kind](Link.Kind.md) __getKind__()</span>

Returns the kind/type of the target.

**Returns:**

The target kind.


---

### setScope

<span style="font-family: monospace; font-size: 80%;">public void __setScope__([Link.Scope](Link.Scope.md) scope)</span>

Sets the scope of the target.


---

### getScope

<span style="font-family: monospace; font-size: 80%;">public [Link.Scope](Link.Scope.md) __getScope__()</span>

Returns the scope of the target.

**Returns:**

The target scope.


---

### setModuleName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setModuleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### getModuleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleName__()</span>




---

### setPackageName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__()</span>




---

### setClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the class name associated with the target.


---

### getClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getClassName__()</span>

Returns the class name associated with the target.

**Returns:**

The class name.


---

### setQualifiedClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setQualifiedClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the qualified class name associated with the target.


---

### getQualifiedClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedClassName__()</span>

Returns the qualified class name associated with the target.

**Returns:**

The qualified class name.


---

### setSimpleClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setSimpleClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the simple class name associated with the target.


---

### getSimpleClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleClassName__()</span>

Returns the simple class name associated with the target.

**Returns:**

The simple class name.


---

### setNestedClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setNestedClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the nested class name associated with the target.


---

### getNestedClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getNestedClassName__()</span>

Returns the nested class name associated with the target.

**Returns:**

The nested class name.


---

### setLabel

<span style="font-family: monospace; font-size: 80%;">public void __setLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Sets the display name of the target.


---

### getLabel

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabel__()</span>

Returns the display name of the target.

**Returns:**

The display name.


---

### setUri

<span style="font-family: monospace; font-size: 80%;">public void __setUri__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)</span>

Sets the URI of the target.


---

### getUri

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getUri__()</span>

Returns the URI of the target.

**Returns:**

The URI string.


---

### setResolved

<span style="font-family: monospace; font-size: 80%;">public void __setResolved__(boolean b)</span>

Sets the resolved state of this target.


---

### isResolved

<span style="font-family: monospace; font-size: 80%;">public boolean __isResolved__()</span>

Gets the resolved status of this target.

**Returns:**

True if this target has been resolved. False otherwise.


---

### setMethodSignature

<span style="font-family: monospace; font-size: 80%;">public void __setMethodSignature__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)</span>




---

### getMethodSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodSignature__()</span>




---

### setMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __setMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the method name of the target.


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


---

### getAnchor

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getAnchor__()</span>

Returns the anchor part of the URI.

**Returns:**

The anchor string.


---

### fromPackage

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __fromPackage__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the origin package of the target.

**Returns:**

the target with origin set


---

### fromType

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __fromType__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### withLabel

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Sets the display name of the target.

**Returns:**

the target with label set


---

### withClassName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)</span>




---

### withUri

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withUri__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) uri)</span>




---

### withKind

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withKind__([Link.Kind](Link.Kind.md) kind)</span>

Sets the kind/type of the target.

**Returns:**

the label with kind set


---

### withMethodName

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __withMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

