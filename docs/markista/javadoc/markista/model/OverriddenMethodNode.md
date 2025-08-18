Package [io.github.sandydunlop.markista.model](index.md)

# Class OverriddenMethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.OverriddenMethodNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace;">public class __OverriddenMethodNode__</span>

Represents a method from another type that is overridden by a method in the type being documented.


## Constructor Summary

| Constructor                                            | Description                                                                             |
|--------------------------------------------------------|-----------------------------------------------------------------------------------------|
| OverriddenMethodNode( qualifiedClassName,  methodName) | Constructs an OverriddenMethodNode with specified qualified class name and method name. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                       | Description                                                      |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------|------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()                              | Returns the fully qualified class name of the overridden method. |
| public void                                                                                         | [setReference](#setreference)([Reference](Reference.md) ref) |                                                                  |
| public [Reference](Reference.md)                                                                    | [getReference](#getreference)()                              |                                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)()                            | Returns the name of the overridden method.                       |
| public void                                                                                         | [setText](#settext)([Text](Text.md) text)                    |                                                                  |
| public [Text](Text.md)                                                                              | [getText](#gettext)()                                        |                                                                  |

## Method Details

### getClassName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName()

Returns the fully qualified class name of the overridden method.

**Returns:**

The qualified class name.


---

### setReference

public void setReference([Reference](Reference.md) ref)




---

### getReference

public [Reference](Reference.md) getReference()




---

### getMethodName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getMethodName()

Returns the name of the overridden method.

**Returns:**

The method name.


---

### setText

public void setText([Text](Text.md) text)




---

### getText

public [Text](Text.md) getText()




---

