Package [io.github.sandydunlop.markista.model](index.md)

# Class EnumTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
                                        io.github.sandydunlop.markista.model.EnumTypeNode<br/>
<br/>

----

<span style="font-family: monospace;">public class __EnumTypeNode__</span>

Represents an enum type node with its constants.


## Field Summary

| Modifier and Type                                                                                                                 | Field                   | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [constants](#constants) |             |

## Constructor Summary

| Constructor                                             | Description                                                                         |
|---------------------------------------------------------|-------------------------------------------------------------------------------------|
| EnumTypeNode( qualifiedName,  simpleName,  packageName) | Constructs an EnumNode with the specified qualified name, simple name, and package. |
| EnumTypeNode( qualifiedName,  simpleName,  packageName) | Constructs an EnumNode with the specified qualified name, simple name, and package. |
| EnumTypeNode( qualifiedName,  simpleName,  packageName) | Constructs an EnumNode with the specified qualified name, simple name, and package. |

## Method Summary

| Modifier and Type                                                                                                          | Method                                                          | Description                         |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-------------------------------------|
| public void                                                                                                                | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [getConstants](#getconstants)()                                 | Returns the list of enum constants. |
| public void                                                                                                                | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |
| public void                                                                                                                | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |

## Field Details

### constants




---


## Method Details

### addConstant

public void addConstant([FieldNode](FieldNode.md) constant)

Adds a constant field to this enum.


---

### getConstants

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> getConstants()

Returns the list of enum constants.

**Returns:**

List of FieldNode constants.


---

### addConstant

public void addConstant([FieldNode](FieldNode.md) constant)

Adds a constant field to this enum.


---

### addConstant

public void addConstant([FieldNode](FieldNode.md) constant)

Adds a constant field to this enum.


---

