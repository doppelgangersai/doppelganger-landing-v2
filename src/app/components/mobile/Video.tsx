export default function VideoMobile() {
  return (
    <section className='min-h-screen w-full max-w-[1440px] m-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8 flex items-center justify-center'>
      <div className='max-w-6xl w-full'>
        <div className='grid grid-cols-1 gap-8 md:gap-12 items-center justify-center text-center'>
          <div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight'>
              At <span className='text-[#6C3AF8]'>Doppelgangers AI</span>
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8'>
              we&apos;re revolutionizing the concept of personal assistance by
              harnessing the power of your data through your very own private
              personalized AI model - Doppelganger.
            </p>
          </div>
          <div className='bg-gradient-to-br from-[#2D2A3D] to-[#6C3AF8] p-6 sm:p-8 rounded-2xl shadow-2xl'>
            <p className='text-base sm:text-lg text-gray-200 mb-4 sm:mb-6 '>
              Powered by Retrieval-Augmented Generation (RAG) Doppelganger is
              acting as the central intelligence hub that enables AI agents to
              retrieve and use relevant information in real-time, ensuring
              precise, context-aware execution of tasks.
            </p>
          </div>
          <div className='mb-8 sm:mb-0'>
            <span className='inline-block bg-[#6C3AF8] text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:bg-[#5C2AE8] transition-colors duration-300 shadow-md hover:shadow-lg'>
              Secure, Personal AI model right in your pocket!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
