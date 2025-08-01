Package [io.github.sandydunlop.markista.doclet](index.md)

# Class ModuleWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.ModuleWriter<br/>
<br/>

----

A class that outputs a module's API documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                                       | Description |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_API](#title_api)                                     |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_CONSTANT_FIELD](#title_constant_field)               |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_CONSTANT_FIELD_VALUES](#title_constant_field_values) |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_DESCRIPTION](#title_description)                     |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_EXPORTS](#title_exports)                             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_IMPLEMENTATIONS](#title_implementations)             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_INTERFACE](#title_interface)                         |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_MODIFIER_AND_TYPE](#title_modifier_and_type)         |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_MODULE](#title_module)                               |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_OPENS](#title_opens)                                 |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PACKAGE](#title_package)                             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PACKAGES](#title_packages)                           |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PROVIDES](#title_provides)                           |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_REQUIRES](#title_requires)                           |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_USES](#title_uses)                                   |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_VALUE](#title_value)                                 |             |
| private [FileUtils](../util/FileUtils.md)                                                                         | [fileUtils](#fileutils)                                     |             |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                           |             |
| private [Api](../model/Api.md)                                                                                    | [api](#api)                                                 |             |

## Constructor Summary

| Constructor    | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| ModuleWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| void                                                                                                 | [writeDocs](#writedocs)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                                                             | Output the documentation files for the specified API                                                                                                                                      |
| private void                                                                                         | [outputModuleDoc](#outputmoduledoc)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                            | Outputs a single module's documentation as a Markdown file.                                                                                                                               |
| private void                                                                                         | [outputModuleDirectives](#outputmoduledirectives)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) kind, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](../model/DirectiveNode.md)&gt; directives) | Outputs the directives declared in a module's `module-info.java` file.                                                                                                                    |
| private void                                                                                         | [outputModuleProvidesDirectives](#outputmoduleprovidesdirectives)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](../model/DirectiveNode.md)&gt; directives)                                                                                                                                                                                        | Outputs the `provides` directives declared in a module's `module-info.java` file.                                                                                                         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [multiLink](#multilink)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; names)                                                                                                                                                                                     | Turns each member of a list of strings into a link to the documentation for the module, package, or type denoted by that list member.                                                     |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatDirectivePackageDoc](#formatdirectivepackagedoc)([DirectiveNode](../model/DirectiveNode.md) directive)                                                                                                                                                                                                                                                                                                   | Formats the first sentence of a [DirectiveNode](../model/DirectiveNode.md)'s documentation so that it uses only one line in the markdown output and links and code are rendered properly. |
| private void                                                                                         | [outputConstantValues](#outputconstantvalues)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                  | Output the *Constant Field Values* page.                                                                                                                                                  |

## Field Details

### TITLE_API



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_CONSTANT_FIELD



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_CONSTANT_FIELD_VALUES



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_EXPORTS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_IMPLEMENTATIONS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_INTERFACE



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_MODIFIER_AND_TYPE



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_MODULE



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_OPENS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_PACKAGE



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_PACKAGES



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_PROVIDES



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_REQUIRES



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_USES



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_VALUE



**See Also:**


[Constant Field Values](../constant-values.md)



---

### fileUtils




---

### writer




---

### api




---


## Method Details

### writeDocs

void writeDocs([Api](../model/Api.md) api)

Output the documentation files for the specified API

**Parameters:**

`api` - The API to output the documentation for

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleDoc

private void outputModuleDoc([ModuleNode](../model/ModuleNode.md) moduleNode)

Outputs a single module's documentation as a Markdown file.
For each module, the documentation for each [PackageNode](../model/PackageNode.md) it contains
are then written.

**Parameters:**

`moduleNode` - The module to write documentation for

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleDirectives

private void outputModuleDirectives([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) kind, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](../model/DirectiveNode.md)&gt; directives)

Outputs the directives declared in a module's `module-info.java` file.

**Parameters:**

`title` - The title to be used in this section of the markdown page.

`kind` - The kind of directive being described

`directives` - The list of directives belonging to the module.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleProvidesDirectives

private void outputModuleProvidesDirectives([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[DirectiveNode](../model/DirectiveNode.md)&gt; directives)

Outputs the `provides` directives declared in a module's `module-info.java` file.

**Parameters:**

`directives` - The list of `provides` directives belonging to the module.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### multiLink

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) multiLink([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; names)

Turns each member of a list of strings into a link to the documentation
for the module, package, or type denoted by that list member.

**Parameters:**

`names` - A list of strings that represent modules, packages, or types.


---

### formatDirectivePackageDoc

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatDirectivePackageDoc([DirectiveNode](../model/DirectiveNode.md) directive)

Formats the first sentence of a [DirectiveNode](../model/DirectiveNode.md)'s documentation so
that it uses only one line in the markdown output and links and
code are rendered properly.


---

### outputConstantValues

private void outputConstantValues([ModuleNode](../model/ModuleNode.md) moduleNode)

Output the *Constant Field Values* page.

**Parameters:**

`moduleNode` - The API tree node representing a module.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

