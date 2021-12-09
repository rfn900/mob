import ClipPathSVGTop from '../svgs/ClipPathSVGTop'
import ClipPathSVGBot from '../svgs/ClipPathSVGBot'
export default function SquiglySection({
  bgColorTop,
  bgColorBottom,
  children,
}) {
  return (
    <div className="relative z-0 flex flex-col w-full py-12 2xl:pb-20 bg-indigo-900 lg:mt-12 2xl:mt-48 gap-12">
      <ClipPathSVGTop
        fill={bgColorTop}
        className="absolute bottom-full lg:bottom-3/4 transform lg:-translate-y-6 bg-indigo-50 "
      />
      {children}
    </div>
  )
}
