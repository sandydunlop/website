Package [io.github.sandydunlop.markista.model](index.md)

# Class Node
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Node<br/>
<br/>

----


## Nested Class Summary

| Modifier and Type | Class                                         | Description |
|-------------------|-----------------------------------------------|-------------|
|                   | [Node.ModifierSorter](Node.ModifierSorter.md) |             |

## Field Summary

| Modifier and Type                                                                            | Field         | Description |
|----------------------------------------------------------------------------------------------|---------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | simpleName    |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | qualifiedName |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | packageName   |             |
| [Node](Node.md)                                                                              | owner         |             |
| Set&lt;Modifier&gt;                                                                          | modifiers     |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | firstSentence |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | description   |             |
| [Deprecation](Deprecation.md)                                                                | deprecation   |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Node()      |             |

## Method Summary

| Modifier and Type                                                                            | Method                            | Description |
|----------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| void                                                                                         | [sortModifiers](#sortmodifiers)() |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getModifiers](#getmodifiers)()   |             |

## Method Details

### sortModifiers

`void sortModifiers()`



### getModifiers

`String getModifiers()`



