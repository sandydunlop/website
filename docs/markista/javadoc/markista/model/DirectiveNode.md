Package [io.github.sandydunlop.markista.model](index.md)

# Class DirectiveNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.DirectiveNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace;">public class __DirectiveNode__</span>

Represents a directive within a module declaration, such as requires, exports, or provides.
Tracks the kind of directive, its name, whether it is transitive, associated packages,
implementations, and related interface information.


## Constructor Summary

| Constructor                                   | Description                                                                   |
|-----------------------------------------------|-------------------------------------------------------------------------------|
| DirectiveNode( kind,  reference,  transitive) | Constructs a DirectiveNode with the specified kind, name and transitive flag. |
| DirectiveNode( kind,  reference)              | Constructs a DirectiveNode with the specified kind and name.                  |

## Method Summary

| Modifier and Type                                                                                                          | Method                                                                       | Description                                                             |
|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| public [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                         | [getKind](#getkind)()                                                        | Returns the kind of this directive.                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [getName](#getname)()                                                        | Returns the name associated with this directive.                        |
| public [Reference](Reference.md)                                                                                           | [getReference](#getreference)()                                              |                                                                         |
| public boolean                                                                                                             | [isTransitive](#istransitive)()                                              | Indicates if this directive is transitive.                              |
| public void                                                                                                                | [addPackage](#addpackage)([Reference](Reference.md) reference)               | Adds a package reference to this directive's package list.              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> | [getPackages](#getpackages)()                                                | Returns the list of package references associated with this directive.  |
| public void                                                                                                                | [addImplementation](#addimplementation)([Reference](Reference.md) reference) | Adds the reference to an implementation associated with this directive. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> | [getImplementations](#getimplementations)()                                  | Returns the list of implementations associated with this directive.     |
| public void                                                                                                                | [setInterface](#setinterface)([Reference](Reference.md) interfaceReference)  | Sets the interface name related to this directive.                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [toString](#tostring)()                                                      |                                                                         |
| public [Reference](Reference.md)                                                                                           | [getInterface](#getinterface)()                                              | Returns the interface name associated with this directive.              |

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

### getReference

public [Reference](Reference.md) getReference()




---

### isTransitive

public boolean isTransitive()

Indicates if this directive is transitive.

**Returns:**

true if transitive; false otherwise.


---

### addPackage

public void addPackage([Reference](Reference.md) reference)

Adds a package reference to this directive's package list.


---

### getPackages

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> getPackages()

Returns the list of package references associated with this directive.

**Returns:**

list of package names.


---

### addImplementation

public void addImplementation([Reference](Reference.md) reference)

Adds the reference to an implementation associated with this directive.


---

### getImplementations

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> getImplementations()

Returns the list of implementations associated with this directive.

**Returns:**

list of implementation references.


---

### setInterface

public void setInterface([Reference](Reference.md) interfaceReference)

Sets the interface name related to this directive.


---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()




---

### getInterface

public [Reference](Reference.md) getInterface()

Returns the interface name associated with this directive.

**Returns:**

the interface name, or an empty string if none set.


---

