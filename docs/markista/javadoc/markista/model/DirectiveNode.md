Package [io.github.sandydunlop.markista.model](index.md)

# Class DirectiveNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.DirectiveNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __DirectiveNode__</span>

Represents a directive within a module declaration, such as requires, exports, or provides.
Tracks the kind of directive, its name, whether it is transitive, associated packages,
implementations, and related interface information.


## Field Summary

| Modifier and Type                                                                                                   | Field                                     | Description                                                  |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------|--------------------------------------------------------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> | [implementations](#implementations)       | List of implementation names associated with this directive. |
| private [](Link.md)                                                                                                 | [interfaceReference](#interfacereference) | The interface name associated with this directive, if any.   |
| private final [](DirectiveNode.Kind.md)                                                                             | [kind](#kind)                             | The kind of this directive (e.g. REQUIRES, EXPORTS).         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [name](#name)                             | The name associated with this directive.                     |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> | [packages](#packages)                     | List of package names associated with this directive.        |
| private [](Link.md)                                                                                                 | [reference](#reference)                   |                                                              |
| private static final long                                                                                           | [serialVersionUID](#serialversionuid)     |                                                              |
| private boolean                                                                                                     | [transitive](#transitive)                 | Indicates whether this directive is transitive.              |



## Constructor Summary

| Constructor                                                                              | Description                                                                   |
|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| DirectiveNode([](DirectiveNode.Kind.md) kind, [](Link.md) reference, boolean transitive) | Constructs a DirectiveNode with the specified kind, name and transitive flag. |
| DirectiveNode([](DirectiveNode.Kind.md) kind, [](Link.md) reference)                     | Constructs a DirectiveNode with the specified kind and name.                  |



## Method Summary

| Modifier and Type                                                                                            | Method                                                         | Description                                                             |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------|
| public [](DirectiveNode.Kind.md)                                                                             | [getKind](#getkind)()                                          | Returns the kind of this directive.                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)          | [getName](#getname)()                                          | Returns the name associated with this directive.                        |
| public [](Link.md)                                                                                           | [getReference](#getreference)()                                |                                                                         |
| public boolean                                                                                               | [isTransitive](#istransitive)()                                | Indicates if this directive is transitive.                              |
| public void                                                                                                  | [addPackage](#addpackage)([](Link.md) reference)               | Adds a package reference to this directive's package list.              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> | [getPackages](#getpackages)()                                  | Returns the list of package references associated with this directive.  |
| public void                                                                                                  | [addImplementation](#addimplementation)([](Link.md) reference) | Adds the reference to an implementation associated with this directive. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> | [getImplementations](#getimplementations)()                    | Returns the list of implementations associated with this directive.     |
| public void                                                                                                  | [setInterface](#setinterface)([](Link.md) interfaceReference)  | Sets the interface name related to this directive.                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)          | [toString](#tostring)()                                        |                                                                         |
| public [](Link.md)                                                                                           | [getInterface](#getinterface)()                                | Returns the interface name associated with this directive.              |



## Field Details

### implementations

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> __implementations__</span>

List of implementation names associated with this directive.


---

### interfaceReference

<span style="font-family: monospace; font-size: 80%;">private [](Link.md) __interfaceReference__</span>

The interface name associated with this directive, if any.


---

### kind

<span style="font-family: monospace; font-size: 80%;">private final [](DirectiveNode.Kind.md) __kind__</span>

The kind of this directive (e.g. REQUIRES, EXPORTS).


---

### name

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>

The name associated with this directive.


---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> __packages__</span>

List of package names associated with this directive.


---

### reference

<span style="font-family: monospace; font-size: 80%;">private [](Link.md) __reference__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### transitive

<span style="font-family: monospace; font-size: 80%;">private boolean __transitive__</span>

Indicates whether this directive is transitive.


---


## Method Details

### getKind

<span style="font-family: monospace; font-size: 80%;">public [](DirectiveNode.Kind.md) __getKind__()</span>

Returns the kind of this directive.

**Returns:**

the directive kind.


---

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>

Returns the name associated with this directive.

**Returns:**

the directive name.


---

### getReference

<span style="font-family: monospace; font-size: 80%;">public [](Link.md) __getReference__()</span>




---

### isTransitive

<span style="font-family: monospace; font-size: 80%;">public boolean __isTransitive__()</span>

Indicates if this directive is transitive.

**Returns:**

true if transitive; false otherwise.


---

### addPackage

<span style="font-family: monospace; font-size: 80%;">public void __addPackage__([](Link.md) reference)</span>

Adds a package reference to this directive's package list.


---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> __getPackages__()</span>

Returns the list of package references associated with this directive.

**Returns:**

list of package names.


---

### addImplementation

<span style="font-family: monospace; font-size: 80%;">public void __addImplementation__([](Link.md) reference)</span>

Adds the reference to an implementation associated with this directive.


---

### getImplementations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](Link.md)> __getImplementations__()</span>

Returns the list of implementations associated with this directive.

**Returns:**

list of implementation references.


---

### setInterface

<span style="font-family: monospace; font-size: 80%;">public void __setInterface__([](Link.md) interfaceReference)</span>

Sets the interface name related to this directive.


---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

### getInterface

<span style="font-family: monospace; font-size: 80%;">public [](Link.md) __getInterface__()</span>

Returns the interface name associated with this directive.

**Returns:**

the interface name, or an empty string if none set.


---

