Package [io.github.sandydunlop.markista.model](index.md)

# Interface PackageMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.PackageMember<br/>
<br/>

----

Represents a member belonging to a package, such as a class, interface, or sub-package.


## Method Summary

| Modifier and Type                                                                                     | Method                              | Description                                                      |
|-------------------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------|
| abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getName](#getname)()               | Returns the simple name of this package member.                  |
| abstract [Text](Text.md)                                                                              | [getDescription](#getdescription)() | Returns the description of this package member as a Text object. |

## Method Details

### getName

abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the simple name of this package member.

**Returns:**

The name as a String.


---

### getDescription

abstract [Text](Text.md) getDescription()

Returns the description of this package member as a Text object.

**Returns:**

The description text.


---

