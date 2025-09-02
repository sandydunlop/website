Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class JreUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.JreUtils<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __JreUtils__</span>


## Field Summary

| Modifier and Type                    | Field       | Description |
|--------------------------------------|-------------|-------------|
| static [Context](../core/Context.md) | [ctx](#ctx) |             |



## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| JreUtils()  |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                              | Method                                                                                                                                    | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public static [Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?>                                                                                                    | [loadClass](#loadclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)       |             |
| private static [Optional](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Optional.html)<[Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?>> | [tryLoadClass](#tryloadclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName) |             |
| public static io.github.sandydunlop.markista.model.MethodNode[][]                                                                                                                                              | [getMethods](#getmethods)([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> jreClass)         |             |



## Field Details

### ctx

<span style="font-family: monospace; font-size: 80%;">static [Context](../core/Context.md) __ctx__</span>




---


## Method Details

### loadClass

<span style="font-family: monospace; font-size: 80%;">public static [Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> __loadClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>




---

### tryLoadClass

<span style="font-family: monospace; font-size: 80%;">private static [Optional](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Optional.html)<[Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?>> __tryLoadClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>




---

### getMethods

<span style="font-family: monospace; font-size: 80%;">public static io.github.sandydunlop.markista.model.MethodNode[][] __getMethods__([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> jreClass)</span>




---

