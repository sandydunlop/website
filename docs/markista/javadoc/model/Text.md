Package [io.github.sandydunlop.markista.model](index.md)

# Class Text
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Text<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                                                | Field         | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; | [text](#text) |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                      | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| Text()                                                                                                                                                                                                                           |             |
| Text([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; t) |             |

## Method Summary

| Modifier and Type                                                                                                                                                                                                        | Method                                                                                                                                                                                                                                                        | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| static [Text](Text.md)                                                                                                                                                                                                   | [empty](#empty)()                                                                                                                                                                                                                                             |             |
| static [Text](Text.md)                                                                                                                                                                                                   | [fromDocTree](#fromdoctree)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; docTree) |             |
| boolean                                                                                                                                                                                                                  | [isEmpty](#isempty)()                                                                                                                                                                                                                                         |             |
| void                                                                                                                                                                                                                     | [set](#set)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; t)                       |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; | [getSegments](#getsegments)()                                                                                                                                                                                                                                 |             |

## Field Details

### text




## Method Details

### empty

static [Text](Text.md) empty()



### fromDocTree

static [Text](Text.md) fromDocTree([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; docTree)



### isEmpty

boolean isEmpty()



### set

void set([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; t)



### getSegments

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; getSegments()



