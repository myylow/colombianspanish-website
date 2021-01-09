import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import SearchBar from './search-bar'
import Button, { ButtonColor } from '../design-system/button/button'
import NextImage from 'next/image'

interface Props {
  buttonColor?: ButtonColor
  showSearchBox?: () => void
  isSearchBoxVisible?: boolean
  openMobileMenu?: () => void
  closeMobileMenu?: () => void
  isMobileMenuOpen?: boolean
}

const GeneralHeader = ({ buttonColor = 'red', openMobileMenu = () => {} }: Props) => {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false)

  return (
    <section className="container py-3">
      <div className="md:flex items-center justify-between">
        <Link href="/">
          <a className="mr-auto next-image-wrapper" style={{ maxWidth: '302px' }}>
            <NextImage src="/images/mini-header/logo.png" alt="Logo" width="604" height="89" />
          </a>
        </Link>
        <Link href="/course">
          <a className="mx-7 text-gray-600 hover:text-red-600 text-lg">
            <Button size="md" bgColor={buttonColor}>
              Video Course
            </Button>
          </a>
        </Link>

        {!isSearchBoxVisible && (
          <span
            className={'cursor-pointer ' + (isSearchBoxVisible ? 'invisible' : 'ml-7')}
            onClick={() => setIsSearchBoxVisible(true)}
          >
            <i className="material-icons" style={{ top: '0px' }}>
              search
            </i>
          </span>
        )}
        <SearchBar isSearchBoxVisible={isSearchBoxVisible} />
      </div>

      <div className="md:hidden">
        <a href="/">
          <img className="logo" src="/images/mini-header/logo.png" alt="Logo" />
        </a>
        <i onClick={openMobileMenu} className="material-icons hamburger">
          menu
        </i>
      </div>
    </section>
  )
}

export default GeneralHeader
