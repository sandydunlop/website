Package [io.github.sandydunlop.markista.model](index.md)

# Interface PackageMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.PackageMember<br/>
<br/>

----

<span style="font-family: monospace;">public abstract Interface __PackageMember__</span>

Represents a member belonging to a package, such as a class, interface, or sub-package.


## Method Summary

| Modifier and Type                                                                                            | Method                              | Description                                                      |
|--------------------------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------|
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getName](#getname)()               | Returns the simple name of this package member.                  |
| public abstract [Text](Text.md)                                                                              | [getDescription](#getdescription)() | Returns the description of this package member as a Text object. |

## Method Details

### getName

public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the simple name of this package member.

**Returns:**

The name as a String.


---

### getDescription

public abstract [Text](Text.md) getDescription()

Returns the description of this package member as a Text object.

**Returns:**

The description text.


---

