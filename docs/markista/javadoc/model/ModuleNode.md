Package [io.github.sandydunlop.markista.model](index.md)

# Class ModuleNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.ModuleNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [PackageOwner](PackageOwner.md)


----

Represents a module node that contains directives, packages, and constant values. 
Implements the PackageOwner interface to manage contained packages.


## Field Summary

| Modifier and Type                                                                                                                         | Field                             | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [directives](#directives)         |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages)             |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;         | [constantValues](#constantvalues) |             |

## Constructor Summary

| Constructor                                                                                                         | Description                                         |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| ModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName) | Constructs a ModuleNode with the given module name. |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                                     | Description                                                 |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                      | Returns the name (qualified name) of this module.           |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                              | Returns the list of packages contained in this module.      |
| void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)       | Adds a package to this module.                              |
| void                                                                                                                              | [addDirective](#adddirective)([DirectiveNode](DirectiveNode.md) directive) | Adds a directive to this module.                            |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getDirectives](#getdirectives)()                                          | Returns the list of directives declared in this module.     |
| void                                                                                                                              | [addConstantValue](#addconstantvalue)([FieldNode](FieldNode.md) constant)  | Adds a constant field value to this module.                 |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;         | [getConstantValues](#getconstantvalues)()                                  | Returns the list of constant values defined in this module. |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getExports](#getexports)()                                                | Returns the list of 'exports' directives in this module.    |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getRequires](#getrequires)()                                              | Returns the list of 'requires' directives in this module.   |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getOpens](#getopens)()                                                    | Returns the list of 'opens' directives in this module.      |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getUses](#getuses)()                                                      | Returns the list of 'uses' directives in this module.       |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getProvides](#getprovides)()                                              | Returns the list of 'provides' directives in this module.   |

## Field Details

### directives




---

### packages




---

### constantValues




---


## Method Details

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name (qualified name) of this module.

**Returns:**

The module name.


---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()

Returns the list of packages contained in this module.

**Returns:**

List of PackageMember objects.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addPackage

void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a package to this module.

**Parameters:**

`packageNode` - The PackageNode to add.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addDirective

void addDirective([DirectiveNode](DirectiveNode.md) directive)

Adds a directive to this module.

**Parameters:**

`directive` - The DirectiveNode to add.


---

### getDirectives

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getDirectives()

Returns the list of directives declared in this module.

**Returns:**

List of DirectiveNode objects.


---

### addConstantValue

void addConstantValue([FieldNode](FieldNode.md) constant)

Adds a constant field value to this module.

**Parameters:**

`constant` - The FieldNode representing the constant.


---

### getConstantValues

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getConstantValues()

Returns the list of constant values defined in this module.

**Returns:**

List of FieldNode objects.


---

### getExports

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getExports()

Returns the list of 'exports' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by EXPORTS kind.


---

### getRequires

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getRequires()

Returns the list of 'requires' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by REQUIRES kind.


---

### getOpens

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getOpens()

Returns the list of 'opens' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by OPENS kind.


---

### getUses

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getUses()

Returns the list of 'uses' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by USES kind.


---

### getProvides

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getProvides()

Returns the list of 'provides' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by PROVIDES kind.


---

