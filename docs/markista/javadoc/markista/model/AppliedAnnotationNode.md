Package [io.github.sandydunlop.markista.model](index.md)

# Class AppliedAnnotationNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AppliedAnnotationNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __AppliedAnnotationNode__<br/>extends [Node](Node.md)
</span>

An annotation applied to a type


## Field Summary

| Modifier and Type                                                                                                                                 | Field                     | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------|
| private boolean                                                                                                                                   | [custom](#custom)         |             |
| private boolean                                                                                                                                   | [documented](#documented) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> | [elements](#elements)     |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                              | [typeName](#typename)     |             |



## Constructor Summary

| Constructor                                                                                                              | Description                                             |
|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| AppliedAnnotationNode()                                                                                                  | Constructs an AppliedAnnotationNode                     |
| AppliedAnnotationNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) | Constructs an AppliedAnnotationNode with the given type |



## Method Summary

| Modifier and Type                                                                                                                          | Method                                                                                                                         | Description                                                                                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                                                                | [addElement](#addelement)([AnnotationElement](AnnotationElement.md) element)                                                   | Adds an element to this annotation                                                                                                           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> | [getElements](#getelements)()                                                                                                  | Returns the list of elements of this annotation.                                                                                             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                        | [getTypeName](#gettypename)()                                                                                                  | Returns the type of this annotation.                                                                                                         |
| public boolean                                                                                                                             | [isCustom](#iscustom)()                                                                                                        | Indicates if this is a custom annotation                                                                                                     |
| public boolean                                                                                                                             | [isDocumented](#isdocumented)()                                                                                                | Gets the flag the indicates this annotation should appear in the documentation of the type or field it is applied to.                        |
| public void                                                                                                                                | [setCustom](#setcustom)(boolean b)                                                                                             | Specifies if this annotation will be treated as custom or built-in.                                                                          |
| public void                                                                                                                                | [setDocumented](#setdocumented)(boolean b)                                                                                     | Sets the documented flag, indicating that this annotation should be displayed in the documentation of types or fields that it is applied to. |
| public void                                                                                                                                | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) | Sets the type of this annotation.                                                                                                            |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [Kind](Node.md#getkind), [DeprecationText](Node.md#setdeprecationtext), [Body](Node.md#getbody), [Since](Node.md#getsince), [FullBody](Node.md#setfullbody), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Kind](Node.md#setkind), [Body](Node.md#setbody), [Since](Node.md#setsince), [Deprecation](Node.md#setdeprecation), [FirstSentence](Node.md#getfirstsentence), [Deprecation](Node.md#getdeprecation), [UUID](Node.md#getuuid), [DeprecationText](Node.md#getdeprecationtext), [FullBody](Node.md#getfullbody)


## Field Details

### custom

<span style="font-family: monospace; font-size: 80%;">private boolean __custom__</span>




---

### documented

<span style="font-family: monospace; font-size: 80%;">private boolean __documented__</span>




---

### elements

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> __elements__</span>




---

### typeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeName__</span>




---


## Method Details

### addElement

<span style="font-family: monospace; font-size: 80%;">public void __addElement__([AnnotationElement](AnnotationElement.md) element)</span>

Adds an element to this annotation


---

### getElements

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> __getElements__()</span>

Returns the list of elements of this annotation.

**Returns:**

list of elements belonging to this annotation.


---

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeName__()</span>

Returns the type of this annotation.

**Returns:**

The name of the annotation's type.


---

### isCustom

<span style="font-family: monospace; font-size: 80%;">public boolean __isCustom__()</span>

Indicates if this is a custom annotation

**Returns:**

True if the annotation is a custom one, otherwise false


---

### isDocumented

<span style="font-family: monospace; font-size: 80%;">public boolean __isDocumented__()</span>

Gets the flag the indicates this annotation should appear in
the documentation of the type or field it is applied to.

**Returns:**

True if this annotation should appear in such documentation.


---

### setCustom

<span style="font-family: monospace; font-size: 80%;">public void __setCustom__(boolean b)</span>

Specifies if this annotation will be treated as custom or built-in.


---

### setDocumented

<span style="font-family: monospace; font-size: 80%;">public void __setDocumented__(boolean b)</span>

Sets the documented flag, indicating that this annotation should
be displayed in the documentation of types or fields that it is
applied to.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type)</span>

Sets the type of this annotation.


---

