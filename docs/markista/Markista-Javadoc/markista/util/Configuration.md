Package [io.github.sandydunlop.markista.util](index.md)

# Class Configuration
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.Configuration<br/>
<br/>

----

<span style="font-family: monospace;">public Class __Configuration__</span>

Utility class holding global configuration settings for the documentation generator.

This class provides static getter and setter methods for various options that control the behavior
of the documentation output, such as output directory, verbosity, and which members to include.

All configuration fields are static and global and the constructor is hidden to prevent instantiation.


## Field Summary

| Modifier and Type                                                                                                                                                                                           | Field                                             | Description                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------|
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [docTitle](#doctitle)                             | The title of the API documentation being generated                                               |
| private static boolean                                                                                                                                                                                      | [createExternalLinks](#createexternallinks)       | If true, links to types defined outside the API being documented will be generated               |
| private static boolean                                                                                                                                                                                      | [documentPrivateMembers](#documentprivatemembers) | If true, private members of packages and types will be included in the generated documentation   |
| private static boolean                                                                                                                                                                                      | [flattenPackages](#flattenpackages)               | If true, empty package directories will not be created, leading to a flatter directory structure |
| private static boolean                                                                                                                                                                                      | [flattenModules](#flattenmodules)                 | If true, module directories will not be created, leading to a flatter directory structure        |
| private static boolean                                                                                                                                                                                      | [useContentTabs](#usecontenttabs)                 | If true, summary tables will be created inside Markdown content tabs.                            |
| private static boolean                                                                                                                                                                                      | [verbose](#verbose)                               | If true, logging will include status information.                                                |
| private static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [modulePathList](#modulepathlist)                 | The list of module paths passed in from the Javadoc command line                                 |
| private static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [linkExternal](#linkexternal)                     | The list of modules that have local Javadoc that can be linked to                                |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [projectPath](#projectpath)                       |                                                                                                  |

## Constructor Summary

| Constructor     | Description             |
|-----------------|-------------------------|
| Configuration() | The default constructor |

## Method Summary

| Modifier and Type                                                                                                                                                                                          | Method                                                                                                                                       | Description                                                                                       |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| public static void                                                                                                                                                                                         | [setDocTitle](#setdoctitle)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title)              | Sets the title used in the generated documentation                                                |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getDocTitle](#getdoctitle)()                                                                                                                | Returns the title used in the generated documentation                                             |
| public static void                                                                                                                                                                                         | [setCreateExternalLinks](#setcreateexternallinks)(boolean b)                                                                                 | Sets whether to generate links to external documentation for referenced types and modules.        |
| public static boolean                                                                                                                                                                                      | [getCreateExternalLinks](#getcreateexternallinks)()                                                                                          | Returns whether the documentation generator creates links to external documentation.              |
| public static void                                                                                                                                                                                         | [setDocumentPrivateMembers](#setdocumentprivatemembers)(boolean b)                                                                           | Sets whether private members (fields, methods) should be included in the generated documentation. |
| public static boolean                                                                                                                                                                                      | [getDocumentPrivateMembers](#getdocumentprivatemembers)()                                                                                    | Returns whether private members are included in the documentation.                                |
| public static void                                                                                                                                                                                         | [setFlattenPackages](#setflattenpackages)(boolean b)                                                                                         | Sets whether to flatten package directory structure when generating the documentation output.     |
| public static boolean                                                                                                                                                                                      | [getFlattenPackages](#getflattenpackages)()                                                                                                  | Returns whether the documentation output package directory structure is flattened.                |
| public static void                                                                                                                                                                                         | [setFlattenModules](#setflattenmodules)(boolean b)                                                                                           | Sets whether to flatten module directory structure when generating the documentation output.      |
| public static boolean                                                                                                                                                                                      | [getFlattenModules](#getflattenmodules)()                                                                                                    | Returns whether the documentation output module directory structure is flattened.                 |
| public static void                                                                                                                                                                                         | [setUseContentTabs](#setusecontenttabs)(boolean b)                                                                                           | Sets whether to use content tabs in the generated documentation.                                  |
| public static boolean                                                                                                                                                                                      | [getUseContentTabs](#getusecontenttabs)()                                                                                                    | Returns whether content tabs are used in documentation.                                           |
| public static void                                                                                                                                                                                         | [setVerbose](#setverbose)(boolean b)                                                                                                         | Sets whether verbose logging or output should be enabled during documentation generation.         |
| public static boolean                                                                                                                                                                                      | [getVerbose](#getverbose)()                                                                                                                  | Returns whether verbose output is enabled.                                                        |
| public static void                                                                                                                                                                                         | [setLinkExternal](#setlinkexternal)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleList) | Sets the list of sibling modules that can be linked to                                            |
| public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getListExternal](#getlistexternal)()                                                                                                        | Gets the list of sibling modules that can be linked to                                            |
| public static void                                                                                                                                                                                         | [setModulePaths](#setmodulepaths)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePaths)  | Sets the directory containing modules.                                                            |
| public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getModulePaths](#getmodulepaths)()                                                                                                          | Gets the list of modules                                                                          |
| public static void                                                                                                                                                                                         | [setProjectPath](#setprojectpath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)         |                                                                                                   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getProjectPath](#getprojectpath)()                                                                                                          |                                                                                                   |

## Field Details

### docTitle

The title of the API documentation being generated


---

### createExternalLinks

If true, links to types defined outside the API being documented will be generated


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

### projectPath




---


## Method Details

### setDocTitle

public static void setDocTitle([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title)

Sets the title used in the generated documentation


---

### getDocTitle

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTitle()

Returns the title used in the generated documentation

**Returns:**

The title to be used


---

### setCreateExternalLinks

public static void setCreateExternalLinks(boolean b)

Sets whether to generate links to external documentation for referenced types and modules.


---

### getCreateExternalLinks

public static boolean getCreateExternalLinks()

Returns whether the documentation generator creates links to external documentation.

**Returns:**

true if external links should be created, false otherwise.


---

### setDocumentPrivateMembers

public static void setDocumentPrivateMembers(boolean b)

Sets whether private members (fields, methods) should be included in the generated documentation.


---

### getDocumentPrivateMembers

public static boolean getDocumentPrivateMembers()

Returns whether private members are included in the documentation.

**Returns:**

true if private members are included, false otherwise.


---

### setFlattenPackages

public static void setFlattenPackages(boolean b)

Sets whether to flatten package directory structure when generating the documentation output.


---

### getFlattenPackages

public static boolean getFlattenPackages()

Returns whether the documentation output package directory structure is flattened.

**Returns:**

true if package directories are flattened, false otherwise.


---

### setFlattenModules

public static void setFlattenModules(boolean b)

Sets whether to flatten module directory structure when generating the documentation output.


---

### getFlattenModules

public static boolean getFlattenModules()

Returns whether the documentation output module directory structure is flattened.

**Returns:**

true if module directories are flattened, false otherwise.


---

### setUseContentTabs

public static void setUseContentTabs(boolean b)

Sets whether to use content tabs in the generated documentation.


---

### getUseContentTabs

public static boolean getUseContentTabs()

Returns whether content tabs are used in documentation.

**Returns:**

true if content tabs are enabled, false otherwise.


---

### setVerbose

public static void setVerbose(boolean b)

Sets whether verbose logging or output should be enabled during documentation generation.


---

### getVerbose

public static boolean getVerbose()

Returns whether verbose output is enabled.

**Returns:**

true if verbose output is enabled, false otherwise.


---

### setLinkExternal

public static void setLinkExternal([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleList)

Sets the list of sibling modules that can be linked to


---

### getListExternal

public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getListExternal()

Gets the list of sibling modules that can be linked to

**Returns:**

a list of sibling modules that can be linked to


---

### setModulePaths

public static void setModulePaths([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePaths)

Sets the directory containing modules.


---

### getModulePaths

public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getModulePaths()

Gets the list of modules

**Returns:**

A list of the module paths


---

### setProjectPath

public static void setProjectPath([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)




---

### getProjectPath

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getProjectPath()




---

