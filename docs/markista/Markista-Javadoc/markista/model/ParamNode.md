Package [io.github.sandydunlop.markista.model](index.md)

# Class ParamNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.ParamNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __ParamNode__</span>

A class to hold information about method parameters.


## Field Summary

| Modifier and Type               | Field         | Description                |
|---------------------------------|---------------|----------------------------|
| private [TypeNode](TypeNode.md) | [type](#type) | The type of this parameter |

## Constructor Summary

| Constructor                                                                                                                                | Description                                          |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| ParamNode([TypeNode](TypeNode.md) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ParamNode with the given type and name. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                             | Description                                |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| public [TypeNode](TypeNode.md)                                                                      | [getType](#gettype)()                                                                                                              | Returns the type of this parameter.        |
| public void                                                                                         | [setType](#settype)([TypeNode](TypeNode.md) type)                                                                                  | Sets the type of this parameter.           |
| public void                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the simple name of this parameter.    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleName](#getsimplename)()                                                                                                  | Returns the simple name of this parameter. |

## Field Details

### type

The type of this parameter


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

### setSimpleName

public void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the simple name of this parameter.


---

### getSimpleName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()

Returns the simple name of this parameter.

**Returns:**

The simple name.


---

