Package [io.github.sandydunlop.markista.model](index.md)

# Class DirectiveNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.DirectiveNode<br/>
<br/>

----

Represents a directive within a module declaration, such as requires, exports, or provides.
Tracks the kind of directive, its name, whether it is transitive, associated packages,
implementations, and related interface information.


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                               | Description                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------------------------------------------------------|
| private [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                                                                                                  | [kind](#kind)                       | The kind of this directive (e.g. REQUIRES, EXPORTS).         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [name](#name)                       | The name associated with this directive.                     |
| private boolean                                                                                                                                                                                      | [transitive](#transitive)           | Indicates whether this directive is transitive.              |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [packages](#packages)               | List of package names associated with this directive.        |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [implementations](#implementations) | List of implementation names associated with this directive. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [interfaceName](#interfacename)     | The interface name associated with this directive, if any.   |

## Constructor Summary

| Constructor                                                                                                                                                                            | Description                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| DirectiveNode([DirectiveNode.Kind](DirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, boolean transitive) | Constructs a DirectiveNode with the specified kind, name and transitive flag. |
| DirectiveNode([DirectiveNode.Kind](DirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                     | Constructs a DirectiveNode with the specified kind and name.                  |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                                                   | Description                                                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                                                                                                  | [getKind](#getkind)()                                                                                                                                    | Returns the kind of this directive.                                 |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getName](#getname)()                                                                                                                                    | Returns the name associated with this directive.                    |
| boolean                                                                                                                                                                                      | [isTransitive](#istransitive)()                                                                                                                          | Indicates if this directive is transitive.                          |
| void                                                                                                                                                                                         | [addPackage](#addpackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                      | Adds a package name to this directive's package list.               |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getPackages](#getpackages)()                                                                                                                            | Returns the list of package names associated with this directive.   |
| void                                                                                                                                                                                         | [addImplementation](#addimplementation)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) implementationName) | Adds the name of an implementation associated with this directive.  |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getImplementations](#getimplementations)()                                                                                                              | Returns the list of implementations associated with this directive. |
| void                                                                                                                                                                                         | [setInterface](#setinterface)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)                | Sets the interface name related to this directive.                  |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getInterface](#getinterface)()                                                                                                                          | Returns the interface name associated with this directive.          |

## Field Details

### kind

The kind of this directive (e.g. REQUIRES, EXPORTS).


---

### name

The name associated with this directive.


---

### transitive

Indicates whether this directive is transitive.


---

### packages

List of package names associated with this directive.


---

### implementations

List of implementation names associated with this directive.


---

### interfaceName

The interface name associated with this directive, if any.


---


## Method Details

### getKind

[DirectiveNode.Kind](DirectiveNode.Kind.md) getKind()

Returns the kind of this directive.

**Returns:**

the directive kind.


---

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name associated with this directive.

**Returns:**

the directive name.


---

### isTransitive

boolean isTransitive()

Indicates if this directive is transitive.

**Returns:**

true if transitive; false otherwise.


---

### addPackage

void addPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)

Adds a package name to this directive's package list.

**Parameters:**

`packageName` - the fully qualified package name to add.


---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getPackages()

Returns the list of package names associated with this directive.

**Returns:**

list of package names.


---

### addImplementation

void addImplementation([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) implementationName)

Adds the name of an implementation associated with this directive.

**Parameters:**

`implementationName` - the name of the implementation to add.


---

### getImplementations

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getImplementations()

Returns the list of implementations associated with this directive.

**Returns:**

list of implementation names.


---

### setInterface

void setInterface([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)

Sets the interface name related to this directive.

**Parameters:**

`interfaceName` - the interface name to set.


---

### getInterface

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getInterface()

Returns the interface name associated with this directive.

**Returns:**

the interface name, or an empty string if none set.


---

