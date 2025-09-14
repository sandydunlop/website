Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeParameter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.VariableType](VariableType.md)<br/>
                io.github.sandydunlop.markista.model.VariableType.TypeParameter<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.VariableType](VariableType.md)

Direct Known Subtypes:<br/>
    [Generic](VariableType.Generic.md), [Sequence](VariableType.Sequence.md)


----

<span style="font-family: monospace; font-size: 80%;">public static class __TypeParameter__<br/>extends [VariableType](VariableType.md)
</span>


## Field Summary

| Modifier and Type                                                                                      | Field                                   | Description |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| protected [BoundingKind](VariableType.BoundingKind.md)                                                 | [boundingKind](#boundingkind)           |             |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [boundingParameter](#boundingparameter) |             |



## Constructor Summary

| Constructor                                                                                                     | Description |
|-----------------------------------------------------------------------------------------------------------------|-------------|
| TypeParameter()                                                                                                 |             |
| TypeParameter([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str) |             |



## Method Summary

| Modifier and Type                                                                                   | Method                                          | Description |
|-----------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getBoundingParameter](#getboundingparameter)() |             |
| public [BoundingKind](VariableType.BoundingKind.md)                                                 | [getBoundingKind](#getboundingkind)()           |             |


### Methods inherited from [VariableType](VariableType.md)

[setFullTypeName](VariableType.md#setfulltypename), [toString](VariableType.md#tostring), [matchingClosingChevron](VariableType.md#matchingclosingchevron), [parseBoundingConstraint](VariableType.md#parseboundingconstraint), [arrayDimensions](VariableType.md#arraydimensions), [getLink](VariableType.md#getlink), [stringify](VariableType.md#stringify), [boundingConstraint](VariableType.md#boundingconstraint), [asGeneric](VariableType.md#asgeneric), [parse](VariableType.md#parse), [parseSequence](VariableType.md#parsesequence), [parseType](VariableType.md#parsetype), [getFullTypeName](VariableType.md#getfulltypename), [getTypeParameterDeclaration](VariableType.md#gettypeparameterdeclaration), [parseGeneric](VariableType.md#parsegeneric), [parseArray](VariableType.md#parsearray), [isArray](VariableType.md#isarray), [asSequence](VariableType.md#assequence), [getRawTypeName](VariableType.md#getrawtypename)


## Field Details

### boundingKind

<span style="font-family: monospace; font-size: 80%;">protected [BoundingKind](VariableType.BoundingKind.md) __boundingKind__</span>




---

### boundingParameter

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __boundingParameter__</span>




---


## Method Details

### getBoundingParameter

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getBoundingParameter__()</span>




---

### getBoundingKind

<span style="font-family: monospace; font-size: 80%;">public [BoundingKind](VariableType.BoundingKind.md) __getBoundingKind__()</span>




---

