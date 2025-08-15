Package [io.github.sandydunlop.markista.model](index.md)

# Interface PackageOwnerInterface
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.PackageOwnerInterface<br/>
<br/>

----

<span style="font-family: monospace;">public abstract Interface __PackageOwnerInterface__</span>

Interface representing an owner of packages. public interface


## Method Summary

| Modifier and Type                                                                                                                       | Method                                                               | Description                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|---------------------------------------------------|
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [getPackages](#getpackages)()                                        | Returns the list of packages owned by this owner. |
| public abstract void                                                                                                                    | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode) | Adds a package to the owned packages.             |

## Method Details

### getPackages

public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> getPackages()

Returns the list of packages owned by this owner.

**Returns:**

List of PackageNode objects representing owned packages.


---

### addPackage

public abstract void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a package to the owned packages.


---

