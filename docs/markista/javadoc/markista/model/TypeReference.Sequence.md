Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeReference.Sequence
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)<br/>
                io.github.sandydunlop.markista.model.TypeReference.Sequence<br/>
<br/>
All Implemented Interfaces:<br/>
    [Iterable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Iterable.html)<[TypeReference](TypeReference.md)>

Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)


----

<span style="font-family: monospace; font-size: 80%;">public static class __TypeReference.Sequence__<br/>extends [TypeReference](TypeReference.md)
</span>


## Nested Class Summary

| Modifier and Type | Class                                                                                 | Description |
|-------------------|---------------------------------------------------------------------------------------|-------------|
| private           | [TypeReference.Sequence.SequenceIterator](TypeReference.Sequence.SequenceIterator.md) |             |



## Field Summary

| Modifier and Type                           | Field                                 | Description |
|---------------------------------------------|---------------------------------------|-------------|
| private static final int                    | [INITIAL_CAPACITY](#initial_capacity) |             |
| private [TypeReference](TypeReference.md)[] | [elements](#elements)                 |             |
| private int                                 | [size](#size)                         |             |



## Constructor Summary

| Constructor              | Description |
|--------------------------|-------------|
| TypeReference.Sequence() |             |



## Method Summary

| Modifier and Type                                                                                                                          | Method                                                 | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|-------------|
| private void                                                                                                                               | [resize](#resize)()                                    |             |
| public void                                                                                                                                | [add](#add)([TypeReference](TypeReference.md) element) |             |
| public [TypeReference](TypeReference.md)                                                                                                   | [get](#get)(int index)                                 |             |
| public [TypeReference](TypeReference.md)                                                                                                   | [getFirst](#getfirst)()                                |             |
| public [Iterator](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Iterator.html)<[TypeReference](TypeReference.md)> | [iterator](#iterator)()                                |             |


### Methods inherited from [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)

[TypeReference.getTypeString](TypeReference.md#gettypestring), [TypeReference.getQualifiedName](TypeReference.md#getqualifiedname), [TypeReference.getLink](TypeReference.md#getlink), [TypeReference.setLink](TypeReference.md#setlink), [TypeReference.linkGenerics](TypeReference.md#linkgenerics), [TypeReference.asArray](TypeReference.md#asarray), [TypeReference.splitAndLink](TypeReference.md#splitandlink), [TypeReference.setQualifiedName](TypeReference.md#setqualifiedname), [TypeReference.asGeneric](TypeReference.md#asgeneric), [TypeReference.getText](TypeReference.md#gettext), [TypeReference.parse](TypeReference.md#parse), [TypeReference.empty](TypeReference.md#empty), [TypeReference.asSequence](TypeReference.md#assequence), [TypeReference.setText](TypeReference.md#settext), [TypeReference.to](TypeReference.md#to)


## Field Details

### INITIAL_CAPACITY

<span style="font-family: monospace; font-size: 80%;">private static final int __INITIAL_CAPACITY__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### elements

<span style="font-family: monospace; font-size: 80%;">private [TypeReference](TypeReference.md)[] __elements__</span>




---

### size

<span style="font-family: monospace; font-size: 80%;">private int __size__</span>




---


## Method Details

### resize

<span style="font-family: monospace; font-size: 80%;">private void __resize__()</span>




---

### add

<span style="font-family: monospace; font-size: 80%;">public void __add__([TypeReference](TypeReference.md) element)</span>




---

### get

<span style="font-family: monospace; font-size: 80%;">public [TypeReference](TypeReference.md) __get__(int index)</span>




---

### getFirst

<span style="font-family: monospace; font-size: 80%;">public [TypeReference](TypeReference.md) __getFirst__()</span>




---

### iterator

<span style="font-family: monospace; font-size: 80%;">public [Iterator](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Iterator.html)<[TypeReference](TypeReference.md)> __iterator__()</span>



**Specified By:**

[Iterable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Iterable.html)


---

