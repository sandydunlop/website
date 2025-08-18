Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkFormatter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.LinkFormatter<br/>
<br/>

----

<span style="font-family: monospace;">public class __LinkFormatter__</span>


## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                            | Description                                                                                                          |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                         | [generateLinkTexts](#generatelinktexts)([Api](../model/Api.md) a, [Context](../core/Context.md) context)                                                          | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| public static [Text](../model/Text.md)                                                                     | [link](#link)([Reference](../model/Reference.md) reference, boolean useQualifiedName)                                                                             | Create a markdown link, automatically deciding what kind of link to make.                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                               | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |
| public static [Text](../model/Text.md)                                                                     | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)         | Changes qualified generic type names to unqualified generic  type names and adds links to their API documentation.   |
| public static [Text](../model/Text.md)                                                                     | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName) | Creates markdown formatted text with links to types from a string.                                                   |

## Method Details

### generateLinkTexts

public static void generateLinkTexts([Api](../model/Api.md) a, [Context](../core/Context.md) context)

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### link

public static [Text](../model/Text.md) link([Reference](../model/Reference.md) reference, boolean useQualifiedName)

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### escape

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### linkGenerics

public static [Text](../model/Text.md) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

public static [Text](../model/Text.md) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

