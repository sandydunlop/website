Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageReference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.PackageReference<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __PackageReference__<br/>extends [Node](Node.md)
</span>


## Field Summary

| Modifier and Type                                                                                    | Field         | Description |
|------------------------------------------------------------------------------------------------------|---------------|-------------|
| private [Link](Link.md)                                                                              | [link](#link) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [name](#name) |             |



## Constructor Summary

| Constructor                                                                                                      | Description |
|------------------------------------------------------------------------------------------------------------------|-------------|
| PackageReference([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n) |             |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                              | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------|
| public void                                                                                         | [setName](#setname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n) |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getName](#getname)()                                                                                               |             |
| public void                                                                                         | [setLink](#setlink)([Link](Link.md) l)                                                                              |             |
| public [Link](Link.md)                                                                              | [getLink](#getlink)()                                                                                               |             |


### Methods inherited from [Node](Node.md)

[setReferences](Node.md#setreferences), [getReferences](Node.md#getreferences), [getKind](Node.md#getkind), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [getSince](Node.md#getsince), [setFirstSentence](Node.md#setfirstsentence), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [setDeprecation](Node.md#setdeprecation), [getFirstSentence](Node.md#getfirstsentence), [setKind](Node.md#setkind), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getDeprecationText](Node.md#getdeprecationtext), [getFullBody](Node.md#getfullbody)


## Field Details

### link

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __link__</span>




---

### name

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>




---


## Method Details

### setName

<span style="font-family: monospace; font-size: 80%;">public void __setName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)</span>




---

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>




---

### setLink

<span style="font-family: monospace; font-size: 80%;">public void __setLink__([Link](Link.md) l)</span>




---

### getLink

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getLink__()</span>




---

