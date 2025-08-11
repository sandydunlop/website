Package [io.github.sandydunlop.markista.model](index.md)

# Class OverriddenMethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.OverriddenMethodNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __OverriddenMethodNode__</span>

Represents a method from another type that is overridden by a method in the type being documented.


## Field Summary

| Modifier and Type                                                                                          | Field                                     | Description                                                            |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [qualifiedClassName](#qualifiedclassname) | Fully qualified name of the class that declares the overridden method. |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodName](#methodname)                 | Name of the overridden method.                                         |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                    | Description                                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| OverriddenMethodNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedClassName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) methodName) | Constructs an OverriddenMethodNode with specified qualified class name and method name. |

## Method Summary

| Modifier and Type                                                                                   | Method                            | Description                                                      |
|-----------------------------------------------------------------------------------------------------|-----------------------------------|------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()   | Returns the fully qualified class name of the overridden method. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)() | Returns the name of the overridden method.                       |

## Field Details

### qualifiedClassName

Fully qualified name of the class that declares the overridden method.


---

### methodName

Name of the overridden method.


---


## Method Details

### getClassName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName()

Returns the fully qualified class name of the overridden method.

**Returns:**

The qualified class name.


---

### getMethodName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getMethodName()

Returns the name of the overridden method.

**Returns:**

The method name.


---

