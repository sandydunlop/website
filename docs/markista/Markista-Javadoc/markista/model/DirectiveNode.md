Package [io.github.sandydunlop.markista.model](index.md)

# Class DirectiveNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.DirectiveNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __DirectiveNode__</span>

Represents a directive within a module declaration, such as requires, exports, or provides.
Tracks the kind of directive, its name, whether it is transitive, associated packages,
implementations, and related interface information.


## Field Summary

| Modifier and Type                                                                                                                                                                                          | Field                               | Description                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------------------------------------------------------|
| private final [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                                                                                                  | [kind](#kind)                       | The kind of this directive (e.g. REQUIRES, EXPORTS).         |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [name](#name)                       | The name associated with this directive.                     |
| private boolean                                                                                                                                                                                            | [transitive](#transitive)           | Indicates whether this directive is transitive.              |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [packages](#packages)               | List of package names associated with this directive.        |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [implementations](#implementations) | List of implementation names associated with this directive. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                       | [interfaceName](#interfacename)     | The interface name associated with this directive, if any.   |

## Constructor Summary

| Constructor                                                                                                                                                                            | Description                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| DirectiveNode([DirectiveNode.Kind](DirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, boolean transitive) | Constructs a DirectiveNode with the specified kind, name and transitive flag. |
| DirectiveNode([DirectiveNode.Kind](DirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                     | Constructs a DirectiveNode with the specified kind and name.                  |

## Method Summary

| Modifier and Type                                                                                                                                                                                   | Method                                                                                                                                                   | Description                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| public [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                                                                                                  | [getKind](#getkind)()                                                                                                                                    | Returns the kind of this directive.                                 |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getName](#getname)()                                                                                                                                    | Returns the name associated with this directive.                    |
| public boolean                                                                                                                                                                                      | [isTransitive](#istransitive)()                                                                                                                          | Indicates if this directive is transitive.                          |
| public void                                                                                                                                                                                         | [addPackage](#addpackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                      | Adds a package name to this directive's package list.               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getPackages](#getpackages)()                                                                                                                            | Returns the list of package names associated with this directive.   |
| public void                                                                                                                                                                                         | [addImplementation](#addimplementation)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) implementationName) | Adds the name of an implementation associated with this directive.  |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getImplementations](#getimplementations)()                                                                                                              | Returns the list of implementations associated with this directive. |
| public void                                                                                                                                                                                         | [setInterface](#setinterface)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)                | Sets the interface name related to this directive.                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getInterface](#getinterface)()                                                                                                                          | Returns the interface name associated with this directive.          |

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

public [DirectiveNode.Kind](DirectiveNode.Kind.md) getKind()

Returns the kind of this directive.

**Returns:**

the directive kind.


---

### getName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name associated with this directive.

**Returns:**

the directive name.


---

### isTransitive

public boolean isTransitive()

Indicates if this directive is transitive.

**Returns:**

true if transitive; false otherwise.


---

### addPackage

public void addPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)

Adds a package name to this directive's package list.


---

### getPackages

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getPackages()

Returns the list of package names associated with this directive.

**Returns:**

list of package names.


---

### addImplementation

public void addImplementation([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) implementationName)

Adds the name of an implementation associated with this directive.


---

### getImplementations

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getImplementations()

Returns the list of implementations associated with this directive.

**Returns:**

list of implementation names.


---

### setInterface

public void setInterface([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)

Sets the interface name related to this directive.


---

### getInterface

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getInterface()

Returns the interface name associated with this directive.

**Returns:**

the interface name, or an empty string if none set.


---

