Package [io.github.sandydunlop.markista.util](index.md)

# Class Markdown
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.Markdown<br/>
<br/>

----

A utility class for producing Markdown formatted text and resolving
Markdown links to point to the correct file, directory, or web page.


## Field Summary

| Modifier and Type                                                                                                 | Field                                     | Description |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [FORMAT_SIMPLE_LINK](#format_simple_link) |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Markdown()  |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                                         | Description                                                                                                          |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [fullSignature](#fullsignature)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                   | Formats the signature of a method as markdown.                                                                       |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [formatParams](#formatparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)                                                                                       | Formats a list of `ParamNode` objects as markdown, identifying and linking type names.                               |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [formatReference](#formatreference)([Reference](../model/Reference.md) ref)                                                                                                                                                                                    | Formats a link specified in a `Reference` object as markdown.                                                        |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [formatText](#formattext)([Text](../model/Text.md) text)                                                                                                                                                                                                       | Formats text contained in a `Text` object as markdown.                                                               |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [resolveMarkdownLinks](#resolvemarkdownlinks)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)                                                                                                           | Resolves links in Markdown formatted text.                                                                           |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [formatLink](#formatlink)([Text.Segment](../model/Text.Segment.md) segment)                                                                                                                                                                                    | Formats links contained in a text segment as markdown.                                                               |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [resolveLinks](#resolvelinks)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)                                                                                                                           | Resolves markdown formatted links to point to the correct directory and page.                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [processMarkdownLink](#processmarkdownlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown, int openBracket, int closeBracket, int openParenthesis, int closeParenthesis)                               | Resolves a markdown formatted link to point to the correct directory and page.                                       |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier)                                                                                                                             | Create a markdown link, automatically deciding what kind of link to make.                                            |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, boolean simplify)                                                                                                           | Create a markdown link, automatically deciding what kind of link to make.                                            |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean simplify) | Create a markdown link, automatically deciding what kind of link to make.                                            |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdRefLink](#mdreflink)([Reference](../model/Reference.md) link, boolean simplify)                                                                                                                                                                             | Creates a markdown formatted link from a [Reference](../model/Reference.md) object.                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdRefLink](#mdreflink)([Reference](../model/Reference.md) link)                                                                                                                                                                                               | Creates a markdown formatted link from a [Reference](../model/Reference.md) object.                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdRefLinkMethod](#mdreflinkmethod)([Reference](../model/Reference.md) link, boolean simplify)                                                                                                                                                                 | Creates a markdown formatted link from a [Reference](../model/Reference.md) object.                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean simplify)                                                                                                              | Changes qualified generic type names to unqualified generic  type names and adds links to their API documentation.   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean simplify)                                                                                                      | Creates markdown formatted text with links to types from a string.                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAnchor](#mdanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                                                     | Converts a string to the format required for use as a Markdown anchor.                                               |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAnchorLink](#mdanchorlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                                             | Create a markdown formatted link to an anchor within the same markdown page.                                         |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                                                                                                                        |                                                                                                                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                   | Creates a Markdown formatted link to another Markdown page or a web page                                             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                            | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |

## Field Details

### FORMAT_SIMPLE_LINK



**See Also:**


[Constant Field Values](../constant-values.md)



---


## Method Details

### fullSignature

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature([MethodNode](../model/MethodNode.md) method)

Formats the signature of a method as markdown.

**Parameters:**

`method` - The method to be formatted as markdown

**Returns:**

Markdown formatted text representing the method's signature


---

### formatParams

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)

Formats a list of `ParamNode` objects as markdown, identifying and linking type names.

**Parameters:**

`params` - a `Reference` object specifying a link

**Returns:**

Markdown formatted text containing a link


---

### formatReference

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatReference([Reference](../model/Reference.md) ref)

Formats a link specified in a `Reference` object as markdown.

**Parameters:**

`ref` - a `Reference` object specifying a link

**Returns:**

Markdown formatted text containing a link


---

### formatText

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatText([Text](../model/Text.md) text)

Formats text contained in a `Text` object as markdown.

**Parameters:**

`text` - A `Text` object to be formatted

**Returns:**

Markdown formatted text


---

