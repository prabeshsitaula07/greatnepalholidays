import errorimg from '../../assets/error.png'

export default function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <img src={errorimg} alt="" className='oject-cover' />
    </div>
  )
}
