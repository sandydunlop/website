Package [io.github.sandydunlop.markista.model](index.md)

# Class ParamNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.ParamNode<br/>
<br/>

----

A class to hold information about method parameters.


## Field Summary

| Modifier and Type               | Field         | Description |
|---------------------------------|---------------|-------------|
| private [TypeNode](TypeNode.md) | [type](#type) |             |

## Constructor Summary

| Constructor                                                                                                                                | Description                                          |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| ParamNode([TypeNode](TypeNode.md) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ParamNode with the given type and name. |

## Method Summary

| Modifier and Type                                                                            | Method                                                                                                                                   | Description                                   |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [TypeNode](TypeNode.md)                                                                      | [getType](#gettype)()                                                                                                                    | Returns the type of this parameter.           |
| void                                                                                         | [setType](#settype)([TypeNode](TypeNode.md) type)                                                                                        | Sets the type of this parameter.              |
| void                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple name of this parameter.       |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleName](#getsimplename)()                                                                                                        | Returns the simple name of this parameter.    |
| void                                                                                         | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified name of this parameter.    |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getQualifiedName](#getqualifiedname)()                                                                                                  | Returns the qualified name of this parameter. |

## Field Details

### type




---


## Method Details

### getType

[TypeNode](TypeNode.md) getType()

Returns the type of this parameter.

**Returns:**

The TypeNode representing the parameter's type.


---

### setType

void setType([TypeNode](TypeNode.md) type)

Sets the type of this parameter.

**Parameters:**

`type` - The TypeNode to set as this parameter's type.


---

### setSimpleName

void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the simple name of this parameter.

**Parameters:**

`name` - The simple name to set.


---

### getSimpleName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()

Returns the simple name of this parameter.

**Returns:**

The simple name.


---

### setQualifiedName

void setQualifiedName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the qualified name of this parameter.

**Parameters:**

`name` - The qualified name to set.


---

### getQualifiedName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()

Returns the qualified name of this parameter.

**Returns:**

The qualified name.


---

