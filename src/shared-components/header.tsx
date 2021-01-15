import * as React from 'react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Button, { ButtonColor } from '../ui-library/button/button'
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
      <div className="flex items-center justify-between">
        <Link href="/">
          <>
            <a className="mr-auto next-image-wrapper hidden lg:block" style={{ maxWidth: '302px' }}>
              <NextImage src="/images/mini-header/logo.png" alt="Logo" width="604" height="89" />
            </a>
            <a className="mr-auto next-image-wrapper lg:hidden">
              <NextImage src="/images/mini-header/logo.png" alt="Logo" width="272" height="40" />
            </a>
          </>
        </Link>
        <div className="hidden lg:block">
          <Link href="/course">
            <a className="mx-7 text-gray-600 hover:text-red-600 text-lg">
              <Button size="md" bgColor={buttonColor}>
                Video Course
              </Button>
            </a>
          </Link>
        </div>

        <div className="lg:hidden">
          <i onClick={openMobileMenu} className="material-icons text-3xl text-gray-600">
            menu
          </i>
        </div>

        <div className="hidden lg:flex ">
          {!isSearchBoxVisible && (
            <i
              className={
                'material-icons text-3xl text-gray-600 cursor-pointer ' +
                (isSearchBoxVisible ? 'invisible' : 'ml-7')
              }
              onClick={() => setIsSearchBoxVisible(true)}
            >
              search
            </i>
          )}

          {isSearchBoxVisible && (
            <form
              action="/search"
              className={
                'search-bar p-0 flex justify-center items-center overflow-hidden h-10 w-0 ' +
                (isSearchBoxVisible ? 'w-52' : '')
              }
            >
              <input
                ref={searchBoxRef}
                autoComplete="off"
                defaultValue=""
                type="text"
                name="q"
                placeholder="Search"
                className="outline-none rounded-2xl text-base py-1 px-4 text-gray-600 border border-gray-300 w-48"
              />
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        input:active,
        input:focus {
          box-shadow: 0 0 2px 2px #88bfff;
        }
        input::placeholder {
          color: #ccc;
          font-style: italic;
        }
      `}</style>
    </section>
  )
}

export default GeneralHeader
