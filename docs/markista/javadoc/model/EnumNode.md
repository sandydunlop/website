Package [io.github.sandydunlop.markista.model](index.md)

# Class EnumNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                [AbstractTypeOwner](AbstractTypeOwner.md)<br/>
                        [TypeNode](TypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.EnumNode<br/>
<br/>

----

Represents an enum type node with its constants.


## Field Summary

| Modifier and Type                                                                                                                 | Field                   | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; | [constants](#constants) |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                              | Description                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| EnumNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](PackageNode.md) packageNode) | Constructs an EnumNode with the specified qualified name, simple name, and package. |

## Method Summary

| Modifier and Type                                                                                                         | Method                                                          | Description                         |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-------------------------------------|
| void                                                                                                                      | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; | [getConstants](#getconstants)()                                 | Returns the list of enum constants. |

## Field Details

### constants




---


## Method Details

### addConstant

void addConstant([FieldNode](FieldNode.md) constant)

Adds a constant field to this enum.

**Parameters:**

`constant` - The FieldNode representing the enum constant.


---

### getConstants

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getConstants()

Returns the list of enum constants.

**Returns:**

List of FieldNode constants.


---

