Package [io.github.sandydunlop.markista.core](index.md)

# Class Configuration
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.core.Configuration<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Configuration__</span>

Utility class holding global configuration settings for the documentation generator.

This class provides static getter and setter methods for various options that control the behavior
of the documentation output, such as output directory, verbosity, and which members to include.

All configuration fields are static and global and the constructor is hidden to prevent instantiation.


## Field Summary

| Modifier and Type                                                                                           | Field                                             | Description                                                                                      |
|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------|
| private static boolean                                                                                      | [createExternalLinks](#createexternallinks)       | If true, links to types defined outside the API being documented will be generated               |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [docTitle](#doctitle)                             | The title of the API documentation being generated                                               |
| private static boolean                                                                                      | [documentPrivateMembers](#documentprivatemembers) | If true, private members of packages and types will be included in the generated documentation   |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [extensionsOrder](#extensionsorder)               |                                                                                                  |
| private static boolean                                                                                      | [flattenModules](#flattenmodules)                 | If true, module directories will not be created, leading to a flatter directory structure        |
| private static boolean                                                                                      | [flattenPackages](#flattenpackages)               | If true, empty package directories will not be created, leading to a flatter directory structure |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [linkExternal](#linkexternal)                     | The list of modules that have local Javadoc that can be linked to                                |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [modulePathList](#modulepathlist)                 | The list of module paths passed in from the Javadoc command line                                 |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [projectPath](#projectpath)                       |                                                                                                  |
| private static boolean                                                                                      | [useContentTabs](#usecontenttabs)                 | If true, summary tables will be created inside Markdown content tabs.                            |
| private static boolean                                                                                      | [verbose](#verbose)                               | If true, logging will include status information.                                                |



## Constructor Summary

| Constructor     | Description             |
|-----------------|-------------------------|
| Configuration() | The default constructor |



## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                        | Description                                                                                       |
|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| public static void                                                                                         | [setDocTitle](#setdoctitle)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title)               | Sets the title used in the generated documentation                                                |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getDocTitle](#getdoctitle)()                                                                                                                 | Returns the title used in the generated documentation                                             |
| public static void                                                                                         | [setCreateExternalLinks](#setcreateexternallinks)(boolean b)                                                                                  | Sets whether to generate links to external documentation for referenced types and modules.        |
| public static boolean                                                                                      | [getCreateExternalLinks](#getcreateexternallinks)()                                                                                           | Returns whether the documentation generator creates links to external documentation.              |
| public static void                                                                                         | [setDocumentPrivateMembers](#setdocumentprivatemembers)(boolean b)                                                                            | Sets whether private members (fields, methods) should be included in the generated documentation. |
| public static boolean                                                                                      | [getDocumentPrivateMembers](#getdocumentprivatemembers)()                                                                                     | Returns whether private members are included in the documentation.                                |
| public static void                                                                                         | [setFlattenPackages](#setflattenpackages)(boolean b)                                                                                          | Sets whether to flatten package directory structure when generating the documentation output.     |
| public static boolean                                                                                      | [getFlattenPackages](#getflattenpackages)()                                                                                                   | Returns whether the documentation output package directory structure is flattened.                |
| public static void                                                                                         | [setFlattenModules](#setflattenmodules)(boolean b)                                                                                            | Sets whether to flatten module directory structure when generating the documentation output.      |
| public static boolean                                                                                      | [getFlattenModules](#getflattenmodules)()                                                                                                     | Returns whether the documentation output module directory structure is flattened.                 |
| public static void                                                                                         | [setUseContentTabs](#setusecontenttabs)(boolean b)                                                                                            | Sets whether to use content tabs in the generated documentation.                                  |
| public static boolean                                                                                      | [getUseContentTabs](#getusecontenttabs)()                                                                                                     | Returns whether content tabs are used in documentation.                                           |
| public static void                                                                                         | [setVerbose](#setverbose)(boolean b)                                                                                                          | Sets whether verbose logging or output should be enabled during documentation generation.         |
| public static boolean                                                                                      | [getVerbose](#getverbose)()                                                                                                                   | Returns whether verbose output is enabled.                                                        |
| public static void                                                                                         | [setLinkExternal](#setlinkexternal)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleList)  | Sets the list of sibling modules that can be linked to                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLinkExternal](#getlinkexternal)()                                                                                                         | Gets the list of sibling modules that can be linked to                                            |
| public static void                                                                                         | [setModulePaths](#setmodulepaths)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePaths)   | Sets the directory containing modules.                                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getModulePaths](#getmodulepaths)()                                                                                                           | Gets the list of modules                                                                          |
| public static void                                                                                         | [setProjectPath](#setprojectpath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)          |                                                                                                   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getProjectPath](#getprojectpath)()                                                                                                           |                                                                                                   |
| public static void                                                                                         | [setExtensionsOrder](#setextensionsorder)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) order) |                                                                                                   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getExtensionsOrder](#getextensionsorder)()                                                                                                   |                                                                                                   |



## Field Details

### createExternalLinks

<span style="font-family: monospace; font-size: 80%;">private static boolean __createExternalLinks__</span>

If true, links to types defined outside the API being documented will be generated


---

### docTitle

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __docTitle__</span>

The title of the API documentation being generated


---

### documentPrivateMembers

<span style="font-family: monospace; font-size: 80%;">private static boolean __documentPrivateMembers__</span>

If true, private members of packages and types will be included in the generated documentation


---

### extensionsOrder

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __extensionsOrder__</span>




---

### flattenModules

<span style="font-family: monospace; font-size: 80%;">private static boolean __flattenModules__</span>

If true, module directories will not be created, leading to a flatter directory structure


---

### flattenPackages

<span style="font-family: monospace; font-size: 80%;">private static boolean __flattenPackages__</span>

If true, empty package directories will not be created, leading to a flatter directory structure


---

### linkExternal

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __linkExternal__</span>

The list of modules that have local Javadoc that can be linked to


---

### modulePathList

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __modulePathList__</span>

The list of module paths passed in from the Javadoc command line


---

### projectPath

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __projectPath__</span>




---

### useContentTabs

<span style="font-family: monospace; font-size: 80%;">private static boolean __useContentTabs__</span>

If true, summary tables will be created inside Markdown content tabs.
See [mkdocs-material](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/) for more information.


---

### verbose

<span style="font-family: monospace; font-size: 80%;">private static boolean __verbose__</span>

If true, logging will include status information.


---


## Method Details

### setDocTitle

<span style="font-family: monospace; font-size: 80%;">public static void __setDocTitle__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title)</span>

Sets the title used in the generated documentation


---

### getDocTitle

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTitle__()</span>

Returns the title used in the generated documentation

**Returns:**

The title to be used


---

### setCreateExternalLinks

<span style="font-family: monospace; font-size: 80%;">public static void __setCreateExternalLinks__(boolean b)</span>

Sets whether to generate links to external documentation for referenced types and modules.


---

### getCreateExternalLinks

<span style="font-family: monospace; font-size: 80%;">public static boolean __getCreateExternalLinks__()</span>

Returns whether the documentation generator creates links to external documentation.

**Returns:**

true if external links should be created, false otherwise.


---

### setDocumentPrivateMembers

<span style="font-family: monospace; font-size: 80%;">public static void __setDocumentPrivateMembers__(boolean b)</span>

Sets whether private members (fields, methods) should be included in the generated documentation.


---

### getDocumentPrivateMembers

<span style="font-family: monospace; font-size: 80%;">public static boolean __getDocumentPrivateMembers__()</span>

Returns whether private members are included in the documentation.

**Returns:**

true if private members are included, false otherwise.


---

### setFlattenPackages

<span style="font-family: monospace; font-size: 80%;">public static void __setFlattenPackages__(boolean b)</span>

Sets whether to flatten package directory structure when generating the documentation output.


---

### getFlattenPackages

<span style="font-family: monospace; font-size: 80%;">public static boolean __getFlattenPackages__()</span>

Returns whether the documentation output package directory structure is flattened.

**Returns:**

true if package directories are flattened, false otherwise.


---

### setFlattenModules

<span style="font-family: monospace; font-size: 80%;">public static void __setFlattenModules__(boolean b)</span>

Sets whether to flatten module directory structure when generating the documentation output.


---

### getFlattenModules

<span style="font-family: monospace; font-size: 80%;">public static boolean __getFlattenModules__()</span>

Returns whether the documentation output module directory structure is flattened.

**Returns:**

true if module directories are flattened, false otherwise.


---

### setUseContentTabs

<span style="font-family: monospace; font-size: 80%;">public static void __setUseContentTabs__(boolean b)</span>

Sets whether to use content tabs in the generated documentation.


---

### getUseContentTabs

<span style="font-family: monospace; font-size: 80%;">public static boolean __getUseContentTabs__()</span>

Returns whether content tabs are used in documentation.

**Returns:**

true if content tabs are enabled, false otherwise.


---

### setVerbose

<span style="font-family: monospace; font-size: 80%;">public static void __setVerbose__(boolean b)</span>

Sets whether verbose logging or output should be enabled during documentation generation.


---

### getVerbose

<span style="font-family: monospace; font-size: 80%;">public static boolean __getVerbose__()</span>

Returns whether verbose output is enabled.

**Returns:**

true if verbose output is enabled, false otherwise.


---

### setLinkExternal

<span style="font-family: monospace; font-size: 80%;">public static void __setLinkExternal__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleList)</span>

Sets the list of sibling modules that can be linked to


---

### getLinkExternal

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLinkExternal__()</span>

Gets the list of sibling modules that can be linked to

**Returns:**

a list of sibling modules that can be linked to


---

### setModulePaths

<span style="font-family: monospace; font-size: 80%;">public static void __setModulePaths__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePaths)</span>

Sets the directory containing modules.


---

### getModulePaths

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModulePaths__()</span>

Gets the list of modules

**Returns:**

A list of the module paths


---

### setProjectPath

<span style="font-family: monospace; font-size: 80%;">public static void __setProjectPath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>




---

### getProjectPath

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getProjectPath__()</span>




---

### setExtensionsOrder

<span style="font-family: monospace; font-size: 80%;">public static void __setExtensionsOrder__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) order)</span>




---

### getExtensionsOrder

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getExtensionsOrder__()</span>




---

