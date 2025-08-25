Package [io.github.sandydunlop.markista.model](index.md)

# Class AnnotationElement
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AnnotationElement<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __AnnotationElement__<br/>extends [Node](Node.md)
</span>

An element of an annotation


## Field Summary

| Modifier and Type                                                                                          | Field                     | Description                 |
|------------------------------------------------------------------------------------------------------------|---------------------------|-----------------------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)     | [simpleName](#simplename) | The simple form of the name |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)     | [typeName](#typename)     |                             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [value](#value)           |                             |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                     | Description                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| AnnotationElement([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) value) | Constructs an annotation element |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                             | Description                               |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| public void                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the simple name of this type.        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleName](#getsimplename)()                                                                                                  | Returns the simple name of this type.     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getValue](#getvalue)()                                                                                                            | Gets the value of this annotation element |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTypeName](#gettypename)()                                                                                                      | Returns the type of this element.         |
| public void                                                                                         | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type)     | Sets the type of this element.            |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[setReferences](Node.md#setreferences), [getReferences](Node.md#getreferences), [getKind](Node.md#getkind), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [getSince](Node.md#getsince), [setFullBody](Node.md#setfullbody), [setFirstSentence](Node.md#setfirstsentence), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [setKind](Node.md#setkind), [setDeprecation](Node.md#setdeprecation), [getFirstSentence](Node.md#getfirstsentence), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getDeprecationText](Node.md#getdeprecationtext), [getFullBody](Node.md#getfullbody)


## Field Details

### simpleName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simpleName__</span>

The simple form of the name


---

### typeName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeName__</span>




---

### value

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __value__</span>




---


## Method Details

### setSimpleName

<span style="font-family: monospace; font-size: 80%;">public void __setSimpleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the simple name of this type.


---

### getSimpleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleName__()</span>

Returns the simple name of this type.

**Returns:**

the simple name.


---

### getValue

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getValue__()</span>

Gets the value of this annotation element

**Returns:**

The value of the element


---

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeName__()</span>

Returns the type of this element.

**Returns:**

The name of the element's type.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type)</span>

Sets the type of this element.


---

