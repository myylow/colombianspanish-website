import * as React from 'react'
import { useEffect } from 'react'
import Button from '../../ui-library/button/button'

interface WistiaPlayer {
  pause: () => void
  play: () => void
  popover: {
    hide: () => void
  }
  bind: (eventName: string, handler: () => void) => void
}

interface Props {
  scrollToPaymentBox: () => void
}

const VideoOverlay = ({ scrollToPaymentBox }: Props) => {
  let inlineVideo: WistiaPlayer | undefined
  let popoverVideo: WistiaPlayer | undefined

  const handlePopoverShown = () => {
    if (!inlineVideo) return
    inlineVideo.pause()
  }
  const handlePopoverHidden = () => {
    if (!inlineVideo) return
    inlineVideo.play()
  }
  const handlePopoverEnd = () => {
    if (!popoverVideo) return
    popoverVideo.popover.hide()
  }

  useEffect(() => {
    const wistiaScript = document.createElement('script')
    wistiaScript.src = '//fast.wistia.com/assets/external/E-v1.js'
    wistiaScript.async = true
    document.body.appendChild(wistiaScript)
    ;(window as any).wistiaInit = (W) => {
      W.options('course-promo-video', {
        // silentAutoPlay: true,
        autoPlay: true,
        seo: false,
        volume: 0,
        videoFoam: true,
        popover: false,
        controlsVisibleOnLoad: false,
        endVideoBehavior: 'loop',
        qualityMin: 360,
        qualityMax: 720,
        googleAnalytics: false,
      })

      W.options('course-promo-video-popover', {
        popover: true,
        popoverContent: 'html',
        controlsVisibleOnLoad: false,
        qualityMin: 540,
      })

      // Bind popover shown and hidden events
      ;(window as any)._wq = (window as any)._wq || []
      ;(window as any)._wq.push({
        id: 'course-promo-video',
        onReady: () => {
          inlineVideo = W.api('course-promo-video')
        },
      })
      ;(window as any)._wq.push({
        id: 'course-promo-video-popover',
        onReady: () => {
          popoverVideo = W.api('course-promo-video-popover')
          if (popoverVideo) {
            popoverVideo.bind('popovershow', handlePopoverShown)
            popoverVideo.bind('popoverhide', handlePopoverHidden)
            popoverVideo.bind('end', handlePopoverEnd)
          }
        },
      })
    }
  }, [])

  const handlePlayPromoClicked = () => {
    var video = (window as any).Wistia.api('course-promo-video-popover')
    video.popover.show()
    video.volume(1)
    video.play()
  }

  return (
    <section className="container">
      <div
        id="course-promo-video-popover"
        className="wistia_embed wistia_async_34m3ic6icb"
        style={{ display: 'inlineBlock', whiteSpace: 'nowrap' }}
      />

      <div className="video-overlay relative overflow-hidden">
        <img
          src="/components/course/video-placeholder.jpg"
          className="placeholder-image relative block"
        />

        <div
          id="course-promo-video"
          className="wistia_embed wistia_async_arofzbpt7n course-promo-video absolute top-0"
          style={{ height: '100%', width: '100%' }}
        >
          &nbsp;
        </div>

        <div className="orange-overlay absolute top-0 left-0 opacity-90 w-full h-full" />
        <div className="absolute mx-auto flex items-center justify-center left-0 right-0 top-0 bottom-0 text-center">
          <div>
            <h1 className="text-white font-light tracking-tight text-6xl">
              Conversational <br />
              Spanish for Colombia
            </h1>
            <div className="text-white text-3xl max-w-2xl my-8">
              Leave behind overly formal textbook-style Spanish, and learn to speak like Colombians{' '}
              <i>really</i> do.
            </div>
            <div className="flex mt-12">
              <Button
                size="md"
                onClick={scrollToPaymentBox}
                bgColor="red"
                className="mx-4 w-72 py-4 shadow-md"
              >
                Get started
              </Button>
              <Button
                size="md"
                onClick={handlePlayPromoClicked}
                bgColor="transparent"
                className="mx-4 w-72 shadow-md"
              >
                <span className="play">▷</span> Watch Promo Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .orange-overlay {
          background-image: linear-gradient(-131deg, #ffc107 9%, #12b2fd 100%),
            linear-gradient(-182deg, rgba(0, 0, 0, 0) 18%, rgb(0, 0, 0) 100%);
        }

        .course-promo-video :global(video) {
          object-fit: cover !important;
        }
        @media screen and (min-width: 320px) {
          .placeholder-image,
          .course-promo-video,
          .course-promo-video :global(.w-chrome),
          .course-promo-video :global(.w-chrome > div) {
            top: 0px;
            min-height: 300px;
          }
        }
        @media screen and (min-width: 360px) {
          .placeholder-image,
          .course-promo-video,
          .course-promo-video :global(.w-chrome),
          .course-promo-video :global(.w-chrome > div) {
            min-height: 320px;
          }
        }

        @media screen and (min-width: 1024px) {
          .placeholder-image,
          .course-promo-video {
            top: -15px;
          }
        }
      `}</style>
    </section>
  )
}

export default VideoOverlay
