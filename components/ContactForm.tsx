const ContactForm = () => {
  return (
    <>
      <form
        action=''
        method='post'
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
    </>
  );
};

export default ContactForm;
