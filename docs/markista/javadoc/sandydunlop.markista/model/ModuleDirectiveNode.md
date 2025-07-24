Package [io.github.sandydunlop.markista.model](index.md)

# Class ModuleDirectiveNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.ModuleDirectiveNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                     | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------|
| private [ModuleDirectiveNode.Kind](ModuleDirectiveNode.Kind.md)                                                                                                                                      | [kind](#kind)             |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [name](#name)             |             |
| private boolean                                                                                                                                                                                      | [transitive](#transitive) |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [packages](#packages)     |             |

## Constructor Summary

| Constructor                                                                                                                                                                                              | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| ModuleDirectiveNode([ModuleDirectiveNode.Kind](ModuleDirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, boolean transitive) |             |
| ModuleDirectiveNode([ModuleDirectiveNode.Kind](ModuleDirectiveNode.Kind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                     |             |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                              | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [ModuleDirectiveNode.Kind](ModuleDirectiveNode.Kind.md)                                                                                                                                      | [getKind](#getkind)()                                                                                                               |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getName](#getname)()                                                                                                               |             |
| boolean                                                                                                                                                                                      | [isTransitive](#istransitive)()                                                                                                     |             |
| void                                                                                                                                                                                         | [addPackage](#addpackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getPackages](#getpackages)()                                                                                                       |             |

## Field Details

### kind



### name



### transitive



### packages




## Method Details

### getKind

[ModuleDirectiveNode.Kind](ModuleDirectiveNode.Kind.md) getKind()



### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



### isTransitive

boolean isTransitive()



### addPackage

void addPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)



### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getPackages()



