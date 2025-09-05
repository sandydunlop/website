Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class Relativizer
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.Relativizer<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Relativizer__</span>


## Field Summary

| Modifier and Type                                                                                           | Field                                         | Description |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [flattenedDirectories](#flatteneddirectories) |             |



## Constructor Summary

| Constructor   | Description |
|---------------|-------------|
| Relativizer() |             |



## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                                                                                                                                   | Description                                                                                        |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| public static void                                                                                         | [setFlattenedDirectories](#setflatteneddirectories)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fd)                                                                                                                     | Sets the string used to adjust flattened directories in relative path calculations.                |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                            | Produces a relative path string from one package to another by splitting and comparing components. |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [flattenDirectory](#flattendirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)                                                                                                                                 | Removes prefix directories from a path if flattenedDirectories is set and matches.                 |
| static int                                                                                                 | [findCommonIndex](#findcommonindex)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts)                    | Finds the common prefix index between two string arrays.                                           |
| static void                                                                                                | [appendParentDirs](#appendparentdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)                                                                                                         | Appends parent directory segments `..` to the relative path string builder.                        |
| static void                                                                                                | [appendTargetDirs](#appendtargetdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts, int start) | Appends target directory segments to the relative path string builder starting at index start.     |



## Field Details

### flattenedDirectories

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __flattenedDirectories__</span>




---


## Method Details

### setFlattenedDirectories

<span style="font-family: monospace; font-size: 80%;">public static void __setFlattenedDirectories__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fd)</span>

Sets the string used to adjust flattened directories in relative path calculations.


---

### relativize

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativize__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)</span>

Produces a relative path string from one package to another by splitting and comparing components.
Supports flattened directories if set.

**Returns:**

The relative path string.


---

### flattenDirectory

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __flattenDirectory__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>

Removes prefix directories from a path if flattenedDirectories is set and matches.

**Returns:**

The adjusted path or original if no flattening applies.


---

### findCommonIndex

<span style="font-family: monospace; font-size: 80%;">static int __findCommonIndex__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts)</span>

Finds the common prefix index between two string arrays.

**Returns:**

The number of common leading segments.


---

### appendParentDirs

<span style="font-family: monospace; font-size: 80%;">static void __appendParentDirs__([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)</span>

Appends parent directory segments `..` to the relative path string builder.


---

### appendTargetDirs

<span style="font-family: monospace; font-size: 80%;">static void __appendTargetDirs__([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts, int start)</span>

Appends target directory segments to the relative path string builder starting at index start.


---

