Package [io.github.sandydunlop.markista.util](index.md)

# Class FileUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.FileUtils<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                 | Field                                                 | Description |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [DEFAULT_OUTPUT_DIRECTORY](#default_output_directory) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)              | [outputDirectory](#outputdirectory)                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)              | [flattenedDirectories](#flatteneddirectories)         |             |

## Constructor Summary

| Constructor                                                                                                                                                        | Description                                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| FileUtils([ModuleNode](../model/ModuleNode.md) moduleNode, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDir) | This constructor initializes `FileUtils` for use with the specified module. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                                                                                                                                                    | Description                                                                                                  |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [getFlattenedDirectories](#getflatteneddirectories)()                                                                                                                                                                                                                     |                                                                                                              |
| void                                                                                                | [setFlattenedDirectories](#setflatteneddirectories)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                      |                                                                                                              |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [commonBase](#commonbase)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; packageNames)                                      |                                                                                                              |
| static int                                                                                          | [countDots](#countdots)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                 | Utility method that counts the amounts of dots in a `String`.                                                |
| [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)              | [buildContainingDirPath](#buildcontainingdirpath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Creates a filesystem path based on the specified output directory and the fully qualified name of a package. |
| static char                                                                                         | [pathSeparator](#pathseparator)()                                                                                                                                                                                                                                         | Returns the character used to separate parts of a filesystem path.                                           |
| [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)          | [createFile](#createfile)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                               |                                                                                                              |
| [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)          | [createModuleFile](#createmodulefile)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)                     |                                                                                                              |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [joinPaths](#joinpaths)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) base, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) part)                                             |                                                                                                              |

## Field Details

### DEFAULT_OUTPUT_DIRECTORY



**See Also:**


[Constant Field Values](../constant-values.md)



---

### outputDirectory




---

### flattenedDirectories




---


## Method Details

### getFlattenedDirectories

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getFlattenedDirectories()




---

### setFlattenedDirectories

void setFlattenedDirectories([ModuleNode](../model/ModuleNode.md) moduleNode)




---

### commonBase

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) commonBase([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; packageNames)




---

### countDots

static int countDots([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Utility method that counts the amounts of dots in a `String`.


---

### buildContainingDirPath

[File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) buildContainingDirPath([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)

Creates a filesystem path based on the specified output directory
and the fully qualified name of a package. Each section of the package
name becomes a directory unless [setFlattenedDirectories](#setflatteneddirectories) has been
called, in which case only the directories which will contain
documentation for types will be created.

**Parameters:**

`outputDirectory` - output path specified by the `-d` command line parameter

`packageName` - the name of the package being documented


---

### pathSeparator

static char pathSeparator()

Returns the character used to separate parts of a filesystem path.
This method is necessary because Java's built-in `File.pathSeparatorChar`
has a bug where it returns the wrong character on macOS.


---

### createFile

[Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createFile([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createModuleFile

[Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createModuleFile([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### joinPaths

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) joinPaths([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) base, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) part)




---

