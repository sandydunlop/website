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

| Modifier and Type                                                                                                 | Field                                           | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [FORMAT_SIMPLE_LINK](#format_simple_link)       |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [FORMAT_SIMPLE_LINK_MD](#format_simple_link_md) |                                                                                                                                                                                       |
| private static [Context](../core/Context.md)                                                                      | [ctx](#ctx)                                     | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| MarkdownUtils() |             |



## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                             | Description                                                                                                          |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                          | [setContext](#setcontext)([Context](../core/Context.md) c)                                                                                                                         |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [link](#link)([Link](../model/Link.md) link, boolean useQualifiedName)                                                                                                             | Create a markdown formatted link                                                                                     |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatParams](#formatparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)                 | Formats a list of `ParamNode` objects as markdown, identifying and linking type names.                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatText](#formattext)([Text](../model/Text.md) text)                                                                                                                           | Formats text contained in a `Text` object as markdown.                                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatText](#formattext)([Text](../model/Text.md) text, boolean qualifyType, boolean qualifyMember)                                                                               |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatVariableType](#formatvariabletype)([VariableType](../model/VariableType.md) typeRef)                                                                                        |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatVariableType](#formatvariabletype)([VariableType](../model/VariableType.md) variableType, boolean useQualifiedName)                                                         |                                                                                                                      |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [boundingConstraint](#boundingconstraint)([TypeParameter](../model/VariableType.TypeParameter.md) type)                                                                            |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatVariableTypeLink](#formatvariabletypelink)([VariableType](../model/VariableType.md) variableType, boolean useQualifiedName)                                                 |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatLink](#formatlink)([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)                       | Formats links as markdown.                                                                                           |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatLocalLink](#formatlocallink)([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)             |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatLocalMethodLink](#formatlocalmethodlink)([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label) | Creates a markdown formatted link from a [Link](../model/Link.md) object.                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatLinkLabel](#formatlinklabel)([Segment](../model/Text.Segment.md) segment, boolean qualifyType, boolean qualifyMember)                                                       | Formats links contained in a text segment as markdown.                                                               |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabelForType](#getlabelfortype)([Link](../model/Link.md) link, boolean qualifyType)                                                                                            |                                                                                                                      |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabelForMethod](#getlabelformethod)([Link](../model/Link.md) link, boolean qualifyMember)                                                                                      |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [mdAnchor](#mdanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                         | Converts a string to the format required for use as a Markdown anchor.                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [mdAnchorLink](#mdanchorlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)                                                 | Create a markdown formatted link to an anchor within the same markdown page.                                         |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [formatFileLink](#formatfilelink)([FileLink](../model/FileLink.md) link)                                                                                                           | Creates a Markdown link to another Markdown document                                                                 |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [inOneLine](#inoneline)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                          | Removes new line characters from a string, replacing them with spaces                                                |



## Field Details

### FORMAT_SIMPLE_LINK

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __FORMAT_SIMPLE_LINK__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### FORMAT_SIMPLE_LINK_MD

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __FORMAT_SIMPLE_LINK_MD__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

<span style="font-family: monospace; font-size: 80%;">private static [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---


## Method Details

### setContext

<span style="font-family: monospace; font-size: 80%;">public static void __setContext__([Context](../core/Context.md) c)</span>




---

### link

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __link__([Link](../model/Link.md) link, boolean useQualifiedName)</span>

Create a markdown formatted link

**Parameters:**

`link` - a Link object describing the link

`useQualifiedName` - If true, qualified names will be used in the link label

**Returns:**

markdown formatted link


---

### formatParams

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)</span>

Formats a list of `ParamNode` objects as markdown, identifying and linking type names.

**Parameters:**

`params` - a `Reference` object specifying a link

**Returns:**

Markdown formatted text containing a link


---

### formatText

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatText__([Text](../model/Text.md) text)</span>

Formats text contained in a `Text` object as markdown.

**Parameters:**

`text` - A `Text` object to be formatted

**Returns:**

Markdown formatted text


---

### formatText

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatText__([Text](../model/Text.md) text, boolean qualifyType, boolean qualifyMember)</span>




---

### formatVariableType

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatVariableType__([VariableType](../model/VariableType.md) typeRef)</span>




---

### formatVariableType

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatVariableType__([VariableType](../model/VariableType.md) variableType, boolean useQualifiedName)</span>




---

### boundingConstraint

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __boundingConstraint__([TypeParameter](../model/VariableType.TypeParameter.md) type)</span>




---

### formatVariableTypeLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatVariableTypeLink__([VariableType](../model/VariableType.md) variableType, boolean useQualifiedName)</span>




---

### formatLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatLink__([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Formats links as markdown.

**Parameters:**

`link` - The link object containing information about the link

`label` - The text that will be displayed for the link

**Returns:**

Markdown formatted text with a resolved link


---

### formatLocalLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatLocalLink__([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>




---

### formatLocalMethodLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatLocalMethodLink__([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label)</span>

Creates a markdown formatted link from a [Link](../model/Link.md) object.with the option of simplifying qualified type names.

**Parameters:**

`link` - The reference object

**Returns:**

a markdown formatted link


---

### formatLinkLabel

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatLinkLabel__([Segment](../model/Text.Segment.md) segment, boolean qualifyType, boolean qualifyMember)</span>

Formats links contained in a text segment as markdown.

**Parameters:**

`segment` - A text segment

**Returns:**

Markdown formatted text with a resolved link


---

### getLabelForType

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabelForType__([Link](../model/Link.md) link, boolean qualifyType)</span>




---

### getLabelForMethod

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabelForMethod__([Link](../model/Link.md) link, boolean qualifyMember)</span>




---

### mdAnchor

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdAnchor__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)</span>

Converts a string to the format required for use as a Markdown anchor.Converted strings will be lowercase and contain no spaces.

**Parameters:**

`phrase` - A string to be used in an anchor link

**Returns:**

The string converted to match the format required by Markdown anchor links


---

### mdAnchorLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __mdAnchorLink__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) anchor)</span>

Create a markdown formatted link to an anchor within the same markdown page.

**Parameters:**

`anchor` - A string to be used in an anchor link

**Returns:**

Markdown formatted text containing a correctly formatted anchor link


---

### formatFileLink

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatFileLink__([FileLink](../model/FileLink.md) link)</span>

Creates a Markdown link to another Markdown document

**Parameters:**

`link` - MarkdownLink object

**Returns:**

The Markdown formatted link


---

### escape

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Parameters:**

`str` - A string to be escaped

**Returns:**

The escaped string


---

### inOneLine

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __inOneLine__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Removes new line characters from a string, replacing them with spaces

**Parameters:**

`str` - The string

**Returns:**

The string, with newlines converted to spaces


---

