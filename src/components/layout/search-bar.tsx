import * as React from 'react'

interface Props {
  isSearchBoxVisible: boolean
}

class SearchBar extends React.Component<Props> {
  searchBox: any

  UNSAFE_componentWillReceiveProps(nextProps) {
    const justBecameVisible = this.props.isSearchBoxVisible != nextProps.isSearchBoxVisible
    if (justBecameVisible) {
      this.searchBox.focus()
    }
  }

  render() {
    return (
      <form
        action="/search"
        className={this.props.isSearchBoxVisible ? 'search-bar visible' : 'search-bar'}
      >
        <input
          ref={(input) => {
            this.searchBox = input
          }}
          autoComplete="off"
          defaultValue=""
          type="text"
          name="q"
          placeholder="Search"
        />
        <style jsx>{`
          .search-bar {
            overflow: hidden;
            will-change: width;
            transition: width 0.4s, height 0.2s;
            padding: 0;
            display: inline-block;
            width: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .search-bar.visible {
            width: 230px;
            height: 40px;
          }
          input,
          input:focus,
          input:active {
            padding: 8px 12px;
            font-size: 17px;
            width: 220px;
            color: #5f5f5f;
            outline: none;
            border: 1px solid #ccc;
            -webkit-appearance: none;
            max-height: 34px;
            border-radius: 15px;
            box-shadow: none;
            transition: box-shadow 0.2s;
          }
          input:active,
          input:focus {
            box-shadow: 0 0 2px 2px #88bfff;
          }
          input::placeholder {
            color: #ccc;
            font-style: italic;
            border-radius: 0px;
            border: 0px;
            outline: none;
          }
        `}</style>
      </form>
    )
  }
}

export default SearchBar
