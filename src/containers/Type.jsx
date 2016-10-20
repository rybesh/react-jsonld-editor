const React = require('react') // eslint-disable-line no-unused-vars
    , {connect} = require('react-redux')
    , {List} = require('immutable')
    , {Text} = require('rebass')
    , {getNode} = require('../selectors')
    , {keyFromPath, ignoreDispatch, keepOnlyStateProps} = require('../utils')
    , FlexRow = require('../components/FlexRow')
    , ShowIdentifier = require('./ShowIdentifier')
    , AddTypeIdentifier = require('./AddTypeIdentifier')

const mapStateToProps = (state, {path}) => {
  const ids = getNode(state).getIn(path, List())
  return {
    children:
      [ <Text>is a</Text>

      , ids.isEmpty()
          ? null
          : ids.map((o, i) => <ShowIdentifier {...keyFromPath(path.push(i))} />)

      , <AddTypeIdentifier {...keyFromPath(path.push(ids.count()))} />
      ]
  }
}

const Type = connect(
  mapStateToProps, ignoreDispatch, keepOnlyStateProps)(FlexRow)

Type.displayName = 'Type'

module.exports = Type
