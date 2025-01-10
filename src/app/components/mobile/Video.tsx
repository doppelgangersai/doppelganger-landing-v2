export default function VideoMobile() {
  return (
    <section className='w-full h-screen relative grid content-center'>
      <div>
        <video
          className='w-full object-cover'
          autoPlay
          playsInline
          controls
          src='https://www.youtube.com/embed/1NTS8_uOJ_U?si=dDriqAsBsM22CC8j'
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='p-4'>
        <p className='font-roboto text-[16px] leading-[22px] text-white text-center font-normal'>
          At Doppelgangers AI, we&apos;re revolutionizing the concept of
          personal assistance by harnessing the power of your data through your
          very own AI twin - your Doppelganger.
        </p>
      </div>
    </section>
  );
}
