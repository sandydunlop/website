Package [io.github.sandydunlop.markista.model](index.md)

# Class InheritedMethodRef
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.InheritedMethodRef<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __InheritedMethodRef__</span>

Represents a method from another type that is overridden by a method in the type being documented.


## Field Summary

| Modifier and Type                                                                                          | Field                                     | Description                                                            |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------------|
| private static final long                                                                                  | [serialVersionUID](#serialversionuid)     |                                                                        |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [qualifiedClassName](#qualifiedclassname) | Fully qualified name of the class that declares the overridden method. |
| private [Text](Text.md)                                                                                    | [text](#text)                             | Text with a link to the class the overridden method belongs to.        |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [methodName](#methodname)                 | Name of the overridden method.                                         |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                  | Description                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| InheritedMethodRef([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedClassName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) methodName) | Constructs an InheritedMethodNode with specified qualified class name and method name. |

## Method Summary

| Modifier and Type                                                                                   | Method                                    | Description                                                      |
|-----------------------------------------------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)()           | Returns the fully qualified class name of the overridden method. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getMethodName](#getmethodname)()         | Returns the name of the inherited method.                        |
| public void                                                                                         | [setText](#settext)([Text](Text.md) text) |                                                                  |
| public [Text](Text.md)                                                                              | [getText](#gettext)()                     |                                                                  |

## Field Details

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### qualifiedClassName

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __qualifiedClassName__</span>

Fully qualified name of the class that declares the overridden method.


---

### text

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __text__</span>

Text with a link to the class the overridden method belongs to.


---

### methodName

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodName__</span>

Name of the overridden method.


---


## Method Details

### getClassName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getClassName__</span>

Returns the fully qualified class name of the overridden method.

**Returns:**

The qualified class name.


---

### getMethodName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodName__</span>

Returns the name of the inherited method.

**Returns:**

The method name.


---

### setText

<span style="font-family: monospace; font-size: 80%;">public void __setText__</span>




---

### getText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getText__</span>




---

