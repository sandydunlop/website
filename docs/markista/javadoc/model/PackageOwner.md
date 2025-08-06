Package [io.github.sandydunlop.markista.model](index.md)

# Interface PackageOwner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.PackageOwner<br/>
<br/>

----

Interface representing an owner of packages. public interface


## Method Summary

| Modifier and Type                                                                                                                          | Method                                                               | Description                                       |
|--------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|---------------------------------------------------|
| abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                        | Returns the list of packages owned by this owner. |
| abstract void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode) | Adds a package to the owned packages.             |

## Method Details

### getPackages

abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()

Returns the list of packages owned by this owner.

**Returns:**

List of PackageMember objects representing owned packages.


---

### addPackage

abstract void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a package to the owned packages.

**Parameters:**

`packageNode` - The PackageNode to add.


---

