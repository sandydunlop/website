Package [io.github.sandydunlop.markista.core](index.md)

# Class Context
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.core.Context<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Context__</span>

Singleton class that maintains the current context during documentation generation.This class tracks the current API model, output directory, current module, package, type, method, and field names,
as well as the reporter used for reporting messages such as INFO, WARNING, and ERROR.

It provides utilities to create directories and files for output, report errors or warnings with location information,
and manage the structure of output paths in relation to package and module names.

The Context instance should be obtained via getInstance(), and its fields configured as the documentation generation progresses.
This class is not thread-safe.


## Field Summary

| Modifier and Type                                                                                                   | Field                                                 | Description                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [DEFAULT_OUTPUT_DIRECTORY](#default_output_directory) | The default output directory                                                                                                                               |
| private [Api](../model/Api.md)                                                                                      | [api](#api)                                           | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [fieldName](#fieldname)                               | The name of the field currently being documented                                                                                                           |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [flattenedDirectories](#flatteneddirectories)         | The base section of the directory structure that contains no documentation and can be skipped when creating directories.                                   |
| private static [Context](Context.md)                                                                                | [instance](#instance)                                 | The instance of this class that is returned to callers of getInstance()                                                                                    |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [methodName](#methodname)                             | The name of the method currently being documented                                                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [moduleName](#modulename)                             | The name of the module currently being documented                                                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [outputDirectory](#outputdirectory)                   | The directory the documentation is being generated in                                                                                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [packageName](#packagename)                           | The name of the package currently being documented                                                                                                         |
| private [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) | [reporter](#reporter)                                 | The [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) used for logging messages                  |
| private [SourceCodeLocation](../model/SourceCodeLocation.md)                                                        | [source](#source)                                     |                                                                                                                                                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [typeName](#typename)                                 | The name of the type currently being documented                                                                                                            |
| private [WriterFactory](Context.WriterFactory.md)                                                                   | [writerFactory](#writerfactory)                       |                                                                                                                                                            |



## Constructor Summary

| Constructor | Description             |
|-------------|-------------------------|
| Context()   | The default constructor |



## Method Summary

| Modifier and Type                                                                                                  | Method                                                                                                                                                  | Description                                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                                        | [setWriterFactory](#setwriterfactory)([WriterFactory](Context.WriterFactory.md) wf)                                                                     |                                                                                                                                                   |
| public static void                                                                                                 | [reset](#reset)()                                                                                                                                       |                                                                                                                                                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getFlattenedDirectories](#getflatteneddirectories)()                                                                                                   |                                                                                                                                                   |
| public static [Context](Context.md)                                                                                | [getInstance](#getinstance)()                                                                                                                           | Returns the singleton instance of this Context.                                                                                                   |
| public void                                                                                                        | [setApi](#setapi)([Api](../model/Api.md) api)                                                                                                           | Sets the Api model associated with this context, also initializing the flattened directories string.                                              |
| public [Api](../model/Api.md)                                                                                      | [getApi](#getapi)()                                                                                                                                     | Returns the Api model associated with this context.                                                                                               |
| public void                                                                                                        | [setSourceCodeLocation](#setsourcecodelocation)([SourceCodeLocation](../model/SourceCodeLocation.md) source)                                            |                                                                                                                                                   |
| public [SourceCodeLocation](../model/SourceCodeLocation.md)                                                        | [getSourceCodeLocation](#getsourcecodelocation)()                                                                                                       |                                                                                                                                                   |
| public void                                                                                                        | [setOutputDirectory](#setoutputdirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory) | Sets the output directory path where documentation files will be written.                                                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getOutputDirectory](#getoutputdirectory)()                                                                                                             |                                                                                                                                                   |
| public void                                                                                                        | [setReporter](#setreporter)([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)       | Sets the reporter used for reporting messages and diagnostics during doc generation.                                                              |
| public [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) | [getReporter](#getreporter)()                                                                                                                           | Returns the currently set reporter instance.                                                                                                      |
| public void                                                                                                        | [setModuleName](#setmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                      | Sets the current module name and resets the package name.                                                                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getModuleName](#getmodulename)()                                                                                                                       | Returns the current module name.                                                                                                                  |
| public void                                                                                                        | [setPackageName](#setpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                    | Sets the current package name and resets the type name.                                                                                           |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getPackageName](#getpackagename)()                                                                                                                     | Returns the current package name.                                                                                                                 |
| public void                                                                                                        | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                          | Sets the current type name.                                                                                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getTypeName](#gettypename)()                                                                                                                           | Returns the current type name.                                                                                                                    |
| public void                                                                                                        | [setMethodName](#setmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                      | Sets the current method name.                                                                                                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getMethodName](#getmethodname)()                                                                                                                       | Returns the current method name.                                                                                                                  |
| public void                                                                                                        | [setFieldName](#setfieldname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                        | Sets the current field name.                                                                                                                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getFieldName](#getfieldname)()                                                                                                                         | Returns the current field name.                                                                                                                   |
| public void                                                                                                        | [reportInfo](#reportinfo)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)                         | Reports an informational message through the reporter.                                                                                            |
| public void                                                                                                        | [reportWarning](#reportwarning)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)                   | Reports a warning message including location information.                                                                                         |
| public void                                                                                                        | [reportError](#reporterror)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)                       | Reports an error message including location information.                                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)               | [location](#location)()                                                                                                                                 | Returns a string describing the current location context in module, package, type, method, and field.                                             |
| public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                      | [getPackageDirectory](#getpackagedirectory)()                                                                                                           | Constructs a File object representing the directory path corresponding to the current output directory, module, and fully qualified package name. |
| public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                  | [createFileInPackage](#createfileinpackage)()                                                                                                           | Creates a Writer for writing a file corresponding to the current context (type name, package, module).                                            |
| [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                             | [createPackageFilePath](#createpackagefilepath)()                                                                                                       |                                                                                                                                                   |
| public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                  | [createFileInModule](#createfileinmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)        | Creates a Writer for writing a module-level file inside the module's directory.                                                                   |
| [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                             | [createModuleFilePath](#createmodulefilepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)    |                                                                                                                                                   |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                 | [createFileInternal](#createfileinternal)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file)                  | Helper method that creates a Writer for a file inside the specified directory.                                                                    |



## Field Details

### DEFAULT_OUTPUT_DIRECTORY

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __DEFAULT_OUTPUT_DIRECTORY__</span>

The default output directory

**See Also:**


[Constant Field Values](../constant-values.md)



---

### api

<span style="font-family: monospace; font-size: 80%;">private [Api](../model/Api.md) __api__</span>

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---

### fieldName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fieldName__</span>

The name of the field currently being documented


---

### flattenedDirectories

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __flattenedDirectories__</span>

The base section of the directory structure that contains no
documentation and can be skipped when creating directories.


---

### instance

<span style="font-family: monospace; font-size: 80%;">private static [Context](Context.md) __instance__</span>

The instance of this class that is returned to callers of getInstance()


---

### methodName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodName__</span>

The name of the method currently being documented


---

### moduleName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__</span>

The name of the module currently being documented


---

### outputDirectory

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __outputDirectory__</span>

The directory the documentation is being generated in


---

### packageName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __packageName__</span>

The name of the package currently being documented


---

### reporter

<span style="font-family: monospace; font-size: 80%;">private [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) __reporter__</span>

The [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) used for logging messages


---

### source

<span style="font-family: monospace; font-size: 80%;">private [SourceCodeLocation](../model/SourceCodeLocation.md) __source__</span>




---

### typeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeName__</span>

The name of the type currently being documented


---

### writerFactory

<span style="font-family: monospace; font-size: 80%;">private [WriterFactory](Context.WriterFactory.md) __writerFactory__</span>




---


## Method Details

### setWriterFactory

<span style="font-family: monospace; font-size: 80%;">public void __setWriterFactory__([WriterFactory](Context.WriterFactory.md) wf)</span>




---

### reset

<span style="font-family: monospace; font-size: 80%;">public static void __reset__()</span>




---

### getFlattenedDirectories

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFlattenedDirectories__()</span>




---

### getInstance

<span style="font-family: monospace; font-size: 80%;">public static [Context](Context.md) __getInstance__()</span>

Returns the singleton instance of this Context.

**Returns:**

The Context singleton instance.


---

### setApi

<span style="font-family: monospace; font-size: 80%;">public void __setApi__([Api](../model/Api.md) api)</span>

Sets the Api model associated with this context, also initializing the flattened directories string.

**Parameters:**

`api` - The Api instance.


---

### getApi

<span style="font-family: monospace; font-size: 80%;">public [Api](../model/Api.md) __getApi__()</span>

Returns the Api model associated with this context.

**Returns:**

The current Api model.


---

### setSourceCodeLocation

<span style="font-family: monospace; font-size: 80%;">public void __setSourceCodeLocation__([SourceCodeLocation](../model/SourceCodeLocation.md) source)</span>




---

### getSourceCodeLocation

<span style="font-family: monospace; font-size: 80%;">public [SourceCodeLocation](../model/SourceCodeLocation.md) __getSourceCodeLocation__()</span>




---

### setOutputDirectory

<span style="font-family: monospace; font-size: 80%;">public void __setOutputDirectory__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory)</span>

Sets the output directory path where documentation files will be written.

**Parameters:**

`outputDirectory` - The output directory path as a String.


---

### getOutputDirectory

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOutputDirectory__()</span>




---

### setReporter

<span style="font-family: monospace; font-size: 80%;">public void __setReporter__([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)</span>

Sets the reporter used for reporting messages and diagnostics during doc generation.

**Parameters:**

`reporter` - The Reporter instance.


---

### getReporter

<span style="font-family: monospace; font-size: 80%;">public [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) __getReporter__()</span>

Returns the currently set reporter instance.

**Returns:**

The Reporter.


---

### setModuleName

<span style="font-family: monospace; font-size: 80%;">public void __setModuleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current module name and resets the package name.

**Parameters:**

`name` - The module name to set.


---

### getModuleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleName__()</span>

Returns the current module name.

**Returns:**

The module name.


---

### setPackageName

<span style="font-family: monospace; font-size: 80%;">public void __setPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current package name and resets the type name.

**Parameters:**

`name` - The package name to set.


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__()</span>

Returns the current package name.

**Returns:**

The package name.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current type name.

**Parameters:**

`name` - The type name to set.


---

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeName__()</span>

Returns the current type name.

**Returns:**

The type name.


---

### setMethodName

<span style="font-family: monospace; font-size: 80%;">public void __setMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current method name.

**Parameters:**

`name` - The method name to set.


---

### getMethodName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodName__()</span>

Returns the current method name.

**Returns:**

The method name.


---

### setFieldName

<span style="font-family: monospace; font-size: 80%;">public void __setFieldName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current field name.

**Parameters:**

`name` - The field name to set.


---

### getFieldName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFieldName__()</span>

Returns the current field name.

**Returns:**

The field name.


---

### reportInfo

<span style="font-family: monospace; font-size: 80%;">public void __reportInfo__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)</span>

Reports an informational message through the reporter.

**Parameters:**

`message` - The message to report.


---

### reportWarning

<span style="font-family: monospace; font-size: 80%;">public void __reportWarning__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)</span>

Reports a warning message including location information.

**Parameters:**

`message` - The warning message to report.


---

### reportError

<span style="font-family: monospace; font-size: 80%;">public void __reportError__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)</span>

Reports an error message including location information.

**Parameters:**

`message` - The error message to report.


---

### location

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __location__()</span>

Returns a string describing the current location context in module, package, type, method, and field.Used to append context details to diagnostic messages.

**Returns:**

A formatted multi-line string describing the current location, or empty if no location info.


---

### getPackageDirectory

<span style="font-family: monospace; font-size: 80%;">public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getPackageDirectory__()</span>

Constructs a File object representing the directory path corresponding to the current output directory,
module, and fully qualified package name.If flattenDirectories is enabled, only directories containing documentation for types are created according to the flattenedDirectories prefix.

**Returns:**

The File object representing the directory.


---

### createFileInPackage

<span style="font-family: monospace; font-size: 80%;">public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __createFileInPackage__()</span>

Creates a Writer for writing a file corresponding to the current context (type name, package, module).Creates directories as necessary. Defaults of output directory are applied if not set.

**Returns:**

A Writer object for writing the file.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createPackageFilePath

<span style="font-family: monospace; font-size: 80%;">[File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __createPackageFilePath__()</span>




---

### createFileInModule

<span style="font-family: monospace; font-size: 80%;">public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __createFileInModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)</span>

Creates a Writer for writing a module-level file inside the module's directory.Creates directories as necessary. Defaults of output directory are applied if not set.

**Parameters:**

`fileName` - The file name to create inside the module directory.

**Returns:**

A Writer object for writing the file.

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createModuleFilePath

<span style="font-family: monospace; font-size: 80%;">[File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __createModuleFilePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)</span>



**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)


---

### createFileInternal

<span style="font-family: monospace; font-size: 80%;">private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __createFileInternal__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file)</span>

Helper method that creates a Writer for a file inside the specified directory.

**Parameters:**

`file` - The filename of the file to create.

**Returns:**

A Writer for the file.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

