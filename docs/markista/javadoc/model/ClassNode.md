Package [io.github.sandydunlop.markista.model](index.md)

# Class ClassNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.ClassNode<br/>
<br/>

----


## Constructor Summary

| Constructor                                                            | Description |
|------------------------------------------------------------------------|-------------|
| ClassNode(String qualifiedName, String simpleName, String packageName) |             |

## Method Summary

| Modifier and Type           | Method                                               | Description |
|-----------------------------|------------------------------------------------------|-------------|
| [MethodNode](MethodNode.md) | [getMethod](#getmethod)(MethodNode method)           |             |
| [FieldNode](FieldNode.md)   | [getField](#getfield)(String fieldName)              |             |
| [MethodNode](MethodNode.md) | [getConstructor](#getconstructor)(MethodNode method) |             |

## Method Details

### getMethod

`MethodNode getMethod(MethodNode method)`



### getField

`FieldNode getField(String fieldName)`



### getConstructor

`MethodNode getConstructor(MethodNode method)`



