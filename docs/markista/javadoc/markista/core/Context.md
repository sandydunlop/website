Package [io.github.sandydunlop.markista.core](index.md)

# Class Context
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.core.Context<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Context__</span>

Singleton class that maintains the current context during documentation generation.

This class tracks the current API model, output directory, current module, package, type, method, and field names,
as well as the reporter used for reporting messages such as INFO, WARNING, and ERROR.

It provides utilities to create directories and files for output, report errors or warnings with location information,
and manage the structure of output paths in relation to package and module names.

The Context instance should be obtained via getInstance(), and its fields configured as the documentation generation progresses.
This class is not thread-safe.


## Nested Class Summary

| Modifier and Type | Class                                               | Description |
|-------------------|-----------------------------------------------------|-------------|
| public            | [Context.NameSimplifier](Context.NameSimplifier.md) |             |



## Field Summary

| Modifier and Type                                                                                                   | Field                                                 | Description                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [DEFAULT_OUTPUT_DIRECTORY](#default_output_directory) | The default output directory                                                                                                                               |
| private [Api](../model/Api.md)                                                                                      | [api](#api)                                           | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [fieldName](#fieldname)                               | The name of the field currently being documented                                                                                                           |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [flattenedDirectories](#flatteneddirectories)         | The base section of the directory structure that contains no  documentation and can be skipped when creating directories.                                  |
| private static [Context](Context.md)                                                                                | [instance](#instance)                                 | The instance of this class that is returned to callers of getInstance()                                                                                    |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [methodName](#methodname)                             | The name of the method currently being documented                                                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [moduleName](#modulename)                             | The name of the module currently being documented                                                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [outputDirectory](#outputdirectory)                   | The directory the documentation is being generated in                                                                                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [packageName](#packagename)                           | The name of the package currently being documented                                                                                                         |
| private [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) | [reporter](#reporter)                                 | The  used for logging messages                                                                                                                             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [typeName](#typename)                                 | The name of the type currently being documented                                                                                                            |
| private [Context.WriterFactory](Context.WriterFactory.md)                                                           | [writerFactory](#writerfactory)                       |                                                                                                                                                            |



## Constructor Summary

| Constructor | Description             |
|-------------|-------------------------|
| Context()   | The default constructor |



## Method Summary

| Modifier and Type                                                                                                  | Method                                                                                                                                                  | Description                                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                  | [createFileInModule](#createfileinmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)        | Creates a Writer for writing a module-level file inside the module's directory.                                                                   |
| public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                  | [createFileInPackage](#createfileinpackage)()                                                                                                           | Creates a Writer for writing a file corresponding to the current context (type name, package, module).                                            |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                 | [createFileInternal](#createfileinternal)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file)                  | Helper method that creates a Writer for a file inside the specified directory.                                                                    |
| [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                             | [createModuleFilePath](#createmodulefilepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)    |                                                                                                                                                   |
| [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                             | [createPackageFilePath](#createpackagefilepath)()                                                                                                       |                                                                                                                                                   |
| public [Api](../model/Api.md)                                                                                      | [getApi](#getapi)()                                                                                                                                     | Returns the Api model associated with this context.                                                                                               |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getFieldName](#getfieldname)()                                                                                                                         | Returns the current field name.                                                                                                                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getFlattenedDirectories](#getflatteneddirectories)()                                                                                                   |                                                                                                                                                   |
| public static [Context](Context.md)                                                                                | [getInstance](#getinstance)()                                                                                                                           | Returns the singleton instance of this Context.                                                                                                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getMethodName](#getmethodname)()                                                                                                                       | Returns the current method name.                                                                                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getModuleName](#getmodulename)()                                                                                                                       | Returns the current module name.                                                                                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getOutputDirectory](#getoutputdirectory)()                                                                                                             |                                                                                                                                                   |
| public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                      | [getPackageDirectory](#getpackagedirectory)()                                                                                                           | Constructs a File object representing the directory path corresponding to the current output directory, module, and fully qualified package name. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getPackageName](#getpackagename)()                                                                                                                     | Returns the current package name.                                                                                                                 |
| public [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) | [getReporter](#getreporter)()                                                                                                                           | Returns the currently set reporter instance.                                                                                                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getTypeName](#gettypename)()                                                                                                                           | Returns the current type name.                                                                                                                    |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)               | [location](#location)()                                                                                                                                 | Returns a string describing the current location context in module, package, type, method, and field.                                             |
| public void                                                                                                        | [reportError](#reporterror)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)                       | Reports an error message including location information.                                                                                          |
| public void                                                                                                        | [reportInfo](#reportinfo)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)                         | Reports an informational message through the reporter.                                                                                            |
| public void                                                                                                        | [reportWarning](#reportwarning)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)                   | Reports a warning message including location information.                                                                                         |
| public static void                                                                                                 | [reset](#reset)()                                                                                                                                       |                                                                                                                                                   |
| public void                                                                                                        | [setApi](#setapi)([Api](../model/Api.md) api)                                                                                                           | Sets the Api model associated with this context, also initializing the flattened directories string.                                              |
| public void                                                                                                        | [setFieldName](#setfieldname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                        | Sets the current field name.                                                                                                                      |
| public void                                                                                                        | [setMethodName](#setmethodname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                      | Sets the current method name.                                                                                                                     |
| public void                                                                                                        | [setModuleName](#setmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                      | Sets the current module name and resets the package name.                                                                                         |
| public void                                                                                                        | [setOutputDirectory](#setoutputdirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory) | Sets the output directory path where documentation files will be written.                                                                         |
| public void                                                                                                        | [setPackageName](#setpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                    | Sets the current package name and resets the type name.                                                                                           |
| public void                                                                                                        | [setReporter](#setreporter)([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)       | Sets the reporter used for reporting messages and diagnostics during doc generation.                                                              |
| public void                                                                                                        | [setTypeName](#settypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                          | Sets the current type name.                                                                                                                       |
| public void                                                                                                        | [setWriterFactory](#setwriterfactory)([Context.WriterFactory](Context.WriterFactory.md) wf)                                                             |                                                                                                                                                   |



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

The  used for logging messages


---

### typeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeName__</span>

The name of the type currently being documented


---

### writerFactory

<span style="font-family: monospace; font-size: 80%;">private [Context.WriterFactory](Context.WriterFactory.md) __writerFactory__</span>




---


## Method Details

### createFileInModule

<span style="font-family: monospace; font-size: 80%;">public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __createFileInModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)</span>

Creates a Writer for writing a module-level file inside the module's directory.
Creates directories as necessary. Defaults of output directory are applied if not set.

**Returns:**

A Writer object for writing the file.

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createFileInPackage

<span style="font-family: monospace; font-size: 80%;">public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __createFileInPackage__()</span>

Creates a Writer for writing a file corresponding to the current context (type name, package, module).
Creates directories as necessary. Defaults of output directory are applied if not set.

**Returns:**

A Writer object for writing the file.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createFileInternal

<span style="font-family: monospace; font-size: 80%;">private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __createFileInternal__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file)</span>

Helper method that creates a Writer for a file inside the specified directory.

**Returns:**

A Writer for the file.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createModuleFilePath

<span style="font-family: monospace; font-size: 80%;">[File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __createModuleFilePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)</span>



**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)


---

### createPackageFilePath

<span style="font-family: monospace; font-size: 80%;">[File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __createPackageFilePath__()</span>




---

### getApi

<span style="font-family: monospace; font-size: 80%;">public [Api](../model/Api.md) __getApi__()</span>

Returns the Api model associated with this context.

**Returns:**

The current Api model.


---

### getFieldName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFieldName__()</span>

Returns the current field name.

**Returns:**

The field name.


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

### getMethodName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getMethodName__()</span>

Returns the current method name.

**Returns:**

The method name.


---

### getModuleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleName__()</span>

Returns the current module name.

**Returns:**

The module name.


---

### getOutputDirectory

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOutputDirectory__()</span>




---

### getPackageDirectory

<span style="font-family: monospace; font-size: 80%;">public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getPackageDirectory__()</span>

Constructs a File object representing the directory path corresponding to the current output directory,
module, and fully qualified package name.
If flattenDirectories is enabled, only directories containing documentation for types are created according to the flattenedDirectories prefix.

**Returns:**

The File object representing the directory.


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__()</span>

Returns the current package name.

**Returns:**

The package name.


---

### getReporter

<span style="font-family: monospace; font-size: 80%;">public [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) __getReporter__()</span>

Returns the currently set reporter instance.

**Returns:**

The Reporter.


---

### getTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeName__()</span>

Returns the current type name.

**Returns:**

The type name.


---

### location

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __location__()</span>

Returns a string describing the current location context in module, package, type, method, and field.
Used to append context details to diagnostic messages.

**Returns:**

A formatted multi-line string describing the current location, or empty if no location info.


---

### reportError

<span style="font-family: monospace; font-size: 80%;">public void __reportError__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)</span>

Reports an error message including location information.


---

### reportInfo

<span style="font-family: monospace; font-size: 80%;">public void __reportInfo__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)</span>

Reports an informational message through the reporter.


---

### reportWarning

<span style="font-family: monospace; font-size: 80%;">public void __reportWarning__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)</span>

Reports a warning message including location information.


---

### reset

<span style="font-family: monospace; font-size: 80%;">public static void __reset__()</span>




---

### setApi

<span style="font-family: monospace; font-size: 80%;">public void __setApi__([Api](../model/Api.md) api)</span>

Sets the Api model associated with this context, also initializing the flattened directories string.


---

### setFieldName

<span style="font-family: monospace; font-size: 80%;">public void __setFieldName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current field name.


---

### setMethodName

<span style="font-family: monospace; font-size: 80%;">public void __setMethodName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current method name.


---

### setModuleName

<span style="font-family: monospace; font-size: 80%;">public void __setModuleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current module name and resets the package name.


---

### setOutputDirectory

<span style="font-family: monospace; font-size: 80%;">public void __setOutputDirectory__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory)</span>

Sets the output directory path where documentation files will be written.


---

### setPackageName

<span style="font-family: monospace; font-size: 80%;">public void __setPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current package name and resets the type name.


---

### setReporter

<span style="font-family: monospace; font-size: 80%;">public void __setReporter__([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)</span>

Sets the reporter used for reporting messages and diagnostics during doc generation.


---

### setTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setTypeName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the current type name.


---

### setWriterFactory

<span style="font-family: monospace; font-size: 80%;">public void __setWriterFactory__([Context.WriterFactory](Context.WriterFactory.md) wf)</span>




---

