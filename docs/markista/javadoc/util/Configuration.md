Package [io.github.sandydunlop.markista.util](index.md)

# Class Configuration
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.Configuration<br/>
<br/>

----

Utility class holding global configuration settings for the documentation generator.

This class provides static getter and setter methods for various options that control the behavior
of the documentation output, such as output directory, verbosity, and which members to include.

All configuration fields are static and global and the constructor is hidden to prevent instantiation.


## Field Summary

| Modifier and Type                                                                                                                                                                                           | Field                                             | Description                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------|
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [outputDirectory](#outputdirectory)               | The directory in which the documentation filles will be generated                                |
| private static boolean                                                                                                                                                                                      | [createExternalLinks](#createexternallinks)       | If true, links to types defined outside of the API being documented will be generated            |
| private static boolean                                                                                                                                                                                      | [documentPrivateMembers](#documentprivatemembers) | If true, private members of packages and types will be included in the generated documentation   |
| private static boolean                                                                                                                                                                                      | [flattenPackages](#flattenpackages)               | If true, empty package directories will not be created, leading to a flatter directory structure |
| private static boolean                                                                                                                                                                                      | [flattenModules](#flattenmodules)                 | If true, module directories will not be created, leading to a flatter directory structure        |
| private static boolean                                                                                                                                                                                      | [useContentTabs](#usecontenttabs)                 | If true, summary tables will be created inside Markdown content tabs.                            |
| private static boolean                                                                                                                                                                                      | [verbose](#verbose)                               | If true, logging will include status information.                                                |
| private static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [modulePathList](#modulepathlist)                 | The list of module paths passed in from the Javadoc command line                                 |
| private static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [linkExternal](#linkexternal)                     | The list of modules that have local Javadoc that can be linked to                                |

## Constructor Summary

| Constructor     | Description             |
|-----------------|-------------------------|
| Configuration() | The default constructor |

## Method Summary

| Modifier and Type                                                                                                                                                                                   | Method                                                                                                                                       | Description                                                                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| static void                                                                                                                                                                                         | [setOutputDirectory](#setoutputdirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path) | Sets the directory path where the documentation files will be generated.                          |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getOutputDirectory](#getoutputdirectory)()                                                                                                  | Returns the directory path where documentation files will be generated.                           |
| static void                                                                                                                                                                                         | [setCreateExternalLinks](#setcreateexternallinks)(boolean b)                                                                                 | Sets whether to generate links to external documentation for referenced types and modules.        |
| static boolean                                                                                                                                                                                      | [getCreateExternalLinks](#getcreateexternallinks)()                                                                                          | Returns whether the documentation generator creates links to external documentation.              |
| static void                                                                                                                                                                                         | [setDocumentPrivateMembers](#setdocumentprivatemembers)(boolean b)                                                                           | Sets whether private members (fields, methods) should be included in the generated documentation. |
| static boolean                                                                                                                                                                                      | [getDocumentPrivateMembers](#getdocumentprivatemembers)()                                                                                    | Returns whether private members are included in the documentation.                                |
| static void                                                                                                                                                                                         | [setFlattenPackages](#setflattenpackages)(boolean b)                                                                                         | Sets whether to flatten package directory structure when generating the documentation output.     |
| static boolean                                                                                                                                                                                      | [getFlattenPackages](#getflattenpackages)()                                                                                                  | Returns whether the documentation output package directory structure is flattened.                |
| static void                                                                                                                                                                                         | [setFlattenModules](#setflattenmodules)(boolean b)                                                                                           | Sets whether to flatten module directory structure when generating the documentation output.      |
| static boolean                                                                                                                                                                                      | [getFlattenModules](#getflattenmodules)()                                                                                                    | Returns whether the documentation output module directory structure is flattened.                 |
| static void                                                                                                                                                                                         | [setUseContentTabs](#setusecontenttabs)(boolean b)                                                                                           | Sets whether to use content tabs in the generated documentation.                                  |
| static boolean                                                                                                                                                                                      | [getUseContentTabs](#getusecontenttabs)()                                                                                                    | Returns whether content tabs are used in documentation.                                           |
| static void                                                                                                                                                                                         | [setVerbose](#setverbose)(boolean b)                                                                                                         | Sets whether verbose logging or output should be enabled during documentation generation.         |
| static boolean                                                                                                                                                                                      | [getVerbose](#getverbose)()                                                                                                                  | Returns whether verbose output is enabled.                                                        |
| static void                                                                                                                                                                                         | [setLinkExternal](#setlinkexternal)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleList) |                                                                                                   |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getListExternal](#getlistexternal)()                                                                                                        |                                                                                                   |
| static void                                                                                                                                                                                         | [setModulePaths](#setmodulepaths)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePaths)  |                                                                                                   |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getModulePaths](#getmodulepaths)()                                                                                                          |                                                                                                   |

## Field Details

### outputDirectory

The directory in which the documentation filles will be generated


---

### createExternalLinks

If true, links to types defined outside of the API being documented will be generated


---

### documentPrivateMembers

If true, private members of packages and types will be included in the generated documentation


---

### flattenPackages

If true, empty package directories will not be created, leading to a flatter directory structure


---

### flattenModules

If true, module directories will not be created, leading to a flatter directory structure


---

### useContentTabs

If true, summary tables will be created inside Markdown content tabs.
See mkdocs-material for more information.


---

### verbose

If true, logging will include status information.


---

### modulePathList

The list of module paths passed in from the Javadoc command line


---

### linkExternal

The list of modules that have local Javadoc that can be linked to


---


## Method Details

### setOutputDirectory

static void setOutputDirectory([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)

Sets the directory path where the documentation files will be generated.

**Parameters:**

`path` - The output directory path as a String.


---

### getOutputDirectory

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getOutputDirectory()

Returns the directory path where documentation files will be generated.

**Returns:**

The output directory path as a String.


---

### setCreateExternalLinks

static void setCreateExternalLinks(boolean b)

Sets whether to generate links to external documentation for referenced types and modules.

**Parameters:**

`b` - true to create external links, false otherwise.


---

### getCreateExternalLinks

static boolean getCreateExternalLinks()

Returns whether the documentation generator creates links to external documentation.

**Returns:**

true if external links should be created, false otherwise.


---

### setDocumentPrivateMembers

static void setDocumentPrivateMembers(boolean b)

Sets whether private members (fields, methods) should be included in the generated documentation.

**Parameters:**

`b` - true to include private members, false otherwise.


---

### getDocumentPrivateMembers

static boolean getDocumentPrivateMembers()

Returns whether private members are included in the documentation.

**Returns:**

true if private members are included, false otherwise.


---

### setFlattenPackages

static void setFlattenPackages(boolean b)

Sets whether to flatten package directory structure when generating the documentation output.

**Parameters:**

`b` - true to flatten package directories, false otherwise.


---

### getFlattenPackages

static boolean getFlattenPackages()

Returns whether the documentation output package directory structure is flattened.

**Returns:**

true if package directories are flattened, false otherwise.


---

### setFlattenModules

static void setFlattenModules(boolean b)

Sets whether to flatten module directory structure when generating the documentation output.

**Parameters:**

`b` - true to flatten module directories, false otherwise.


---

### getFlattenModules

static boolean getFlattenModules()

Returns whether the documentation output module directory structure is flattened.

**Returns:**

true if module directories are flattened, false otherwise.


---

### setUseContentTabs

static void setUseContentTabs(boolean b)

Sets whether to use content tabs in the generated documentation.

**Parameters:**

`b` - true to use content tabs, false otherwise.


---

### getUseContentTabs

static boolean getUseContentTabs()

Returns whether content tabs are used in documentation.

**Returns:**

true if content tabs are enabled, false otherwise.


---

### setVerbose

static void setVerbose(boolean b)

Sets whether verbose logging or output should be enabled during documentation generation.

**Parameters:**

`b` - true to enable verbose output, false otherwise.


---

### getVerbose

static boolean getVerbose()

Returns whether verbose output is enabled.

**Returns:**

true if verbose output is enabled, false otherwise.


---

### setLinkExternal

static void setLinkExternal([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleList)




---

### getListExternal

static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getListExternal()




---

### setModulePaths

static void setModulePaths([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePaths)




---

### getModulePaths

static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getModulePaths()




---

