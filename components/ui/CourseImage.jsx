import { Image as TImage } from 'tamagui'

export default function CourseImage({ uri }) {
  return (
    <TImage
      source={{ uri }}
      width={90}
      height={90}
      resizeMode="contain"
    />
  )
}
