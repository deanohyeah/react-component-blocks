import React from 'react';

const block = () => {
  let state = {}
  const clearState = () => {
    state = {}
  }

  class RenderBlock extends React.Component {
    constructor(props) {
      super(props)

      if (!state[this.props.type]) {
        state[this.props.type] = {}
      }
      const typeState = state[this.props.type]
      typeState.setState = this.setState.bind(this)
      typeState.forceUpdate = this.forceUpdate.bind(this)

    }
    render() {
      const children = state[this.props.type].children
      if (children) {
        return <div>{state[this.props.type].children}</div>
      }
      return null
    }
  }

  class Block extends React.Component {
    componentWillMount() {
      let stateChildren = state[this.props.type].children
      // add unique key for children
      const propsChildren = React.Children.map(this.props.children, (child, i) => {
        if (child.type) {
          return React.cloneElement(child, {key: stateChildren + i})
        }
        return child
      })

      if (stateChildren) {
        state[this.props.type].children = stateChildren.concat(propsChildren)
      } else {
        state[this.props.type].children = propsChildren
      }
      // render block with added children
      state[this.props.type].forceUpdate()
    }

    render() {
      return null
    }
  }

  return {Block, RenderBlock, clearState }
}

const {Block, RenderBlock, clearState} = block()
export {Block, RenderBlock, clearState}
export default block

