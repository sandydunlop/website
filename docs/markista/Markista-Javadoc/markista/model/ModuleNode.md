Package [io.github.sandydunlop.markista.model](index.md)

# Class ModuleNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.ModuleNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.model.PackageOwner](PackageOwner.md)


----

<span style="font-family: monospace;">public Class __ModuleNode__</span>

Represents a module node that contains directives, packages, and constant values. 
Implements the PackageOwner interface to manage contained packages.


## Field Summary

| Modifier and Type                                                                                                                               | Field                             | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [name](#name)                     |             |
| private boolean                                                                                                                                 | [hasModuleInfo](#hasmoduleinfo)   |             |
| private [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html)                                            | [sourcePath](#sourcepath)         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [directives](#directives)         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages)             |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;         | [constantValues](#constantvalues) |             |

## Constructor Summary

| Constructor                                                                                                   | Description                                         |
|---------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| ModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ModuleNode with the given module name. |

## Method Summary

| Modifier and Type                                                                                                                        | Method                                                                                                                             | Description                                                 |
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                                                                              | Returns the name (qualified name) of this module.           |
| public void                                                                                                                              | [setSourcePath](#setsourcepath)([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) path) |                                                             |
| public [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html)                                      | [getSourcePath](#getsourcepath)()                                                                                                  |                                                             |
| public void                                                                                                                              | [setHasModuleInfo](#sethasmoduleinfo)(boolean b)                                                                                   |                                                             |
| public boolean                                                                                                                           | [hasModuleInfo](#hasmoduleinfo)()                                                                                                  |                                                             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                                                                                      | Returns the list of packages contained in this module.      |
| public void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)                                                               | Adds a package to this module.                              |
| public void                                                                                                                              | [addDirective](#adddirective)([DirectiveNode](DirectiveNode.md) directive)                                                         | Adds a directive to this module.                            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getDirectives](#getdirectives)()                                                                                                  | Returns the list of directives declared in this module.     |
| public void                                                                                                                              | [addConstantValue](#addconstantvalue)([FieldNode](FieldNode.md) constant)                                                          | Adds a constant field value to this module.                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;         | [getConstantValues](#getconstantvalues)()                                                                                          | Returns the list of constant values defined in this module. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getExports](#getexports)()                                                                                                        | Returns the list of 'exports' directives in this module.    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getRequires](#getrequires)()                                                                                                      | Returns the list of 'requires' directives in this module.   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getOpens](#getopens)()                                                                                                            | Returns the list of 'opens' directives in this module.      |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getUses](#getuses)()                                                                                                              | Returns the list of 'uses' directives in this module.       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getProvides](#getprovides)()                                                                                                      | Returns the list of 'provides' directives in this module.   |

## Field Details

### name




---

### hasModuleInfo




---

### sourcePath




---

### directives




---

### packages




---

### constantValues




---


## Method Details

### getName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name (qualified name) of this module.

**Returns:**

The module name.


---

### setSourcePath

public void setSourcePath([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) path)




---

### getSourcePath

public [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) getSourcePath()




---

### setHasModuleInfo

public void setHasModuleInfo(boolean b)




---

### hasModuleInfo

public boolean hasModuleInfo()




---

### getPackages

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()

Returns the list of packages contained in this module.

**Returns:**

List of PackageMember objects.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addPackage

public void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a package to this module.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addDirective

public void addDirective([DirectiveNode](DirectiveNode.md) directive)

Adds a directive to this module.


---

### getDirectives

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getDirectives()

Returns the list of directives declared in this module.

**Returns:**

List of DirectiveNode objects.


---

### addConstantValue

public void addConstantValue([FieldNode](FieldNode.md) constant)

Adds a constant field value to this module.


---

### getConstantValues

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getConstantValues()

Returns the list of constant values defined in this module.

**Returns:**

List of FieldNode objects.


---

### getExports

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getExports()

Returns the list of 'exports' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by EXPORTS kind.


---

### getRequires

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getRequires()

Returns the list of 'requires' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by REQUIRES kind.


---

### getOpens

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getOpens()

Returns the list of 'opens' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by OPENS kind.


---

### getUses

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getUses()

Returns the list of 'uses' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by USES kind.


---

### getProvides

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getProvides()

Returns the list of 'provides' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by PROVIDES kind.


---

