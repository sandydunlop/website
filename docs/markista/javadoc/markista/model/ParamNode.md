Package [io.github.sandydunlop.markista.model](index.md)

# Class ParamNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        io.github.sandydunlop.markista.model.ParamNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ParamNode__</span>

A class to hold information about method parameters.


## Field Summary

| Modifier and Type                                                                                    | Field                 | Description                |
|------------------------------------------------------------------------------------------------------|-----------------------|----------------------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [typeName](#typename) | The type of this parameter |
| private [Text](Text.md)                                                                              | [typeText](#typetext) |                            |

## Constructor Summary

| Constructor                                                                                                                                                                                                     | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| ParamNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ParamNode with the given type and name. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                         | Description                              |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTypeName](#gettypename)()                                                                                                  | Returns the type of this parameter.      |
| public void                                                                                         | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) | Sets the type of this parameter.         |
| public [Text](Text.md)                                                                              | [getTypeText](#gettypetext)()                                                                                                  | Returns the type Text of this parameter. |
| public void                                                                                         | [setTypeText](#settypetext)([Text](Text.md) text)                                                                              | Sets the type Text of this parameter.    |

## Field Details

### typeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeName__</span>

The type of this parameter


---

### typeText

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __typeText__</span>




---


## Method Details

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeName__</span>

Returns the type of this parameter.

**Returns:**

The name of the parameter's type.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__</span>

Sets the type of this parameter.


---

### getTypeText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getTypeText__</span>

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### setTypeText

<span style="font-family: monospace; font-size: 80%;">public void __setTypeText__</span>

Sets the type Text of this parameter.


---

