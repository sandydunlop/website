Package [io.github.sandydunlop.markista.model](index.md)

# Class AnnotationElement
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)<br/>
                                io.github.sandydunlop.markista.model.AnnotationElement<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __AnnotationElement__</span>

An element of an annotation


## Field Summary

| Modifier and Type                                                                                          | Field           | Description |
|------------------------------------------------------------------------------------------------------------|-----------------|-------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [value](#value) |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                     | Description                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| AnnotationElement([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) value) | Constructs an annotation element |

## Method Summary

| Modifier and Type                                                                                   | Method                  | Description                               |
|-----------------------------------------------------------------------------------------------------|-------------------------|-------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getValue](#getvalue)() | Gets the value of this annotation element |

## Field Details

### value

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __value__</span>




---


## Method Details

### getValue

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getValue__</span>

Gets the value of this annotation element

**Returns:**

The value of the element


---

