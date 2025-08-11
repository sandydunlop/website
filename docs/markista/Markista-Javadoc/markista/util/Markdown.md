Package [io.github.sandydunlop.markista.util](index.md)

# Class Markdown
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.Markdown<br/>
<br/>

----

<span style="font-family: monospace;">public Class __Markdown__</span>

A utility class for producing Markdown formatted text and resolving
Markdown links to point to the correct file, directory, or web page.


## Field Summary

| Modifier and Type                                                                                                 | Field                                     | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [FORMAT_SIMPLE_LINK](#format_simple_link) |                                                                                                                                                                                       |
| private static final [Context](Context.md)                                                                        | [ctx](#ctx)                               | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Markdown()  |             |

## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                                                                                                       | Description                                                                                                          |
|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [fullSignature](#fullsignature)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                 | Formats the signature of a method as markdown.                                                                       |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatParams](#formatparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)                                                                     | Formats a list of `ParamNode` objects as markdown, identifying and linking type names.                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatReference](#formatreference)([Reference](../model/Reference.md) ref)                                                                                                                                                                  | Formats a link specified in a `Reference` object as markdown.                                                        |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatText](#formattext)([Text](../model/Text.md) text)                                                                                                                                                                                     | Formats text contained in a `Text` object as markdown.                                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [resolveMarkdownLinks](#resolvemarkdownlinks)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)                                                                                         | Resolves markdown formatted links to point to the correct directory and page.                                        |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatLink](#formatlink)([Text.Segment](../model/Text.Segment.md) segment)                                                                                                                                                                  | Formats links contained in a text segment as markdown.                                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [link](#link)([Reference](../model/Reference.md) link)                                                                                                                                                                                       | Create a markdown link, automatically deciding what kind of link to make.                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [link](#link)([Reference](../model/Reference.md) reference, boolean useQualifiedName)                                                                                                                                                        | Create a markdown link, automatically deciding what kind of link to make.                                            |
| private static void                                                                                        | [setDisplayName](#setdisplayname)([Reference](../model/Reference.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod, boolean useQualifiedName)        |                                                                                                                      |
| private static boolean                                                                                     | [canBeSimplified](#canbesimplified)([Reference](../model/Reference.md) link)                                                                                                                                                                 |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdRefLink](#mdreflink)([Reference](../model/Reference.md) link)                                                                                                                                                                             | Creates a markdown formatted link from a [Reference](../model/Reference.md) object.                                  |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdRefLinkMethod](#mdreflinkmethod)([Reference](../model/Reference.md) link)                                                                                                                                                                 | Creates a markdown formatted link from a [Reference](../model/Reference.md) object.                                  |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)                                                                                    | Changes qualified generic type names to unqualified generic  type names and adds links to their API documentation.   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)                                                                            | Creates markdown formatted text with links to types from a string.                                                   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchor](#mdanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                                   | Converts a string to the format required for use as a Markdown anchor.                                               |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchorLink](#mdanchorlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                           | Create a markdown formatted link to an anchor within the same markdown page.                                         |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                                                                                                      | Creates a Markdown link to another Markdown document                                                                 |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName) | Creates a Markdown formatted link to another Markdown page or a web page                                             |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                          | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |

## Field Details

### FORMAT_SIMPLE_LINK



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---


## Method Details

### fullSignature

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature([MethodNode](../model/MethodNode.md) method)

Formats the signature of a method as markdown.

**Returns:**

Markdown formatted text representing the method's signature


---

### formatParams

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)

Formats a list of `ParamNode` objects as markdown, identifying and linking type names.

**Returns:**

Markdown formatted text containing a link


---

### formatReference

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatReference([Reference](../model/Reference.md) ref)

Formats a link specified in a `Reference` object as markdown.

**Returns:**

Markdown formatted text containing a link


---

### formatText

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatText([Text](../model/Text.md) text)

Formats text contained in a `Text` object as markdown.

**Returns:**

Markdown formatted text


---

### resolveMarkdownLinks

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) resolveMarkdownLinks([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)

Resolves markdown formatted links to point to the correct directory and page.

**Returns:**

markdown formatted text with resolved links


---

### formatLink

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatLink([Text.Segment](../model/Text.Segment.md) segment)

Formats links contained in a text segment as markdown.

**Returns:**

Markdown formatted text with a resolved link


---

### link

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) link([Reference](../model/Reference.md) link)

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### link

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) link([Reference](../model/Reference.md) reference, boolean useQualifiedName)

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### setDisplayName

private static void setDisplayName([Reference](../model/Reference.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod, boolean useQualifiedName)




---

### canBeSimplified

private static boolean canBeSimplified([Reference](../model/Reference.md) link)




---

### mdRefLink

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdRefLink([Reference](../model/Reference.md) link)

Creates a markdown formatted link from a [Reference](../model/Reference.md) object.

**Returns:**

a markdown formatted link


---

### mdRefLinkMethod

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdRefLinkMethod([Reference](../model/Reference.md) link)

Creates a markdown formatted link from a [Reference](../model/Reference.md) object.
with the option of simplifying qualified type names.

**Returns:**

a markdown formatted link


---

### linkGenerics

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A string with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

### mdAnchor

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchor([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)

Converts a string to the format required for use as a Markdown anchor.
Converted strings will be lowercase and contain no spaces.

**Returns:**

The string converted to match the format required by Markdown anchor links


---

### mdAnchorLink

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchorLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)

Create a markdown formatted link to an anchor within the same markdown page.

**Returns:**

Markdown formatted text containing a correctly formatted anchor link


---

### mdDocumentLink

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)

Creates a Markdown link to another Markdown document

**Returns:**

The Markdown formatted link


---

### mdDocumentLink

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)

Creates a Markdown formatted link to another Markdown page or a web page

**Returns:**

Markdown formatted text containing a correctly formatted link to
        the specified Markdown page or web page.


---

### escape

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

