Package [io.github.sandydunlop.markista.model](index.md)

# Class SourceCodeLocation
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.SourceCodeLocation<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __SourceCodeLocation__</span>


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| private int                                                                                          | [endLineNumber](#endlinenumber)       |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [fileName](#filename)                 |             |
| private int                                                                                          | [lineNumber](#linenumber)             |             |
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |             |



## Constructor Summary

| Constructor                                                                                                                                                  | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| SourceCodeLocation()                                                                                                                                         |             |
| SourceCodeLocation([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName, int lineNumber, int endLineNumber) |             |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                      | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-------------|
| public static [SourceCodeLocation](SourceCodeLocation.md)                                           | [undefined](#undefined)()                                                                                                   |             |
| public void                                                                                         | [setFileName](#setfilename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getFileName](#getfilename)()                                                                                               |             |
| public void                                                                                         | [setLineNumber](#setlinenumber)(int n)                                                                                      |             |
| public int                                                                                          | [getLineNumber](#getlinenumber)()                                                                                           |             |
| public int                                                                                          | [getEndLineNumber](#getendlinenumber)()                                                                                     |             |
| public boolean                                                                                      | [isEmpty](#isempty)()                                                                                                       |             |



## Field Details

### endLineNumber

<span style="font-family: monospace; font-size: 80%;">private int __endLineNumber__</span>




---

### fileName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fileName__</span>




---

### lineNumber

<span style="font-family: monospace; font-size: 80%;">private int __lineNumber__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---


## Method Details

### undefined

<span style="font-family: monospace; font-size: 80%;">public static [SourceCodeLocation](SourceCodeLocation.md) __undefined__()</span>




---

### setFileName

<span style="font-family: monospace; font-size: 80%;">public void __setFileName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)</span>




---

### getFileName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFileName__()</span>




---

### setLineNumber

<span style="font-family: monospace; font-size: 80%;">public void __setLineNumber__(int n)</span>




---

### getLineNumber

<span style="font-family: monospace; font-size: 80%;">public int __getLineNumber__()</span>




---

### getEndLineNumber

<span style="font-family: monospace; font-size: 80%;">public int __getEndLineNumber__()</span>




---

### isEmpty

<span style="font-family: monospace; font-size: 80%;">public boolean __isEmpty__()</span>




---

