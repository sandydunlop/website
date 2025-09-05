Package [io.github.sandydunlop.markista.model](index.md)

# Class AppliedAnnotationNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AppliedAnnotationNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __AppliedAnnotationNode__<br/>extends [](Node.md)
</span>

An annotation applied to a type


## Field Summary

| Modifier and Type                                                                                                                | Field                     | Description |
|----------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------|
| private boolean                                                                                                                  | [custom](#custom)         |             |
| private boolean                                                                                                                  | [documented](#documented) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AnnotationElement.md)> | [elements](#elements)     |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                             | [typeName](#typename)     |             |



## Constructor Summary

| Constructor                                                                                                              | Description                                             |
|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| AppliedAnnotationNode()                                                                                                  | Constructs an AppliedAnnotationNode                     |
| AppliedAnnotationNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) | Constructs an AppliedAnnotationNode with the given type |



## Method Summary

| Modifier and Type                                                                                                         | Method                                                                                                                         | Description                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                                               | [setCustom](#setcustom)(boolean b)                                                                                             | Specifies if this annotation will be treated as custom or built-in.                                                                          |
| public boolean                                                                                                            | [isCustom](#iscustom)()                                                                                                        | Indicates if this is a custom annotation                                                                                                     |
| public void                                                                                                               | [setDocumented](#setdocumented)(boolean b)                                                                                     | Sets the documented flag, indicating that this annotation should be displayed in the documentation of types or fields that it is applied to. |
| public boolean                                                                                                            | [isDocumented](#isdocumented)()                                                                                                | Gets the flag the indicates this annotation should appear in the documentation of the type or field it is applied to.                        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                       | [getTypeName](#gettypename)()                                                                                                  | Returns the type of this annotation.                                                                                                         |
| public void                                                                                                               | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) | Sets the type of this annotation.                                                                                                            |
| public void                                                                                                               | [addElement](#addelement)([](AnnotationElement.md) element)                                                                    | Adds an element to this annotation                                                                                                           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AnnotationElement.md)> | [getElements](#getelements)()                                                                                                  | Returns the list of elements of this annotation.                                                                                             |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.setReferences](Node.md#setreferences), [Node.getReferences](Node.md#getreferences), [Node.getKind](Node.md#getkind), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.getBody](Node.md#getbody), [Node.getSince](Node.md#getsince), [Node.setFullBody](Node.md#setfullbody), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody), [Node.setDeprecation](Node.md#setdeprecation), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecation](Node.md#getdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getDeprecationText](Node.md#getdeprecationtext), [Node.getFullBody](Node.md#getfullbody)


## Field Details

### custom

<span style="font-family: monospace; font-size: 80%;">private boolean __custom__</span>




---

### documented

<span style="font-family: monospace; font-size: 80%;">private boolean __documented__</span>




---

### elements

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AnnotationElement.md)> __elements__</span>




---

### typeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeName__</span>




---


## Method Details

### setCustom

<span style="font-family: monospace; font-size: 80%;">public void __setCustom__(boolean b)</span>

Specifies if this annotation will be treated as custom or built-in.


---

### isCustom

<span style="font-family: monospace; font-size: 80%;">public boolean __isCustom__()</span>

Indicates if this is a custom annotation

**Returns:**

True if the annotation is a custom one, otherwise false


---

### setDocumented

<span style="font-family: monospace; font-size: 80%;">public void __setDocumented__(boolean b)</span>

Sets the documented flag, indicating that this annotation should
be displayed in the documentation of types or fields that it is
applied to.


---

### isDocumented

<span style="font-family: monospace; font-size: 80%;">public boolean __isDocumented__()</span>

Gets the flag the indicates this annotation should appear in
the documentation of the type or field it is applied to.

**Returns:**

True if this annotation should appear in such documentation.


---

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeName__()</span>

Returns the type of this annotation.

**Returns:**

The name of the annotation's type.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type)</span>

Sets the type of this annotation.


---

### addElement

<span style="font-family: monospace; font-size: 80%;">public void __addElement__([](AnnotationElement.md) element)</span>

Adds an element to this annotation


---

### getElements

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AnnotationElement.md)> __getElements__()</span>

Returns the list of elements of this annotation.

**Returns:**

list of elements belonging to this annotation.


---

