import "./style.css";

const page = () => {
  return (
    <div className='container py-8 px-[4%]'>
      <h1 className='privacy-policy-header'>
        <strong>POLITYKA PRYWATNOŚCI</strong>
      </h1>
      <p className='privacy-policy-paragraph'>
        <strong>Polityka Prywatności serwisu dobreprecle.pl</strong>
      </p>
      <p className='privacy-policy-paragraph'>
        Dbamy o ochronę Twoich danych osobowych i zapewniamy, że są one
        przetwarzane zgodnie z obowiązującymi przepisami prawa, w tym
        Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
        kwietnia 2016 r. (RODO). Niniejsza Polityka Prywatności wyjaśnia, jakie
        dane zbieramy, w jakim celu je przetwarzamy oraz jakie prawa przysługują
        użytkownikom naszej strony.
      </p>

      <h2 className='privacy-policy-section-header'>
        1. Administrator danych osobowych
      </h2>
      <p className='privacy-policy-paragraph'>
        Administratorem Twoich danych osobowych jest:
      </p>
      <ul className='privacy-policy-list'>
        <li>
          <strong>DP 1 sp. z o. o.</strong>
        </li>
        <li>Adres: ul.Szlachecka 24, 32-080 Brzezie</li>
        <li>E-mail: biuro@dobreprecle.pl</li>
        <br />
        <li>NIP: 5130282896</li>
        <li>REGON: 524003487</li>
        <li>KRS: 0001009998</li>
      </ul>

      <h2 className='privacy-policy-section-header'>
        2. Jakie dane przetwarzamy i w jakim celu?
      </h2>

      <h3 className='privacy-policy-section-header'>Formularz kontaktowy</h3>
      <ul className='privacy-policy-list'>
        <li>
          <strong>Zakres danych:</strong> Imię, nazwisko, numer telefonu, adres
          e-mail.
        </li>
        <li>
          <strong>Cel przetwarzania:</strong> Dane przetwarzamy wyłącznie w celu
          udzielenia odpowiedzi na Twoje zapytanie przesłane za pośrednictwem
          formularza kontaktowego.
        </li>
        <li>
          <strong>Podstawa prawna:</strong>
        </li>
        <ul className='privacy-policy-list'>
          <li>
            Art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy lub
            podjęcia działań na żądanie osoby, której dane dotyczą.
          </li>
          <li>
            Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
            administratora, polegający na obsłudze zapytań użytkowników.
          </li>
        </ul>
      </ul>

      <h3 className='privacy-policy-section-header'>Google Maps</h3>
      <ul className='privacy-policy-list'>
        <li>
          <strong>Zakres danych:</strong> Adres IP, dane o przeglądarce i
          urządzeniu użytkownika.
        </li>
        <li>
          <strong>Cel przetwarzania:</strong> Wyświetlanie lokalizacji lokalu za
          pomocą usługi Google Maps.
        </li>
        <li>
          <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. f RODO – prawnie
          uzasadniony interes administratora w udostępnieniu użytkownikowi
          lokalizacji firmy.
        </li>
        <li>
          Informujemy, że dane mogą być przetwarzane przez Google LLC. Szczegóły
          znajdziesz w ich{" "}
          <a
            href='https://policies.google.com/privacy'
            className='privacy-policy-link'
            target='_blank'
          >
            Polityce Prywatności
          </a>
          .
        </li>
      </ul>

      <h2 className='privacy-policy-section-header'>
        3. Komu udostępniamy Twoje dane?
      </h2>
      <p className='privacy-policy-paragraph'>
        Twoje dane osobowe mogą być udostępniane podmiotom trzecim wyłącznie w
        zakresie niezbędnym do realizacji celu przetwarzania, np.:
      </p>
      <ul className='privacy-policy-list'>
        <li>Dostawcy usług hostingowych naszej strony internetowej.</li>
        <li>Google LLC w związku z integracją Google Maps.</li>
      </ul>

      <h2 className='privacy-policy-section-header'>
        4. Jak długo przechowujemy dane?
      </h2>
      <ul className='privacy-policy-list'>
        <li>
          Dane przesłane za pomocą formularza kontaktowego będą przechowywane do
          momentu zakończenia korespondencji lub przez okres niezbędny do
          ochrony interesów administratora (np. do czasu przedawnienia
          roszczeń).
        </li>
        <li>
          Dane przetwarzane przez Google Maps są przechowywane zgodnie z
          zasadami Google LLC.
        </li>
      </ul>

      <h2 className='privacy-policy-section-header'>5. Twoje prawa</h2>
      <p className='privacy-policy-paragraph'>Masz prawo do:</p>
      <ul className='privacy-policy-list'>
        <li>Dostępu do swoich danych osobowych.</li>
        <li>Sprostowania swoich danych, jeśli są nieprawidłowe.</li>
        <li>
          Usunięcia danych (prawo do bycia zapomnianym), jeśli nie istnieje
          prawny obowiązek ich dalszego przetwarzania.
        </li>
        <li>Ograniczenia przetwarzania danych.</li>
        <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
        <li>Przenoszenia danych do innego administratora.</li>
        <li>
          Wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony
          Danych Osobowych (PUODO).
        </li>
      </ul>

      <h2 className='privacy-policy-section-header'>6. Pliki cookies</h2>
      <p className='privacy-policy-paragraph'>
        Nasza strona nie wykorzystuje plików cookies.
      </p>

      <h2 className='privacy-policy-section-header'>
        7. Zmiany w Polityce Prywatności
      </h2>
      <p className='privacy-policy-paragraph'>
        Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
        Prywatności. Zmiany będą publikowane na tej stronie.
      </p>

      <h2 className='privacy-policy-section-header'>8. Kontakt</h2>
      <p className='privacy-policy-paragraph'>
        W przypadku pytań dotyczących przetwarzania Twoich danych osobowych
        prosimy o kontakt:
      </p>
      <ul className='privacy-policy-list'>
        <li>E-mail: biuro@dobreprecle.pl</li>
      </ul>
    </div>
  );
};

export default page;
