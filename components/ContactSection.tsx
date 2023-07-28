import Image from "next/image";

const ContactSection = () => {
  return (
    <section className='bg-[#ED8F28] py-[80px] md:py-[50px] text-white relative overflow-hidden'>
      <div className='absolute w-full h-full scale-[1.5] sm:scale-[1.2] top-[50%] sm:-top-[35%] -left-[40%] sm:left-[30%] opacity-20 z-10 rotate-[40deg] sm:rotate-[220deg]'>
        <Image
          src='/precel_white.svg'
          alt='precle'
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className='container mx-auto flex px-[4%] sm:flex-col sm:gap-8 relative z-20'>
        <div className='w-1/2 sm:w-full'>
          <h2 className='text-h2 md:text-h2-mobile font-bold custom-h2'>
            Kontakt
          </h2>
          <div className='flex items-center'>
            <img
              className='w-[50px] h-auto -translate-x-1'
              src='/mail_icon.svg'
              alt='mail'
            />
            <h3 className='text-h3 md:text-h3-mobile'>biuro@dobreprecle.pl</h3>
          </div>
          <p className='text-p md:text-p-mobile mt-5'>
            DP 1 sp. z o. o.
            <br />
            ul.Szlachecka 24,
            <br />
            32-080 Brzezie
            <br />
            <br />
            NIP: 5130282896
            <br />
            KRS: 000100998
          </p>
        </div>
        <div className='w-1/2 sm:w-full'>
          <p className='text-p md:text-p-mobile'>
            Masz pociąg do DOBRYCH PRECLI?
          </p>
          <h3 className='text-[40px] md:text-h3-mobile'>Napisz do nas!</h3>
          <form
            action=''
            className='flex flex-col gap-3 mt-4 [&>*]:px-4 [&>*]:py-3 [&>*]:rounded-lg [&>*]:placeholder:text-[14px] [&>*]:placeholder:text-[#ED8F28] [&>*]:text-text-color [&>*]:text-[14px]'>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Imię i nazwisko'
            />
            <input
              type='tel'
              autoComplete='tel'
              id='tel'
              name='tel'
              placeholder='Nr telefonu'
            />
            <input type='email' id='email' name='email' placeholder='e-mail' />
            <textarea
              name='message'
              id='message'
              placeholder='Napisz do nas'
              className='min-h-[150px]'></textarea>
            <button
              type='submit'
              className='!text-white !text-p md:!text-p-mobile !p-2 w-2/5 border-2 border-white hover:border-[#971C25] self-end hover:bg-[#971C25] transition-all'>
              WYŚLIJ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
