Package [io.github.sandydunlop.markista.model](index.md)

# Class ModuleNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.ModuleNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ModuleNode__</span>

Represents a module node that contains directives, packages, and constant values. 
Implements the PackageOwner interface to manage contained packages.


## Field Summary

| Modifier and Type                                                                                                                         | Field                             | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                | [name](#name)                     |             |
| private boolean                                                                                                                           | [hasModuleInfo](#hasmoduleinfo)   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [sourcePath](#sourcepath)         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [directives](#directives)         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)>     | [packages](#packages)             |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>         | [constantValues](#constantvalues) |             |

## Constructor Summary

| Constructor                                                                                                   | Description                                         |
|---------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| ModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ModuleNode with the given module name. |

## Method Summary

| Modifier and Type                                                                                                                  | Method                                                                                                                             | Description                                                 |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                | [getName](#getname)()                                                                                                              | Returns the name (qualified name) of this module.           |
| public void                                                                                                                        | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path) |                                                             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                | [getSourcePath](#getsourcepath)()                                                                                                  |                                                             |
| public void                                                                                                                        | [setHasModuleInfo](#sethasmoduleinfo)(boolean b)                                                                                   |                                                             |
| public boolean                                                                                                                     | [hasModuleInfo](#hasmoduleinfo)()                                                                                                  |                                                             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)>     | [getPackages](#getpackages)()                                                                                                      | Returns the list of packages contained in this module.      |
| public void                                                                                                                        | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)                                                               | Adds a package to this module.                              |
| public void                                                                                                                        | [addDirective](#adddirective)([DirectiveNode](DirectiveNode.md) directive)                                                         | Adds a directive to this module.                            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [getDirectives](#getdirectives)()                                                                                                  | Returns the list of directives declared in this module.     |
| public void                                                                                                                        | [addConstantValue](#addconstantvalue)([FieldNode](FieldNode.md) constant)                                                          | Adds a constant field value to this module.                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>         | [getConstantValues](#getconstantvalues)()                                                                                          | Returns the list of constant values defined in this module. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [getExports](#getexports)()                                                                                                        | Returns the list of 'exports' directives in this module.    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [getRequires](#getrequires)()                                                                                                      | Returns the list of 'requires' directives in this module.   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [getOpens](#getopens)()                                                                                                            | Returns the list of 'opens' directives in this module.      |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [getUses](#getuses)()                                                                                                              | Returns the list of 'uses' directives in this module.       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> | [getProvides](#getprovides)()                                                                                                      | Returns the list of 'provides' directives in this module.   |

## Field Details

### name

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>




---

### hasModuleInfo

<span style="font-family: monospace; font-size: 80%;">private boolean __hasModuleInfo__</span>




---

### sourcePath

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---

### directives

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __directives__</span>




---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __packages__</span>




---

### constantValues

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __constantValues__</span>




---


## Method Details

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__</span>

Returns the name (qualified name) of this module.

**Returns:**

The module name.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__</span>




---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__</span>




---

### setHasModuleInfo

<span style="font-family: monospace; font-size: 80%;">public void __setHasModuleInfo__</span>




---

### hasModuleInfo

<span style="font-family: monospace; font-size: 80%;">public boolean __hasModuleInfo__</span>




---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __getPackages__</span>

Returns the list of packages contained in this module.

**Returns:**

List of PackageMember objects.


---

### addPackage

<span style="font-family: monospace; font-size: 80%;">public void __addPackage__</span>

Adds a package to this module.


---

### addDirective

<span style="font-family: monospace; font-size: 80%;">public void __addDirective__</span>

Adds a directive to this module.


---

### getDirectives

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __getDirectives__</span>

Returns the list of directives declared in this module.

**Returns:**

List of DirectiveNode objects.


---

### addConstantValue

<span style="font-family: monospace; font-size: 80%;">public void __addConstantValue__</span>

Adds a constant field value to this module.


---

### getConstantValues

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __getConstantValues__</span>

Returns the list of constant values defined in this module.

**Returns:**

List of FieldNode objects.


---

### getExports

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __getExports__</span>

Returns the list of 'exports' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by EXPORTS kind.


---

### getRequires

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __getRequires__</span>

Returns the list of 'requires' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by REQUIRES kind.


---

### getOpens

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __getOpens__</span>

Returns the list of 'opens' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by OPENS kind.


---

### getUses

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __getUses__</span>

Returns the list of 'uses' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by USES kind.


---

### getProvides

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](DirectiveNode.md)> __getProvides__</span>

Returns the list of 'provides' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by PROVIDES kind.


---

