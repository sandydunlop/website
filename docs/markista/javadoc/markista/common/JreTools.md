Package [io.github.sandydunlop.markista.common](index.md)

# Class JreTools
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.common.JreTools<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __JreTools__</span>


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| JreTools()  |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                                | Method                                                                                                                                                                                                                                       | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public static void                                                                                                                                                                                               | [inspectClass](#inspectclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                                                                                                    |             |
| public static [Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<??>                                                                                                     | [loadClass](#loadclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                                                                                                          |             |
| private static [Optional](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Optional.html)<?[Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<??>> | [tryLoadClass](#tryloadclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                                                                                                    |             |
| public static boolean                                                                                                                                                                                            | [typeHasMethod](#typehasmethod)([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<??> type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature) |             |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                       | [methodSignature](#methodsignature)([Method](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Method.html) method)                                                                                             |             |



## Method Details

### inspectClass

<span style="font-family: monospace; font-size: 80%;">public static void __inspectClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>




---

### loadClass

<span style="font-family: monospace; font-size: 80%;">public static [Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<??> __loadClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>




---

### tryLoadClass

<span style="font-family: monospace; font-size: 80%;">private static [Optional](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Optional.html)<?[Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<??>> __tryLoadClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>




---

### typeHasMethod

<span style="font-family: monospace; font-size: 80%;">public static boolean __typeHasMethod__([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<??> type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature)</span>




---

### methodSignature

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __methodSignature__([Method](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Method.html) method)</span>




---

