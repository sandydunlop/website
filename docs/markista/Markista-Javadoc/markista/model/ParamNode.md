Package [io.github.sandydunlop.markista.model](index.md)

# Class ParamNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.ModuleMemberNode](ModuleMemberNode.md)<br/>
                        [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                                io.github.sandydunlop.markista.model.ParamNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __ParamNode__</span>

A class to hold information about method parameters.


## Field Summary

| Modifier and Type               | Field                 | Description                |
|---------------------------------|-----------------------|----------------------------|
| private [TypeNode](TypeNode.md) | [type](#type)         | The type of this parameter |
| private [Text](Text.md)         | [typeText](#typetext) |                            |

## Constructor Summary

| Constructor             | Description                                          |
|-------------------------|------------------------------------------------------|
| ParamNode( type,  name) | Constructs a ParamNode with the given type and name. |

## Method Summary

| Modifier and Type              | Method                                            | Description                              |
|--------------------------------|---------------------------------------------------|------------------------------------------|
| public [TypeNode](TypeNode.md) | [getType](#gettype)()                             | Returns the type of this parameter.      |
| public void                    | [setType](#settype)([TypeNode](TypeNode.md) type) | Sets the type of this parameter.         |
| public [Text](Text.md)         | [getTypeText](#gettypetext)()                     | Returns the type Text of this parameter. |
| public void                    | [setTypeText](#settypetext)([Text](Text.md) text) | Sets the type Text of this parameter.    |

## Field Details

### type

The type of this parameter


---

### typeText




---


## Method Details

### getType

public [TypeNode](TypeNode.md) getType()

Returns the type of this parameter.

**Returns:**

The TypeNode representing the parameter's type.


---

### setType

public void setType([TypeNode](TypeNode.md) type)

Sets the type of this parameter.


---

### getTypeText

public [Text](Text.md) getTypeText()

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### setTypeText

public void setTypeText([Text](Text.md) text)

Sets the type Text of this parameter.


---