### resolveMarkdownLinks

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) resolveMarkdownLinks([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)

Resolves links in Markdown formatted text.

**Parameters:**

`markdown` - The Markdown text containing links

**Returns:**

Markdown formatted text with resolved link


---

### formatLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatLink([Text.Segment](../model/Text.Segment.md) segment)

Formats links contained in a text segment as markdown.

**Parameters:**

`segment` - A text segment

**Returns:**

Markdown formatted text with a resolved link


---

### resolveLinks

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) resolveLinks([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)

Resolves markdown formatted links to point to the correct directory and page.

**Parameters:**

`markdown` - Markdown formatted text containing links

**Returns:**

markdown formatted text with resolved links


---

### processMarkdownLink

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) processMarkdownLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown, int openBracket, int closeBracket, int openParenthesis, int closeParenthesis)

Resolves a markdown formatted link to point to the correct directory and page.

**Parameters:**

`markdown` - Markdown formatted text containing a link

`openBracket` - the position of `[` within the markdown text

`closeBracket` - the position of `]` within the markdown text

`openParenthesis` - the position of `(` within the markdown text

`closeParenthesis` - the position of `)` within the markdown text

**Returns:**

markdown formatted text with a resolved link


---

### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier)

Create a markdown link, automatically deciding what kind of link to make.

**Parameters:**

`identifier` - a package, type, or method identifier

**Returns:**

markdown text for a link to a document for the specified identifier or an anchor link


---

### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, boolean simplify)

Create a markdown link, automatically deciding what kind of link to make.

**Parameters:**

`identifier` - a package, type, or method identifier

`simplify` - if true, the fully simplified version of the identifier is shown

**Returns:**

markdown text for a link to a document for the specified identifier or an anchor link


---

### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean simplify)

Create a markdown link, automatically deciding what kind of link to make.

**Parameters:**

`identifier` - a package, type, or method identifier

`displayName` - If non-null, `displayName` will be the text displayed in the generated markdown.

`simplify` - if true, the fully simplified version of the identifier is shown

**Returns:**

markdown text for a link to a document for the specified identifier or an anchor link


---

### mdRefLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdRefLink([Reference](../model/Reference.md) link, boolean simplify)

Creates a markdown formatted link from a [Reference](../model/Reference.md) object.

**Parameters:**

`link` - The reference object

`simplify` - If true and the link is to a type, a simplified         version of the type name will be used

**Returns:**

a markdown formatted link


---

### mdRefLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdRefLink([Reference](../model/Reference.md) link)

Creates a markdown formatted link from a [Reference](../model/Reference.md) object.

**Parameters:**

`link` - The reference object

**Returns:**

a markdown formatted link


---

### mdRefLinkMethod

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdRefLinkMethod([Reference](../model/Reference.md) link, boolean simplify)

Creates a markdown formatted link from a [Reference](../model/Reference.md) object.
with the option of simplifying qualified type names.

**Parameters:**

`link` - The reference object

`simplify` - If true, qualified type names will be simplified

**Returns:**

a markdown formatted link


---

### linkGenerics

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean simplify)

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Parameters:**

`str` - A string containing a qualified generic name.

`simplify` - If true, qualified type names will be simplified

**Returns:**

A string with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean simplify)

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Parameters:**

`typesString` - A string containing a comma-separated list of type names

**Returns:**

a list of links to types formatted as Markdown


---

### mdAnchor

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchor([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)

Converts a string to the format required for use as a Markdown anchor.
Converted strings will be lowercase and contain no spaces.

**Parameters:**

`phrase` - A string to be used in an anchor link

**Returns:**

The string converted to match the format required by Markdown anchor links


---

### mdAnchorLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchorLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)

Create a markdown formatted link to an anchor within the same markdown page.

**Parameters:**

`phrase` - A string to be used in an anchor link

**Returns:**

Markdown formatted text containing a correctly formatted anchor link


---

### mdDocumentLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)




---

### mdDocumentLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)

Creates a Markdown formatted link to another Markdown page or a web page

**Parameters:**

`phrase` - the text displayed for the link in the Markdown page

`docName` - the name of the Markdown page being linked to, or the                 URL of a web page being linked to

**Returns:**

Markdown formatted text containing a correctly formatted link to
        the specified Markdown page or web page.


---

### escape

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Parameters:**

`str` - A string to be escaped

**Returns:**

The escaped string


---

