Package [io.github.sandydunlop.markista.model](index.md)

# Class DirectiveNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.DirectiveNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                               | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-------------|
| private [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                                                                                                  | [kind](#kind)                       |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [name](#name)                       |             |
| private boolean                                                                                                                                                                                      | [transitive](#transitive)           |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [packages](#packages)               |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [implementations](#implementations) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [interfaceName](#interfacename)     |             |

## Constructor Summary

| Constructor                                                                                                                                                                            | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| DirectiveNode([DirectiveNode.Kind](DirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, boolean transitive) |             |
| DirectiveNode([DirectiveNode.Kind](DirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                     |             |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                                                   | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [DirectiveNode.Kind](DirectiveNode.Kind.md)                                                                                                                                                  | [getKind](#getkind)()                                                                                                                                    |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getName](#getname)()                                                                                                                                    |             |
| boolean                                                                                                                                                                                      | [isTransitive](#istransitive)()                                                                                                                          |             |
| void                                                                                                                                                                                         | [addPackage](#addpackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                      |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getPackages](#getpackages)()                                                                                                                            |             |
| void                                                                                                                                                                                         | [addImplementation](#addimplementation)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) implementationName) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getImplementations](#getimplementations)()                                                                                                              |             |
| void                                                                                                                                                                                         | [setInterface](#setinterface)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)                |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getInterface](#getinterface)()                                                                                                                          |             |

## Field Details

### kind




---

### name




---

### transitive




---

### packages




---

### implementations




---

### interfaceName




---


## Method Details

### getKind

[DirectiveNode.Kind](DirectiveNode.Kind.md) getKind()




---

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()




---

### isTransitive

boolean isTransitive()




---

### addPackage

void addPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)




---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getPackages()




---

### addImplementation

void addImplementation([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) implementationName)




---

### getImplementations

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getImplementations()




---

### setInterface

void setInterface([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)




---

### getInterface

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getInterface()




---

