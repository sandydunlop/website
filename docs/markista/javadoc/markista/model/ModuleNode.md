Package [io.github.sandydunlop.markista.model](index.md)

# Class ModuleNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.ModuleNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ModuleNode__<br/>extends [](Node.md)
</span>

Represents a module node that contains directives, packages, and constant values. 
Implements the PackageOwner interface to manage contained packages.


## Field Summary

| Modifier and Type                                                                                                            | Field                             | Description |
|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](FieldNode.md)>     | [constantValues](#constantvalues) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [directives](#directives)         |             |
| private boolean                                                                                                              | [hasModuleInfo](#hasmoduleinfo)   |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                   | [name](#name)                     |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](PackageNode.md)>   | [packages](#packages)             |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                         | [sourcePath](#sourcepath)         |             |



## Constructor Summary

| Constructor                                                                                                   | Description                                         |
|---------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| ModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ModuleNode with the given module name. |



## Method Summary

| Modifier and Type                                                                                                     | Method                                                                                                                             | Description                                                 |
|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                   | [getName](#getname)()                                                                                                              | Returns the name (qualified name) of this module.           |
| public void                                                                                                           | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path) |                                                             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                   | [getSourcePath](#getsourcepath)()                                                                                                  |                                                             |
| public void                                                                                                           | [setHasModuleInfo](#sethasmoduleinfo)(boolean b)                                                                                   |                                                             |
| public boolean                                                                                                        | [hasModuleInfo](#hasmoduleinfo)()                                                                                                  |                                                             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](PackageNode.md)>   | [getPackages](#getpackages)()                                                                                                      | Returns the list of packages contained in this module.      |
| public void                                                                                                           | [addPackage](#addpackage)([](PackageNode.md) packageNode)                                                                          | Adds a package to this module.                              |
| public void                                                                                                           | [addDirective](#adddirective)([](DirectiveNode.md) directive)                                                                      | Adds a directive to this module.                            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [getDirectives](#getdirectives)()                                                                                                  | Returns the list of directives declared in this module.     |
| public void                                                                                                           | [addConstantValue](#addconstantvalue)([](FieldNode.md) constant)                                                                   | Adds a constant field value to this module.                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](FieldNode.md)>     | [getConstantValues](#getconstantvalues)()                                                                                          | Returns the list of constant values defined in this module. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [getExports](#getexports)()                                                                                                        | Returns the list of 'exports' directives in this module.    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [getRequires](#getrequires)()                                                                                                      | Returns the list of 'requires' directives in this module.   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [getOpens](#getopens)()                                                                                                            | Returns the list of 'opens' directives in this module.      |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [getUses](#getuses)()                                                                                                              | Returns the list of 'uses' directives in this module.       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> | [getProvides](#getprovides)()                                                                                                      | Returns the list of 'provides' directives in this module.   |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.setReferences](Node.md#setreferences), [Node.getReferences](Node.md#getreferences), [Node.getKind](Node.md#getkind), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.getBody](Node.md#getbody), [Node.getSince](Node.md#getsince), [Node.setFullBody](Node.md#setfullbody), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody), [Node.setDeprecation](Node.md#setdeprecation), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecation](Node.md#getdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getDeprecationText](Node.md#getdeprecationtext), [Node.getFullBody](Node.md#getfullbody)


## Field Details

### constantValues

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](FieldNode.md)> __constantValues__</span>




---

### directives

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __directives__</span>




---

### hasModuleInfo

<span style="font-family: monospace; font-size: 80%;">private boolean __hasModuleInfo__</span>




---

### name

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>




---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](PackageNode.md)> __packages__</span>




---

### sourcePath

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---


## Method Details

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>

Returns the name (qualified name) of this module.

**Returns:**

The module name.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>




---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__()</span>




---

### setHasModuleInfo

<span style="font-family: monospace; font-size: 80%;">public void __setHasModuleInfo__(boolean b)</span>




---

### hasModuleInfo

<span style="font-family: monospace; font-size: 80%;">public boolean __hasModuleInfo__()</span>




---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](PackageNode.md)> __getPackages__()</span>

Returns the list of packages contained in this module.

**Returns:**

List of PackageMember objects.


---

### addPackage

<span style="font-family: monospace; font-size: 80%;">public void __addPackage__([](PackageNode.md) packageNode)</span>

Adds a package to this module.


---

### addDirective

<span style="font-family: monospace; font-size: 80%;">public void __addDirective__([](DirectiveNode.md) directive)</span>

Adds a directive to this module.


---

### getDirectives

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __getDirectives__()</span>

Returns the list of directives declared in this module.

**Returns:**

List of DirectiveNode objects.


---

### addConstantValue

<span style="font-family: monospace; font-size: 80%;">public void __addConstantValue__([](FieldNode.md) constant)</span>

Adds a constant field value to this module.


---

### getConstantValues

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](FieldNode.md)> __getConstantValues__()</span>

Returns the list of constant values defined in this module.

**Returns:**

List of FieldNode objects.


---

### getExports

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __getExports__()</span>

Returns the list of 'exports' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by EXPORTS kind.


---

### getRequires

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __getRequires__()</span>

Returns the list of 'requires' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by REQUIRES kind.


---

### getOpens

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __getOpens__()</span>

Returns the list of 'opens' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by OPENS kind.


---

### getUses

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __getUses__()</span>

Returns the list of 'uses' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by USES kind.


---

### getProvides

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](DirectiveNode.md)> __getProvides__()</span>

Returns the list of 'provides' directives in this module.

**Returns:**

List of DirectiveNode objects filtered by PROVIDES kind.


---

