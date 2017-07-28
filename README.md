# react component blocks

Here is a sample integration:

```js
import React from 'react';
import { render } from 'react-dom';
import {Block, RenderBlock, clearState} from './block_component'
import Child from './child_component'

const Child = () => {
  return <div>
    <Block type="head">jah</Block>
    <Block type="head"><div>jlk</div></Block>
    <Block type="head"><div>blah</div><div>now</div></Block>
    <Block type="title"><div>blah</div><div>now</div></Block>
  </div>

}

const Layout = () => {
  const content = <div>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <RenderBlock type="head"/>
    <h2><RenderBlock type="title"/></h2>
    <Child/>
  </div>
  clearState()
  return content
}

render(<Layout />, document.getElementById('root'));
```

