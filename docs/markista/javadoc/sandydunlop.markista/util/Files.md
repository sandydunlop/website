Package [io.github.sandydunlop.markista.util](index.md)

# Class Files
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.Files<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                    | Field                                       | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------------|-------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [outputDirectory](#outputdirectory)         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [squashedDirectories](#squasheddirectories) |             |

## Constructor Summary

| Constructor                                                                                                                                                    | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Files([ModuleNode](../model/ModuleNode.md) moduleNode, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDir) |             |

## Method Summary

| Modifier and Type                                                                            | Method                                                                                                                                                                                                                                                                    | Description |
|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getFlattenedDirectories](#getflatteneddirectories)()                                                                                                                                                                                                                     |             |
| void                                                                                         | [setSquashedDirectories](#setsquasheddirectories)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                        |             |
| private int                                                                                  | [countDots](#countdots)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                 |             |
| [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)       | [buildContainingDirPath](#buildcontainingdirpath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) |             |
| char                                                                                         | [pathSeparator](#pathseparator)()                                                                                                                                                                                                                                         |             |
| [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)   | [createFile](#createfile)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                               |             |
| [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)   | [createModuleFile](#createmodulefile)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)                     |             |

## Field Details

### outputDirectory



### squashedDirectories




## Method Details

### getFlattenedDirectories

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getFlattenedDirectories()



### setSquashedDirectories

void setSquashedDirectories([ModuleNode](../model/ModuleNode.md) moduleNode)



### countDots

private int countDots([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)



### buildContainingDirPath

[File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) buildContainingDirPath([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)



**Parameters:**

`outputDirectory` - output path specified by the `-d` command line parameter

`packageName` - the name of the package being documented

### pathSeparator

char pathSeparator()



### createFile

[Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createFile([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### createModuleFile

[Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createModuleFile([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

