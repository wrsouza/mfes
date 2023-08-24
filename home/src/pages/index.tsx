import useNextHostTranslation from "../i18n/useNextHostTranslation";

export default function Home() {
  const { t } = useNextHostTranslation('home-i18n');
  
  return (
    <div className="container">
      <h1>{t('title')}</h1>
      <p>{t('text')}</p>
    </div>
  );
}