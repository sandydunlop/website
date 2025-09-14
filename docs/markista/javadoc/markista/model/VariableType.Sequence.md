Package [io.github.sandydunlop.markista.model](index.md)

# Class Sequence
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.VariableType](VariableType.md)<br/>
                [io.github.sandydunlop.markista.model.VariableType.TypeParameter](VariableType.TypeParameter.md)<br/>
                        io.github.sandydunlop.markista.model.VariableType.Sequence<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.lang.Iterable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Iterable.html)<[io.github.sandydunlop.markista.model.VariableType.TypeParameter](VariableType.TypeParameter.md)>

Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.VariableType](VariableType.md)


----

<span style="font-family: monospace; font-size: 80%;">public static class __Sequence__<br/>extends [TypeParameter](VariableType.TypeParameter.md)
</span>


## Nested Class Summary

| Modifier and Type | Class                                                                               | Description |
|-------------------|-------------------------------------------------------------------------------------|-------------|
| private           | [VariableType.Sequence.SequenceIterator](VariableType.Sequence.SequenceIterator.md) |             |



## Field Summary

| Modifier and Type                                        | Field                                 | Description |
|----------------------------------------------------------|---------------------------------------|-------------|
| private static final int                                 | [INITIAL_CAPACITY](#initial_capacity) |             |
| private [TypeParameter](VariableType.TypeParameter.md)[] | [elements](#elements)                 |             |
| private int                                              | [size](#size)                         |             |



## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Sequence()  |             |



## Method Summary

| Modifier and Type                                                                                                                                       | Method                                                                    | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|-------------|
| private void                                                                                                                                            | [resize](#resize)()                                                       |             |
| public int                                                                                                                                              | [size](#size)()                                                           |             |
| public void                                                                                                                                             | [append](#append)([TypeParameter](VariableType.TypeParameter.md) element) |             |
| public [TypeParameter](VariableType.TypeParameter.md)                                                                                                   | [get](#get)(int index)                                                    |             |
| public [TypeParameter](VariableType.TypeParameter.md)                                                                                                   | [getFirst](#getfirst)()                                                   |             |
| public [TypeParameter](VariableType.TypeParameter.md)                                                                                                   | [getLast](#getlast)()                                                     |             |
| public [Iterator](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Iterator.html)<[TypeParameter](VariableType.TypeParameter.md)> | [iterator](#iterator)()                                                   |             |


### Methods inherited from [TypeParameter](VariableType.TypeParameter.md)

[getBoundingParameter](VariableType.TypeParameter.md#getboundingparameter), [getBoundingKind](VariableType.TypeParameter.md#getboundingkind)

### Methods inherited from [VariableType](VariableType.md)

[setFullTypeName](VariableType.md#setfulltypename), [toString](VariableType.md#tostring), [matchingClosingChevron](VariableType.md#matchingclosingchevron), [parseBoundingConstraint](VariableType.md#parseboundingconstraint), [arrayDimensions](VariableType.md#arraydimensions), [getLink](VariableType.md#getlink), [stringify](VariableType.md#stringify), [boundingConstraint](VariableType.md#boundingconstraint), [asGeneric](VariableType.md#asgeneric), [parse](VariableType.md#parse), [parseSequence](VariableType.md#parsesequence), [parseType](VariableType.md#parsetype), [getFullTypeName](VariableType.md#getfulltypename), [getTypeParameterDeclaration](VariableType.md#gettypeparameterdeclaration), [parseGeneric](VariableType.md#parsegeneric), [parseArray](VariableType.md#parsearray), [isArray](VariableType.md#isarray), [asSequence](VariableType.md#assequence), [getRawTypeName](VariableType.md#getrawtypename)


## Field Details

### INITIAL_CAPACITY

<span style="font-family: monospace; font-size: 80%;">private static final int __INITIAL_CAPACITY__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### elements

<span style="font-family: monospace; font-size: 80%;">private [TypeParameter](VariableType.TypeParameter.md)[] __elements__</span>




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

<span style="font-family: monospace; font-size: 80%;">public void __append__([TypeParameter](VariableType.TypeParameter.md) element)</span>




---

### get

<span style="font-family: monospace; font-size: 80%;">public [TypeParameter](VariableType.TypeParameter.md) __get__(int index)</span>




---

### getFirst

<span style="font-family: monospace; font-size: 80%;">public [TypeParameter](VariableType.TypeParameter.md) __getFirst__()</span>




---

### getLast

<span style="font-family: monospace; font-size: 80%;">public [TypeParameter](VariableType.TypeParameter.md) __getLast__()</span>




---

### iterator

<span style="font-family: monospace; font-size: 80%;">public [Iterator](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Iterator.html)<[TypeParameter](VariableType.TypeParameter.md)> __iterator__()</span>



**Specified By:**

[Iterable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Iterable.html)


---

