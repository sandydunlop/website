Package [io.github.sandydunlop.markista.markdown](index.md)

# Class MarkdownUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.MarkdownUtils<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __MarkdownUtils__</span>

A utility class for producing Markdown formatted text and resolving
Markdown links to point to the correct file, directory, or web page.


## Field Summary

| Modifier and Type                                                                                                 | Field                                     | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [FORMAT_SIMPLE_LINK](#format_simple_link) |                                                                                                                                                                                       |
| private static [Context](../core/Context.md)                                                                      | [ctx](#ctx)                               | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| MarkdownUtils() |             |



## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                                                       | Description                                                                                                          |
|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| private static boolean                                                                                     | [canBeSimplified](#canbesimplified)([Link](../model/Link.md) link)                                                                                                                           |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                          | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatLink](#formatlink)([Text.Segment](../model/Text.Segment.md) segment, boolean qualifyType, boolean qualifyMember)                                                                      | Formats links contained in a text segment as markdown.                                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatParams](#formatparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)                           | Formats a list of `ParamNode` objects as markdown, identifying and linking type names.                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatText](#formattext)([Text](../model/Text.md) text)                                                                                                                                     | Formats text contained in a `Text` object as markdown.                                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatText](#formattext)([Text](../model/Text.md) text, boolean qualifyType, boolean qualifyMember)                                                                                         |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [fullSignature](#fullsignature)([MethodNode](../model/MethodNode.md) method)                                                                                                                 | Formats the signature of a method as markdown.                                                                       |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [inOneLine](#inoneline)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                    | Removes new line characters from a string, replacing them with spaces                                                |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [link](#link)([Link](../model/Link.md) reference, boolean useQualifiedName)                                                                                                                  | Create a markdown formatted link                                                                                     |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [link](#link)([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label, boolean qualifyType, boolean qualifyMember) |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchor](#mdanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                   | Converts a string to the format required for use as a Markdown anchor.                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchorLink](#mdanchorlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                           | Create a markdown formatted link to an anchor within the same markdown page.                                         |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                                                      | Creates a Markdown link to another Markdown document                                                                 |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdRefLink](#mdreflink)([Link](../model/Link.md) link)                                                                                                                                       | Creates a markdown formatted link from a [Link](../model/Link.md) object.                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdRefLinkMethod](#mdreflinkmethod)([Link](../model/Link.md) link)                                                                                                                           | Creates a markdown formatted link from a [Link](../model/Link.md) object.                                            |
| public static void                                                                                         | [setContext](#setcontext)([Context](../core/Context.md) c)                                                                                                                                   |                                                                                                                      |



## Field Details

### FORMAT_SIMPLE_LINK

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __FORMAT_SIMPLE_LINK__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

<span style="font-family: monospace; font-size: 80%;">private static [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---


## Method Details

### canBeSimplified

<span style="font-family: monospace; font-size: 80%;">private static boolean __canBeSimplified__([Link](../model/Link.md) link)</span>




---

### escape

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### formatLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatLink__([Text.Segment](../model/Text.Segment.md) segment, boolean qualifyType, boolean qualifyMember)</span>

Formats links contained in a text segment as markdown.

**Returns:**

Markdown formatted text with a resolved link


---

### formatParams

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)</span>

Formats a list of `ParamNode` objects as markdown, identifying and linking type names.

**Returns:**

Markdown formatted text containing a link


---

### formatText

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatText__([Text](../model/Text.md) text)</span>

Formats text contained in a `Text` object as markdown.

**Returns:**

Markdown formatted text


---

### formatText

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatText__([Text](../model/Text.md) text, boolean qualifyType, boolean qualifyMember)</span>




---

### fullSignature

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullSignature__([MethodNode](../model/MethodNode.md) method)</span>

Formats the signature of a method as markdown.

**Returns:**

Markdown formatted text representing the method's signature


---

### inOneLine

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __inOneLine__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Removes new line characters from a string, replacing them with spaces

**Returns:**

The string, with newlines converted to spaces


---

### link

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __link__([Link](../model/Link.md) reference, boolean useQualifiedName)</span>

Create a markdown formatted link

**Returns:**

markdown formatted link


---

### link

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __link__([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label, boolean qualifyType, boolean qualifyMember)</span>




---

### mdAnchor

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdAnchor__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)</span>

Converts a string to the format required for use as a Markdown anchor.
Converted strings will be lowercase and contain no spaces.

**Returns:**

The string converted to match the format required by Markdown anchor links


---

### mdAnchorLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdAnchorLink__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)</span>

Create a markdown formatted link to an anchor within the same markdown page.

**Returns:**

Markdown formatted text containing a correctly formatted anchor link


---

### mdDocumentLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdDocumentLink__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)</span>

Creates a Markdown link to another Markdown document

**Returns:**

The Markdown formatted link


---

### mdRefLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdRefLink__([Link](../model/Link.md) link)</span>

Creates a markdown formatted link from a [Link](../model/Link.md) object.

**Returns:**

a markdown formatted link


---

### mdRefLinkMethod

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdRefLinkMethod__([Link](../model/Link.md) link)</span>

Creates a markdown formatted link from a [Link](../model/Link.md) object.
with the option of simplifying qualified type names.

**Returns:**

a markdown formatted link


---

### setContext

<span style="font-family: monospace; font-size: 80%;">public static void __setContext__([Context](../core/Context.md) c)</span>




---

