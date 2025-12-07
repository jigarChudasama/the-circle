import { Metadata } from 'next';
import ErrorMain from '@/views/error/error'

export const metadata: Metadata = {
  title: "Liko - Not Found Page",
};

export default function NotFound() {
  return (
    <ErrorMain />
  )
}