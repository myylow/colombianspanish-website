import * as React from 'react'
// import * as wpapi from '../lib/server/wpapi'
import Header from '../components/layout/header'

interface Props {
  showSearchBox: any
}

interface State {
  posts: any[]
  searchTerm: string
  baseUrl: string
  searchState: string
}

class Search extends React.Component<Props, State> {
  state = {
    posts: [],
    searchTerm: '',
    baseUrl: '',
    searchState: '',
  }

  // async componentDidMount() {
  //   const searchTerm = getParams(window.location.search).q
  //   const posts = searchTerm ? await wpapi.searchPosts(searchTerm) : await wpapi.getHomepage()

  //   let searchState = ''
  //   if (!searchTerm) {
  //     searchState = 'NoSearchTerm'
  //   } else if (searchTerm && !posts.length) {
  //     searchState = 'NoResults'
  //   } else {
  //     searchState = 'Results'
  //   }

  //   this.setState({
  //     searchState,
  //     searchTerm,
  //     posts,
  //     baseUrl: window.location.href,
  //   })
  // }

  showNoSearchTerm() {
    this.props.showSearchBox()
    return <h3>Please enter a search term.</h3>
  }
  showNoResults() {
    return (
      <h3>
        Sorry, we could not find any matches for &apos;<b>{this.state.searchTerm}</b>&apos;
      </h3>
    )
  }
  showResults() {
    return (
      <div>
        <h2>Search results for &apos;{this.state.searchTerm}&apos;</h2>

        <ul className="post-list">{/* <CircularPostTeaserList posts={this.state.posts} /> */}</ul>
        <style jsx>{`
          h2 {
            font-weight: 900;
            font-size: 28px;
            margin-bottom: 45px;
            text-align: center;
            padding-bottom: 35px;
            border-bottom: 1px solid #ccc;
          }
          .post-list {
            max-width: 700px;
            margin: 0 auto 0px;
          }
        `}</style>
      </div>
    )
  }

  render() {
    let results
    if (this.state.searchState === 'NoSearchTerm') results = this.showNoSearchTerm()
    else if (this.state.searchState === 'NoResults') results = this.showNoResults()
    else if (this.state.searchState === 'Results') results = this.showResults()
    else results = 'Loading...'

    return (
      <>
        <Header buttonColor="red" />
        <section className="container g-content-padding">{results}</section>
        <style jsx>{`
          section {
            margin: auto;
            max-width: 990px;
            margin: 0px auto 0px;
            background-color: white;
            position: relative;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 30px;
          }
          h2 {
            font-weight: 900;
            font-size: 28px;
            margin-bottom: 25px;
          }
        `}</style>
      </>
    )
  }
}

export default Search
