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
| private [Name](Name.md)                                                                                                                           | [typeName](#typename)     |             |



## Constructor Summary

| Constructor                                                                                                                                                                                                                            | Description                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| AppliedAnnotationNode()                                                                                                                                                                                                                | Constructs an AppliedAnnotationNode                     |
| AppliedAnnotationNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs an AppliedAnnotationNode with the given type |



## Method Summary

| Modifier and Type                                                                                                                          | Method                                                                       | Description                                                                                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                                                                | [setCustom](#setcustom)(boolean b)                                           | Specifies if this annotation will be treated as custom or built-in.                                                                          |
| public boolean                                                                                                                             | [isCustom](#iscustom)()                                                      | Indicates if this is a custom annotation                                                                                                     |
| public void                                                                                                                                | [setDocumented](#setdocumented)(boolean b)                                   | Sets the documented flag, indicating that this annotation should be displayed in the documentation of types or fields that it is applied to. |
| public boolean                                                                                                                             | [isDocumented](#isdocumented)()                                              | Gets the flag the indicates this annotation should appear in the documentation of the type or field it is applied to.                        |
| public [Name](Name.md)                                                                                                                     | [getTypeName](#gettypename)()                                                | Returns the type of this annotation.                                                                                                         |
| public void                                                                                                                                | [setTypeName](#settypename)([Name](Name.md) type)                            | Sets the type of this annotation.                                                                                                            |
| public void                                                                                                                                | [addElement](#addelement)([AnnotationElement](AnnotationElement.md) element) | Adds an element to this annotation                                                                                                           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> | [getElements](#getelements)()                                                | Returns the list of elements of this annotation.                                                                                             |


### Methods inherited from [Node](Node.md)

[setReferences](Node.md#setreferences), [getReferences](Node.md#getreferences), [getKind](Node.md#getkind), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [getSince](Node.md#getsince), [setFirstSentence](Node.md#setfirstsentence), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [setDeprecation](Node.md#setdeprecation), [getFirstSentence](Node.md#getfirstsentence), [setKind](Node.md#setkind), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getDeprecationText](Node.md#getdeprecationtext), [getFullBody](Node.md#getfullbody)


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

<span style="font-family: monospace; font-size: 80%;">private [Name](Name.md) __typeName__</span>




---


## Method Details

### setCustom

<span style="font-family: monospace; font-size: 80%;">public void __setCustom__(boolean b)</span>

Specifies if this annotation will be treated as custom or built-in.

**Parameters:**

`b` - If true, set that this annotation is a custom one


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

**Parameters:**

`b` - If true, this annotation will appear in the documentation
of types and fields it is applied to.


---

### isDocumented

<span style="font-family: monospace; font-size: 80%;">public boolean __isDocumented__()</span>

Gets the flag the indicates this annotation should appear in
the documentation of the type or field it is applied to.

**Returns:**

True if this annotation should appear in such documentation.


---

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [Name](Name.md) __getTypeName__()</span>

Returns the type of this annotation.

**Returns:**

The name of the annotation's type.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__([Name](Name.md) type)</span>

Sets the type of this annotation.

**Parameters:**

`type` - The name to set as this annotation's type.


---

### addElement

<span style="font-family: monospace; font-size: 80%;">public void __addElement__([AnnotationElement](AnnotationElement.md) element)</span>

Adds an element to this annotation

**Parameters:**

`element` - the element to add to this annotation


---

### getElements

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> __getElements__()</span>

Returns the list of elements of this annotation.

**Returns:**

list of elements belonging to this annotation.


---

