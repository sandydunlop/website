Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeReference.Generic
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)<br/>
                io.github.sandydunlop.markista.model.TypeReference.Generic<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)


----

<span style="font-family: monospace; font-size: 80%;">public static class __TypeReference.Generic__<br/>extends [TypeReference](TypeReference.md)
</span>


## Field Summary

| Modifier and Type                         | Field                               | Description |
|-------------------------------------------|-------------------------------------|-------------|
| private boolean                           | [extendsWildcard](#extendswildcard) |             |
| private [TypeReference](TypeReference.md) | [params](#params)                   |             |
| private boolean                           | [wildcard](#wildcard)               |             |



## Constructor Summary

| Constructor             | Description |
|-------------------------|-------------|
| TypeReference.Generic() |             |



## Method Summary

| Modifier and Type                        | Method                                      | Description |
|------------------------------------------|---------------------------------------------|-------------|
| public [TypeReference](TypeReference.md) | [getParams](#getparams)()                   |             |
| public boolean                           | [hasExtendsWildcard](#hasextendswildcard)() |             |
| public boolean                           | [hasWildcard](#haswildcard)()               |             |


### Methods inherited from [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)

[TypeReference.getTypeString](TypeReference.md#gettypestring), [TypeReference.getQualifiedName](TypeReference.md#getqualifiedname), [TypeReference.getLink](TypeReference.md#getlink), [TypeReference.setLink](TypeReference.md#setlink), [TypeReference.linkGenerics](TypeReference.md#linkgenerics), [TypeReference.asArray](TypeReference.md#asarray), [TypeReference.splitAndLink](TypeReference.md#splitandlink), [TypeReference.setQualifiedName](TypeReference.md#setqualifiedname), [TypeReference.asGeneric](TypeReference.md#asgeneric), [TypeReference.getText](TypeReference.md#gettext), [TypeReference.parse](TypeReference.md#parse), [TypeReference.empty](TypeReference.md#empty), [TypeReference.asSequence](TypeReference.md#assequence), [TypeReference.setText](TypeReference.md#settext), [TypeReference.to](TypeReference.md#to)


## Field Details

### extendsWildcard

<span style="font-family: monospace; font-size: 80%;">private boolean __extendsWildcard__</span>




---

### params

<span style="font-family: monospace; font-size: 80%;">private [TypeReference](TypeReference.md) __params__</span>




---

### wildcard

<span style="font-family: monospace; font-size: 80%;">private boolean __wildcard__</span>




---


## Method Details

### getParams

<span style="font-family: monospace; font-size: 80%;">public [TypeReference](TypeReference.md) __getParams__()</span>




---

### hasExtendsWildcard

<span style="font-family: monospace; font-size: 80%;">public boolean __hasExtendsWildcard__()</span>




---

### hasWildcard

<span style="font-family: monospace; font-size: 80%;">public boolean __hasWildcard__()</span>




---

