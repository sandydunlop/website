Package [io.github.sandydunlop.markista.util](index.md)

# Class Markdown
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.Markdown<br/>
<br/>

----


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Markdown()  |             |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                                                                                                                       | Description                                                                                                       |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [fullSignature](#fullsignature)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                 |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatParams](#formatparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)                                                                     |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatReference](#formatreference)([Reference](../model/Reference.md) ref)                                                                                                                                                                  |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedText](#formattaggedtext)([Text](../model/Text.md) text)                                                                                                                                                                         |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedCode](#formattaggedcode)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) code)                                                                                   |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedLink](#formattaggedlink)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)                                                                                   |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedLinkPlain](#formattaggedlinkplain)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)                                                                         |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier)                                                                                                           |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, boolean simplify)                                                                                         | Create a markdown link, automatically deciding what kind of link to make                                          |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean simplifiy)                                                                                           | Changes qualified generic type names to unqualified generic type names and adds links to their API documentation. |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)                                                                                                      |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchor](#mdanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                                   |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchorLink](#mdanchorlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                           |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                                                                                                      |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName) |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdFolderLink](#mdfolderlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                                                                                                          |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdFolderLink](#mdfolderlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)     |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                          |                                                                                                                   |

## Method Details

### fullSignature

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature([MethodNode](../model/MethodNode.md) method)



### formatParams

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)



### formatReference

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatReference([Reference](../model/Reference.md) ref)



### formatTaggedText

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedText([Text](../model/Text.md) text)



### formatTaggedCode

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedCode([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) code)



### formatTaggedLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedLink([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)



### formatTaggedLinkPlain

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedLinkPlain([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)



### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier)



### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, boolean simplify)

Create a markdown link, automatically deciding what kind of link to make

**Parameters:**

`identifier` - a package, type, or method identifier

`simplify` - if true, the fully simplified version of the identifier is shown

**Returns:**

markdown text for a link to a document for the specified identifier or an anchor link

### linkGenerics

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean simplifiy)

Changes qualified generic type names to unqualified generic type names and adds links to their API documentation.

**Parameters:**

`str` - A string containing a qualified generic name.

**Returns:**

A string with the qualified names changed to unqualified names and links to types added

### splitAndLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)



### mdAnchor

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchor([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)



### mdAnchorLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchorLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)



### mdDocumentLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)



### mdDocumentLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)



### mdFolderLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdFolderLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)



### mdFolderLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdFolderLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)



### escape

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)



