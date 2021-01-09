import * as React from 'react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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
  const searchBoxRef = useRef<HTMLInputElement | null>(null)

  // Add focus to search box once it becomes visible
  useEffect(() => {
    if (!isSearchBoxVisible) return
    if (!searchBoxRef.current) return
    searchBoxRef.current.focus()
  }, [isSearchBoxVisible])

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

        <form action="/search" className={isSearchBoxVisible ? 'search-bar visible' : 'search-bar'}>
          <input
            ref={searchBoxRef}
            autoComplete="off"
            defaultValue=""
            type="text"
            name="q"
            placeholder="Search"
          />
        </form>
      </div>

      <div className="md:hidden">
        <a href="/">
          <img className="logo" src="/images/mini-header/logo.png" alt="Logo" />
        </a>
        <i onClick={openMobileMenu} className="material-icons hamburger">
          menu
        </i>
      </div>

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
    </section>
  )
}

export default GeneralHeader
