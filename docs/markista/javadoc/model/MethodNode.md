Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                            | Field             | Description |
|----------------------------------------------------------------------------------------------|-------------------|-------------|
| List&lt;? extends TypeMirror&gt;                                                             | thrownTypes       |             |
| [TypeNode](TypeNode.md)                                                                      | returnType        |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | returnDescription |             |
| List&lt;ParamNode&gt;                                                                        | params            |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | fullDescription   |             |

## Constructor Summary

| Constructor                                  | Description |
|----------------------------------------------|-------------|
| MethodNode(TypeNode returnType, String name) |             |

## Method Summary

| Modifier and Type                                                                            | Method                            | Description |
|----------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [signature](#signature)()         |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [paramsString](#paramsstring)()   |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [fullSignature](#fullsignature)() |             |

## Method Details

### signature

`String signature()`



### paramsString

`String paramsString()`



### fullSignature

`String fullSignature()`



