Package [io.github.sandydunlop.markista.model](index.md)

# Class AppliedAnnotationNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AppliedAnnotationNode<br/>
<br/>

----

<span style="font-family: monospace;">public class __AppliedAnnotationNode__</span>

An annotation applied to a type


## Constructor Summary

| Constructor                  | Description                                             |
|------------------------------|---------------------------------------------------------|
| AppliedAnnotationNode()      | Constructs an AppliedAnnotationNode                     |
| AppliedAnnotationNode( type) | Constructs an AppliedAnnotationNode with the given type |

## Method Summary

| Modifier and Type                                                                                                                          | Method                                                                                                                         | Description                                                                                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                                                                | [setCustom](#setcustom)(boolean b)                                                                                             | Specifies if this annotation will be treated as custom or built-in.                                                                          |
| public boolean                                                                                                                             | [isCustom](#iscustom)()                                                                                                        | Indicates if this is a custom annotation                                                                                                     |
| public void                                                                                                                                | [setDocumented](#setdocumented)(boolean b)                                                                                     | Sets the documented flag, indicating that this annotation should be displayed in the documentation of types or fields that it is applied to. |
| public boolean                                                                                                                             | [isDocumented](#isdocumented)()                                                                                                | Gets the flag the indicates this annotation should appear in the documentation of the type or field it is applied to.                        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                        | [getTypeName](#gettypename)()                                                                                                  | Returns the type of this annotation.                                                                                                         |
| public void                                                                                                                                | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) | Sets the type of this annotation.                                                                                                            |
| public void                                                                                                                                | [addElement](#addelement)([AnnotationElement](AnnotationElement.md) element)                                                   | Adds an element to this annotation                                                                                                           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> | [getElements](#getelements)()                                                                                                  | Returns the list of elements of this annotation.                                                                                             |

## Method Details

### setCustom

public void setCustom(boolean b)

Specifies if this annotation will be treated as custom or built-in.


---

### isCustom

public boolean isCustom()

Indicates if this is a custom annotation

**Returns:**

True if the annotation is a custom one, otherwise false


---

### setDocumented

public void setDocumented(boolean b)

Sets the documented flag, indicating that this annotation should
be displayed in the documentation of types or fields that it is
applied to.


---

### isDocumented

public boolean isDocumented()

Gets the flag the indicates this annotation should appear in
the documentation of the type or field it is applied to.

**Returns:**

True if this annotation should appear in such documentation.


---

### getTypeName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getTypeName()

Returns the type of this annotation.

**Returns:**

The name of the annotation's type.


---

### setTypeName

public void setTypeName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type)

Sets the type of this annotation.


---

### addElement

public void addElement([AnnotationElement](AnnotationElement.md) element)

Adds an element to this annotation


---

### getElements

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AnnotationElement](AnnotationElement.md)> getElements()

Returns the list of elements of this annotation.

**Returns:**

list of elements belonging to this annotation.


---

