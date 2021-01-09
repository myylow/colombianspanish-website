import * as React from 'react'

interface Props {
  isSearchBoxVisible: boolean
}

class SearchBox extends React.Component<Props> {
  textInput: any
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isSearchBoxVisible) {
      this.textInput.focus()
    }
  }

  render() {
    return (
      <form
        action="/search"
        className={this.props.isSearchBoxVisible ? 'visible search-form' : 'search-form'}
      >
        <input
          ref={(input) => {
            this.textInput = input
          }}
          className="search-input"
          autoComplete="off"
          defaultValue=""
          type="search"
          name="q"
          placeholder="Search"
        />

        <style jsx>{`
          input,
          input:focus,
          input:active {
            background-color: white;
            border: 0;
            color: #666;
            padding: 4.5px 5px;
            width: 100%;
            box-shadow: none;
            border: 1px solid #ccc;
            border-radius: 2px;
            position: relative;
            -webkit-appearance: none;
            font-size: 16px;
            outline: none;
          }
          input::placeholder {
            color: #ccc;
            font-style: italic;
            border-radius: 0px;
            border: 0px;
            outline: none;
          }

          form {
            width: 0;
            overflow: hidden;
            height: 0;
            display: block;
            transition: width 0.5s, height 0.5s;
            will-change: width, height;
          }
          form.visible {
            width: 150px;
            height: 31px;
          }
          @media screen and (min-width: 320px) {
            form.visible {
              width: 130px;
            }
          }
          @media screen and (min-width: 768px) {
            form.visible {
              width: 150px;
            }
          }
        `}</style>
      </form>
    )
  }
}

export default SearchBox
