Package [io.github.sandydunlop.markista.doclet](index.md)

# Class ModuleWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.ModuleWriter<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                 | Field                                             | Description |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_PACKAGE](#text_package)                     |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description)             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_MODIFIER_AND_TYPE](#text_modifier_and_type) |             |
| private [Files](../util/Files.md)                                                                                 | [fileUtils](#fileutils)                           |             |

## Constructor Summary

| Constructor    | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| ModuleWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                    | Method                                                                                         | Description                                          |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------|
| void                                                                                                 | [writeDocs](#writedocs)([Api](../model/Api.md) api)                                            | Output the documentation files for the specified API |
| private void                                                                                         | [outputModuleDoc](#outputmoduledoc)([ModuleNode](../model/ModuleNode.md) moduleNode)           |                                                      |
| private void                                                                                         | [outputConstantValues](#outputconstantvalues)([ModuleNode](../model/ModuleNode.md) moduleNode) |                                                      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatPackageLink](#formatpackagelink)([PackageMember](../model/PackageMember.md) member)     |                                                      |

## Field Details

### TEXT_PACKAGE



**See Also:**


[Constant Field Values](../constant-values.md)


### TEXT_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)


### TEXT_MODIFIER_AND_TYPE



**See Also:**


[Constant Field Values](../constant-values.md)


### fileUtils




## Method Details

### writeDocs

void writeDocs([Api](../model/Api.md) api)

Output the documentation files for the specified API

**Parameters:**

`api` - The API to output the documentation for

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputModuleDoc

private void outputModuleDoc([ModuleNode](../model/ModuleNode.md) moduleNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputConstantValues

private void outputConstantValues([ModuleNode](../model/ModuleNode.md) moduleNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### formatPackageLink

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatPackageLink([PackageMember](../model/PackageMember.md) member)



