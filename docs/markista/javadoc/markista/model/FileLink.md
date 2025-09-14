Package [io.github.sandydunlop.markista.model](index.md)

# Class FileLink
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Link](Link.md)<br/>
                io.github.sandydunlop.markista.model.FileLink<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __FileLink__<br/>extends [Link](Link.md)
</span>


## Field Summary

| Modifier and Type                                                                            | Field                 | Description |
|----------------------------------------------------------------------------------------------|-----------------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [fileName](#filename) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [label](#label)       |             |



## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| FileLink()  |             |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                  | Description                                           |
|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| public static [FileLink](FileLink.md)                                                               | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) file)            | Sets the target of the link to the provided filename. |
| public [FileLink](FileLink.md)                                                                      | [from](#from)([Reference](Reference.md) ref)                                                                            |                                                       |
| public [FileLink](FileLink.md)                                                                      | [withLabel](#withlabel)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) |                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                 |                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getFileName](#getfilename)()                                                                                           |                                                       |


### Methods inherited from [Link](Link.md)

[setResolved](Link.md#setresolved), [withKind](Link.md#withkind), [setOrigin](Link.md#setorigin), [getKind](Link.md#getkind), [setMethodName](Link.md#setmethodname), [getScope](Link.md#getscope), [toString](Link.md#tostring), [setUri](Link.md#seturi), [setMethodSignature](Link.md#setmethodsignature), [getSourceCodeLocation](Link.md#getsourcecodelocation), [setAnchor](Link.md#setanchor), [getTarget](Link.md#gettarget), [withMethodName](Link.md#withmethodname), [isResolved](Link.md#isresolved), [getOrigin](Link.md#getorigin), [setKind](Link.md#setkind), [getMethodSignature](Link.md#getmethodsignature), [setSourceCodeLocation](Link.md#setsourcecodelocation), [getUri](Link.md#geturi), [to](Link.md#to), [getMethodName](Link.md#getmethodname), [setScope](Link.md#setscope), [getAnchor](Link.md#getanchor), [toWeb](Link.md#toweb)


## Field Details

### fileName

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fileName__</span>




---

### label

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __label__</span>




---


## Method Details

### to

<span style="font-family: monospace; font-size: 80%;">public static [FileLink](FileLink.md) __to__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) file)</span>

Sets the target of the link to the provided filename.

**Parameters:**

`file` - The filename to use

**Returns:**

the link with its target filename set


---

### from

<span style="font-family: monospace; font-size: 80%;">public [FileLink](FileLink.md) __from__([Reference](Reference.md) ref)</span>




---

### withLabel

<span style="font-family: monospace; font-size: 80%;">public [FileLink](FileLink.md) __withLabel__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)</span>




---

### getLabel

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getLabel__()</span>




---

### getFileName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFileName__()</span>




---

