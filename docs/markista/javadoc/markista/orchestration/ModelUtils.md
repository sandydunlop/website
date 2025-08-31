Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class ModelUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.ModelUtils<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ModelUtils__</span>


## Field Summary

| Modifier and Type                    | Field       | Description |
|--------------------------------------|-------------|-------------|
| static [Api](../model/Api.md)        | [api](#api) |             |
| static [Context](../core/Context.md) | [ctx](#ctx) |             |



## Constructor Summary

| Constructor  | Description |
|--------------|-------------|
| ModelUtils() |             |



## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                                                                            | Description                          |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| public static void                                                                                         | [init](#init)([Api](../model/Api.md) a, [Context](../core/Context.md) c)                                                                                                                                          |                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [baseTypeName](#basetypename)([MethodNode](../model/MethodNode.md) methodNode)                                                                                                                                    |                                      |
| public static boolean                                                                                      | [typeHasMethod](#typehasmethod)([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)                                                                                       |                                      |
| public static boolean                                                                                      | [canOverride](#canoverride)([MethodNode](../model/MethodNode.md) methodA, [MethodNode](../model/MethodNode.md) methodB)                                                                                           |                                      |
| public static boolean                                                                                      | [isSubtype](#issubtype)([TypeReference](../model/TypeReference.md) typeA, [TypeReference](../model/TypeReference.md) typeB)                                                                                       | Check if typeA is a subtype of typeB |
| public static boolean                                                                                      | [isAssignableFrom](#isassignablefrom)([TypeReference](../model/TypeReference.md) typeA, [TypeReference](../model/TypeReference.md) typeB)                                                                         | Check if typeA is subtype of typeB   |
| private static boolean                                                                                     | [parameterizedTypesAreCompatible](#parameterizedtypesarecompatible)([TypeReference.Generic](../model/TypeReference.Generic.md) paramTypeA, [TypeReference.Generic](../model/TypeReference.Generic.md) paramTypeB) |                                      |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">static [Api](../model/Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">static [Context](../core/Context.md) __ctx__</span>




---


## Method Details

### init

<span style="font-family: monospace; font-size: 80%;">public static void __init__([Api](../model/Api.md) a, [Context](../core/Context.md) c)</span>




---

### baseTypeName

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __baseTypeName__([MethodNode](../model/MethodNode.md) methodNode)</span>




---

### typeHasMethod

<span style="font-family: monospace; font-size: 80%;">public static boolean __typeHasMethod__([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)</span>




---

### canOverride

<span style="font-family: monospace; font-size: 80%;">public static boolean __canOverride__([MethodNode](../model/MethodNode.md) methodA, [MethodNode](../model/MethodNode.md) methodB)</span>




---

### isSubtype

<span style="font-family: monospace; font-size: 80%;">public static boolean __isSubtype__([TypeReference](../model/TypeReference.md) typeA, [TypeReference](../model/TypeReference.md) typeB)</span>

Check if typeA is a subtype of typeB


---

### isAssignableFrom

<span style="font-family: monospace; font-size: 80%;">public static boolean __isAssignableFrom__([TypeReference](../model/TypeReference.md) typeA, [TypeReference](../model/TypeReference.md) typeB)</span>

Check if typeA is subtype of typeB


---

### parameterizedTypesAreCompatible

<span style="font-family: monospace; font-size: 80%;">private static boolean __parameterizedTypesAreCompatible__([TypeReference.Generic](../model/TypeReference.Generic.md) paramTypeA, [TypeReference.Generic](../model/TypeReference.Generic.md) paramTypeB)</span>




---

