Package [io.github.sandydunlop.markista.markdown](index.md)

# Class ModuleWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.ModuleWriter<br/>
<br/>

----

<span style="font-family: monospace;">public Class __ModuleWriter__</span>

A class that outputs a module's API documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                                       | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_CONSTANT_FIELD](#title_constant_field)               |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_CONSTANT_FIELD_VALUES](#title_constant_field_values) |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_DESCRIPTION](#title_description)                     |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_EXPORTS](#title_exports)                             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_IMPLEMENTATIONS](#title_implementations)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_INTERFACE](#title_interface)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_MODIFIER_AND_TYPE](#title_modifier_and_type)         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_MODULE](#title_module)                               |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_OPENS](#title_opens)                                 |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PACKAGE](#title_package)                             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PACKAGES](#title_packages)                           |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PROVIDES](#title_provides)                           |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_REQUIRES](#title_requires)                           |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_USES](#title_uses)                                   |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_VALUE](#title_value)                                 |                                                                                                                                                                                       |
| private [Context](../util/Context.md)                                                                             | [ctx](#ctx)                                                 | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                           | The Writer used to output the generated markdown content for the current document.                                                                                                    |
| private [Api](../model/Api.md)                                                                                    | [api](#api)                                                 | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |

## Constructor Summary

| Constructor    | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| ModuleWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                               |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                                 | [writeDocs](#writedocs)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                                                       | Output the documentation files for the specified API                                                                                                                                      |
| private void                                                                                                | [outputModuleDoc](#outputmoduledoc)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                      | Outputs a single module's documentation as a Markdown file.                                                                                                                               |
| private void                                                                                                | [outputModuleDirectives](#outputmoduledirectives)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) kind, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives) | Outputs the directives declared in a module's `module-info.java` file.                                                                                                                    |
| private void                                                                                                | [outputModuleProvidesDirectives](#outputmoduleprovidesdirectives)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives)                                                                                                                                                                                        | Outputs the `provides` directives declared in a module's `module-info.java` file.                                                                                                         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [multiLink](#multilink)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](../model/Reference.md)> references)                                                                                                                                                                                                                                          | Turns each member of a list of strings into a link to the documentation for the module, package, or type denoted by that list member.                                                     |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [formatDirectivePackageDoc](#formatdirectivepackagedoc)([DirectiveNode](../model/DirectiveNode.md) directive)                                                                                                                                                                                                                                                                                             | Formats the first sentence of a [DirectiveNode](../model/DirectiveNode.md)'s documentation so that it uses only one line in the markdown output and links and code are rendered properly. |
| private void                                                                                                | [outputConstantValues](#outputconstantvalues)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                            | Outputs the *Constant Field Values* page.                                                                                                                                                 |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                           |

## Field Details

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

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../util/Context.md).


---

### writer

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---

### api

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---


## Method Details

### writeDocs

public void writeDocs([Api](../model/Api.md) api)

Output the documentation files for the specified API

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleDoc

private void outputModuleDoc([ModuleNode](../model/ModuleNode.md) moduleNode)

Outputs a single module's documentation as a Markdown file.
For each module, the documentation for each [package](../model/PackageNode.md) it contains
are then written.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleDirectives

private void outputModuleDirectives([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) kind, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives)

Outputs the directives declared in a module's `module-info.java` file.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleProvidesDirectives

private void outputModuleProvidesDirectives([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives)

Outputs the `provides` directives declared in a module's `module-info.java` file.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### multiLink

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) multiLink([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](../model/Reference.md)> references)

Turns each member of a list of strings into a link to the documentation
for the module, package, or type denoted by that list member.


---

### formatDirectivePackageDoc

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatDirectivePackageDoc([DirectiveNode](../model/DirectiveNode.md) directive)

Formats the first sentence of a [DirectiveNode](../model/DirectiveNode.md)'s documentation so
that it uses only one line in the markdown output and links and
code are rendered properly.


---

### outputConstantValues

private void outputConstantValues([ModuleNode](../model/ModuleNode.md) moduleNode)

Outputs the *Constant Field Values* page.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### escape

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)




---

