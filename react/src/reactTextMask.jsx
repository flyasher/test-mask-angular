import React, {PropTypes} from 'react'
import maskInput from '../../vanilla/src/vanillaTextMask.js'

export const MaskedInput = React.createClass({
  propTypes: {
    mask: PropTypes.string.isRequired,
    guide: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    validator: PropTypes.func
  },

  componentDidMount() {
    const {props: {mask, placeholderCharacter, guide, validator}} = this

    this.control = maskInput({
      inputElement: this.inputElement,
      mask,
      placeholderCharacter,
      guide,
      validator
    }, false)
  },

  componentDidUpdate() {
    this.control.update(this.props.value)
  },

  render() {
    return (
      <input
        {...this.props}
        onChange={this.onChange}
        ref={(inputElement) => (this.inputElement = inputElement)}
      />
    )
  },

  onChange(event) {
    this.control.update()

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  }
})

export default MaskedInput
