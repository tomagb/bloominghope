// Datele asociației folosite în paginile legale.
// Adresa și condițiile cadoului, dacă sunt goale, apar ca „[DE COMPLETAT]” și blochează publicarea.
export const organization = {
  name: 'Asociația Blooming Hope',
  taxId: '52789706',
  email: 'contact@bloominghope.ro',
  // Sediul social conform registrului ANAF, interogat după CUI la 26.11.2026
  address: 'Str. Haller Karoly nr. 16, Cluj-Napoca, jud. Cluj, cod poștal 400497',
  registryNumber: '', // numărul din Registrul asociațiilor și fundațiilor; apare în pagini doar dacă e completat
  // Campania de Crăciun. Asociația nu are voie să formuleze nimic care ar părea o condiționare.
  giftTerms: {
    ro: 'Campania de Crăciun este o inițiativă caritabilă a Asociației Blooming Hope, desfășurată în parteneriat cu Super Școala. Donațiile sunt voluntare. La căsuța noastră primești un cadou din partea noastră.',
    en: 'The Christmas campaign is a charity initiative of the Blooming Hope Association, run in partnership with Super Școala. Donations are voluntary. At our stall you receive a gift from us.',
  },
};
