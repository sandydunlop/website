Package [io.github.sandydunlop.markista.model](index.md)

# Class ModuleNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.ModuleNode<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[PackageOwner](PackageOwner.md)


----


## Field Summary

| Modifier and Type                                                                                                                         | Field                             | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [directives](#directives)         |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages)             |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;         | [constantValues](#constantvalues) |             |

## Constructor Summary

| Constructor                                                                                                         | Description |
|---------------------------------------------------------------------------------------------------------------------|-------------|
| ModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName) |             |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                                     | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                      |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                              |             |
| void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)       |             |
| void                                                                                                                              | [addDirective](#adddirective)([DirectiveNode](DirectiveNode.md) directive) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getDirectives](#getdirectives)()                                          |             |
| void                                                                                                                              | [addConstantValue](#addconstantvalue)([FieldNode](FieldNode.md) constant)  |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;         | [getConstantValues](#getconstantvalues)()                                  |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getExports](#getexports)()                                                |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getRequires](#getrequires)()                                              |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getOpens](#getopens)()                                                    |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getUses](#getuses)()                                                      |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; | [getProvides](#getprovides)()                                              |             |

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




---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()



**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addPackage

void addPackage([PackageNode](PackageNode.md) packageNode)



**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addDirective

void addDirective([DirectiveNode](DirectiveNode.md) directive)




---

### getDirectives

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getDirectives()




---

### addConstantValue

void addConstantValue([FieldNode](FieldNode.md) constant)




---

### getConstantValues

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getConstantValues()




---

### getExports

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getExports()




---

### getRequires

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getRequires()




---

### getOpens

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getOpens()




---

### getUses

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getUses()




---

### getProvides

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](DirectiveNode.md)&gt; getProvides()




---

