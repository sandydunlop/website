Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeReference.Sequence
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)<br/>
                [io.github.sandydunlop.markista.model.TypeReference.TypeParameter](TypeReference.TypeParameter.md)<br/>
                        io.github.sandydunlop.markista.model.TypeReference.Sequence<br/>
<br/>
All Implemented Interfaces:<br/>
    [Iterable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Iterable.html)<[TypeReference.TypeParameter](TypeReference.TypeParameter.md)>

Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)


----

<span style="font-family: monospace; font-size: 80%;">public static class __TypeReference.Sequence__<br/>extends [TypeReference.TypeParameter](TypeReference.TypeParameter.md)
</span>


## Nested Class Summary

| Modifier and Type | Class                                                                                 | Description |
|-------------------|---------------------------------------------------------------------------------------|-------------|
| private           | [TypeReference.Sequence.SequenceIterator](TypeReference.Sequence.SequenceIterator.md) |             |



## Field Summary

| Modifier and Type                                                            | Field                                 | Description |
|------------------------------------------------------------------------------|---------------------------------------|-------------|
| private static final int                                                     | [INITIAL_CAPACITY](#initial_capacity) |             |
| private io.github.sandydunlop.markista.model.TypeReference.TypeParameter[][] | [elements](#elements)                 |             |
| private int                                                                  | [size](#size)                         |             |



## Constructor Summary

| Constructor              | Description |
|--------------------------|-------------|
| TypeReference.Sequence() |             |



## Method Summary

| Modifier and Type                                                                                                                                                      | Method                                                                                   | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|-------------|
| private void                                                                                                                                                           | [resize](#resize)()                                                                      |             |
| public int                                                                                                                                                             | [size](#size)()                                                                          |             |
| public void                                                                                                                                                            | [append](#append)([TypeReference.TypeParameter](TypeReference.TypeParameter.md) element) |             |
| public [TypeReference.TypeParameter](TypeReference.TypeParameter.md)                                                                                                   | [get](#get)(int index)                                                                   |             |
| public [TypeReference.TypeParameter](TypeReference.TypeParameter.md)                                                                                                   | [getFirst](#getfirst)()                                                                  |             |
| public [TypeReference.TypeParameter](TypeReference.TypeParameter.md)                                                                                                   | [getLast](#getlast)()                                                                    |             |
| public [Iterator](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Iterator.html)<[TypeReference.TypeParameter](TypeReference.TypeParameter.md)> | [iterator](#iterator)()                                                                  |             |


### Methods inherited from [io.github.sandydunlop.markista.model.TypeReference](TypeReference.md)

[TypeReference.setFullTypeName](TypeReference.md#setfulltypename), [TypeReference.toString](TypeReference.md#tostring), [TypeReference.arrayDimensions](TypeReference.md#arraydimensions), [TypeReference.getLink](TypeReference.md#getlink), [TypeReference.stringify](TypeReference.md#stringify), [TypeReference.asGeneric](TypeReference.md#asgeneric), [TypeReference.parse](TypeReference.md#parse), [TypeReference.parseSequence](TypeReference.md#parsesequence), [TypeReference.getFullTypeName](TypeReference.md#getfulltypename), [TypeReference.parseGeneric](TypeReference.md#parsegeneric), [TypeReference.isArray](TypeReference.md#isarray), [TypeReference.asSequence](TypeReference.md#assequence), [TypeReference.getRawTypeName](TypeReference.md#getrawtypename), [TypeReference.to](TypeReference.md#to), [TypeReference.parseArray](TypeReference.md#parsearray)

### Methods inherited from [io.github.sandydunlop.markista.model.TypeReference.TypeParameter](TypeReference.TypeParameter.md)

[TypeReference.TypeParameter.hasWildcard](TypeReference.TypeParameter.md#haswildcard), [TypeReference.TypeParameter.hasExtendsWildcard](TypeReference.TypeParameter.md#hasextendswildcard)


## Field Details

### INITIAL_CAPACITY

<span style="font-family: monospace; font-size: 80%;">private static final int __INITIAL_CAPACITY__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### elements

<span style="font-family: monospace; font-size: 80%;">private io.github.sandydunlop.markista.model.TypeReference.TypeParameter[][] __elements__</span>




---

### size

<span style="font-family: monospace; font-size: 80%;">private int __size__</span>




---


## Method Details

### resize

<span style="font-family: monospace; font-size: 80%;">private void __resize__()</span>




---

### size

<span style="font-family: monospace; font-size: 80%;">public int __size__()</span>




---

### append

<span style="font-family: monospace; font-size: 80%;">public void __append__([TypeReference.TypeParameter](TypeReference.TypeParameter.md) element)</span>




---

### get

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.TypeParameter](TypeReference.TypeParameter.md) __get__(int index)</span>




---

### getFirst

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.TypeParameter](TypeReference.TypeParameter.md) __getFirst__()</span>




---

### getLast

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.TypeParameter](TypeReference.TypeParameter.md) __getLast__()</span>




---

### iterator

<span style="font-family: monospace; font-size: 80%;">public [Iterator](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Iterator.html)<[TypeReference.TypeParameter](TypeReference.TypeParameter.md)> __iterator__()</span>



**Specified By:**

[Iterable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Iterable.html)


---

