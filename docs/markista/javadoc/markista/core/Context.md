Package [io.github.sandydunlop.markista.core](index.md)

# Class Context
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.core.Context<br/>
<br/>

----

<span style="font-family: monospace;">public class __Context__</span>

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

## Method Summary

| Modifier and Type                                                                                                  | Method                                                                                                                                                  | Description                                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                | [getFlattenedDirectories](#getflatteneddirectories)()                                                                                                   |                                                                                                                                                   |
| public static [Context](Context.md)                                                                                | [getInstance](#getinstance)()                                                                                                                           | Returns the singleton instance of this Context.                                                                                                   |
| public void                                                                                                        | [setApi](#setapi)([Api](../model/Api.md) api)                                                                                                           | Sets the Api model associated with this context, also initializing the flattened directories string.                                              |
| public [Api](../model/Api.md)                                                                                      | [getApi](#getapi)()                                                                                                                                     | Returns the Api model associated with this context.                                                                                               |
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
| public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                      | [getPackageDirectory](#getpackagedirectory)()                                                                                                           | Constructs a File object representing the directory path corresponding to the current output directory, module, and fully qualified package name. |
| public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                  | [createFileInPackage](#createfileinpackage)()                                                                                                           | Creates a Writer for writing a file corresponding to the current context (type name, package, module).                                            |
| public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                  | [createFileInModule](#createfileinmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)        | Creates a Writer for writing a module-level file inside the module's directory.                                                                   |

## Method Details

### getFlattenedDirectories

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getFlattenedDirectories()




---

### getInstance

public static [Context](Context.md) getInstance()

Returns the singleton instance of this Context.

**Returns:**

The Context singleton instance.


---

### setApi

public void setApi([Api](../model/Api.md) api)

Sets the Api model associated with this context, also initializing the flattened directories string.


---

### getApi

public [Api](../model/Api.md) getApi()

Returns the Api model associated with this context.

**Returns:**

The current Api model.


---

### setOutputDirectory

public void setOutputDirectory([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory)

Sets the output directory path where documentation files will be written.


---

### getOutputDirectory

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getOutputDirectory()




---

### setReporter

public void setReporter([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)

Sets the reporter used for reporting messages and diagnostics during doc generation.


---

### getReporter

public [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) getReporter()

Returns the currently set reporter instance.

**Returns:**

The Reporter.


---

### setModuleName

public void setModuleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the current module name and resets the package name.


---

### getModuleName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModuleName()

Returns the current module name.

**Returns:**

The module name.


---

### setPackageName

public void setPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the current package name and resets the type name.


---

### getPackageName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName()

Returns the current package name.

**Returns:**

The package name.


---

### setTypeName

public void setTypeName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the current type name.


---

### getTypeName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getTypeName()

Returns the current type name.

**Returns:**

The type name.


---

### setMethodName

public void setMethodName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the current method name.


---

### getMethodName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getMethodName()

Returns the current method name.

**Returns:**

The method name.


---

### setFieldName

public void setFieldName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the current field name.


---

### getFieldName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getFieldName()

Returns the current field name.

**Returns:**

The field name.


---

### reportInfo

public void reportInfo([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)

Reports an informational message through the reporter.


---

### reportWarning

public void reportWarning([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)

Reports a warning message including location information.


---

### reportError

public void reportError([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) message)

Reports an error message including location information.


---

### getPackageDirectory

public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) getPackageDirectory()

Constructs a File object representing the directory path corresponding to the current output directory,
module, and fully qualified package name.
If flattenDirectories is enabled, only directories containing documentation for types are created according to the flattenedDirectories prefix.

**Returns:**

The File object representing the directory.


---

### createFileInPackage

public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createFileInPackage()

Creates a Writer for writing a file corresponding to the current context (type name, package, module).
Creates directories as necessary. Defaults of output directory are applied if not set.

**Returns:**

A Writer object for writing the file.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createFileInModule

public [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createFileInModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)

Creates a Writer for writing a module-level file inside the module's directory.
Creates directories as necessary. Defaults of output directory are applied if not set.

**Returns:**

A Writer object for writing the file.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

