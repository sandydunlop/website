Package [io.github.sandydunlop.markista.model](index.md)

# Class EnumNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[AbstractTypeOwner](AbstractTypeOwner.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TypeNode](TypeNode.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.EnumNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                 | Field                   | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; | [constants](#constants) |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                              | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| EnumNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](PackageNode.md) packageNode) |             |

## Method Summary

| Modifier and Type                                                                                                         | Method                                                          | Description |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-------------|
| void                                                                                                                      | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; | [getConstants](#getconstants)()                                 |             |

## Field Details

### constants




---


## Method Details

### addConstant

void addConstant([FieldNode](FieldNode.md) constant)




---

### getConstants

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getConstants()




---

