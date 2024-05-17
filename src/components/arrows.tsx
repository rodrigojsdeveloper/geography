import { ArrowsProps } from '@/interfaces'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Arrow } from './arrow'

export const Arrows = ({
  disabledNextPage,
  disabledPreviousPage,
  handleNextPage,
  handlePreviousPage,
}: ArrowsProps) => {
  return (
    <section className="mx-auto mt-11 flex w-full max-w-28 items-center justify-between">
      <Arrow
        Icon={ArrowLeft}
        ariaLabel="arrow-left"
        handleFunc={handlePreviousPage}
        disabled={disabledPreviousPage}
      />
      <Arrow
        Icon={ArrowRight}
        ariaLabel="arrow-right"
        handleFunc={handleNextPage}
        disabled={disabledNextPage}
      />
    </section>
  )
}
